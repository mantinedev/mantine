import React from 'react';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
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

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {!noHeader && <Header />}
        <main style={{ paddingTop: !noHeader ? HEADER_HEIGHT : 0 }}>{children}</main>
        {!noHeader && <Footer />}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
