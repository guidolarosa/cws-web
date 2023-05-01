import Head from "next/head";

import { work } from "@/localization/en/work/work";

export default function About() {
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Guido La Rosa</title>
      </Head>
      <div className={"w-full"}>
        <div className="h-24 border-b flex items-center px-8">
          <h1 className={"text-4xl"}>About Us</h1>
        </div>
      </div>
      <div className="p-8">
        <h2></h2>
      </div>
    </main>
  );
}
