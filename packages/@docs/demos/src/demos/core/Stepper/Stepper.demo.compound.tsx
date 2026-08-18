import { useState } from 'react';
import { Button, Group, Stepper, Text, useStepperContext } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Stepper, Button, Group, Text, useStepperContext } from '@mantine/core';

function StepCount() {
  const { active, stepsCount } = useStepperContext();
  return <Text>Step {Math.min(active + 1, stepsCount)} of {stepsCount}</Text>;
}

function Demo() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper.Root active={active} onStepClick={setActive}>
        <StepCount />
        <Stepper.Steps>
          <Stepper.Step label="First step" description="Create an account" />
          <Stepper.Step label="Second step" description="Verify email" />
          <Stepper.Step label="Final step" description="Get full access" />
        </Stepper.Steps>

        <Stepper.Content step={0}>
          Step 1 content: Create an account
        </Stepper.Content>
        <Stepper.Content step={1}>
          Step 2 content: Verify email
        </Stepper.Content>
        <Stepper.Content step={2}>
          Step 3 content: Get full access
        </Stepper.Content>
        <Stepper.Completed step={3}>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper.Root>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`;

function StepCount() {
  const { active, stepsCount } = useStepperContext();
  return (
    <Text>
      Step {Math.min(active + 1, stepsCount)} of {stepsCount}
    </Text>
  );
}

function Demo() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper.Root active={active} onStepClick={setActive}>
        <StepCount />
        <Stepper.Steps>
          <Stepper.Step label="First step" description="Create an account" />
          <Stepper.Step label="Second step" description="Verify email" />
          <Stepper.Step label="Final step" description="Get full access" />
        </Stepper.Steps>

        <Stepper.Content step={0}>Step 1 content: Create an account</Stepper.Content>
        <Stepper.Content step={1}>Step 2 content: Verify email</Stepper.Content>
        <Stepper.Content step={2}>Step 3 content: Get full access</Stepper.Content>
        <Stepper.Completed step={3}>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper.Root>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
