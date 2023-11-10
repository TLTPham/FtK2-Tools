'use client';
import "./style.scss";
import { ItemInfo } from "@/components/_ItemCard/(type)/ItemInfo";
import { WeaponInfo } from "@/components/_ItemCard/(type)/WeaponInfo";
import { ConsumableInfo } from "@/components/_ItemCard/(type)/ConsumableInfo";

export function ItemCard({ item, className, removeClick }) {
  return (
    <>
      <div>
        {removeClick && <button className="exit-item" onClick={removeClick}>X</button>}
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
      </div>
    </>
  )
}