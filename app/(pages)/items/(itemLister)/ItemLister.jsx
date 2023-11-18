'use client';
import "./style.scss";

import { ItemCard } from "@/components/_ItemCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { sortItemCat } from "@/stats/item/item";
import { itemTypeList } from "@/stats/item/itemType";
import { useState } from "react";

export function ItemLister({ addItem }) {
  const [ itemType, setItemType ] = useState('weapon');
  const { setMouseEvents } = usePopupCard();

  const onclick = (item) => {
    return () => addItem(item)
  }
  const selectOnChange = (e) => {
    setItemType(e.target.value)
  }
  return (
    <div className="custom-input">
      <div>
        <div className="font-bold text-3xl title pb-2">Item List</div>
        <select className="w-full rounded-none border-y-2 text-xl text-center" id="itemType" onChange={selectOnChange} defaultValue={itemType}>
          {itemTypeList.map((key) => (![ '1' ].includes(key)) &&
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