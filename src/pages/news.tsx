import Head from "next/head";
import InfoSection from "@/components/InfoSection/InfoSection";

export default function News() {
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title="News" />
    </main>
  );
}
