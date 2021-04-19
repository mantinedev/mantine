import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
import { AuthenticationForm } from '@mantine/demos';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Portal } from '../Portal/Portal';
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

function InPortal() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Portal>
        <Modal title="Authenticate in portal" opened={opened} onClose={() => setOpened(false)}>
          <AuthenticationForm noPadding noShadow />
        </Modal>
      </Portal>
    </div>
  );
}

storiesOf('@mantine/core/Modal', module)
  .add('General usage', () => (
    <WrappedModal title="Authentication form">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  ))
  .add('Horizontal overflow', () => (
    <WrappedModal title="This title is so large that there is no space to fit it all on single line and it will wrap on the second one or may be even on the third one">
      IDecidedToPutSoMuchUnbreakableContentInsideModalSoThatItWillOverflow
    </WrappedModal>
  ))
  .add('Inside portal', () => <InPortal />)
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
    <WrappedModal title="Authentication form" size="xs">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
        <WrappedModal title="Authentication form">
          <AuthenticationForm noPadding noShadow />
        </WrappedModal>
      </div>
    </MantineProvider>
  ));
