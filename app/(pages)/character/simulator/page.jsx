'use client';
import "./style.scss";
import dynamic from 'next/dynamic'
import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";

const CustomCharacterCard = dynamic(() => import ("./(simulator)/(character)/CustomCharacterCard").then(mod => mod.CustomCharacterCard), { ssr: false });
const CustomEquipment = dynamic(() => import ("./(simulator)/(equipment)/CustomEquipment").then(mod => mod.CustomEquipment), { ssr: false });
const LevelCandy = dynamic(() => import ("@/app/(pages)/character/simulator/(simulator)/(levelCandy)/CustomLevelCandy").then(mod => mod.LevelCandy), { ssr: false });
const CustomMoves = dynamic(() => import ("@/app/(pages)/character/simulator/(simulator)/(moves)/CustomMoves").then(mod => mod.CustomMoves), { ssr: false });
const CustomEquipmentInput = dynamic(() => import ("./(simulator)/(equipmentInput)/CustomEquipmentInput").then(mod => mod.CustomEquipmentInput), { ssr: false });
export default function Page() {
  const { resetSim } = useSimulator();
  return (
    <>
      <button className="reset" onClick={resetSim}>Reset Sim</button>
      <div className="flex p-5">
        <div className="flex flex-row gap-5">
          <div className="sim-column">
            <CustomCharacterCard/>
            <CustomEquipment/>
          </div>
          <div className="sim-column">
            <LevelCandy/>
            <CustomMoves/>
          </div>
          <div className="sim-column">
            <CustomEquipmentInput/>
          </div>
          <div className="sim-column">
          </div>
        </div>
      </div>
    </>
  )
}