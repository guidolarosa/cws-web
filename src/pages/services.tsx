import Head from "next/head";
import InfoSection from "@/components/InfoSection/InfoSection";
import { useContext } from "react";
import CMSDataContext from "@/context/CMSDataContext";
import Marquee from "react-fast-marquee";
import ToolCard from "@/components/ToolCard/ToolCard";

export default function About() {
  const CMSData: any = useContext(CMSDataContext);

  const serviceSteps = [
    "Brainstorming and conceptualizing the website's goals, features, and design approach.",
    "Implementing the design, coding, and content creation to bring the website to life.",
    "Launching the website, conducting testing, and ensuring it reaches the intended audience.",
  ];

  let totalTools = CMSData.tools.length;

  let roundedHalf = Math.round(totalTools / 3);
  let tools: any = [[], [], []];

  CMSData.tools.forEach((tool: any, index: any) => {
    if (index < roundedHalf) {
      tools[0].push(tool);
    } else if (index >= roundedHalf && index < roundedHalf * 2) {
      tools[1].push(tool);
    } else {
      tools[2].push(tool);
    }
  });

  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title={"Services"}>
        <div className="">
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
              <div className="flex flex-col lg:flex-row my-10 w-full justify-between">
                {serviceSteps.map((step: string, index: number) => (
                  <div className="flex items-center border mb-4 flex-col w-full lg:w-[calc(100%/3-16px)]" key={index}>
                    <div className="text-4xl border-b flex w-full p-4 text-primary-500 font-semibold dark:text-dark-500 bg-primary-100 dark:bg-dark-900">
                      {index + 1}.
                    </div>
                    <div className="p-4">
                      <p className="text-md">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className={"text-center text-4xl mb-8"}>We love modern tools</h1>
            <ul className="flex flex-wrap justify-center py-4 dark:mt-8">
              {tools.map((toolList: any, index: any) => (
                <Marquee
                  key={index}
                  pauseOnHover
                  className={'mb-[-24px]'}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  {toolList.map((tool: any, index: number) => (
                    <ToolCard
                      hasBackground={tool.hasBackground}
                      key={index}
                      logoUrl={tool.imageUrl}
                      name={tool.name}
                      className={'mx-4'}
                    />
                  ))}
                </Marquee>
              ))}
            </ul>
          </div>
        </div>
      </InfoSection>
    </main>
  );
}
