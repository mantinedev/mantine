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
        <Button id="controlled-target-1">First target</Button>
        <TextInput id="controlled-target-2" placeholder="Second target" />
      </Group>

      <Group mt="md">
        <Button onClick={() => { setStep(0); setActive(true); }}>Go to step 1</Button>
        <Button onClick={() => { setStep(1); setActive(true); }}>Go to step 2</Button>
      </Group>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#controlled-target-1" title="Step 1">
          This is the first step.
        </Tour.Step>
        <Tour.Step target="#controlled-target-2" title="Step 2">
          This is the second step.
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
        <Button id="controlled-target-1">First target</Button>
        <TextInput id="controlled-target-2" placeholder="Second target" />
      </Group>

      <Group mt="md">
        <Button
          onClick={() => {
            setStep(0);
            setActive(true);
          }}
        >
          Go to step 1
        </Button>
        <Button
          onClick={() => {
            setStep(1);
            setActive(true);
          }}
        >
          Go to step 2
        </Button>
      </Group>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#controlled-target-1" title="Step 1">
          This is the first step.
        </Tour.Step>
        <Tour.Step target="#controlled-target-2" title="Step 2">
          This is the second step.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
