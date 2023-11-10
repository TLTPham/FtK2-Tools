import "./style.scss";
import { TraitContent } from "./(content)/TraitContent";
import { ItemRollContent } from "./(content)/ItemRollContent";
import { BaseStatsContent } from "./(content)/BaseStatContent";
import { MoveContent } from "@/components/_ItemCard/(type)/(content)/MoveContent";

export function WeaponInfo({ item }) {
  let { itemStats } = item;
  return (
    <>
      {itemStats.baseDamage &&
        <div className="damage">Base: {itemStats.baseDamage}
          <div>{item.damageText()}</div>
        </div>
      }
      <BaseStatsContent stats={itemStats.baseStats}/>
      <div className="p-2 flex justify-between gap-2">
        <TraitContent traits={itemStats.traits}/>
        <ItemRollContent {...item.rollContent()}/>
      </div>
      <div className="subtitle">Actions:</div>
      <div className="main custom-scroll">
        <div className="flex flex-col gap-3 py-3 px-2">
          <MoveContent item={item}/>
        </div>
      </div>
    </>
  )
}
