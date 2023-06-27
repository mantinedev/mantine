import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pagination } from '@mantine/core';

const code = `
import { Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
            border: 0,
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
            border: 0,
          },
        },
      })}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
