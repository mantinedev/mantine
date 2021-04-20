import React from 'react';
import { Badge, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].reverse().map((size) => (
    <Badge size={size} {...props}>
      {size} size
    </Badge>
  ));

export function BadgeSizesDemo() {
  return (
    <CodeDemo>
      <ElementsGroup>{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
