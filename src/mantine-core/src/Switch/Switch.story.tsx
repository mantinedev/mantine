import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { IconBadge } from '@tabler/icons';
import { Group } from '../Group';
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
      <Group m={4}>
        <Switch size="lg" onLabel={<span>1</span>} offLabel="0" />
        <Switch size="md" onLabel={<span>1</span>} offLabel="0" />
        <Switch size="sm" onLabel={<span>1</span>} offLabel="0" />
        <Switch size="xs" onLabel={<span>1</span>} offLabel="0" />
      </Group>
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
