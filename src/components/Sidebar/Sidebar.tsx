import Link from "next/link";
import { navigation } from "@/localization/en/ui-constants";
import { useState, useEffect } from "react";
import CopyText from "react-copy-to-clipboard";
import getLocale from '@/localization';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [time, setTime] = useState('');

  const router = useRouter();
  const locale : any = getLocale(router);

  const onCounterUpdate = () => {
    let argentinaTime = new Date().toLocaleString("es-AR");
    let splitString = argentinaTime.split(',')[1];

    setTime(splitString);
  };

  useEffect(() => {
    let timeInterval = setInterval(onCounterUpdate, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <div
      id="sidebar"
      className={`w-full absolute border-r ${
        open ? "" : "hidden"
      } md:flex md:relative md:w-1/4 flex-col`}
    >
      <ul className="w-full">
        {locale.uiConstants.navigation.map((item : any) => (
          <Link href={item.href} key={item.label}>
            <li
              className={
                "flex items-center px-4 border-0 border-b w-full transition cursor-pointer black hover:bg-stone-50 hover:text-stone-800 h-12"
              }
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="mt-auto border-t p-4 flex justify-center">
        <span>REACH OUT!</span>
      </div>
      <div className="flex border-t item-center">
        <div className="p-4 border-r bg-white text-stone-900">ARG</div>
        <div className="p-4 flex justify-center w-full">
          <span className="w-8 flex justify-center">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
