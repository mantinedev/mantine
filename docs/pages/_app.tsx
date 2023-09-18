import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/ds/styles.css';
import '@mantine/demos/styles.css';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { MdxProvider } from '@/components/MdxProvider';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { Search } from '@/components/Search';
import { FontsStyle } from '@/fonts';
import { Shell } from '@/components/Shell';
import { GaScript } from '@/components/GaScript';
import { theme } from '../theme';
import '../styles/variables.css';
import '../styles/global.css';
import { ModalsProviderDemo } from '@/components/ModalsProviderDemo';

const excludeShell = ['/', '/combobox', '/app-shell'];

export default function App({ Component, pageProps, router }: AppProps) {
  const shouldRenderShell = !excludeShell.includes(router.pathname);

  return (
    <>
      <Head>
        <title>Mantine</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
      </Head>
      <GaScript />
      <FontsStyle />
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Search />
          <Notifications />
          <ModalsProviderDemo>
            <MdxProvider>
              <HotKeysHandler />
              {shouldRenderShell ? (
                <Shell>
                  <Component {...pageProps} />
                </Shell>
              ) : (
                <Component {...pageProps} />
              )}
            </MdxProvider>
          </ModalsProviderDemo>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
