import React, { useEffect, useState } from 'react';
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useWindowEvent, useLocalStorageValue, randomId } from '@mantine/hooks';
import { LayoutInner, LayoutProps } from './LayoutInner';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({ children, location }: LayoutProps) {
  const [key, setKey] = useState('theme');
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  useEffect(() => {
    setKey(randomId());
  }, []);

  return (
    <ColorSchemeProvider key={key} colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <GlobalStyles />
        <NormalizeCSS />

        <LayoutInner location={location}>{children}</LayoutInner>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
