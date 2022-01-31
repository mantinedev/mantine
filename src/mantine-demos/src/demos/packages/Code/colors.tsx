import React from 'react';
import { Code, Group } from '@mantine/core';

const code = `
<Code color="red">React.createElement()</Code>
<Code color="teal">React.createElement()</Code>
<Code color="blue">React.createElement()</Code>
`;

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
