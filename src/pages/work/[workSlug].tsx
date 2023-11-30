import Head from "next/head";
import { useContext } from "react";
import { work } from "@/localization/en/work/work";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import Image from "next/image";
import InfoSection from "@/components/InfoSection/InfoSection";
import CMSDataContext from "@/context/CMSDataContext";
import ToolCard from "@/components/ToolCard/ToolCard";
import GlobalContext from "@/context/GlobalContext";

export default function Work(props: any) {
  const router = useRouter();

  const workSlug = router.query.workSlug;

  const CMSData: any = useContext(CMSDataContext);

  const GlobalData: any = useContext(GlobalContext);

  const workData = CMSData.works.find((work: any) => {
    if (work.slug.current === workSlug) {
      return work;
    }
  });

  let usedTools: any = [];
  workData.tools.forEach((tool: any) => {
    CMSData.tools.forEach((srcTool: any) => {
      if (tool._ref === srcTool._id) {
        usedTools.push(srcTool);
      }
    });
  });

  return (
    workData && (
      <main className={`flex flex-col h-full`}>
        <Head>
          <title>Blob Studio</title>
        </Head>
        <InfoSection title={workData.name} backLink={"/work"}>
          <div
            className={`h-12 flex justify-center items-center w-full  border-b bg-primary-200 dark:bg-dark-800`}
          >
            <div
              className={`h-8 flex justify-center items-center dark:bg-dark-950 w-9/12 rounded-sm border bg-primary-50`}
            >
              <div>{workData.url}</div>
            </div>
          </div>
          <div className="w-full h-[280px] md:h-[390px] relative z-20 mb-8 border-b flex items-center justify-center flex-col bg-primary-500 dark:bg-dark-700">
            <div className="flex mt-auto translate-y-5 scale-[0.8] md:scale-100 origin-bottom">
              <div className="flex flex-col items-center">
                <div className="screen w-[420px] h-[240px] relative border flex bg-primary-100 dark:bg-dark-900 p-1">
                  <div className="w-[100%] h-[100%] relative border flex overflow-hidden bg-black">
                    {workData.show_static_thumbnails ? (
                      <Image
                        fill
                        src={workData.imageUrl}
                        alt={workData.name}
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    ) : (
                      <iframe
                        src={workData.url}
                        title="W3Schools Free Online Web Tutorials"
                        className="absolute"
                        height={"1080"}
                        width={"1920"}
                        style={{
                          transform: "scale(0.2139)",
                          transformOrigin: "top left",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="screen-back border w-[40px] h-[60px] dark:bg-dark-900 border-y-0 bg-primary-100" />
                <div className="screen-back border w-[180px] h-[10px] dark:bg-dark-900 bg-primary-100" />
              </div>

              {workData.mobileImageUrl && (
                <div className="hidden md:flex screen-mobile w-[120px] h-[220px] relative justify-center items-center ml-[-30px] p-1 bg-primary-100 border dark:bg-dark-900 translate-y-24 ">
                  <div className="w-full h-full relative border overflow-hidden bg-black">
                    {workData.show_static_thumbnails ? (
                      <Image
                        fill
                        src={workData.mobileImageUrl}
                        alt={workData.name}
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    ) : (
                      <iframe
                        src={workData.url}
                        title="W3Schools Free Online Web Tutorials"
                        className="absolute"
                        height={"720"}
                        width={"360"}
                        style={{
                          transform: "scale(0.32)",
                          transformOrigin: "top left",
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* <div className="table border h-16 w-full dark:bg-dark-950 border-b-0 border-x-0" /> */}
          </div>
          <div className="px-8 pt-10">
            <div className="header text-xl mb-8 first:mt-0">
              {workData.abstract && workData.abstract[GlobalData.locale]}
            </div>
            {workData.content && (
              <div className="text-md font-light text-primary-400 dark:text-dark-600 pb-20 [&>p]:mb-6 last:[&>p]:mb-0">
                <PortableText value={workData.content[GlobalData.locale]} />
              </div>
            )}
          </div>
          <div className={"px-8"}>
            <h1 className={"text-2xl mb-8"}>Our Stack</h1>
            <div className={"flex flex-wrap"}>
              {usedTools.map((tool: any, index: number) => (
                <ToolCard
                  logoUrl={tool.imageUrl}
                  key={index}
                  name={tool.name}
                />
              ))}
            </div>
          </div>
        </InfoSection>
      </main>
    )
  );
}
