import Head from "next/head";
import Link from "next/link";
import { work } from "@/localization/en/work/work";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from 'react-icons/ri';
import Image from "next/image";

export default function Work(props : any) {

  const router = useRouter();

  const workSlug = router.query.workSlug;
  
  const workData = work.find((work) => {
    if (work.slug === workSlug) {
      return work;
    }
  });

  console.log(workData)

  return workData && (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <div className={"w-full"}>
        <div className="h-24 border-b flex">
          <Link className="w-24 border-r flex items-center px-8 hover:bg-white hover:text-black transition" href="/work">
            <RiArrowLeftLine size={'3rem'}/>
          </Link>
          <h1 className={"text-4xl flex items-center px-8"}>{workData.title}</h1>
        </div>
      </div>
      <div className="p-8">
        <div className="header text-4xl leading-loose my-20 first:mt-0">
          A detailed and dynamic website that hosts the lore and blog of this exciting new game.
        </div>
        <div className="w-full aspect-video relative z-20 my-20 border">
          <Image
            fill
            src={'/img/work/shadow-war/top.png'}
            alt={workData.title}
          />
        </div>
        <div className="header text-2xl leading-loose my-20">
          Shadow War is a 5v5 competitive PvP action game for PC and Console.
        </div>
      </div>
    </main>
  );
}
