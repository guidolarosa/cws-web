import Link from "next/link";
import Marquee from "@/components/Marquee/Marquee";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HeaderControls from '../Controls/Controls';

export default function SiteHeader(props : any) {

  return (
    <header>
      <div className="border-0 border-b flex justify-between items-center h-16 md:h-20 pl-4 md:pl-4 w-full">
        <Link href={"/"} className="flex">
          <h1 className={"text-xl text-3xl:sm md:text-4xl flex"}>
            Coyote Web Studio
          </h1>
        </Link>
        <HeaderControls 
          className="ml-auto"
          controlStyles="aspect-square bg-primary-50 dark:bg-dark-950 border-l flex"
          controls={[
            {
              element: <ThemeSwitcher />,
              hideMobile: true
            },
            {
              element: <Link href="" locale="en">EN</Link>,
              hideMobile: true
            },
            {
              element: <Link href="" locale="es">ES</Link>,
              hideMobile: true
            },
            {
              element: <HamburgerMenu onClick={() => {
                props.setIsMenuOpen(!props.isMenuOpen)
              }}/>,
              hideDesktop: true
            },
          ]}
        >
        </HeaderControls>
      </div>
      <Marquee />
    </header>
  );
}
