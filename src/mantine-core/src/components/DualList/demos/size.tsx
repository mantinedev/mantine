import React from 'react';
import { DualList } from '../DualList';

const code = `
import React from 'react';
import { DualList } from '../DualList';

function Demo() {
  return (
    <>
      <DualList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="xs" />
      <DualList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="md" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <DualList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="xs" />
      <DualList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="md" />
    </>
  );
}

export const size: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
