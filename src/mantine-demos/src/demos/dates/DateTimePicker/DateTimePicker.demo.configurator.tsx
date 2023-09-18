import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateTimePicker } from '@mantine/dates';
import { inputControls } from '../../../shared';

const code = `
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateTimePicker {...props} placeholder="Input placeholder" />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: inputControls,
};
