import React from 'react';
import Marquee from "react-fast-marquee";
import { useRouter } from 'next/router'
import getLocale from '@/localization';

const MyMarquee = () => {
  const router = useRouter();
  const locale : any = getLocale(router);
  return (
    <div
          className={`bg-primary-500 dark:bg-dark-500 h-10 md:h-16 flex items-center border-0 tracking-widest font-light text-primary-50 dark:text-primary-950 text-sm md:text-md`}
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
            <span>{locale.uiConstants.bannerLines[0]}</span>
            <span className={"mx-2"}>-</span>
            <span>{locale.uiConstants.bannerLines[1]}</span>
            <span className={"mx-2"}>-</span>
          </Marquee>
        </div>
  );
};

export default MyMarquee;