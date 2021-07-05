import React, { useLayoutEffect, useState } from 'react';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { useWindowEvent, useLocalStorageValue } from '@mantine/hooks';
import { ColorSchemeContext, ColorScheme } from './ColorScheme.context';
import { LayoutInner, LayoutProps } from './LayoutInner';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({ children, location }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  // updating key is required during layout effect
  // if not done color scheme will not be updated after ssr
  // and some parts inside mdx will show light version, that's a bummer
  const [key, setKey] = useState('light');

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  useLayoutEffect(() => {
    const initialTheme = localStorage.getItem(THEME_KEY);

    if (initialTheme === 'dark') {
      setKey('dark');
      setColorScheme('dark');
    }
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <GlobalStyles />
        <NormalizeCSS />

        <LayoutInner key={key} location={location}>
          {children}
        </LayoutInner>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
