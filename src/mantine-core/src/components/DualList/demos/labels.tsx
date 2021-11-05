import React from 'react';
import { DualList } from '../DualList';

const code = `
import React from 'react';
import { DualList } from '@mantine/core';

function Demo() {
  return <DualList available={['Mantine']} selected={[]} leftLabel="Good" rightLabel="Bad" />;
}
`;

function Demo() {
  return <DualList available={['Mantine']} selected={[]} leftLabel="Good" rightLabel="Bad" />;
}

export const labels: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
