import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/theme';
import { ColorSchemeContext, ColorScheme } from './ColorScheme.context';
import LayoutInner from './LayoutInner';

const THEME_KEY = 'mantine-color-scheme';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleTheme = () =>
    setColorScheme((current) => {
      const newScheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, newScheme);
      return newScheme;
    });

  const toggleThemeHandler = (event: KeyboardEvent) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      toggleTheme();
    }
  };

  useEffect(() => {
    const initialTheme = localStorage.getItem(THEME_KEY);
    if (initialTheme === 'dark') {
      setColorScheme('dark');
    }

    window.addEventListener('keydown', toggleThemeHandler);
    return () => window.removeEventListener('keydown', toggleThemeHandler);
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <LayoutInner>{children}</LayoutInner>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
