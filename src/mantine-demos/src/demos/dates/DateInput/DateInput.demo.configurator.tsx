import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';
import { inputControls } from '../../../shared';

const code = `
import { DateInput } from '@mantine/dates';


function Demo() {
  return (
    <DateInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateInput {...props} placeholder="Input placeholder" />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
