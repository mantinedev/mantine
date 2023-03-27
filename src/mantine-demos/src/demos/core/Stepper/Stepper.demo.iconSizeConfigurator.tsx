import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stepper, StepperProps } from '@mantine/core';

function Wrapper(props: Partial<StepperProps>) {
  return (
    <Stepper {...props} active={1} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}

const codeTemplate = (props: string) => `
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper${props} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`;

export const iconSizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'iconSize',
      type: 'number',
      initialValue: 42,
      defaultValue: 0,
      min: 32,
      max: 62,
      step: 5,
    },
  ],
};
