import Head from "next/head";

export default function News() {
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <div className={"w-full"}>
        <div className="h-24 border-b flex items-center px-8">
          <h1 className={"text-4xl"}>News</h1>
        </div>
      </div>
      <div>          
      </div>
    </main>
  );
}
