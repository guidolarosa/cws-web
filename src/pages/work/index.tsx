import Head from "next/head";
import Link from "next/link";
import { work } from "@/localization/en/work/work";
import { Fragment } from "react";
import getLocale from '@/localization';
import { useRouter } from 'next/router';
import InfoSection from "@/components/InfoSection/InfoSection";

export default function Work() {
  const router = useRouter();
  const locale : any = getLocale(router);
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title="Our Work">
        <div>
          <ul>
            {locale.workData.work.map((work : any) => (
              <Link key={work.title} href={'/work/' + work.slug} className={'last:border-b-0 h-24 flex items-center px-4 border-b hover:bg-white hover:text-black cursor-pointer transition'}>
                <li key={work.title}>
                  <span className="mr-4 text-2xl">{work.title}</span>
                  <span className="font-light text-sm opacity-70">
                    {work.services.map((service : string) => (
                      <Fragment key={service}>{service}</Fragment>
                    ))}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </InfoSection>
    </main>
  );
}
