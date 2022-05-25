import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import {
  MantineProvider,
  ColorSchemeProvider,
  Affix,
  ActionIcon,
  createEmotionCache,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import rtlPlugin from 'stylis-plugin-rtl';

export const parameters = { layout: 'fullscreen' };

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

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
        emotionCache={rtl ? rtlCache : undefined}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Affix position={{ right: rtl ? 'unset' : 0, left: rtl ? 0 : 'unset', bottom: 0 }}>
            <ActionIcon
              onClick={toggleRtl}
              variant="default"
              style={{
                borderBottom: 0,
                borderRight: 0,
                borderTopLeftRadius: 4,
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
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
