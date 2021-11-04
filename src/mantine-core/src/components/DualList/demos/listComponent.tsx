import React from 'react';
import { DualList } from '../DualList';

const code = `
import React from 'react';
import { DualList } from '../DualList';

function Demo() {
  return (
    <DualList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      listComponent="ul"
    />
  );
}
`;

function Demo() {
  return (
    <DualList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      listComponent="ul"
    />
  );
}

export const listComponent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
