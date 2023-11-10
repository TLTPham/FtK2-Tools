import { ItemRollContent } from "@/Cards/_ItemCard/(type)/(content)/ItemRollContent";

export function MoveContent(props) {
  let { item } = props;
  return (item &&
    <>
      {item.moves.length >= 1 && <MoveDiv index={0} {...props}/>}
      {item.moves.length >= 2 && <MoveDiv index={1} {...props}/>}
      {item.moves.length >= 3 && <MoveDiv index={2} {...props}/>}
      {item.moves.length >= 4 && <MoveDiv index={3} {...props}/>}
      {item.moves.length >= 5 && <MoveDiv index={4} {...props}/>}
    </>
  )
}

function MoveDiv({ item, index, additionalDamage }) {
  let move = item.moves[index];
  let showDamage = (move.type === 'attack' && move.damageAmpFloor !== 0 && move.damageAmpCeil !== 0);
  return (
    <div className="item-move border">
      <div className="label">{move.name}</div>
      <div className="clear-both px-2">
        {showDamage && <div className={item.itemStats.damageType}>{item.damageText(index, additionalDamage)}</div>}
        <div>{move.targetText}</div>
        <MoveEffects effects={move.effects}/>
        {move.accuracyModifier !== 0 && <div>{`Accuracy: ${move.accuracyModifier}`}</div>}
      </div>
      <div className="rolls">
        <ItemRollContent stat={item.moves[0].rollStat} count={item.moves[0].rollCount}/>
      </div>
    </div>
  )
}

function MoveEffects({ effects }) {
  return (
    <>
      {effects.length >= 1 && <div>{`${effects[0]}`}</div>}
      {effects.length >= 2 && <div>{`${effects[1]}`}</div>}
      {effects.length >= 3 && <div>{`${effects[2]}`}</div>}
      {effects.length >= 4 && <div>{`${effects[3]}`}</div>}
    </>
  )
}