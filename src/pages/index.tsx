import { Unbounded } from 'next/font/google'
import Head from 'next/head';
import TJSBlob from '@/components/TJSScene/TJSBlob';
import getLocale from '@/localization';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const locale : any = getLocale(router);

  return (
    <main className={`flex w-full h-full bg-stone-800`}>
      <Head>
        <title>Coyote Web Studio</title>
      </Head>
      <div className={'w-full flex items-center justify-center bg-primary-100 dark:bg-dark-900'}>
        {/* <TJSScene /> */}
        <TJSBlob />
        <span className="absolute text-4xl leading-relaxed md:text-5xl text-center max-w-2xl  text-primary-700 text-shadow px-4 md:px-0 md:leading-relaxed dark:text-dark-100 pointer-events-none">
          {locale.uiConstants.homepage.heroText}
        </span>
      </div>
    </main>
  )
}
