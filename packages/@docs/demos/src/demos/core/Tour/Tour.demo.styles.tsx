import { useState } from 'react';
import { Button, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Button id="styles-target" onClick={() => setActive(true)}>
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        styles={{
          tooltip: { backgroundColor: 'var(--mantine-color-blue-6)', color: 'var(--mantine-color-white)' },
          title: { color: 'var(--mantine-color-white)' },
          body: { color: 'var(--mantine-color-white)' },
          navigationButton: { color: 'var(--mantine-color-white)' },
          stepCounter: { color: 'var(--mantine-color-blue-2)' },
          closeButton: { color: 'var(--mantine-color-white)' },
        }}
      >
        <Tour.Step target="#styles-target" title="Custom styles">
          This tooltip has custom blue background with white text.
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
      <Button id="styles-target" onClick={() => setActive(true)}>
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        styles={{
          tooltip: {
            backgroundColor: 'var(--mantine-color-blue-6)',
            color: 'var(--mantine-color-white)',
          },
          title: { color: 'var(--mantine-color-white)' },
          body: { color: 'var(--mantine-color-white)' },
          navigationButton: { color: 'var(--mantine-color-white)' },
          stepCounter: { color: 'var(--mantine-color-blue-2)' },
          closeButton: { color: 'var(--mantine-color-white)' },
        }}
      >
        <Tour.Step target="#styles-target" title="Custom styles">
          This tooltip has custom blue background with white text.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const styles: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
