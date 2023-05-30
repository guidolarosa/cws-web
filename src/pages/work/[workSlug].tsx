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

  const GlobalData : any = useContext(GlobalContext)

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

  console.log(workData.content[GlobalData.locale])
  return (
    workData && (
      <main className={`flex flex-col h-full`}>
        <Head>
          <title>Coyote Web Studio</title>
        </Head>
        <InfoSection title={workData.name} backLink={"/work"}>
          <div className={`h-12 flex justify-center items-center w-full  border-b bg-primary-200 dark:bg-dark-800`}>
            <div className={`h-8 flex justify-center items-center dark:bg-dark-950 w-9/12 rounded-sm border bg-primary-50`}>
              <div>
                {workData.url}
              </div>
            </div>
          </div>
          <div className="w-full aspect-video relative z-20 mb-8 bg-black border-b">
            <Image fill src={workData.imageUrl} alt={workData.name} style={{objectFit: 'contain'}}/>
          </div>
          <div className="px-8">
            <div className="header text-xl mb-8 first:mt-0">
              {workData.abstract[GlobalData.locale]}
            </div>
            <div className="text-md font-light text-primary-400 dark:text-dark-600 pb-20 [&>p]:mb-6 last:[&>p]:mb-0">
              <PortableText value={workData.content[GlobalData.locale]} />
            </div>
          </div>
          <div className={"px-8"}>
            <h1 className={'text-2xl mb-8'}>Our Stack</h1>
            <div className={'flex'}>
              {usedTools.map((tool: any, index: number) => (
                <ToolCard logoUrl={tool.imageUrl} key={index} name={tool.name}/>
              ))}
            </div>
          </div>
        </InfoSection>
      </main>
    )
  );
}
