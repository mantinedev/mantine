import React from 'react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/styles';

export function DarkStory({ children }: React.ComponentProps<'div'>) {
  return (
    <div style={{ height: '100vh', backgroundColor: DEFAULT_THEME.colors.dark[7] }}>
      <MantineProvider theme={{ colorScheme: 'dark' }}>{children}</MantineProvider>
    </div>
  );
}
