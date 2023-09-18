import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Code } from '@mantine/core';

const code = `
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
