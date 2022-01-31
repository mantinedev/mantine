import React from 'react';
import { Code } from '@mantine/core';

const code = `
const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

<Code block>{codeForPreviousDemo}</Code>
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
