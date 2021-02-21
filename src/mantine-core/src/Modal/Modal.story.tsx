import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { AuthenticationForm } from '@mantine/demos';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

function WrappedModal(props: Omit<React.ComponentProps<typeof Modal>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Modal', () => (
  <MantineProvider>
    <WrappedModal title="Authentication form">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  </MantineProvider>
));
