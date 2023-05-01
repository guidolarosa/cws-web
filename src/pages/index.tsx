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
      <div className={'w-full flex items-center justify-center'}>
        {/* <TJSScene /> */}
        <TJSBlob />
        <span className="absolute text-5xl text-center leading-loose max-w-2xl">
          {locale.uiConstants.homepage.heroText}
        </span>
      </div>
    </main>
  )
}
