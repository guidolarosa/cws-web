import Link from "next/link";
import { navigation } from "@/localization/en/ui-constants";
import { useState, useEffect } from "react";
import CopyText from "react-copy-to-clipboard";
import Menu from "../Menu/Menu";
import Counter from "../Counter/Counter";

const Sidebar = (props : any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="sidebar"
      className={`w-full absolute border-r hidden md:flex md:relative md:w-1/3 lg:w-1/4 flex-col bg-primary-50 dark:bg-dark-950`}
    >
      <Menu />
      <div className="mt-auto bg-primary-100 dark:bg-dark-900">
        <div className="border-t p-4 flex justify-center ">
          <span>REACH OUT!</span>
        </div>
        <Counter />
      </div>
    </div>
  );
};

export default Sidebar;
