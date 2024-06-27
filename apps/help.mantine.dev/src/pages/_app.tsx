import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantinex/shiki/styles.css';
import '@mantinex/demo/styles.css';
import '@mantinex/mantine-logo/styles.css';
import '@mantinex/mantine-header/styles.css';
import '../fonts/GreycliffCF/styles.css';

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ShikiProvider } from '@mantinex/shiki';
import { Shell } from '../components/Shell';
import { theme } from '../theme';

async function loadShiki() {
  const { getHighlighter } = await import('shiki');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

export default function App({ Component, pageProps }: any) {
  const title = 'Help Center | Mantine';
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta property="og:url" content="https://help.mantine.dev/" key="og-url" />
        <meta
          name="description"
          content="Frequently asked questions and in-depth guides for Mantine"
        />
        <meta
          itemProp="description"
          content="Frequently asked questions and in-depth guides for Mantine"
        />
        <meta
          itemProp="image"
          content="http://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
        <meta name="keywords" content="react,mantine,faq" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
      </Head>
      <Shell>
        <ShikiProvider loadShiki={loadShiki}>
          <Component {...pageProps} />
        </ShikiProvider>
      </Shell>
    </MantineProvider>
  );
}
