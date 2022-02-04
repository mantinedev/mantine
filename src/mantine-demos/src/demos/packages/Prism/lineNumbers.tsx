import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
<Prism withLineNumbers language="tsx">{code}</Prism>
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode.trim()}
    </Prism>
  );
}

export const lineNumbers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
