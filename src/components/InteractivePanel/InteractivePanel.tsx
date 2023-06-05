import TJSBlob from "@/components/TJSScene/TJSBlob";
import TJSBounce from "@/components/TJSScene/TJSBounce";
import TJSTorus from "@/components/TJSScene/TJSTorus";
import TJSScene from "@/components/TJSScene/TJSScene";
import GlobalContext from "@/context/GlobalContext";
import { useContext } from "react";
import Image from "next/image";

const InteractivePanel = (props : any) => {

  const GlobalData : any = useContext(GlobalContext);

  return (
    <div className="hidden lg:flex flex-col lg:w-1/4 border-l">
      <div className="border-b h-1/3 w-full last:border-b-0 overflow-hidden">
        {GlobalData && GlobalData.hoveredWork && (
          <div className="relative w-full h-full">
            <Image
              fill
              src={GlobalData.hoveredWork.imageUrl}
              alt={GlobalData.hoveredWork.title}
              style={{objectFit: 'cover'}}
            />
          </div>
        )}
        <TJSTorus />
      </div>
      <div className="border-b h-1/3 w-full last:border-b-0">
        <TJSBlob resolution={8} wireframe />
      </div>
      <div className="border-b h-1/3 w-full last:border-b-0 relative overflow-hidden">
        <TJSScene scale={1.5} />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-primary-500 z-10 mix-blend-screen dark:mix-blend-normal" />
        <div className="mix-blend-multiply dark:mix-blend-normal">
          <div className="invert dark:invert-0">
            <video src="/video.mov" autoPlay muted loop className="mix-blend-color-dodge w-full h-full scale-[1.75] translate-x-[-30px] origin-bottom">
            </video>
          </div>
        </div> */}
      </div>
    </div>
  )
};

export default InteractivePanel