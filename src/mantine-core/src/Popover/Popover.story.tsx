import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { TextInput } from '../TextInput/TextInput';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

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
