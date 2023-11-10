'use client';
import "./style.scss"
import { useState } from "react";

import { item } from "@/stats/item/item";
import { ItemCard } from "@/Cards/_ItemCard";
import { ItemLister } from "@/app/(pages)/items/(itemLister)/ItemLister";

export default function Page() {
  const [ items, setItems ] = useState([]);

  const addItem = (item) => {
    setItems([ ...items, item ]);
  }
  const removeClick = (index) => {
    return () => setItems(items => items.filter((_, i) => i !== index))
  }

  return (
    <>
      <ItemLister addItem={addItem}/>
      <div className="item-page">
        {items.map((item, i) => <ItemCard item={item} key={i} removeClick={removeClick(i)}/>)}
      </div>
    </>
  )
}