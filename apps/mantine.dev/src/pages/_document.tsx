import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { ColorSchemeScript } from '@mantine/core';
import { createGetInitialProps } from '@mantine/emotion';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="light" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const cache = createCache({ key: 'mantine' });
const stylesServer = createEmotionServer(cache);

Document.getInitialProps = createGetInitialProps(NextDocument, stylesServer);
