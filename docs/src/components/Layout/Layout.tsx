import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Global } from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { LayoutInner, LayoutProps } from './LayoutInner';
import '../../fonts/GreycliffCF/styles.css';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({ children, location }: LayoutProps) {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleDir = () => setDir((current) => (current === 'rtl' ? 'ltr' : 'rtl'));

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod+L', () => toggleDir()],
  ]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          dir,
          colorScheme,
          headings: { fontFamily: 'Greycliff CF, sans serif' },
        }}
        emotionOptions={
          dir === 'rtl' ? { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] } : { key: 'mantine' }
        }
      >
        <Global
          styles={(theme) => ({
            body: {
              color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
              fontSize: 15,
            },
          })}
        />
        <div dir={dir}>
          <LayoutInner location={location}>{children}</LayoutInner>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
