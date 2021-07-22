import React from 'react';
import { Switch } from '../Switch';

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

function Demo() {
  return <>{getSizes()}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
