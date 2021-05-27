import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
// By default component is inline
<SegmentedControl />

// Set fullWidth to make it block and take 100% of width
<SegmentedControl fullWidth />
`;

function Demo() {
  return (
    <>
      <SegmentedControlWrapper />
      <SegmentedControlWrapper fullWidth style={{ marginTop: 15 }} />
    </>
  );
}

export const fullWidth: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
