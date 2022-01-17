import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import '../fonts/GreycliffCF/styles.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
