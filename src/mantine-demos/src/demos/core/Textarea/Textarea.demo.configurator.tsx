import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Textarea } from '@mantine/core';
import { inputControls } from '../../../shared';

const code = `
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <Textarea {...props} placeholder="Input placeholder" />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
