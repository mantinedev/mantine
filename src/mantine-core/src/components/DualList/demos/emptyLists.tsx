import React from 'react';
import { DualList } from '../DualList';

const code = `
import React from 'react';
import { DualList } from '@mantine/core';

function Demo() {
  return (
    <DualList
      available={[]}
      selected={[]}
      emptyPlaceholder="Custom empty list placeholder..."
      leftEmptyPlaceholder="Custom placeholder overridden."
    />
  );
}
`;

function Demo() {
  return (
    <DualList
      available={[]}
      selected={[]}
      emptyPlaceholder="Custom empty list placeholder..."
      leftEmptyPlaceholder="Custom placeholder overridden."
    />
  );
}

export const emptyLists: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
