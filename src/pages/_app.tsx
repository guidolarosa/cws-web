import "@/styles/globals.css";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { createClient } from "next-sanity";
import CMSDataContext from "@/context/CMSDataContext";
import GlobalContext from "@/context/GlobalContext";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { Unbounded } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import TJSBlob from "@/components/TJSScene/TJSBlob";
import TJSBounce from "@/components/TJSScene/TJSBounce";
import TJSTorus from "@/components/TJSScene/TJSTorus";
import TJSScene from "@/components/TJSScene/TJSScene";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { Suspense, useState } from "react";
import { useRouter } from "next/router";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const CMSData = {
    works: pageProps.works,
    services: pageProps.services,
    tools: pageProps.tools
  };

  const GlobalData = {
    locale: router.locale
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider value={GlobalData}>
      <CMSDataContext.Provider value={CMSData}>
        <Suspense fallback={<span>Loading</span>}>
          <div
            className={`${unbounded.className} h-[100vh] flex flex-col overflow-hidden text-primary-500 dark:text-dark-500 bg-primary-50 dark:bg-dark-950`}
          >
            <SiteHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            <div className={"w-full h-[calc(100vh-130px)] flex grow"}>
              <Sidebar />
              <div
                id="viewport"
                className="w-full col-span-full md:w-2/3 lg:w-2/4 h-full overflow-auto relative"
              >
                <Component {...pageProps} />
                <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
              </div>
              <div className="hidden lg:flex flex-col lg:w-1/4 border-l">
                <div className="border-b h-1/3 w-full last:border-b-0">
                  <TJSTorus />
                </div>
                <div className="border-b h-1/3 w-full last:border-b-0">
                  <TJSBlob resolution={8} wireframe />
                </div>
                <div className="border-b h-1/3 w-full last:border-b-0">
                  <TJSScene scale={1.5} />
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </CMSDataContext.Provider>
    </GlobalContext.Provider>
  );
}

const client = createClient({
  projectId: "dale1czq",
  dataset: "production",
  apiVersion: "2023-05-26",
  useCdn: false,
});

App.getInitialProps = async (ctx: NextPageContext) => {
  const works: any = await client.fetch(`*[_type == "work"]{
    name,
    slug,
    services,
    abstract,
    content,
    tools,
    url,
    "imageUrl": thumbnail.asset->url
  }`);

  const tools: any = await client.fetch(`*[_type == "tool"]{
    name,
    hasBackground,
    _id,
    "imageUrl": logo.asset->url
  }`);
  const services: any = await client.fetch(`*[_type == "service"]`);

  return {
    pageProps: {
      works,
      services,
      tools
    },
  };
};
