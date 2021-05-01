import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].reverse().map((size) => (
    <Button key={size} size={size} {...props}>
      {size} size
    </Button>
  ));

export function ButtonSizesDemo() {
  return (
    <CodeDemo>
      <ElementsGroup>{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
