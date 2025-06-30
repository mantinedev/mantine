/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import {
  ActionIcon,
  DirectionProvider,
  MantineProvider,
  useDirection,
  useMantineColorScheme,
} from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { theme } from '../apps/mantine.dev/theme';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    storySort: (a, b) => {
      return a.title.localeCompare(b.title, undefined, { numeric: true });
    },
  },
};

const channel = addons.getChannel();

// Removes incorrect key error from SliderMarks component visible only in Storybook
const originalError = console.error;
console.error = (...args: any[]) => {
  if (args.join('').includes('It was passed a child from @mantine/core/SliderMarks')) {
    return;
  }

  originalError.call(console, ...args);
};

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <DirectionProvider>{children}</DirectionProvider>;
}

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
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
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
  (renderStory: any) => (
    <MantineProvider theme={theme}>
      <Notifications zIndex={10000} />
      <MantineEmotionProvider>{renderStory()}</MantineEmotionProvider>
    </MantineProvider>
  ),
];
