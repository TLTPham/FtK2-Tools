export function BaseStatsContent({ stats }) {
  return (
    <div className="flex flex-col px-2 py-1">
      {stats.length >= 1 && <div>{stats[0].displayText}</div>}
      {stats.length >= 2 && <div>{stats[1].displayText}</div>}
      {stats.length >= 3 && <div>{stats[2].displayText}</div>}
      {stats.length >= 4 && <div>{stats[3].displayText}</div>}
      {stats.length >= 5 && <div>{stats[4].displayText}</div>}
      {stats.length >= 6 && <div>{stats[5].displayText}</div>}
      {stats.length >= 7 && <div>{stats[6].displayText}</div>}
      {stats.length >= 8 && <div>{stats[7].displayText}</div>}
    </div>
  )
}