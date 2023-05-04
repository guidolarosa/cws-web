import Link from "next/link";
import { navigation } from "@/localization/en/ui-constants";
import { useState, useEffect } from "react";
import CopyText from "react-copy-to-clipboard";
import getLocale from '@/localization';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
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
                "flex items-center px-4 border-0 border-b w-full transition cursor-pointer black hover:bg-primary-500 hover:text-primary-50 h-12 bg-primary-100 text-primary-500 dark:bg-dark-900 dark:hover:bg-dark-500 dark:text-dark-500 dark:hover:text-dark-950"
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
      <div className="flex border-t item-center h-12">
        <div className="px-4 border-r bg-primary-500 dark:bg-dark-500 flex text-stone-900 items-center">ARG</div>
        <div className="px-4 flex justify-center w-full items-center">
          <span className="w-8 flex justify-center text-2xl">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
