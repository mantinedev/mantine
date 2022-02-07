import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
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
        <Stepper.Completed>Completed content here</Stepper.Completed>
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(Math.max(0, active - 1))}>
          Previous
        </Button>

        <Button onClick={() => setActive(Math.min(3, active + 1))}>Next</Button>
      </Group>
    </>
  );
}

function DynamicChildren() {
  const [active, setActive] = useState(1);
  const [count, setCount] = useState(3);

  const items = Array(count)
    .fill(0)
    .map((_, index) => <Stepper.Step label={`Step ${index + 1}`} key={index} />);

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        {items}
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(Math.max(0, active - 1))}>
          Previous
        </Button>

        <Button onClick={() => setActive(Math.min(count, active + 1))}>Next</Button>
        <Button
          variant="outline"
          color="red"
          onClick={() => setCount((c) => (c - 1 > 0 ? c - 1 : 0))}
        >
          Remove step
        </Button>

        <Button variant="outline" onClick={() => setCount((c) => c + 1)}>
          Add step
        </Button>
      </Group>
    </>
  );
}

const sizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} />
));

const verticalSizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} orientation="vertical" />
));

storiesOf('@mantine/core/Stepper/stories', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Wrapper color="teal" />
    </div>
  ))
  .add('Vertical orientation', () => (
    <div style={{ padding: 40 }}>
      <Wrapper orientation="vertical" />
      <Wrapper orientation="vertical" iconPosition="right" mt="xl" />
    </div>
  ))
  .add('Icon position right', () => (
    <div style={{ padding: 40 }}>
      <Wrapper iconPosition="right" />
    </div>
  ))
  .add('Loading state', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={0}>
        <Stepper.Step label="First" />
        <Stepper.Step label="Second" loading />
        <Stepper.Step label="Third" />
      </Stepper>
    </div>
  ))
  .add('Icons only', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={1}>
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>

      <Stepper active={1} mt={60} orientation="vertical">
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>
    </div>
  ))
  .add('Responsive', () => (
    <div style={{ padding: 40 }}>
      <Wrapper breakpoint="sm" />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Vertical sizes', () => (
    <div style={{ padding: 40 }}>
      {verticalSizes}
      <Wrapper mt={60} orientation="vertical" iconSize={80} />
    </div>
  ))
  .add('Dynamic children', () => (
    <div style={{ padding: 40 }}>
      <DynamicChildren />
    </div>
  ));
