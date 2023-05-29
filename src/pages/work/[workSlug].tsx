import Head from "next/head";
import { useContext } from "react";
import { work } from "@/localization/en/work/work";
import {PortableText} from '@portabletext/react'
import { useRouter } from "next/router";
import Image from "next/image";
import InfoSection from "@/components/InfoSection/InfoSection";
import CMSDataContext from "@/context/CMSDataContext";


export default function Work(props : any) {

  const router = useRouter();

  const workSlug = router.query.workSlug;

  const CMSData : any = useContext(CMSDataContext);
  
  const workData = CMSData.works.find((work : any) => {
    if (work.slug.current === workSlug) {
      return work;
    }
  });

  return workData && (
    <main className={`flex flex-col h-full`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title={workData.name} backLink={'/work'}>
        <div className="w-full aspect-video relative z-20 mb-8">
          <Image
            fill
            src={workData.imageUrl}
            alt={workData.name}
          />
        </div>
        <div className="px-8">
          <div className="header text-xl mb-8 first:mt-0">
            {workData.absctract}
          </div>
          <div className="header text-md font-light text-primary-400 dark:text-dark-600 pb-20 [&>p]:mb-6">
           <PortableText value={workData.content} />
          </div>
        </div>
      </InfoSection>
    </main>
  );
}