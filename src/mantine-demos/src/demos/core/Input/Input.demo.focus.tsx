import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
