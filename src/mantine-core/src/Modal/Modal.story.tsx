import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Modal from './Modal';

function WrappedModal(props: Omit<React.ComponentProps<typeof Modal>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(true);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Modal', () => (
  <MantineProvider>
    <WrappedModal title="Confirm your action">
      <Text>This is modal</Text>
    </WrappedModal>
  </MantineProvider>
));
