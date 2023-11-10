'use client';
import "./style.scss";

import { CombatBar } from "@/app/(pages)/character/simulator/(simulator)/(character)/(combat)/CombatBar";
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import { SpecialAbilities } from "@/components/_CharacterCard/(SpecialAbilities)/SpecialAbilities";
import { character } from "@/stats/character/character";
import { CustomStatBar } from "@/app/(pages)/character/simulator/(simulator)/(character)/(stat)/StatBar";

export function CustomCharacterCard() {
  const { equipment, equippedCharacter, setFunctions } = useSimulator();
  const setBaseChar = () => {
    let { value } = document.getElementById('char-select');
    setFunctions.character(character[value]);
  }

  return (
    <div className="custom-character">
      <select className="btn w-full rounded-none rounded-t-xl" id="char-select" onClick={setBaseChar}>
        {Object.entries(character).map(([ key, value ]) =>
          <option key={key} value={key}>{value.name}</option>
        )}
      </select>
      <CustomStatBar baseStats={equipment.character.stats} stats={equippedCharacter.stats}/>
      <CombatBar combatStats={equippedCharacter.combatStats}/>
      <div className="font-bold text-2xl subtitle">Special Abilities</div>
      <SpecialAbilities abilities={equipment.character.specialAbilities}/>
    </div>
  )
}