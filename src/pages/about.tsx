import Head from "next/head";
import { work } from "@/localization/en/work/work";
import InfoSection from "@/components/InfoSection/InfoSection";

export default function About() {
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Guido La Rosa</title>
      </Head>
      <InfoSection title="About us">
        <div className="p-8">
          <h2></h2>
        </div>
      </InfoSection>
    </main>
  );
}
