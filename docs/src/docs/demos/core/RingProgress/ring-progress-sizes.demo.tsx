import React from 'react';
import { RingProgress } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <RingProgress
      key={size}
      size={size}
      sections={[{ color: 'red', value: 40 }]}
      style={{ marginTop: 10 }}
      {...props}
    />
  ));

export function RingProgressSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
