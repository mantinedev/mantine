import { useEffect, useState } from 'react';
import { Button, Group, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect, useState } from 'react';
import { Button, Group, Tour } from '@mantine/core';

const steps = [
  { target: '#compound-1', title: 'Welcome', body: 'Click here to get started with the app.', position: 'bottom' as const },
  { target: '#compound-2', title: 'Settings', body: 'Configure your preferences here.', position: 'bottom' as const },
];

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  const currentStep = steps[step];

  useEffect(() => {
    if (!active || !currentStep?.target) {
      setTargetElement(null);
      return;
    }

    const el = document.querySelector<HTMLElement>(currentStep.target);
    setTargetElement(el);
  }, [active, step]);

  const targetRect = targetElement?.getBoundingClientRect();

  return (
    <>
      <Group>
        <Button id="compound-1" onClick={() => { setActive(true); setStep(0); }}>
          Start tour
        </Button>
        <Button id="compound-2" variant="light">
          Settings
        </Button>
      </Group>

      <Tour.Root
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
      >
        <Tour.Overlay
          targetRect={targetRect ? {
            top: targetRect.top,
            left: targetRect.left,
            width: targetRect.width,
            height: targetRect.height,
          } : null}
        />
        <Tour.Tooltip
          targetElement={targetElement}
          position={currentStep?.position}
          mounted={active}
        >
          <Tour.CloseButton />
          <Tour.Title>{currentStep?.title}</Tour.Title>
          <Tour.Body>{currentStep?.body}</Tour.Body>
          <Tour.Navigation />
        </Tour.Tooltip>
      </Tour.Root>
    </>
  );
}
`;

const steps = [
  {
    target: '#compound-1',
    title: 'Welcome',
    body: 'Click here to get started with the app.',
    position: 'bottom' as const,
  },
  {
    target: '#compound-2',
    title: 'Settings',
    body: 'Configure your preferences here.',
    position: 'bottom' as const,
  },
];

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  const currentStep = steps[step];

  useEffect(() => {
    if (!active || !currentStep?.target) {
      setTargetElement(null);
      return;
    }

    const el = document.querySelector<HTMLElement>(currentStep.target);
    setTargetElement(el);
  }, [active, step]);

  const targetRect = targetElement?.getBoundingClientRect();

  return (
    <>
      <Group>
        <Button
          id="compound-1"
          onClick={() => {
            setActive(true);
            setStep(0);
          }}
        >
          Start tour
        </Button>
        <Button id="compound-2" variant="light">
          Settings
        </Button>
      </Group>

      <Tour.Root
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
      >
        <Tour.Overlay
          targetRect={
            targetRect
              ? {
                  top: targetRect.top,
                  left: targetRect.left,
                  width: targetRect.width,
                  height: targetRect.height,
                }
              : null
          }
        />
        <Tour.Tooltip
          targetElement={targetElement}
          position={currentStep?.position}
          mounted={active}
        >
          <Tour.CloseButton />
          <Tour.Title>{currentStep?.title}</Tour.Title>
          <Tour.Body>{currentStep?.body}</Tour.Body>
          <Tour.Navigation />
        </Tour.Tooltip>
      </Tour.Root>
    </>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
