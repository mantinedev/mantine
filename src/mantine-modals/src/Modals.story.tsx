/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Text, Group } from '@mantine/core';
import { ModalsProvider, useModal, useContentModal, useConfirmModal } from './index';

function Demo() {
  const confirmModal = useConfirmModal(
    {
      description: (
        <Text size="sm" color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam modi vitae
          molestias unde tempora exercitationem fugit, ex repellat doloribus maiores facilis quo
          quis, itaque temporibus obcaecati vel iusto praesentium.
        </Text>
      ),
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirm'),
    },
    { title: 'Please confirm this action' }
  );

  const providerModal = useModal('hello', { hideCloseButton: true });

  const contentModal = useContentModal(<Text color="violet">Content modal</Text>, {
    title: 'This is content modal',
  });

  return (
    <Group sx={{ padding: 40 }}>
      <Button onClick={() => providerModal.open()}>Open provider modal</Button>
      <Button onClick={() => confirmModal.open()} color="red">
        Open confirm modal
      </Button>
      <Button onClick={() => contentModal.open()} color="violet">
        Open content modal
      </Button>
    </Group>
  );
}

storiesOf('@mantine/modals', module).add('Custom modal', () => (
  <ModalsProvider
    modals={{ hello: <div>Hello</div> }}
    labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
  >
    <Demo />
  </ModalsProvider>
));
