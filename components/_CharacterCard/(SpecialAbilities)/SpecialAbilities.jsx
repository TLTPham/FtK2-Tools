import "./style.scss";

import { usePopupCard } from "@/app/_PopUpCard/PopupCardProvider";
import { AbilityCard } from "@/components/_AbilityCard";

export function SpecialAbilities({ abilities = [], id }) {
  return (
    <div className="w-full flex flex-col gap-2 p-4">
      {abilities.map(ability => <SpecialAbilitiesEntry key={ability.name + id} ability={ability}/>)}
    </div>
  )
}
function SpecialAbilitiesEntry({ ability }) {
  const { setMouseEvents } = usePopupCard();
  return (
    <div className="text-xl special-ability ui" {...setMouseEvents(<AbilityCard ability={ability}/>)}>
      {ability.type}: {ability.name}
    </div>
  )
}