import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const getRadius = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} {...props} />
    </div>
  ));

function Demo() {
  return <>{getRadius()}</>;
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
