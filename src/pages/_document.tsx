import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const time = new Date().getHours();
    setIsDark(false);
  }, []);

  return (
    <Html lang="en" className={new Date().getHours() > 18 ? 'dark' : ''}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
