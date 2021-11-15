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
        <Stepper.Step label="First" description="First description">
          First step content here
        </Stepper.Step>
        <Stepper.Step label="Second" description="Second description">
          Second step content here
        </Stepper.Step>
        <Stepper.Step label="Last" description="Last description">
          Last step content here
        </Stepper.Step>
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
    <Wrapper color="teal" />
  </div>
));
