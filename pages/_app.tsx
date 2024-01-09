import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://scriptstaging.cookieyes.com/client_data/d59241ce3a1a17eaff716a6e/script.js" />
      <Component {...pageProps} />
    </>
  );
}
