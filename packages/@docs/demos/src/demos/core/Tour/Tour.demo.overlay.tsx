import { useState } from 'react';
import { Button, Group, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="overlay-target-1">First target</Button>
        <Button id="overlay-target-2" variant="light">Second target</Button>
      </Group>

      <Button mt="md" onClick={() => { setStep(0); setActive(true); }}>
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        {{props}}
      >
        <Tour.Step target="#overlay-target-1" title="First step">
          This is the first step of the tour.
        </Tour.Step>
        <Tour.Step target="#overlay-target-2" title="Second step">
          This is the second step of the tour.
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Wrapper(props: any) {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="overlay-target-1">First target</Button>
        <Button id="overlay-target-2" variant="light">
          Second target
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
        {...props}
      >
        <Tour.Step target="#overlay-target-1" title="First step">
          This is the first step of the tour.
        </Tour.Step>
        <Tour.Step target="#overlay-target-2" title="Second step">
          This is the second step of the tour.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'withOverlay', type: 'boolean', initialValue: true, libraryValue: true },
    {
      prop: 'withOverlayInteraction',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    { prop: 'closeOnOverlayClick', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'closeOnEscape', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'withCloseButton', type: 'boolean', initialValue: true, libraryValue: true },
  ],
};
