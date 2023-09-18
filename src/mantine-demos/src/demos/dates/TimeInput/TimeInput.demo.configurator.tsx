import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TimeInput } from '@mantine/dates';
import { inputControls } from '../../../shared';

const code = `
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <TimeInput {...props} placeholder="Input placeholder" />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
