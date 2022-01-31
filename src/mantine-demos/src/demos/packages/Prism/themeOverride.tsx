import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
<Prism colorScheme="dark" language="tsx">{code}</Prism>
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode.trim()}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
