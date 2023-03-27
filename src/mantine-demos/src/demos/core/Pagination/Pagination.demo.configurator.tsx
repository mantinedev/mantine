import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pagination, Group } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <Group position="center">
      <Pagination total={10} {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}${props} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'withControls', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withEdges', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
