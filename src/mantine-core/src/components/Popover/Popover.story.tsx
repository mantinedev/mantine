import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Group } from '../Group';
import { TextInput } from '../TextInput/TextInput';
import { Popover, PopoverProps } from './Popover';

function Wrapper(props: Partial<PopoverProps>) {
  const [opened, setOpened] = useState(props.opened);

  return (
    <Popover
      {...props}
      title="Hello!"
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened(true)}>Popover</Button>}
      withArrow
      withCloseButton
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

function WithinModal() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Wrapper />
      </Modal>
    </>
  );
}

storiesOf('Popover', module)
  .add('Focus behavior', () => (
    <div style={{ padding: 100 }}>
      <Wrapper />
      <TextInput placeholder="Focus me when popover is opened" />
    </div>
  ))
  .add('Within modal', () => <WithinModal />);
