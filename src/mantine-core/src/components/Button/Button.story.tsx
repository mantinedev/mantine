import React from 'react';
import { MANTINE_COLORS } from '@mantine/styles';
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

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Button component="a" href="https://mantine.dev">
        Anchor
      </Button>
    </div>
  );
}
