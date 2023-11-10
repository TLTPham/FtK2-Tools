'use client';
import { ItemCard } from "@/Cards/_ItemCard";
import { item } from "@/stats/item/item";

export default function Page() {
  let items = []
  let index = 0;
  // Object.entries(item).forEach(([ key, value ]) => {
  //   Object.entries(value).forEach(([ key2, value2 ]) => {
  //     if (key2 !== '1') {
  //       items.push(<ItemCard item={value2} key={index}/>)
  //       index++;
  //     }
  //   })
  // })
  return (
    <div className="grid grid-cols-7 gap-2 p-5">
      {/*{items}*/}
      <ItemCard item={item.weapon.glassSword}/>
      <ItemCard item={item.shield.queensKiteShield}/>
      <ItemCard item={item.trinket.blackCat}/>
      <ItemCard item={item.helmet.queensBowmanCap}/>
      {/*<ItemCard item={item.consumable.godsBeard}/>*/}
    </div>
  )
}