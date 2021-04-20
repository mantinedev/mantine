import React from 'react';
import { Switch } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Switch
      key={size}
      size={size}
      value={50}
      style={{ marginTop: index === 0 ? 0 : 15 }}
      label={`${size} switch`}
      {...props}
    />
  ));

const getRadius = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Switch
      key={size}
      radius={size}
      value={50}
      style={{ marginTop: index === 0 ? 0 : 15 }}
      label={`${size} radius switch`}
      {...props}
    />
  ));

export function SwitchSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
export function SwitchRadiusDemo() {
  return <CodeDemo>{getRadius()}</CodeDemo>;
}
