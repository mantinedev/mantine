import React from 'react';
import { MantineProvider, NormalizeCSS, GlobalStyles, ColorScheme } from '@mantine/core';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import { Header } from './Header/Header';
import { HEADER_HEIGHT } from './Header/Header.styles';
import '../../fonts/GreycfifCF/styles.css';

interface LayoutProps {
  children: React.ReactNode;
}

const THEME_KEY = 'mantine-color-scheme';

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <MantineProvider theme={{ colorScheme }}>
      <NormalizeCSS />
      <GlobalStyles />
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }}>{children}</main>
    </MantineProvider>
  );
}
