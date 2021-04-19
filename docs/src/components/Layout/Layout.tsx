import React, { useState } from 'react';
import { MantineProvider } from '@mantine/theme';
import { ColorSchemeContext, ColorScheme } from './ColorScheme.context';
import LayoutInner from './LayoutInner';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <LayoutInner>{children}</LayoutInner>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
