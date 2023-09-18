import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

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
