import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';
import { inputControls } from '../../../shared';

const code = `
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <NumberInput {...props} placeholder="Input placeholder" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
