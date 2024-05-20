import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://mojoview.com/client_data/734f92b892a7a57c69bf359e/script.js" />
      <Component {...pageProps} />
    </>
  );
}
