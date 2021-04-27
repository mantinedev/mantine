import React, { useEffect } from 'react';
import { MantineProvider } from '@mantine/theme';
import { useWindowEvent, useLocalStorageValue } from '@mantine/hooks';
import { ColorSchemeContext, ColorScheme } from './ColorScheme.context';
import LayoutInner from './LayoutInner';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({
  children,
  location,
}: {
  children: React.ReactNode;
  location: { pathname: string };
}) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  useEffect(() => {
    const initialTheme = localStorage.getItem(THEME_KEY);

    if (initialTheme === 'dark') {
      setColorScheme('dark');
    }
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <LayoutInner tableOfContents={location.pathname !== '/'}>{children}</LayoutInner>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
