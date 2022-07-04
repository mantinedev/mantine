import React from 'react';
import { MANTINE_SIZES } from '@mantine/core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} />
    </div>
  ));

  return <>{items}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
