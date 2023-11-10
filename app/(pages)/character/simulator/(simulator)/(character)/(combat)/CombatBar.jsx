'use client';
import './style.scss'
import Image from "next/image";
import { combatStatImage } from "@/images/images";
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";

export function CombatBar() {
  const { equipment, equippedCharacter } = useSimulator();
  let baseDamage = equipment.weapon?.itemStats.baseDamage || 0;
  let bonusDamage = equippedCharacter.combatStats.damage.value;
  let type = equipment.weapon?.itemStats.damageType || '';
  return (
    <div className="defence-bar px-1">
      <CombatBarStat stat={'damage'} value={baseDamage + bonusDamage} type={type}/>
      <CombatBarStat stat={'armor'} value={equippedCharacter.combatStats.armor}/>
      <CombatBarStat stat={'resistance'} value={equippedCharacter.combatStats.resistance}/>
      <CombatBarStat stat={'evasion'} value={equippedCharacter.combatStats.evasion}/>
    </div>
  )
}

function CombatBarStat({ stat, value, type }) {
  let className = (stat === 'damage') ? type : '';
  return (
    <div className={`grid grid-cols-2 ${className}`}>
      <Image className="attribute-stat" src={combatStatImage[stat]} alt={stat} width="auto" height="auto"/>
      <span className="text-2xl text-center" style={{ width: '20px' }}>{value}</span>
    </div>
  )
}