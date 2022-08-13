import React from 'react';
import { MANTINE_COLORS } from '@mantine/styles';
import { IconExternalLink } from '@tabler/icons';
import { Button } from './Button';
import { Group } from '../Group';

export default { title: 'Button' };

export function Colors() {
  const items = MANTINE_COLORS.map((color) => (
    <Group mt="xl" key={color}>
      <Button color={color}>Filled</Button>
      <Button color={color} variant="default">
        Default
      </Button>
      <Button color={color} variant="white">
        White
      </Button>
      <Button color={color} variant="light">
        Light
      </Button>
      <Button color={color} variant="outline">
        Outline
      </Button>
      <Button color={color} variant="gradient">
        Gradient
      </Button>
    </Group>
  ));

  return <div style={{ padding: 40, backgroundColor: 'rgba(0,0,0,0.1)' }}>{items}</div>;
}

export function Disabled() {
  return (
    <Group p={40}>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </Group>
  );
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Button component="a" href="https://mantine.dev">
        Anchor
      </Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <Group style={{ padding: 40 }}>
      <Button rightIcon={<IconExternalLink size={16} />}>Right icon</Button>
      <Button leftIcon={<IconExternalLink size={16} />}>LeftIcon</Button>
      <Button leftIcon={<IconExternalLink size={16} />} rightIcon={<IconExternalLink size={16} />}>
        Both icons
      </Button>
    </Group>
  );
}

export function Groups() {
  return (
    <div style={{ padding: 40 }}>
      <Button.Group>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
        <Button variant="default">Forth</Button>
        <Button variant="default">Last</Button>
      </Button.Group>
      <Button.Group mt="xl" orientation="vertical">
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
        <Button variant="default">Forth</Button>
        <Button variant="default">Last</Button>
      </Button.Group>
    </div>
  );
}

export function ColorsIndex() {
  return (
    <Group m={50}>
      <Button color="green.6">Filled</Button>
      <Button color="green.6" variant="default">
        Default
      </Button>
      <Button color="green.6" variant="white">
        White
      </Button>
      <Button color="green.6" variant="light">
        Light
      </Button>
      <Button color="green.6" variant="outline">
        Outline
      </Button>
      <Button color="green.6" variant="gradient">
        Gradient
      </Button>
    </Group>
  );
}
