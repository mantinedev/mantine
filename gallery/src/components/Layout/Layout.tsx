import React from 'react';
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import { Header } from './Header/Header';
import { HEADER_HEIGHT } from './Header/Header.styles';
import '../../fonts/GreycfifCF/styles.css';

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
      <MantineProvider theme={{ colorScheme }}>
        <NormalizeCSS />
        <GlobalStyles />
        {!noHeader && <Header />}
        <main style={{ paddingTop: !noHeader ? HEADER_HEIGHT : 0 }}>{children}</main>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
