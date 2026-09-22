import { Button, Group, Stepper, Tooltip, useStepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { Button, Group, Stepper, Tooltip, useStepper } from '@mantine/core';

// Stepper cannot see through your component, so the step index must reach
// Stepper.Step: either forward the props the wrapper receives, as here,
// or declare step={1} on Stepper.Step directly
function LockedStep({ step }: { step?: number; children?: React.ReactNode }) {
  return (
    <Tooltip label="You need an invite to complete this step">
      <Stepper.Step step={step} label="Invite" description="Locked" allowStepSelect={false} />
    </Tooltip>
  );
}

function Demo() {
  const stepper = useStepper();

  return (
    <>
      <Stepper controller={stepper}>
        <Stepper.Step label="Account" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>

        {/* Content is read from LockedStep children, not from Stepper.Step */}
        <LockedStep>Step 2 content: Waiting for an invite</LockedStep>

        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={stepper.previous} disabled={stepper.isFirst()}>
          Back
        </Button>
        <Button onClick={stepper.next}>Next step</Button>
      </Group>
    </>
  );
}
`;

function LockedStep({ step }: { step?: number; children?: React.ReactNode }) {
  return (
    <Tooltip label="You need an invite to complete this step">
      <Stepper.Step step={step} label="Invite" description="Locked" allowStepSelect={false} />
    </Tooltip>
  );
}

function Demo() {
  const stepper = useStepper();

  return (
    <>
      <Stepper controller={stepper}>
        <Stepper.Step label="Account" description="Create an account">
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>

        <LockedStep>
          <Content>Step 2 content: Waiting for an invite</Content>
        </LockedStep>

        <Stepper.Step label="Final step" description="Get full access">
          <Content>Step 3 content: Get full access</Content>
        </Stepper.Step>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={stepper.previous} disabled={stepper.isFirst()}>
          Back
        </Button>
        <Button onClick={stepper.next}>Next step</Button>
      </Group>
    </>
  );
}

export const wrappedStep: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
