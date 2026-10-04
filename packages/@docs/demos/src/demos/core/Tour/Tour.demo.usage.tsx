import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="tour-target-1">First target</Button>
        <TextInput id="tour-target-2" placeholder="Second target" />
        <Button id="tour-target-3" variant="outline">
          Third target
        </Button>
      </Group>

      <Button mt="md" onClick={() => { setStep(0); setActive(true); }}>
        Start tour
      </Button>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#tour-target-1" title="Step 1">
          This is the first step of the tour.
        </Tour.Step>
        <Tour.Step target="#tour-target-2" title="Step 2">
          This is the second step of the tour.
        </Tour.Step>
        <Tour.Step target="#tour-target-3" title="Step 3">
          This is the third and final step.
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="tour-target-1">First target</Button>
        <TextInput id="tour-target-2" placeholder="Second target" />
        <Button id="tour-target-3" variant="outline">
          Third target
        </Button>
      </Group>

      <Button
        mt="md"
        onClick={() => {
          setStep(0);
          setActive(true);
        }}
      >
        Start tour
      </Button>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#tour-target-1" title="Step 1">
          This is the first step of the tour.
        </Tour.Step>
        <Tour.Step target="#tour-target-2" title="Step 2">
          This is the second step of the tour.
        </Tour.Step>
        <Tour.Step target="#tour-target-3" title="Step 3">
          This is the third and final step.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
