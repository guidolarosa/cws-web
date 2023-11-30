import TJSBlob from "@/components/TJSScene/TJSBlob";
import TJSTorus from "@/components/TJSScene/TJSTorus";
import TJSScene from "@/components/TJSScene/TJSScene";

const InteractivePanel = (props : any) => {

  return (
    <div className="hidden lg:flex flex-col lg:w-1/4 border-l">
      <div className="border-b h-1/3 w-full last:border-b-0 overflow-hidden">
        <TJSTorus />
      </div>
      <div className="border-b h-1/3 w-full last:border-b-0">
        <TJSBlob resolution={8} wireframe />
      </div>
      <div className="border-b h-1/3 w-full last:border-b-0 relative overflow-hidden">
        <TJSScene scale={1.5} />
      </div>
    </div>
  )
};

export default InteractivePanel