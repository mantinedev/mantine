import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Button } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" opened {...props}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}

export const offset: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'select',
      prop: 'position',
      initialValue: 'top',
      data: FLOATING_POSITION_DATA,
      libraryValue: null,
    },
    { type: 'number', prop: 'offset', initialValue: 5, libraryValue: null, min: -50, max: 50 },
  ],
};
