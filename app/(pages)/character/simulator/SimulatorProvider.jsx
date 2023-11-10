'use client';
import "./style.scss";
import { createContext, useContext, useEffect, useState } from "react";
import { character } from "@/stats/character/character";
import { item } from "@/stats/item/item";
import { loadState } from "@/stats/localStorage";

const SimulatorContext = createContext(null);

export function SimulatorProvider({ children }) {
  let state = loadState.get();

  const [ customCharacter, setCustomCharacter ] = useState(character[state.character ? state.character : 'hunter']);
  const [ customWeapon, setCustomWeapon ] = useState(item.weapon[state.weapon ? state.weapon : 'simpleBow']);
  const [ customOffhand, setCustomOffhand ] = useState(state.offhand ? item.shield[state.offhand] : null);
  const [ customTrinket, setCustomTrinket ] = useState(state.trinket ? item.trinket[state.trinket] : null);

  const [ customHelmet, setCustomHelmet ] = useState(state.helmet ? item.helmet[state.helmet] : null);
  const [ customBodyArmor, setCustomBodyArmor ] = useState(state.bodyArmor ? item.bodyArmor[state.bodyArmor] : null);
  const [ customGloves, setCustomGloves ] = useState(state.gloves ? item.gloves[state.gloves] : null);
  const [ customBoots, setCustomBoots ] = useState(state.boots ? item.boots[state.boots] : null);

  const [ level, setLevel ] = useState(state.level ? state.level : 0);
  const [ blackCandy, setBlackCandy ] = useState(state.blackCandy ? state.blackCandy : 0);
  const [ spiritTaffy, setSpiritTaffy ] = useState(state.spiritTaffy ? state.spiritTaffy : 0);

  const [ itemType, setItemType ] = useState('weapon');

  useEffect(() => {
    let newState = {
      level,
      blackCandy,
      spiritTaffy,
      character: customCharacter,
      weapon: customWeapon,
      offhand: customOffhand,
      trinket: customTrinket,
      helmet: customHelmet,
      bodyArmor: customBodyArmor,
      gloves: customGloves,
      boots: customBoots,
    }
    loadState.set(newState)
  }, [ customCharacter, customWeapon, customOffhand, customTrinket, customHelmet, customBodyArmor, customGloves, customBoots, level, blackCandy, spiritTaffy ]);

  const equipment = {
    character: customCharacter,
    weapon: customWeapon,
    offhand: customOffhand,
    trinket: customTrinket,
    helmet: customHelmet,
    bodyArmor: customBodyArmor,
    gloves: customGloves,
    boots: customBoots
  };
  const setFunctions = {
    character: setCustomCharacter,
    weapon: setCustomWeapon,
    offhand: setCustomOffhand,
    trinket: setCustomTrinket,
    helmet: setCustomHelmet,
    bodyArmor: setCustomBodyArmor,
    gloves: setCustomGloves,
    boots: setCustomBoots,
  }
  let equippedCharacter = {};

  equippedCharacter.stats = structuredClone(customCharacter.stats);
  equippedCharacter.combatStats = structuredClone(customCharacter.defences);
  equippedCharacter.combatStats.damage = {
    value: level,
    type: customWeapon ? structuredClone(customWeapon.itemStats.damageType) : 'generic'
  }

  if (equippedCharacter.combatStats.damage.type === 'magic') {
    equippedCharacter.combatStats.damage.value += spiritTaffy;
  }
  if (equippedCharacter.combatStats.damage.type === 'physical') {
    equippedCharacter.combatStats.damage.value += blackCandy;
  }
  Object.entries(equipment).forEach(([ key, equipment ]) => {
    if (equipment?.itemStats) {
      let stats = equipment.itemStats?.baseStats;
      if (Array.isArray(stats)) {
        stats.forEach((stat) => {
          stat.applyStat(equippedCharacter);
        })
      }
    }
  })
  const resetSim = () => {
    setLevel(0)
    setBlackCandy(0)
    setSpiritTaffy(0)
    setCustomCharacter(character.hunter)
    setCustomWeapon(item.weapon.simpleBow)
    setCustomOffhand(null)
    setCustomTrinket(null)
    setCustomHelmet(null)
    setCustomBodyArmor(null)
    setCustomGloves(null)
    setCustomBoots(null)
  }

  return (
    <SimulatorContext.Provider
      value={{
        equipment,
        equippedCharacter,
        setFunctions,
        level,
        blackCandy,
        spiritTaffy,
        setLevel,
        setBlackCandy,
        setSpiritTaffy,
        itemType,
        setItemType,
        resetSim
      }}>
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const context = useContext(SimulatorContext);
  if (!context) {
    throw new Error('useSimulator must be used within an SimulatorProvider');
  }
  return context;
}