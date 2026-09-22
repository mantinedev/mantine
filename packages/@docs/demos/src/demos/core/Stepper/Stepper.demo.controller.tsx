import { Button, Group, Stepper, useStepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { Stepper, Button, Group, useStepper } from '@mantine/core';

function Demo() {
  const controller = useStepper();

  return (
    <>
      <Stepper controller={controller}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={controller.previous} disabled={controller.isFirst()}>
          Back
        </Button>
        <Button onClick={controller.next}>
          {controller.isLast() ? 'Submit' : 'Next step'}
        </Button>
        <Button variant="default" onClick={controller.complete}>
          Skip to the end
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const controller = useStepper();

  return (
    <>
      <Stepper controller={controller}>
        <Stepper.Step label="First step" description="Create an account">
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <Content>Step 3 content: Get full access</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={controller.previous} disabled={controller.isFirst()}>
          Back
        </Button>
        <Button onClick={controller.next}>{controller.isLast() ? 'Submit' : 'Next step'}</Button>
        <Button variant="default" onClick={controller.complete}>
          Skip to the end
        </Button>
      </Group>
    </>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
