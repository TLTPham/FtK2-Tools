'use client';
import "./style.scss";
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { ItemCard } from "@/components/_ItemCard";

export function CustomEquipment() {
  const { equipment, setItemType } = useSimulator();
  let { weapon, offhand, trinket, helmet, bodyArmor, gloves, boots } = equipment;
  let className = (weapon?.itemStats.traits.includes('twoHanded')) ? 'danger' : '';
  return (
    <div className="custom-equipment">
      <div className="font-bold text-3xl title">Equipment</div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col border">
          <SingleEquipmentEntry item={weapon} type='weapon' displayName="Weapon" setItemType={setItemType}/>
          <SingleEquipmentEntry item={offhand} type='offhand' displayName="Offhand" setItemType={setItemType}
                                className={className} fadeText={weapon}/>
          <SingleEquipmentEntry item={trinket} type='trinket' displayName="Trinket" setItemType={setItemType}/>
        </div>
        <div className="flex flex-col">
          <SingleEquipmentEntry item={helmet} type='helmet' displayName="Helmet" setItemType={setItemType}/>
          <SingleEquipmentEntry item={bodyArmor} type='bodyArmor' displayName="Body Armor" setItemType={setItemType}/>
          <SingleEquipmentEntry item={gloves} type='gloves' displayName="Gloves" setItemType={setItemType}/>
          <SingleEquipmentEntry item={boots} type='boots' displayName="Boots" setItemType={setItemType}/>
        </div>
      </div>
    </div>
  )
}

function SingleEquipmentEntry({ item, displayName, type, setItemType, className = '', fadeText }) {
  const { setFunctions } = useSimulator();
  const { setMouseEvents } = usePopupCard();

  let props = item ? setMouseEvents(<ItemCard item={item}/>) : {};
  const setOnClick = () => {
    if (item) {
      return () => setFunctions[type](null);
    }

    return () => {
      let processedType = type.replace('offhand', 'shield');
      setItemType(processedType);
      document.getElementById('itemType').value = processedType;
    }
  }


  return (
    <div className={`entry ${className}`} onClick={setOnClick()} {...props}>
      <label>{displayName}: </label>
      <div>{item ? item.name : className !== '' ? fadeText.name : ''} </div>
    </div>
  )
}