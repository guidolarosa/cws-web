import Head from "next/head";
import { work } from "@/localization/en/work/work";
import InfoSection from "@/components/InfoSection/InfoSection";
import { useContext } from "react";
import CMSDataContext from "@/context/CMSDataContext";
import Image from "next/image";

export default function About() {
  const CMSData: any = useContext(CMSDataContext);

  const serviceSteps = [
    "We will have a initial interview were we will audit your project for opportunities, necessities and risks.",
    "We will have a initial interview were we will audit your project for opportunities, necessities and risks.",
    "We will have a initial interview were we will audit your project for opportunities, necessities and risks.",
  ];

  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title={"Services"}>
        <div className="p-4">
          <div className="header text-4xl my-2 first:mt-0">
            We use a modern and flexible technology stack that gives you full
            control over your website and web applications.
          </div>
          <div className="font-extralight">
            <p className="text-xl leading-relaxed my-8">
              We provide deployment and hosting through Vercel, full featured
              CMS functions through Strapi, hosted with Heroku, Github, Tailwind
            </p>
            <p className="text-xl leading-relaxed my-8">
              Specializing in Frontend Development, we focus on creating
              exciting, useful and performant websites that will capture your
              audience interest.
            </p>
            <div className="my-10">
              {serviceSteps.map((step: string, index: number) => (
                <div
                  className="flex items-center border mb-4"
                  key={index}
                >
                  <div className="text-6xl border-r w-64 justify-center text-center flex items-center bg-primary-500 h-full aspect-square text-primary-50 font-semibold">
                    {index + 1}
                  </div>
                  <div className="px-4">
                    <p className="text-xl">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center py-12 px-4">
          {CMSData.tools.map((tool: any, index: number) => (
            <li
              key={index}
              className="w-[calc((100%/3)-8px)] xl:w-[calc((100%/4)-8px)] flex flex-col justify-center items-center p-2 border rounded-md h-32 mx-[4px] mb-2 dark:bg-dark-50"
            >
              <div className="relative w-14 h-14 mix-blend-multiply dark:mix-blend-multiply mb-4">
                <Image
                  src={tool.imageUrl}
                  fill
                  alt={tool.name}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <strong className="color text-center font-regular text-[12px] font-normal bg-primary-500 text-primary-50 rounded-full py-2 px-4 dark:bg-dark-600 whitespace-nowrap">
                {tool.name}
              </strong>
            </li>
          ))}
        </ul>
      </InfoSection>
    </main>
  );
}
