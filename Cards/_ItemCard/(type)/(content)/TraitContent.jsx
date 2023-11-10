import Image from "next/image";
import { traitImage } from "@/images/images";

export function TraitContent({ traits }) {
  return ((traits) ?
      <div className="image-line">
        <div className="flex flex-row gap-1">
          {traits.length >= 1 && <Image src={traitImage[traits[0]]} alt="roll" height="auto" width="auto"/>}
          {traits.length >= 2 && <Image src={traitImage[traits[1]]} alt="roll" height="auto" width="auto"/>}
          {traits.length >= 3 && <Image src={traitImage[traits[2]]} alt="roll" height="auto" width="auto"/>}
        </div>
      </div> :
      <div/>
  )
}