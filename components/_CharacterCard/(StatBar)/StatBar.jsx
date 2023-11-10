import "./style.scss";
import Image from "next/image";

import { StatCard } from "@/components/_StatCard";
import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { statImage } from "@/images/images";

export function StatBar({ stats, id }) {
  return (
    <div className="stat-bar px-1">
      {Object.entries(stats).map(([ key, value ]) => <StatBarStat key={key + id} stat={key} value={value}/>)}
    </div>
  )
}
function StatBarStat({ stat, value }) {
  const { setMouseEvents } = usePopupCard();
  return (
    <div className="grid grid-cols-2 stat-bar-stat" {...setMouseEvents(<StatCard stat={stat}/>)}>
      <Image className="attribute-stat" src={statImage[stat]} alt="Awareness" width="auto" height="auto"/>
      <span className="text-2xl text-center" style={{ width: '20px' }}>{value}</span>
    </div>
  )
}