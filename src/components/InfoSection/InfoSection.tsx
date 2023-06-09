import React from "react";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

interface Props {
  title: string;
  children?: React.ReactNode;
  backLink?: string;
}

const InfoSection: React.FC<Props> = ({ title, children, backLink }) => {
  return (
    <div className="h-full w-full flex flex-col overflow-y-hidden">
      <div className={"h-16 md:h-24 w-full border-b flex"}>
        <div
          className={`flex items-center w-full bg-primary-100 dark:bg-dark-900 ${
            !backLink ? "px-4" : ""
          }`}
        >
          {backLink && (
            <div className="w-24 h-full">
              <Link
                className="w-24 h-full border-r flex items-center px-8  hover:text-primary-50 dark:hover:text-black hover:bg-primary-500 dark:hover:bg-dark-500 transition"
                href={backLink}
              >
                <RiArrowLeftLine
                  className={'text-xl md:text-2xl'}
                  style={{ transform: "scale(2)" }}
                />
              </Link>
            </div>
          )}
          <h1
            className={`text-2xl md:text-4xl flex items-center ${backLink ? "px-8" : ""}`}
          >
            {title}
          </h1>
        </div>
      </div>
      <div
        className={
          "w-full overflow-auto h-full md:max-h-[calc(100vh-224px)] max-h-[calc(100vh-168px)]"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
