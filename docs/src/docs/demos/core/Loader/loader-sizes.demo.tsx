import React from 'react';
import { Loader, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl']
    .reverse()
    .map((size) => <Loader key={size} size={size} data-mantine-composable {...props} />);

export function LoaderSizesDemo() {
  return (
    <CodeDemo>
      <ElementsGroup>{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
