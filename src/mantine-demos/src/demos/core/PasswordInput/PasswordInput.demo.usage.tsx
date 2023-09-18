import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PasswordInput } from '@mantine/core';
import { inputControls } from '../../../shared';

const code = `
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <PasswordInput {...props} placeholder="Input placeholder" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
