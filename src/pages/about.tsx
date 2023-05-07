import Head from "next/head";
import { work } from "@/localization/en/work/work";
import InfoSection from "@/components/InfoSection/InfoSection";
import getLocale from "@/localization";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const locale : any = getLocale(router);

  console.log(locale)

  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio | About</title>
      </Head>
      <InfoSection title="About us">
        <div className="p-4 md:p-8">
          {locale.aboutData.about.map((item : string, index : number) => (
            <p className="mb-8 font-light text-lg" key={index}>{item}</p>
          ))}
        </div>
      </InfoSection>
    </main>
  );
}
