import React, { useState } from 'react';
import { Prism } from '@mantine/prism';
import { Text, Title, useMantineTheme, Modal, Button } from '@mantine/core';
import { AuthenticationForm } from '@mantine/core/demos/AuthenticationForm/AuthenticationForm';
import { transitions as TransitionDemo } from '@mantine/core/src/components/Tooltip/demos/transitions';

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
  const theme = useMantineTheme();
  const Transitions = TransitionDemo.component;
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <Title order={3} style={{ marginBottom: 5 }}>
        Premade transitions
      </Title>

      <Text
        size="sm"
        style={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
          maxWidth: 400,
          marginBottom: 15,
        }}
      >
        Use premade transitions in any Mantine component which animates presence, e.g. Modal
      </Text>
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
