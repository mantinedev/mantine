import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} onStepClick={setActive} labelPosition="bottom">
      <Stepper.Step label="Account" />
      <Stepper.Step label="Verification" />
      <Stepper.Step label="Access" />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} onStepClick={setActive} labelPosition="bottom">
      <Stepper.Step label="Account" />
      <Stepper.Step label="Verification" />
      <Stepper.Step label="Access" />
    </Stepper>
  );
}

export const labelPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 500,
  centered: true,
};
