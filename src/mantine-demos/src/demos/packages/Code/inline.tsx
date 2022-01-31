import React from 'react';
import { Code } from '@mantine/core';

const code = `
<Code>React.createElement()</Code>
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
