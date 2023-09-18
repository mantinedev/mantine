import React from 'react';
import { Tooltip, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" {...props}>
      <Button variant="outline">With tooltip</Button>
    </Tooltip>
  );
}

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button variant="outline">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'color',
      type: 'color',
      initialValue: 'blue',
      libraryValue: '__none__',
    },
  ],
};
