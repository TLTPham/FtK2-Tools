import "./style.scss";

export function AbilityCard({ ability, className }) {
  return (
    <div className={`ability-card border ${className}`}>
      <div className="title">
        {ability.type}: {ability.name}
      </div>
      <div className="content">{ability.desc}</div>
    </div>
  )
}