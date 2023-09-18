import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`;

function Wrapper(props: any) {
  return <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null }],
};
