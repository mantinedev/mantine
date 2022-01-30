import React, { useState } from 'react';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { DirectionContext } from '../DirectionContext/DirectionContext';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { HEADER_HEIGHT } from './Header/Header.styles';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
}

const THEME_KEY = 'mantine-color-scheme';

export function Layout({ children, noHeader = false }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleDir = () => {
    const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(nextDir);
    document.querySelector('html').setAttribute('dir', nextDir);
  };

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod+L', toggleDir],
  ]);

  return (
    <DirectionContext.Provider value={dir}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme, dir }}
          withGlobalStyles
          withNormalizeCSS
          emotionOptions={
            dir === 'rtl' ? { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] } : { key: 'mantine' }
          }
        >
          {!noHeader && <Header toggleDir={toggleDir} dir={dir} />}
          <main style={{ paddingTop: !noHeader ? HEADER_HEIGHT : 0 }}>{children}</main>
          {!noHeader && <Footer />}
        </MantineProvider>
      </ColorSchemeProvider>
    </DirectionContext.Provider>
  );
}
