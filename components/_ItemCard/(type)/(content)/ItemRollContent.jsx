import Image from "next/image";
import { statRollImage } from "@/images/images";

export function ItemRollContent({ count, stat }) {
  return (
    <div className="image-line">
      {count >= 1 && <Image src={statRollImage[stat]} alt="roll" height="auto" width="auto"/>}
      {count >= 2 && <Image src={statRollImage[stat]} alt="roll" height="auto" width="auto"/>}
      {count >= 3 && <Image src={statRollImage[stat]} alt="roll" height="auto" width="auto"/>}
      {count >= 4 && <Image src={statRollImage[stat]} alt="roll" height="auto" width="auto"/>}
      {count >= 5 && <Image src={statRollImage[stat]} alt="roll" height="auto" width="auto"/>}
    </div>
  )
}