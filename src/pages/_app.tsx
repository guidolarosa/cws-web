import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { Unbounded } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import TJSBlob from '@/components/TJSScene/TJSBlob'
import TJSBounce from '@/components/TJSScene/TJSBounce'
import TJSScene from '@/components/TJSScene/TJSScene'

const unbounded = Unbounded({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={`${unbounded.className} h-[100vh] flex flex-col overflow-hidden`}>
      <div
        className={`bg-emerald-500 fixed w-full h-[100vh] z-10 mix-blend-multiply pointer-events-none`}
      />
      <SiteHeader />
      <div className={"w-full h-[calc(100vh-130px)] flex"}>
        <Sidebar />
        <div id="viewport" className="w-full col-span-full md:w-2/4 h-full overflow-auto">
          <Component {...pageProps} />
        </div>
        <div className="hidden md:flex flex-col md:w-1/4 border-l">
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSBlob resolution={10}/>
          </div>
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSBlob resolution={8}/>
            {/* <TJSBounce /> */}
          </div>
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSBlob resolution={6}/>
            {/* <TJSScene scale={5}/> */}
          </div>
        </div>
      </div> 
    </div>
  );
}
