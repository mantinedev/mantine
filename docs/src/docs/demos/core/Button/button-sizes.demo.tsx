import React from 'react';
import { Button, Group } from '@mantine/core';
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
      <Group>{getSizes()}</Group>
    </CodeDemo>
  );
}
