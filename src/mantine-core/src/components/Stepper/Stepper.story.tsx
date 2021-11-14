import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stepper, StepperProps } from './Stepper';

function Wrapper(props: Partial<StepperProps>) {
  const [active, setActive] = useState(1);

  return (
    <>
      <Stepper active={active} onStepClick={setActive} {...props}>
        <Stepper.Step>First</Stepper.Step>
        <Stepper.Step>Second</Stepper.Step>
        <Stepper.Step>Last</Stepper.Step>
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(active - 1)}>
          Previous
        </Button>

        <Button onClick={() => setActive(active + 1)}>Next</Button>
      </Group>
    </>
  );
}

storiesOf('@mantine/core/Stepper', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Wrapper />
  </div>
));
