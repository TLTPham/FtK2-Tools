'use client';
import "./style.scss";

import { useSimulator } from "@/app/(pages)/character/simulator/SimulatorProvider";
import Image from "next/image";
import { candyImage } from "@/images/images";
import { useEffect } from "react";

export function LevelCandy() {
  const { level, blackCandy, spiritTaffy, setLevel, setBlackCandy, setSpiritTaffy } = useSimulator();
  useEffect(() => {
    document.getElementById('levelSelect').value = level;
    document.getElementById('blackCandySelect').value = blackCandy;
    document.getElementById('spiritTaffySelect').value = spiritTaffy;
  }, [ level, blackCandy, spiritTaffy ]);
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
    <div className="candy-bar">
      <div className="join">
        <label className="label">Lv:</label>
        <select className="join-item" defaultValue={level} onChange={levelOnChange} id="levelSelect">
          {levelCount.map((key) => <option key={key + 'level'} value={key}>{key}</option>)}
        </select>
      </div>
      <div className="join">
        <div className="label">
          <Image className="" src={candyImage.blackCandy} alt="Black Candy" width="auto" height="auto"/>
        </div>
        <select className="join-item" defaultValue={blackCandy} onChange={blackCandyOnChange} id="blackCandySelect">
          {candyCount.map((key) => <option key={key + 'blackCandy'} value={key}>{key}</option>)}
        </select>
      </div>
      <div className="join">
        <div className="label ">
          <Image className="" src={candyImage.spiritTaffy} alt="Spirit Taffy" width="auto" height="auto"/>
        </div>
        <select className=" join-item" defaultValue={spiritTaffy} onChange={spiritTaffyOnChange} id="spiritTaffySelect">
          {candyCount.map((key) => <option key={key + 'spiritTaffy'} value={key}>{key}</option>)}
        </select>
      </div>
    </div>
  )
}