import { EquipmentEntry } from "@/components/_CharacterCard/(Equipment)/EquipmentEntry";

export function Equipment({ equipment }, id) {
  return (
    <div className="w-full flex flex-col gap-2 p-4">
      {equipment && equipment.map(item => <EquipmentEntry key={item.name + id} id={id} item={item}/>)}
    </div>
  )
}