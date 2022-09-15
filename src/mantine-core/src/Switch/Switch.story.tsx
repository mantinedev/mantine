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
    <Group m={4}>
      <Switch size="lg" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="md" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="sm" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="xs" onLabel={<span>1</span>} offLabel="0" />
    </Group>
  );
}

export function IconInsideThumb() {
  return <Switch size="lg" thumbIcon={<IconBadge color="black" size={12} />} label="Hello" />;
}

export function SwitchGroup() {
  return (
    <>
      <Switch.Group defaultValue={['one', 'three']} m={4} label="Switch Group">
        <Switch value="one" size="md" />
        <Switch value="two" size="md" />
        <Switch value="three" size="md" />
        <Switch value="four" size="md" />
      </Switch.Group>
    </>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Switch.Group label="With required asterisk" withAsterisk>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Just required" required>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required asterisk off" required withAsterisk={false}>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required false asterisk on" required={false} withAsterisk>
        <Switch value="1" />
      </Switch.Group>
    </div>
  );
}
