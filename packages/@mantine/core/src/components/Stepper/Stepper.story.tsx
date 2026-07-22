import { useState } from 'react';
import { Box, NumberInput, ScrollArea, Stack, Text } from '../..';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stepper } from './Stepper';

export default { title: 'Stepper' };

export function Usage() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div style={{ padding: 40 }}>
      <Stepper active={active} onStepClick={setActive} color="lime.3" autoContrast>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}

export function WithActivityStatePreservation() {
  const [active, setActive] = useState(0);
  const [value1, setValue1] = useState(42);
  const [value2, setValue2] = useState(100);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stack p={40} maw={600}>
      <Text size="sm" c="dimmed">
        <strong>keepMounted + Activity</strong>: values in each step are preserved when navigating
        between steps. Without keepMounted, the inputs would reset when you leave a step.
      </Text>

      <Stepper active={active} onStepClick={setActive} keepMounted>
        <Stepper.Step label="First step" description="Enter a value">
          <Stack gap="xs" p="md" style={{ background: '#f0f4ff', borderRadius: 8 }}>
            <NumberInput
              label="Step 1 value (survives navigation)"
              value={value1}
              onChange={(v) => setValue1(typeof v === 'number' ? v : 0)}
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Enter another value">
          <Stack gap="xs" p="md" style={{ background: '#f0fff0', borderRadius: 8 }}>
            <NumberInput
              label="Step 2 value (survives navigation)"
              value={value2}
              onChange={(v) => setValue2(typeof v === 'number' ? v : 0)}
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Review">
          <Text p="md">
            Step 1 value: <strong>{value1}</strong> | Step 2 value: <strong>{value2}</strong>
          </Text>
        </Stepper.Step>
        <Stepper.Completed>All done! Values were preserved throughout.</Stepper.Completed>
      </Stepper>

      <Group justify="center">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Stack>
  );
}

export function Unstyled() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} unstyled>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export function Vertical() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} orientation="vertical">
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export function RightIconPosition() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} orientation="vertical" iconPosition="right">
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>

      <Stepper
        active={active}
        onStepClick={setActive}
        orientation="horizontal"
        iconPosition="right"
        mt="xl"
      >
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export function CompoundComponents() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div style={{ padding: 40 }}>
      <Stepper.Root active={active} onStepClick={setActive}>
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
    </div>
  );
}

export function CompoundStickySteps() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const content = (step: number) =>
    Array(20)
      .fill(0)
      .map((_, index) => (
        <Text key={index} my="md">
          Step {step + 1} scrollable content, paragraph {index + 1}
        </Text>
      ));

  return (
    <Box p={40}>
      <Stepper.Root active={active} onStepClick={setActive}>
        <Box pos="sticky" top={0} pb="md">
          <Stepper.Steps>
            <Stepper.Step label="First step" description="Create an account" />
            <Stepper.Step label="Second step" description="Verify email" />
            <Stepper.Step label="Final step" description="Get full access" />
          </Stepper.Steps>
        </Box>

        <ScrollArea h={100}>
          <Stepper.Content step={0}>{content(0)}</Stepper.Content>
          <Stepper.Content step={1}>{content(1)}</Stepper.Content>
          <Stepper.Content step={2}>{content(2)}</Stepper.Content>
          <Stepper.Completed step={3}>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </ScrollArea>
      </Stepper.Root>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Box>
  );
}
