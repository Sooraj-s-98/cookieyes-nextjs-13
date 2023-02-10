import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/eed94624ff7aff67dfe39b4c/script.js"
          strategy="lazyOnload"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
