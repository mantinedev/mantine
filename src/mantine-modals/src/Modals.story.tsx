import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Text, Group } from '@mantine/core';
import { ModalsProvider, useModal, useContentModal } from './index';

function Demo() {
  const providerModal = useModal('hello', { hideCloseButton: true });
  const contentModal = useContentModal(<Text color="violet">Content modal</Text>, {
    title: 'This is content modal',
  });

  return (
    <Group sx={{ padding: 40 }}>
      <Button onClick={() => providerModal.open()}>Open provider modal</Button>
      <Button onClick={() => contentModal.open()} color="violet">
        Open content modal
      </Button>
    </Group>
  );
}

storiesOf('@mantine/modals', module).add('Custom modal', () => (
  <ModalsProvider modals={{ hello: <div>Hello</div> }}>
    <Demo />
  </ModalsProvider>
));
