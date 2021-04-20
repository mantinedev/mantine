import React from 'react';
import { Checkbox } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Checkbox
      size={size}
      defaultChecked
      style={{ marginTop: index === 0 ? 0 : 15 }}
      label={`${size} checkbox`}
      {...props}
    />
  ));

export function CheckboxSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
