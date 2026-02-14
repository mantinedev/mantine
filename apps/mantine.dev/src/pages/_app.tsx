import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/charts/styles.css';
import '@mantinex/demo/styles.css';
import '@mantinex/mantine-logo/styles.css';
import '@mantinex/mantine-header/styles.css';
import '@docs/demos/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Banner } from '@/components/Banner';
import { GaScript } from '@/components/GaScript';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { MdxProvider } from '@/components/MdxProvider';
import { ModalsProviderDemo } from '@/components/ModalsProviderDemo';
import { Search } from '@/components/Search';
import { Shell } from '@/components/Shell';
import { theme } from '../../theme';
import { emotionCache } from '../emotion';

import '../styles/variables.css';

const excludeShell = ['/', '/combobox', '/app-shell'];

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

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
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineEmotionProvider cache={emotionCache}>
          <MantineProvider theme={theme} defaultColorScheme="light">
            <CodeHighlightAdapterProvider adapter={shikiAdapter}>
              <Search />
              <Notifications />
              <Banner id="9-0-0-alpha-release">
                🎉 Mantine 9.0 alpha is now available!{' '}
                <a
                  href="https://alpha.mantine.dev/changelog/9-0-0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  Check out what&apos;s new →
                </a>
              </Banner>
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
            </CodeHighlightAdapterProvider>
          </MantineProvider>
        </MantineEmotionProvider>
      </DirectionProvider>
    </>
  );
}
