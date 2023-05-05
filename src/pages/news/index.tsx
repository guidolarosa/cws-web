import Head from "next/head";
import InfoSection from "@/components/InfoSection/InfoSection";
import getLocale from "@/localization";
import { useRouter } from "next/router";
import Link from "next/link";

export default function News() {

  const router = useRouter();
  const locale : any = getLocale(router);

  console.log(locale)
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title="News">
        <ul>
          {locale.newsData.articles.map((article : any, index : number) => (
            <Link href={`/news/${article.slug}`} key={index}>
              <li className="h-24 flex justify-center px-4 border-b flex-col hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950 transition-all">
                <strong className="text-2xl font-normal">{article.title}</strong>
                <span className={'text-sm mt-2 opacity-50 font-light'}>By <strong>{article.author}</strong></span>
              </li>
            </Link>
          ))}
        </ul>
      </InfoSection>
    </main>
  );
}
