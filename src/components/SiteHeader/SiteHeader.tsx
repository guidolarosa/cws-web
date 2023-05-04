import Link from "next/link";
import TJSScene from "../TJSScene/TJSScene";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import Marquee from "@/components/Marquee/Marquee";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function SiteHeader() {

  return (
    <header>
      <div className="border-0 border-b flex justify-between items-center h-20 px-4 md:p-0 md:pl-4">
        <Link href={"/"} className="flex">
          <h1 className={"text-3xl md:text-4xl flex"}>
            Coyote Web Studio
          </h1>
        </Link>
        <div className="controls hidden md:flex">
          <ThemeSwitcher />
          <LanguageSelector />
        </div>
      </div>
      <Marquee />
    </header>
  );
}
