import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const time = new Date().getHours();

    setIsDark(false);

  }, []);

  return (
    <Html lang="en" className={isDark ? 'dark' : ''}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
