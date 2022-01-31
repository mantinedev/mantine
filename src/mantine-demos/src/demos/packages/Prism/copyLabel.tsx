import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
<Prism noCopy language="tsx">{code}</Prism>

<Prism
  language="tsx"
  copyLabel="Copy code to clipboard"
  copiedLabel="Code copied to clipboard"
>
  {code}
</Prism>
`;

function Demo() {
  return (
    <>
      <Prism language="tsx" noCopy>
        {demoCode.trim()}
      </Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
        style={{ marginTop: 20 }}
      >
        {demoCode.trim()}
      </Prism>
    </>
  );
}

export const copyLabel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
