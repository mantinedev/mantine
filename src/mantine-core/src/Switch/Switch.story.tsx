import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { IconBadge } from '@tabler/icons';
import { Switch } from './Switch';

export default { title: 'Switch' };

export function CursorPointer() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Switch label="Hello" value="1" />
    </MantineProvider>
  );
}

export function WithLabels() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Switch
        label="Hello"
        trackWidth={52}
        onLabel={<span>On</span>}
        offLabel="Off Label"
        value="1"
      />
    </MantineProvider>
  );
}

export function IconInsideThumb() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Switch size="lg" thumbIcon={<IconBadge color="black" size={12} />} label="Hello" />
    </MantineProvider>
  );
}
