import React from 'react';
import { Badge, ElementsGroup } from '@mantine/core';
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
      <ElementsGroup>{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
