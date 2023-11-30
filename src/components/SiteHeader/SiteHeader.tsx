import Link from "next/link";
import Marquee from "@/components/Marquee/Marquee";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Controls from '../Controls/Controls';
import { useRouter } from "next/router";
import TJSBlob from '../TJSScene/TJSBlob';

export default function SiteHeader(props : any) {

  const router : any = useRouter();
  // debugger;
  return (
    <header>
      <div className="border-0 border-b flex justify-between items-center h-16 md:h-20 pl-4 md:pl-4 w-full">
        <div className="w-20 h-full">
          <TJSBlob />
        </div>
        <Link href={"/"} className="flex">
          <h1 className={"text-xl text-3xl:sm md:text-4xl flex"}>
            Blob Studio
          </h1>
        </Link>
        <Controls 
          className="ml-auto h-full"
          controlStyles="aspect-square bg-primary-50 dark:bg-dark-950 border-l flex"
          controls={[
            {
              element: <ThemeSwitcher />,
              hideMobile: true
            },
            {
              element: <Link href={router.asPath} locale="en">EN</Link>,
              hideMobile: true
            },
            {
              element: <Link href={router.asPath} locale="es" >ES</Link>,
              hideMobile: true
            },
            {
              element: <HamburgerMenu isActive={props.isMenuOpen} onClick={() => {
                props.setIsMenuOpen(!props.isMenuOpen)
              }}/>,
              hideDesktop: true
            },
          ]}
        />
      </div>
      <Marquee />
    </header>
  );
}
