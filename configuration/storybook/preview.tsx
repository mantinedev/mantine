import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{
          colorScheme: useDarkMode() ? 'dark' : 'light',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
        emotionOptions={
          process.env.RTL ? { key: 'mantine', stylisPlugins: [rtlPlugin as any] } : undefined
        }
        withGlobalStyles
        withNormalizeCSS
      >
        <div dir={process.env.RTL ? 'rtl' : 'ltr'}>{props.children}</div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
