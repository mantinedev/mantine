import React from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import { LayoutInner, LayoutProps } from './LayoutInner';
import '../../fonts/GreycliffCF/styles.css';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({ children, location }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          headings: { fontFamily: 'Greycliff CF, sans serif' },
        }}
      >
        <LayoutInner location={location}>{children}</LayoutInner>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
