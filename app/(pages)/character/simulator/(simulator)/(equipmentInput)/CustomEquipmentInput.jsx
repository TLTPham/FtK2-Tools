'use client';
import "./style.scss";
import toast from "react-hot-toast";

import { ItemCard } from "@/components/_ItemCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import { sortItemCat } from "@/stats/item/item";
import { itemTypeList } from "@/stats/item/itemType";

export function CustomEquipmentInput({ className }) {
  const { itemType, setItemType, equipment, setFunctions } = useSimulator();
  const { setMouseEvents } = usePopupCard();

  const onclick = (item) => {
    let value = itemType.replace('shield', 'offhand');
    return () => {
      let removeOffhand = (value === 'weapon' && item.itemStats?.traits?.includes('twoHanded'));
      let removeWeapon = (value === 'offhand' && equipment.weapon?.itemStats?.traits?.includes('twoHanded'));
      (removeOffhand) && setFunctions['offhand'](null);
      (removeWeapon) && setFunctions['weapon'](null);
      (value !== 'pipe') ? setFunctions[value](item) : toast.error('You cannot equip a pipe.');
    }
  }
  const selectOnChange = (e) => {
    setItemType(e.target.value)
  }
  return (
    <div className={`custom-input ${className}`}>
      <div>
        <div className="font-bold text-3xl title pb-2">Equip Items</div>
        <select className="w-full rounded-none border-y-2" id="itemType" onChange={selectOnChange} defaultValue={itemType}>
          {itemTypeList.map((key) => (![ '1', 'consumable', 'pipe' ].includes(key)) &&
            <option key={key} value={key}>{key}</option>)}
        </select>
      </div>
      <div>
        <div className="items custom-scroll">
          {sortItemCat(itemType).map(([ key, value ]) => {
            if (key !== '1') {
              return (
                <div className="item-list-entry ui" key={value.name} onClick={onclick(value)}
                     {...setMouseEvents(<ItemCard item={value}/>)}>
                  <span className="no-select">{value.name}</span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}