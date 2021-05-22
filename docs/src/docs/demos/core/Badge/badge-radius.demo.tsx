import React from 'react';
import { Badge, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((radius) => (
    <Badge key={radius} radius={radius} {...props}>
      {radius} radius
    </Badge>
  ));

export function BadgeRadiusDemo() {
  return (
    <CodeDemo>
      <Group>{getSizes()}</Group>
    </CodeDemo>
  );
}
