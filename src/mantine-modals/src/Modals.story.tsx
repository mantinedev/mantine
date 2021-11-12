/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Text, Group } from '@mantine/core';
import { ModalsProvider, useModal, useContentModal, useConfirmModal } from './index';

function Demo() {
  const providerModal = useModal('hello', { hideCloseButton: true });
  const contentModal = useContentModal(<Text color="violet">Content modal</Text>, {
    title: 'This is content modal',
  });

  const confirmModal2 = useConfirmModal(
    {
      confirmProps: { color: 'red', children: 'I am sure' },
      closeOnCancel: false,
      closeOnConfirm: false,
      onCancel: () => confirmModal2.closeAll(),
      onConfirm: () => confirmModal2.closeAll(),
    },
    { title: 'Are you really sure' }
  );

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
      closeOnConfirm: false,
      onCancel: () => console.log('Cancel'),
      onConfirm: () => confirmModal2.open(),
    },
    { title: 'Please confirm this action' }
  );

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
