import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Check, Eye } from 'tabler-icons-react';
import { Stepper, StepperProps } from './Stepper';

function Wrapper(props: Partial<StepperProps>) {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} {...props}>
      <Stepper.Step>First</Stepper.Step>
      <Stepper.Step>Second</Stepper.Step>
      <Stepper.Step>Last</Stepper.Step>
    </Stepper>
  );
}

storiesOf('@mantine/core/Stepper', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Wrapper completedIcon={<Check />} progressIcon={<Eye />} />
  </div>
));
