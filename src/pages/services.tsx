import Head from "next/head";
import { work } from "@/localization/en/work/work";
import InfoSection from "@/components/InfoSection/InfoSection";

export default function About() {
  return (
    <main className={`flex flex-col`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <InfoSection title={'Services'}>
        <div className="px-8">
          <div className="header text-4xl leading-loose my-8 first:mt-0">
            We use a modern and flexible technology stack that gives you full control over your website and web applications.
          </div>
          <div className="font-extralight">
            <p className="text-2xl leading-relaxed my-8">
              We provide deployment and hosting through Vercel, full featured CMS functions through Strapi, hosted with Heroku, Github, Tailwind
            </p>
            <p className="text-2xl leading-relaxed my-8">
              Specializing in Frontend Development, we focus on creating exciting, useful and performant websites that will capture your audience interest.
            </p>
            <div className="my-20">
              <div className="flex items-center my-10">
                <strong className="text-8xl border-r w-64 justify-center text-center flex items-center">1</strong>
                <p className="ml-8 text-2xl">We will have a initial interview were we will audit your project for opportunities, necessities and risks.</p>
              </div>
              <div className="flex items-center my-10">
                <strong className="text-8xl border-r w-64 justify-center text-center flex items-center">2</strong>
                <p className="ml-8 text-2xl">We will have a initial interview were we will audit your project for opportunities, necessities and risks.</p>
              </div>
              <div className="flex items-center my-10">
                <strong className="text-8xl border-r w-64 justify-center text-center flex items-center">3</strong>
                <p className="ml-8 text-2xl">We will have a initial interview were we will audit your project for opportunities, necessities and risks.</p>
              </div>
            </div>
          </div>
        </div>
      </InfoSection>
    </main>
  );
}
