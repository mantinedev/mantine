import React, { useEffect } from 'react';
import addons from '@storybook/addons';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import {
  MantineProvider,
  useMantineColorScheme,
  ActionIcon,
  DirectionProvider,
  useDirection,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../docs/theme';

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
      <Notifications />
      {children}
    </>
  );
}

export const decorators = [
  (renderStory: any) => <DirectionWrapper>{renderStory()}</DirectionWrapper>,
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];
