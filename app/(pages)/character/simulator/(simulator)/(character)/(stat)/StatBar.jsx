import "./style.scss";
import Image from "next/image";

import { StatCard } from "@/components/_StatCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { statImage } from "@/images/images";

export function CustomStatBar({ baseStats, stats }) {
  return (
    <div className="custom-stat-bar px-1">
      {stats && Object.entries(stats).map(([ key, value ]) =>
        <StatBarStat key={key} stat={key} value={value} baseValue={baseStats[key]}/>)}
    </div>
  )
}

function StatBarStat({ stat, baseValue, value }) {
  const { setMouseEvents } = usePopupCard();
  let className = baseValue > value ? 'red' : baseValue < value ? 'green' : '';
  return (
    <div className={`grid grid-cols-2 custom-stat-bar-stat ${className}`} {...setMouseEvents(<StatCard stat={stat}/>)}>
      <Image className="attribute-stat" src={statImage[stat]} alt="Awareness" width="auto" height="auto"/>
      <span className={`text-2xl text-center`} style={{ width: '20px' }}>{value}</span>
    </div>
  )
}