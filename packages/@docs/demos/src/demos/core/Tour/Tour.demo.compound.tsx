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
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const currentStep = steps[step];

  useEffect(() => {
    const el = active ? document.querySelector<HTMLElement>(currentStep.target) : null;
    setTargetElement(el);

    if (!el) {
      setTargetRect(null);
      return undefined;
    }

    const updateRect = () => setTargetRect(el.getBoundingClientRect());
    updateRect();

    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);

    return () => {
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [active, step]);

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
        stepsCount={steps.length}
        onStepChange={setStep}
        onClose={() => setActive(false)}
      >
        <Tour.Overlay targetRect={targetRect} />
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
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const currentStep = steps[step];

  useEffect(() => {
    const el = active ? document.querySelector<HTMLElement>(currentStep.target) : null;
    setTargetElement(el);

    if (!el) {
      setTargetRect(null);
      return undefined;
    }

    const updateRect = () => setTargetRect(el.getBoundingClientRect());
    updateRect();

    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);

    return () => {
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [active, step]);

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
        stepsCount={steps.length}
        onStepChange={setStep}
        onClose={() => setActive(false)}
      >
        <Tour.Overlay targetRect={targetRect} />
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
