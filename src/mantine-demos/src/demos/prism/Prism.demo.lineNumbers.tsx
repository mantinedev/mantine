import React from 'react';
import { Prism } from '@mantine/prism';
import { MantineDemo } from '@mantine/ds';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@mantine/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
