import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} {...props} />
    </div>
  ));

function Demo() {
  return <>{getSizes()}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
