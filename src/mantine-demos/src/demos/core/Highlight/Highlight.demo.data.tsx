import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}

export const data: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
