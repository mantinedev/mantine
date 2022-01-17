import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../../Modal';
import { Button } from '../../Button';
import { TextInput } from '../../TextInput/TextInput';
import { Wrapper } from './_wrapper';

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

storiesOf('@mantine/core/Popover/stories', module)
  .add('Focus behavior', () => (
    <div style={{ padding: 100 }}>
      <Wrapper />
      <TextInput placeholder="Focus me when popover is opened" />
    </div>
  ))
  .add('Within modal', () => <WithinModal />);
