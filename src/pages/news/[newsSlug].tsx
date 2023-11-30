import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from 'react-icons/ri';
import Image from "next/image";
import InfoSection from "@/components/InfoSection/InfoSection";
import getLocale from "@/localization";

export default function Work(props : any) {

  const router = useRouter();

  const newsSlug = router.query.newsSlug;
  const locale : any = getLocale(router);
  
  const newsData = locale.newsData.articles.find((news : any) => {
    if (news.slug === newsSlug) {
      return news;
    }
  });

  return newsData && (
    <main className={`flex flex-col`}>
      <Head>
        <title>Blob Studio</title>
      </Head>
      <InfoSection title={newsData.title} backLink={'/news'}>
        <div className="p-8">
        </div>
      </InfoSection>
    </main>
  );
}
