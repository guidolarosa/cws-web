import { useContext } from "react";
import Head from "next/head";
import { createClient } from "next-sanity";
import getLocale from "@/localization";
import { useRouter } from "next/router";
import InfoSection from "@/components/InfoSection/InfoSection";
import ListLink from "@/components/ListLink/ListLink";
import CMSDataContext from "./../../context/CMSDataContext";
import GlobalContext from "@/context/GlobalContext";

export default function Work(props: any) {
  const router = useRouter();
  const locale: any = getLocale(router);
  const CMSData: any = useContext(CMSDataContext);
  const GlobalData: any = useContext(GlobalContext);

  return (
    <main className={`flex flex-col h-full`}>
      <Head>
        <title>Blob Studio</title>
      </Head>
      <InfoSection title="Our Work">
        <div>
          <ul>
            {CMSData.works.map((work: any) => (
              <ListLink
                key={work.title}
                href={"/work/" + work.slug.current}
                data={{
                  work: work,
                  services: props.services,
                }}
                onMouseEnter={() => {
                  GlobalData.setHoveredWork(work)
                }}
                onMouseLeave={() => {
                  GlobalData.setHoveredWork(null);
                }}
              />
            ))}
          </ul>
        </div>
      </InfoSection>
    </main>
  );
}
