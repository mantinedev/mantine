import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stepper } from '@mantine/core';

const code = `
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
