import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { PillsInput, Pill } from '@mantine/core';
import { inputControls } from '../../../shared';

const code = `
import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
      label="PillsInput"
      {{props}}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;

function Wrapper(props: any) {
  return (
    <PillsInput label="PillsInput" {...props}>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputControls,
};
