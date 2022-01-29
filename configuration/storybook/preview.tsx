import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider, Affix, ActionIcon } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  const [rtl, setRtl] = useState(false);
  const toggleRtl = () => setRtl((r) => !r);
  useHotkeys([['mod + L', toggleRtl]]);

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{
          dir: rtl ? 'rtl' : 'ltr',
          colorScheme: useDarkMode() ? 'dark' : 'light',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
        emotionOptions={
          rtl ? { key: 'mantine-rtl', stylisPlugins: [rtlPlugin as any] } : { key: 'mantine' }
        }
        withGlobalStyles
        withNormalizeCSS
      >
        <Affix position={{ right: rtl ? 'unset' : 0, left: rtl ? 0 : 'unset', top: 0 }}>
          <ActionIcon
            onClick={toggleRtl}
            variant="default"
            style={{
              borderTop: 0,
              borderRight: 0,
              borderBottomLeftRadius: 4,
              width: 60,
              fontWeight: 700,
            }}
            radius={0}
            size={30}
          >
            {rtl ? 'RTL' : 'LTR'}
          </ActionIcon>
        </Affix>
        <div dir={rtl ? 'rtl' : 'ltr'}>{props.children}</div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
