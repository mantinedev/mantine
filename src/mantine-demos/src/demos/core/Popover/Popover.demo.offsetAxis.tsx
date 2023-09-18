import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Popover, Button, Text } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared';

const code = (props: any) => `
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${props.position}"
      opened
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Popover
      width={200}
      position={props.position}
      opened
      offset={{ mainAxis: props.mainAxis, crossAxis: props.crossAxis }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const offsetAxis: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'select',
      prop: 'position',
      initialValue: 'bottom',
      data: FLOATING_POSITION_DATA,
      libraryValue: null,
    },
    { type: 'number', prop: 'mainAxis', initialValue: 0, libraryValue: null, min: -50, max: 50 },
    { type: 'number', prop: 'crossAxis', initialValue: 0, libraryValue: null, min: -50, max: 50 },
  ],
};
