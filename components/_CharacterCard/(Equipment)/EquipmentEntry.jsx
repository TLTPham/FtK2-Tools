'use client';
import { ItemCard } from "@/components/_ItemCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";

export function EquipmentEntry({ item, id }) {
  const { setMouseEvents } = usePopupCard();
  return (
    <div className="text-xl special-ability ui" {...setMouseEvents(<ItemCard item={item} id={id}/>)}>
      +1 {item.name}
    </div>
  )
}