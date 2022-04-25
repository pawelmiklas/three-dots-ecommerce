import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Layout>
          <NextNProgress color="#dd7230" />
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
