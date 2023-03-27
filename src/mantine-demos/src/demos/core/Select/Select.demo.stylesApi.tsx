import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      placeholder="Custom active styles"
      label="Custom active styles"
      defaultValue="Vue"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      styles={(theme) => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {},
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={360}
      mx="auto"
      placeholder="Custom active styles"
      label="Custom active styles"
      defaultValue="Vue"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      withinPortal
      styles={(theme) => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {},
        },
      })}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
