'use client';
import "./style.scss";

import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import { MoveContent } from "@/components/_ItemCard/(type)/(content)/MoveContent";

export function CustomMoves() {
  const { equipment, equippedCharacter } = useSimulator();
  return (
    <div className="flex flex-col gap-3">
      <MoveContent item={equipment.weapon} additionalDamage={equippedCharacter.combatStats.damage.value}/>
    </div>
  )
}