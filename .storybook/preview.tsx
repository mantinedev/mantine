import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import {
  ActionIcon,
  DirectionProvider,
  MantineProvider,
  useDirection,
  useMantineColorScheme,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { ShikiProvider } from '@mantinex/shiki';
import { theme } from '../apps/mantine.dev/theme';

export const parameters = { layout: 'fullscreen' };

const channel = addons.getChannel();

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
  const { getHighlighter } = await import('shiki');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

export const decorators = [
  (renderStory: any) => <DirectionWrapper>{renderStory()}</DirectionWrapper>,
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <ShikiProvider loadShiki={loadShiki}>{renderStory()}</ShikiProvider>,
  (renderStory: any) => (
    <ModalsProvider
      labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
      modalProps={{ trapFocus: false }}
    >
      {renderStory()}
    </ModalsProvider>
  ),
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];
