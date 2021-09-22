import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/styles';
import { AuthenticationForm } from '../../../demos';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Select } from '../Select/Select';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Popover } from '../Popover/Popover';
import { ColorInput } from '../ColorInput/ColorInput';
import { Menu } from '../Menu/Menu';
import { Modal } from './Modal';
import { MultiSelect } from '../MultiSelect/MultiSelect';

function PopoverWrapper() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      styles={{ body: { width: 260 } }}
      position="bottom"
      withArrow
      zIndex={1000}
    >
      <div style={{ display: 'flex' }}>
        <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
      </div>
    </Popover>
  );
}

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
  .add('Horizontal overflow', () => (
    <WrappedModal title="This title is so large that there is no space to fit it all on single line and it will wrap on the second one or may be even on the third one">
      IDecidedToPutSoMuchUnbreakableContentInsideModalSoThatItWillOverflow
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
    <WrappedModal title="Authentication form" size="xs">
      <AuthenticationForm noPadding noShadow />
    </WrappedModal>
  ))
  .add('With select', () => (
    <WrappedModal>
      <Select data={['react', 'ng']} />
      <Autocomplete data={['react', 'ng']} />
      <MultiSelect data={['react', 'ng']} />
      <PopoverWrapper />
      <ColorInput dropdownZIndex={1000} />
      <Menu zIndex={1000}>
        <Menu.Item>Hello</Menu.Item>
      </Menu>
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
