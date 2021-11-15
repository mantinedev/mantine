import React, { useState } from 'react';
import { Stepper } from '../Stepper';
import { Skeleton } from '../../Skeleton';
import { Text } from '../../Text';

const code = `
`;

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Fist step" description="Create an account">
        <Text>Step 1 content</Text>
        <Skeleton height={80} />
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Verify email">
        <Text>Step 2 content</Text>
        <Skeleton height={80} />
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Get full access">
        <Text>Step 2 content</Text>
        <Skeleton height={80} />
      </Stepper.Step>
    </Stepper>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
