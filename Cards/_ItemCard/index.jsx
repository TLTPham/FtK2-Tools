'use client';
import "./style.scss";
import { ItemInfo } from "@/Cards/_ItemCard/(type)/ItemInfo";
import { WeaponInfo } from "@/Cards/_ItemCard/(type)/WeaponInfo";
import { ConsumableInfo } from "@/Cards/_ItemCard/(type)/ConsumableInfo";

export function ItemCard({ item, className }) {
  return (
    <div className={`item-card ${className}`}>
      <div className="title">{item.name}</div>
      <div className="item-rarity">
        <div>{item.rarityText()}</div>
        <div>-</div>
        <div>{item.typeText()}</div>
      </div>
      {
        item.checkType('consumable') ?
          <ConsumableInfo item={item}/> :
          item.checkType([ 'weapon', 'shield' ]) ?
            <WeaponInfo item={item}/> :
            <ItemInfo item={item}/>
      }
    </div>
  )
}