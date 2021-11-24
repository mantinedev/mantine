import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider } from '@mantine/core';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  return (
    <MantineProvider
      theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
      withGlobalStyles
      withNormalizeCSS
    >
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
