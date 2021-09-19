import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/tss';
import { DEFAULT_THEME } from '@mantine/theme';
import { TextInput } from '../TextInput/TextInput';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { Switch } from '../Switch/Switch';
import { Popover } from './Popover';

function ZIndex() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: 5 }}>
      <Popover
        target={<Button onClick={() => setIsOpen(!isOpen)}>Press me</Button>}
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        placement="start"
        styles={{ body: { width: 120 } }}
        position="bottom"
        transitionDuration={1500}
      >
        Hello World
      </Popover>
    </div>
  );
}

function Wrapper(props: any) {
  const [opened, setOpened] = useState(true);
  return (
    <Popover
      {...props}
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened(true)}>Popover</Button>}
    >
      <TextInput label="Text input" placeholder="text input" style={{ minWidth: 300 }} />
      <Group position="center" style={{ marginTop: 15 }}>
        <Button variant="outline" color="gray">
          Cancel
        </Button>
        <Button>Submit</Button>
      </Group>
    </Popover>
  );
}

storiesOf('@mantine/core/Popover', module)
  .add('General usage', () => (
    <div style={{ padding: 400 }}>
      <Wrapper
        withArrow
        position="top"
        placement="center"
        title="Hello!"
        transition="slide-up"
        withCloseButton
      />
    </div>
  ))
  .add('zIndex', () => (
    <div style={{ padding: 100 }}>
      <ZIndex />
      <ZIndex />
      <Switch label="Switch label" />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 400, minHeight: '100vh' }}
      >
        <Wrapper
          withArrow
          position="top"
          placement="center"
          title="Hello!"
          transition="slide-up"
          withCloseButton
          gutter={15}
        />
      </div>
    </MantineProvider>
  ));
