import React from 'react';
import { Prism } from '../Prism';

const demoCode = `
import React from 'react';
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
<Prism themeOverride={{ colorScheme: 'dark' }} language="tsx">{code}</Prism>
`;

function Demo() {
  return (
    <Prism language="tsx" themeOverride={{ colorScheme: 'dark' }}>
      {demoCode.trim()}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
