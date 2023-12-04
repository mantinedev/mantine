import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantinex/demo/styles.css';
import '@mantinex/mantine-logo/styles.css';
import '@mantinex/mantine-header/styles.css';
import '@mantinex/shiki/styles.css';
import '@docs/demos/styles.css';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { ShikiProvider } from '@mantinex/shiki';
import { MdxProvider } from '@/components/MdxProvider';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { Search } from '@/components/Search';
import { FontsStyle } from '@/fonts';
import { Shell } from '@/components/Shell';
import { GaScript } from '@/components/GaScript';
import { ModalsProviderDemo } from '@/components/ModalsProviderDemo';
import { theme } from '../../theme';
import '../styles/variables.css';
import '../styles/global.css';

const excludeShell = ['/', '/combobox', '/app-shell'];

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
  });

  return shiki;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const shouldRenderShell = !excludeShell.includes(router.pathname);
  const [navbarOpened, setNavbarOpened] = useLocalStorage({
    key: 'mantine-navbar-opened',
    defaultValue: true,
  });

  useHotkeys([['mod + alt + N', () => setNavbarOpened(!navbarOpened)]]);

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
          <ShikiProvider loadShiki={loadShiki}>
            <Search />
            <Notifications />
            <ModalsProviderDemo>
              <MdxProvider>
                <HotKeysHandler />
                {shouldRenderShell ? (
                  <Shell withNavbar={navbarOpened}>
                    <Component {...pageProps} />
                  </Shell>
                ) : (
                  <Component {...pageProps} />
                )}
              </MdxProvider>
            </ModalsProviderDemo>
          </ShikiProvider>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
