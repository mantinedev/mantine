import React from 'react';
import { Switch } from '../Switch';

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

function Demo() {
  return <>{getRadius()}</>;
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
