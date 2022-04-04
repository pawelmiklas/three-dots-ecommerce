import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#dd7230" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
