import { AbilityCard } from "@/components/_AbilityCard";
import { specialAbilities } from "@/stats/misc/specialAbilities";

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap p-5 justify-between gap-y-5">
        {Object.entries(specialAbilities).map(([key, value]) => <AbilityCard key={key} ability={value}/> )}
      </div>
    </div>
  )
}