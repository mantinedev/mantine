import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stepper, StepperProps } from '@mantine/core';

function Wrapper(props: Partial<StepperProps>) {
  return (
    <Stepper {...props} breakpoint="sm" active={1}>
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

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'size', type: 'size', initialValue: 'md' },
  ],
};
