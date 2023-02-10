import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn-cookieyes.com/client_data/eed94624ff7aff67dfe39b4c/script.js" />
      <Component {...pageProps} />
    </>
  );
}
