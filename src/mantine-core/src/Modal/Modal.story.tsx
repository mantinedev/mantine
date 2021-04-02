import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { AuthenticationForm } from '@mantine/demos';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
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

storiesOf('@mantine/core/Modal', module)
  .add('General usage', () => (
    <WrappedModal title="Authentication form">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  ))
  .add('Vertical scroll', () => (
    <WrappedModal title="Authentication form">
      {Array(100)
        .fill('REACT IS NOT A FRAMEWORK')
        .map((c) => (
          <Text weight={700}>{c}</Text>
        ))}
    </WrappedModal>
  ))
  .add('Inside overflow', () => (
    <WrappedModal title="Authentication form" overflow="inside">
      {Array(100)
        .fill('REACT IS NOT A FRAMEWORK')
        .map((c) => (
          <Text weight={700}>{c}</Text>
        ))}
    </WrappedModal>
  ))
  .add('Custom modal width', () => (
    <WrappedModal title="Authentication form" modalWidth="80%">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  ));
