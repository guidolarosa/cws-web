import Link from "next/link";
import Marquee from "react-fast-marquee";
import getLocale from '@/localization';
import { useRouter } from 'next/router';
import TJSScene from "../TJSScene/TJSScene";

export default function SiteHeader() {
  const router = useRouter();
  const locale : any = getLocale(router);
  return (
    <header>
        <div className="p-4 border-0 border-b flex justify-between items-center">
          <Link href={'/'} className="flex">
            <h1 className={"text-4xl flex"}>Coyote Web Studio
            <div className="w-10 h-10 inline ml-4">
              <TJSScene />
            </div>
            </h1>
          </Link>
          <div className={'flex'}>
            <Link href="" locale="en">EN</Link>
            <span className="mx-4">|</span>
            <Link href="" locale="es">ES</Link>
          </div>
        </div>
        <div
          className={`bg-white py-4 border-0 border-b tracking-widest font-light text-stone-950`}
        >
          <Marquee>
            <span>{locale.uiConstants.bannerLines[0]}</span>
            <span className={"mx-2"}>-</span>
            <span>{locale.uiConstants.bannerLines[1]}</span>
            <span className={"mx-2"}>-</span>
            <span>{locale.uiConstants.bannerLines[0]}</span>
            <span className={"mx-2"}>-</span>
            <span>{locale.uiConstants.bannerLines[1]}</span>
            <span className={"mx-2"}>-</span>
          </Marquee>
        </div>
      </header>
  )
}
