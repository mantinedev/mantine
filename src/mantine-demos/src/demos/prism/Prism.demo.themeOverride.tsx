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
  return <Prism colorScheme="dark" language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
