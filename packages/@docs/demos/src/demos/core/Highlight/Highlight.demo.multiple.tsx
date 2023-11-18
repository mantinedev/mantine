import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
