import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        <link rel="preload" href="/hero-images/main.svg" as="image" fetchPriority="high" />
        <link rel="preload" href="/hero-images/background.svg" as="image" fetchPriority="high" />
        
        <link rel="dns-prefetch" href="//play.google.com" />
        <link rel="dns-prefetch" href="//apps.apple.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
