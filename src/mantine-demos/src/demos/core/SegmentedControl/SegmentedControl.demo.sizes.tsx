import React from 'react';
import { MANTINE_SIZES, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => (
    <Box mt={index === 0 ? undefined : 15} key={size}>
      <SegmentedControlWrapper size={size} />
    </Box>
  ));

  return <>{items}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
