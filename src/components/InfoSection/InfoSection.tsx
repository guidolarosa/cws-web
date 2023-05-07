import React from 'react';
import Link from "next/link";
import { RiArrowLeftLine } from 'react-icons/ri';

interface Props {
  title: string,
  children?: React.ReactNode,
  backLink?: string
}

const InfoSection: React.FC<Props> = ({title, children, backLink}) => {
  return (
    <div className="h-[calc(100vh-8.5rem)] w-full flex flex-col overflow-y-hidden">
      <div className={"w-full"}>
        <div className={`h-24 border-b flex items-center bg-primary-100 dark:bg-dark-900 ${!backLink ? 'px-4' : ''}`}>
          {backLink && (
            <div className="h-24 border-b flex">
              <Link className="w-24 border-r flex items-center px-8  hover:text-primary-50 dark:hover:text-black hover:bg-primary-500 dark:hover:bg-dark-500 transition" href={backLink}>
                <RiArrowLeftLine size={'3rem'} style={{transform: 'scale(2)'}}/>
              </Link>
            </div>
          )}
          <h1 className={`text-4xl flex items-center ${backLink ? 'px-8' : ''}`}>{title}</h1>
        </div>
      </div>
      <div className={"w-full overflow-auto"}>
        {children}
      </div>
    </div>
  );
};

export default InfoSection;