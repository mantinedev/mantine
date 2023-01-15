import React, { useState, useEffect } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
  createEmotionCache,
  rem,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { LayoutInner, LayoutProps } from './LayoutInner';
import { DirectionContext } from './DirectionContext';
import { GreycliffCF } from '../../fonts/GreycliffCF/GreycliffCF';

const THEME_KEY = 'mantine-color-scheme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export default function Layout({ children, location }: LayoutProps) {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleDirection = () => setDir((current) => (current === 'rtl' ? 'ltr' : 'rtl'));

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod + shift + L', () => toggleDirection()],
  ]);

  useEffect(() => {
    const gatsbyFocusWrapper = document.getElementById('gatsby-focus-wrapper');
    if (gatsbyFocusWrapper) {
      gatsbyFocusWrapper.removeAttribute('style');
      gatsbyFocusWrapper.removeAttribute('tabIndex');
    }
  }, []);

  return (
    <DirectionContext.Provider value={{ dir, toggleDirection }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <GreycliffCF />
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            dir,
            colorScheme,
            headings: { fontFamily: 'Greycliff CF, sans serif' },
          }}
          emotionCache={dir === 'rtl' ? rtlCache : undefined}
        >
          <Global
            styles={(theme) => ({
              body: {
                color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
                fontSize: rem(15),
              },
            })}
          />
          <div dir={dir}>
            <LayoutInner location={location}>{children}</LayoutInner>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </DirectionContext.Provider>
  );
}
