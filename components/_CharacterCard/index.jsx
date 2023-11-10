import "./style.scss";
import { StatBar } from "./(StatBar)/StatBar";
import { SpecialAbilities } from "@/components/_CharacterCard/(SpecialAbilities)/SpecialAbilities";
import { Equipment } from "@/components/_CharacterCard/(Equipment)/Equipment";

export function CharacterCard({ character, id, removeClick }) {
  return (
    <div>
      {removeClick && <button className="exit" onClick={removeClick}>X</button>}
      <div className="character-card">
        <div className="font-bold text-3xl title">{character.name}</div>
        <StatBar stats={character.stats} id={id}/>
        <div className="font-bold text-2xl subtitle">Special Abilities</div>
        <SpecialAbilities abilities={character.specialAbilities} id={id}/>
        <div className="font-bold text-2xl subtitle">Starting Equipment</div>
        <Equipment equipment={character.starterEquipment} id={id}/>
      </div>
    </div>
  )
}