import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { SWRConfig } from 'swr';
import axios from 'axios';
import qs from 'qs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SWRConfig
        value={{
          fetcher: (url: string, params) =>
            axios.get(url, { params, paramsSerializer: qs.stringify }).then(({ data }) => data),
        }}
      >
        <NextNProgress color="#dd7230" />
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}

export default MyApp;
