import React from 'react';
import { Prism } from '@mantine/prism';
import { MantineDemo } from '@mantine/ds';

export const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@mantine/prism';

const demoCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
