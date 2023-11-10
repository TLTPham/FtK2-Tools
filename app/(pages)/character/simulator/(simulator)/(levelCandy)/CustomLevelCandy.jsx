'use client';
import "./style.scss";

import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import Image from "next/image";
import { candyImage } from "@/images/images";

export function LevelCandy() {
  const { level, blackCandy, spiritTaffy, setLevel, setBlackCandy, setSpiritTaffy } = useSimulator();
  const levelOnChange = (e) => {
    setLevel(parseInt(e.target.value));
  }
  const blackCandyOnChange = (e) => {
    setBlackCandy(parseInt(e.target.value));
  }
  const spiritTaffyOnChange = (e) => {
    setSpiritTaffy(parseInt(e.target.value));
  }

  let levelCount = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  let candyCount = [ 0, 1, 2, 3, 4, 5, 6 ];
  return (
    <div className="flex flex-row justify-between">
      <div className="join">
        <label className="btn join-item">Level:</label>
        <select className="btn join-item" defaultValue={level} onChange={levelOnChange}>
          {levelCount.map((key) => <option key={key + 'level'} value={key}>{key}</option>)}
        </select>
      </div>
      <div className="join">
        <div className="join-item btn">
          <Image className="" src={candyImage.blackCandy} alt="Black Candy" width="auto" height="auto"/>
        </div>
        <select className="btn join-item" defaultValue={blackCandy} onChange={blackCandyOnChange}>
          {candyCount.map((key) => <option key={key + 'blackCandy'} value={key}>{key}</option>)}
        </select>
      </div>
      <div className="join">
        <div className="join-item btn">
          <Image className="" src={candyImage.spiritTaffy} alt="Spirit Taffy" width="auto" height="auto"/>
        </div>
        <select className="btn join-item" defaultValue={spiritTaffy} onChange={spiritTaffyOnChange}>
          {candyCount.map((key) => <option key={key + 'spiritTaffy'} value={key}>{key}</option>)}
        </select>
      </div>
    </div>
  )
}