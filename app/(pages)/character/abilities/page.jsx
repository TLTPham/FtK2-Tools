import { AbilityCard } from "@/Cards/_AbilityCard";
import { specialAbilities } from "@/stats/misc/specialAbilities";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 p-5">
        {Object.entries(specialAbilities).map(([key, value]) => <AbilityCard key={key} ability={value}/> )}
      </div>
    </div>
  )
}