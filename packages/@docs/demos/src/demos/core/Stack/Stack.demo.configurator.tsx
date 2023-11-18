import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stack, StackProps, Button } from '@mantine/core';

function Wrapper(props: StackProps) {
  return (
    <Stack h={300} bg="var(--mantine-color-blue-light)" {...props}>
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}

const code = `
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-blue-light)"
      {{props}}
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'align',
      type: 'select',
      data: [
        { label: 'stretch', value: 'stretch' },
        { label: 'center', value: 'center' },
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
      ],
      initialValue: 'stretch',
      libraryValue: 'stretch',
    },
    {
      prop: 'justify',
      type: 'select',
      data: [
        { label: 'center', value: 'center' },
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'space-between', value: 'space-between' },
        { label: 'space-around', value: 'space-around' },
      ],
      initialValue: 'center',
      libraryValue: 'center',
    },
    { prop: 'gap', type: 'size', initialValue: 'md', libraryValue: 'md' },
  ],
};
