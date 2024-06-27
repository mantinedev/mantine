import { Button, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { FLOATING_POSITION_DATA } from '../../../shared';

const code = (props: any) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${props.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Tooltip
      position={props.position}
      opened
      label="Tooltip"
      offset={{ mainAxis: props.mainAxis, crossAxis: props.crossAxis }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
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
      initialValue: 'top',
      data: FLOATING_POSITION_DATA,
      libraryValue: null,
    },
    { type: 'number', prop: 'mainAxis', initialValue: 5, libraryValue: null, min: -50, max: 50 },
    { type: 'number', prop: 'crossAxis', initialValue: 0, libraryValue: null, min: -50, max: 50 },
  ],
};
