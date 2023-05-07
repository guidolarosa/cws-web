import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { Unbounded } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import TJSBlob from '@/components/TJSScene/TJSBlob'
import TJSBounce from '@/components/TJSScene/TJSBounce'
import TJSTorus from "@/components/TJSScene/TJSTorus";
import TJSScene from '@/components/TJSScene/TJSScene'
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { useState } from "react";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${unbounded.className} h-[100vh] flex flex-col overflow-hidden text-primary-500 dark:text-dark-500 bg-primary-50 dark:bg-dark-950`}>
      <SiteHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={"w-full h-[calc(100vh-130px)] flex grow"}>
        <Sidebar />
        <div id="viewport" className="w-full col-span-full md:w-2/3 lg:w-2/4 h-full overflow-auto relative">
          <Component {...pageProps} />
          <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
        </div>
        <div className="hidden lg:flex flex-col lg:w-1/4 border-l">
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSTorus/>
          </div>
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSBlob resolution={8} wireframe />
          </div>
          <div className="border-b h-1/3 w-full last:border-b-0">
            <TJSScene scale={1.5}/>
          </div>
        </div>
      </div> 
    </div>
  );
}
