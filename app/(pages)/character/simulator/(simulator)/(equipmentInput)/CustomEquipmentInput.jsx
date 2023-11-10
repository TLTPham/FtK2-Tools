'use client';
import "./style.scss";
import toast from "react-hot-toast";

import { ItemCard } from "@/Cards/_ItemCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import { item } from "@/stats/item/item";
import { itemTypeList } from "@/stats/item/itemType";

export function CustomEquipmentInput({ className }) {
  const { itemType, setItemType, equipment, setFunctions } = useSimulator();
  const { setMouseEvents } = usePopupCard();

  const onclick = (item) => {
    let value = (typeof document !== 'undefined') ? document.getElementById('itemType')?.value.replace('shield', 'offhand') : null;
    return () => {
      let removeOffhand = (value === 'weapon' && item.itemStats?.traits?.includes('twoHanded'));
      let removeWeapon = (value === 'offhand' && equipment.weapon?.itemStats?.traits?.includes('twoHanded'));
      (removeOffhand) && setFunctions['offhand'](null);
      (removeWeapon) && setFunctions['weapon'](null);
      (value !== 'pipe') ? setFunctions[value](item) : toast.error('You cannot equip a pipe.');
    }
  }
  const selectOnChange = (e) => {
    setItemType(e.target)
  }

  return (
    <div className={`custom-input ${className}`}>
      <div>
        <div className="font-bold text-3xl title">Equip Items</div>
        <select className="btn w-full rounded-none" id="itemType" onChange={selectOnChange} defaultValue={itemType}>
          {itemTypeList.map((key) => (![ '1', 'consumable', 'pipe' ].includes(key)) &&
            <option key={key} value={key}>{key}</option>)}
        </select>
      </div>
      <div>
        <div className="items custom-scroll">
          {Object.entries(item[itemType]).map(([ key, value ]) => {
            if (key !== '1') {
              return (
                <div className="item-list-entry" key={value.name} onClick={onclick(value)}
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