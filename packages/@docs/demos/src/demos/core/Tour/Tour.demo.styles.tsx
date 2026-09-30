import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Tour.demo.styles.module.css';

const cssCode = `.tooltip {
  background-color: var(--mantine-color-blue-6);
  border-color: var(--mantine-color-blue-8);
}

.title {
  color: var(--mantine-color-white);
}

.body {
  color: var(--mantine-color-white);
}

.stepCounter {
  color: var(--mantine-color-blue-2);
}

.closeButton {
  color: var(--mantine-color-white);
}

.navigationButton {
  color: var(--mantine-color-white);
  border-color: var(--mantine-color-blue-4);
  background-color: var(--mantine-color-blue-7);

  @mixin hover {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-blue-8);
  }
}
`;

const code = `
import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';
import classes from './Tour.demo.styles.module.css';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="styles-target-1">First target</Button>
        <TextInput id="styles-target-2" placeholder="Second target" />
        <Button id="styles-target-3" variant="outline">
          Third target
        </Button>
      </Group>

      <Button mt="md" onClick={() => { setStep(0); setActive(true); }}>
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        classNames={{
          tooltip: classes.tooltip,
          title: classes.title,
          body: classes.body,
          stepCounter: classes.stepCounter,
          closeButton: classes.closeButton,
          navigationButton: classes.navigationButton,
        }}
      >
        <Tour.Step target="#styles-target-1" title="Step 1: Welcome">
          This tour demonstrates how to customize Tour styles with classNames.
        </Tour.Step>
        <Tour.Step target="#styles-target-2" title="Step 2: Input">
          You can style every part of the tooltip independently.
        </Tour.Step>
        <Tour.Step target="#styles-target-3" title="Step 3: Actions">
          The tooltip, navigation buttons, and counters are all customized.
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
        <Button id="styles-target-1">First target</Button>
        <TextInput id="styles-target-2" placeholder="Second target" />
        <Button id="styles-target-3" variant="outline">
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

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        classNames={{
          tooltip: classes.tooltip,
          title: classes.title,
          body: classes.body,
          stepCounter: classes.stepCounter,
          closeButton: classes.closeButton,
          navigationButton: classes.navigationButton,
        }}
      >
        <Tour.Step target="#styles-target-1" title="Step 1: Welcome">
          This tour demonstrates how to customize Tour styles with classNames.
        </Tour.Step>
        <Tour.Step target="#styles-target-2" title="Step 2: Input">
          You can style every part of the tooltip independently.
        </Tour.Step>
        <Tour.Step target="#styles-target-3" title="Step 3: Actions">
          The tooltip, navigation buttons, and counters are all customized.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const styles: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Tour.demo.styles.module.css', language: 'css', code: cssCode },
  ],
};
