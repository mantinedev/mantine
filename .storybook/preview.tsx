import React, { useEffect } from 'react';
import { TextAlignLeftIcon, TextAlignRightIcon } from '@phosphor-icons/react';
import type { Decorator, Preview } from '@storybook/nextjs';
import { useGlobals } from 'storybook/preview-api';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { ActionIcon, DirectionProvider, MantineProvider, useDirection } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { theme } from '../apps/mantine.dev/theme';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    // Storybook fails to compile if `(a: any, b: any)` is added to storySort function
    // @ts-expect-error
    storySort: (a, b) => {
      return a.title.localeCompare(b.title, undefined, { numeric: true });
    },
  },
};

function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { dir, toggleDirection } = useDirection();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isToggleDirection = event.altKey && event.shiftKey && event.code === 'KeyR';

      if (!isToggleDirection) {
        return;
      }

      event.preventDefault();
      toggleDirection();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleDirection]);

  return (
    <>
      <ActionIcon
        size="xl"
        radius="md"
        variant="default"
        pos="fixed"
        bottom={20}
        right={20}
        onClick={toggleDirection}
        style={{ zIndex: 1000 }}
        aria-label="Toggle text direction"
      >
        {dir === 'ltr' ? <TextAlignLeftIcon /> : <TextAlignRightIcon />}
      </ActionIcon>
      {children}
    </>
  );
}

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export const decorators: Decorator[] = [
  (renderStory) => (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>
      {renderStory()}
    </CodeHighlightAdapterProvider>
  ),
  (renderStory) => (
    <ModalsProvider
      labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
      modalProps={{ trapFocus: false }}
    >
      {renderStory()}
    </ModalsProvider>
  ),
  (renderStory, context) => {
    const [{ theme: globalTheme }, updateGlobals] = useGlobals();

    useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        const isMod = event.metaKey || event.ctrlKey;
        const isJ = event.code === 'KeyJ';

        if (!isMod || !isJ) {
          return;
        }

        event.preventDefault();
        updateGlobals({ theme: globalTheme === 'dark' ? 'light' : 'dark' });
      };

      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [globalTheme, updateGlobals]);

    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider theme={theme} forceColorScheme={scheme}>
          <Notifications zIndex={10000} />
          <MantineEmotionProvider>
            <DirectionWrapper>{renderStory()}</DirectionWrapper>
          </MantineEmotionProvider>
        </MantineProvider>
      </DirectionProvider>
    );
  },
];
