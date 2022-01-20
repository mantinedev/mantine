import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
// Change the orientation
<SegmentedControl vertical />
// Set fullWidth to make it 100% of container width
<SegmentedControl vertical fullWidth />
`;

function Demo() {
  return (
    <>
      <SegmentedControlWrapper vertical />
      <SegmentedControlWrapper fullWidth vertical style={{ marginTop: 15 }} />
    </>
  );
}

export const vertical: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
