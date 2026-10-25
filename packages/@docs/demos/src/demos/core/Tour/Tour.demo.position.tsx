import { useState } from 'react';
import { Button, Center, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Center, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Center mih={360}>
        <Button id="position-target" onClick={() => { setStep(0); setActive(true); }}>
          Start tour
        </Button>
      </Center>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#position-target" title="Bottom" position="bottom">
          Tooltip positioned at the bottom.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Top" position="top">
          Tooltip positioned at the top.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Left" position="left">
          Tooltip positioned at the left.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Right" position="right">
          Tooltip positioned at the right.
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
      <Center mih={360}>
        <Button
          id="position-target"
          onClick={() => {
            setStep(0);
            setActive(true);
          }}
        >
          Start tour
        </Button>
      </Center>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#position-target" title="Bottom" position="bottom">
          Tooltip positioned at the bottom.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Top" position="top">
          Tooltip positioned at the top.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Left" position="left">
          Tooltip positioned at the left.
        </Tour.Step>
        <Tour.Step target="#position-target" title="Right" position="right">
          Tooltip positioned at the right.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const position: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
