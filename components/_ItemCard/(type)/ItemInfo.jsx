import "./style.scss";
import { BaseStatsContent } from "@/components/_ItemCard/(type)/(content)/BaseStatContent";
export function ItemInfo({ item }) {

  return (
    <>
      <BaseStatsContent stats={item.itemStats.baseStats}/>
    </>
  )
}