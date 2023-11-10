'use client';
import { ItemCard } from "@/Cards/_ItemCard";
import { item } from "@/stats/item/item";

export default function Page() {
  return (
    <div className="grid grid-cols-7 gap-2 p-5">
      <ItemCard item={item.weapon.glassSword}/>
      <ItemCard item={item.shield.queensKiteShield}/>
      <ItemCard item={item.trinket.blackCat}/>
      <ItemCard item={item.helmet.queensBowmanCap}/>
    </div>
  )
}