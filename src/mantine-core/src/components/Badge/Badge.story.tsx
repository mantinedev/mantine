import React from 'react';
import { Group } from '../Group';
import { Badge } from './Badge';

export default { title: 'Badge' };

export function Variants() {
  return (
    <Group p={40}>
      <Badge variant="light">Light</Badge>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Dot</Badge>
      <Badge variant="gradient">Gradient</Badge>
    </Group>
  );
}
