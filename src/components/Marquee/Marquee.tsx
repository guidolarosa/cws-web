import React from 'react';
import Marquee from "react-fast-marquee";
import { useRouter } from 'next/router'
import getLocale from '@/localization';

const MyMarquee = () => {
  const router = useRouter();
  const locale : any = getLocale(router);
  return (
    <div
          className={`bg-primary-500 dark:bg-dark-500 py-4 border-0 tracking-widest font-light text-primary-50 dark:text-primary-950`}
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