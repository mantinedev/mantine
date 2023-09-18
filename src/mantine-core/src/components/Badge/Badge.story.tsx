import React from 'react';
import { Group } from '../Group';
import { Badge } from './Badge';

export default { title: 'Badge' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Badge>Badge</Badge>
    </div>
  );
}

export function Variants() {
  return (
    <Group p={40}>
      <Badge variant="light" rightSection="R" leftSection="L">
        Light
      </Badge>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Dot</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="gradient" gradient={{ deg: 30, from: 'red', to: 'orange' }}>
        Custom gradient
      </Badge>
      <Badge variant="gradient" gradient={{ deg: 115, from: '#FC00CF', to: '#CCFFEF' }}>
        hex gradient
      </Badge>
    </Group>
  );
}

export function WithinGroup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Badge>Single badge within group</Badge>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Badge unstyled leftSection="$$">
        Unstyled badge
      </Badge>
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Badge component="a" href="https://mantine.dev/">
        Anchor
      </Badge>

      <Badge component="button" type="button">
        Button
      </Badge>
    </div>
  );
}

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <Badge color="violet.2" variant="dot">
        Anchor
      </Badge>
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <Badge size={size} key={size}>
      Badge {size}
    </Badge>
  ));

  return <div style={{ padding: 40, display: 'flex', gap: 40 }}>{sizes}</div>;
}
