import "./style.scss";
import { BaseStatsContent } from "@/Cards/_ItemCard/(type)/(content)/BaseStatContent";
export function ItemInfo({ item }) {

  return (
    <>
      <BaseStatsContent stats={item.itemStats.baseStats}/>
    </>
  )
}