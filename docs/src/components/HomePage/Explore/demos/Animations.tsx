import React, { useState } from 'react';
import { Prism } from '@mantine/prism';
import { Title, Modal, Button } from '@mantine/core';
import { AuthenticationForm } from '@mantine/core/demos/AuthenticationForm/AuthenticationForm';
import { transitions as TransitionDemo } from '@mantine/core/src/components/Tooltip/demos/transitions';
import { LinkTitle } from './LinkTitle';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

const code = `
const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

<Modal transition={scaleY} transitionDuration={300}>
  <AuthenticationForm />
</Modal>
`.trim();

export function AnimationsDemo() {
  const Transitions = TransitionDemo.component;
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <LinkTitle
        title="Premade transitions"
        link="/core/transition/"
        label="Learn more about transitions"
        description="Use premade transitions in any Mantine component which animates presence, e.g. Modal"
      />

      <div style={{ maxWidth: 520 }}>
        <Transitions />
      </div>

      <Title order={3} style={{ marginBottom: 10, marginTop: 45 }}>
        Or create your own animations with simple object
      </Title>

      <Prism language="tsx" noCopy>
        {code}
      </Prism>

      <Button variant="outline" onClick={() => setModalOpened(true)} style={{ marginTop: 15 }}>
        Open modal with scaleY transition
      </Button>

      <Modal
        title="Register"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        transition={scaleY}
        transitionDuration={300}
      >
        <div>
          <AuthenticationForm noShadow noPadding />
        </div>
      </Modal>
    </>
  );
}
