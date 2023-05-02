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
    <>
      <div className={"w-full"}>
        <div className={`h-24 border-b flex items-center ${!backLink ? 'px-4' : ''}`}>
          {backLink && (
            <div className="h-24 border-b flex">
              <Link className="w-24 border-r flex items-center px-8 hover:bg-white hover:text-black transition" href={backLink}>
                <RiArrowLeftLine size={'3rem'} style={{transform: 'scale(2)'}}/>
              </Link>
            </div>
          )}
          <h1 className={`text-4xl flex items-center ${backLink ? 'px-8' : ''}`}>{title}</h1>
        </div>
      </div>
      {children}
    </>
  );
};

export default InfoSection;