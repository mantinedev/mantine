/* eslint-disable no-console */
import React from 'react';
import type { Preview } from '@storybook/nextjs';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { ActionIcon, MantineProvider, useDirection } from '@mantine/core';
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

// Removes incorrect key error from SliderMarks component visible only in Storybook
const originalError = console.error;
console.error = (...args: any[]) => {
  if (args.join('').includes('It was passed a child from @mantine/core/SliderMarks')) {
    return;
  }

  originalError.call(console, ...args);
};

function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { dir, toggleDirection } = useDirection();
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
        {dir === 'ltr' ? <IconTextDirectionLtr /> : <IconTextDirectionRtl />}
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

export const decorators = [
  (renderStory: any) => <DirectionWrapper>{renderStory()}</DirectionWrapper>,
  (renderStory: any) => (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>
      {renderStory()}
    </CodeHighlightAdapterProvider>
  ),
  (renderStory: any) => (
    <ModalsProvider
      labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
      modalProps={{ trapFocus: false }}
    >
      {renderStory()}
    </ModalsProvider>
  ),
  (renderStory: any, context: any) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <Notifications zIndex={10000} />
        <MantineEmotionProvider>{renderStory()}</MantineEmotionProvider>
      </MantineProvider>
    );
  },
];
