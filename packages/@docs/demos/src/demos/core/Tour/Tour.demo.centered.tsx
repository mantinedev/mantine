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
      <Button id="centered-target" onClick={() => { setStep(0); setActive(true); }}>
        Start tour
      </Button>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step title="Welcome">
          This step has no target and is displayed in the center of the screen.
        </Tour.Step>
        <Tour.Step target="#centered-target" title="Target step">
          This step highlights the button.
        </Tour.Step>
        <Tour.Step title="All done">
          This final step is also centered with no target.
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
      <Button
        id="centered-target"
        onClick={() => {
          setStep(0);
          setActive(true);
        }}
      >
        Start tour
      </Button>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step title="Welcome">
          This step has no target and is displayed in the center of the screen.
        </Tour.Step>
        <Tour.Step target="#centered-target" title="Target step">
          This step highlights the button.
        </Tour.Step>
        <Tour.Step title="All done">This final step is also centered with no target.</Tour.Step>
      </Tour>
    </>
  );
}

export const centered: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
