import React from 'react';
import { Prism } from '../Prism';

const demoCode = `
import React from 'react';
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

const code = `
const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

<Prism
  language="tsx"
  withLineNumbers
  highlightLines={{
    4: deleted,
    5: deleted,
    6: deleted,
    8: added,
    9: added,
    10: added,
  }}
>
  {code}
</Prism>
`;

function Demo() {
  const deleted = { color: 'red', label: '-' };
  const added = { color: 'green', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        4: deleted,
        5: deleted,
        6: deleted,
        8: added,
        9: added,
        10: added,
      }}
    >
      {demoCode.trim()}
    </Prism>
  );
}

export const linesHighlight: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
