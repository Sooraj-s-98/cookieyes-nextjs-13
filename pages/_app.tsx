import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://mojoview.com/client_data/43b670d7a54a33157d80142c/script.js" />
      <Component {...pageProps} />
    </>
  );
}
