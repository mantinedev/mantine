import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <Button radius={size} size="lg" {...props}>
      {size} radius
    </Button>
  ));

export function ButtonRadiusDemo() {
  return (
    <CodeDemo>
      <ElementsGroup>{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
