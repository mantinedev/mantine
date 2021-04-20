import React from 'react';
import { Progress } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Progress
      key={size}
      size={size}
      value={50}
      style={{ marginTop: index === 0 ? 0 : 15 }}
      radius="xl"
      {...props}
    />
  ));

export function ProgressSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
