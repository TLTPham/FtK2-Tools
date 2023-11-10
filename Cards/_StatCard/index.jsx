import "./style.scss";
import { characterStat } from "@/stats/character/characterStat";

export function StatCard({ stat, className }) {
  return (
    <div className={`stat-card border ${className}`}>
      <div className="title">
        {characterStat[stat].name}
      </div>
      <div className="content" >{characterStat[stat].desc}</div>
    </div>
  )
}