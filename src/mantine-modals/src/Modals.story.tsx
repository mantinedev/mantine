/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Text, Group } from '@mantine/core';
import { ModalsProvider, useModals } from './index';

function Demo() {
  const modals = useModals();
  const showContentModal = () =>
    modals.openModal({
      title: 'Hello there',
      children: <Text color="blue">My content modal</Text>,
    });

  const showNestedModal = () =>
    modals.openConfirmModal({
      title: 'Are you really sure?',
      closeOnConfirm: false,
      onConfirm: () => modals.closeAll(),
    });

  const showConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm this action',
      confirmProps: { color: 'red' },
      closeOnConfirm: false,
      children: (
        <Text size="sm" color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam modi vitae
          molestias unde tempora exercitationem fugit, ex repellat doloribus maiores facilis quo
          quis, itaque temporibus obcaecati vel iusto praesentium.
        </Text>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: showNestedModal,
    });

  return (
    <Group sx={{ padding: 40 }}>
      {/* <Button onClick={() => providerModal.open()}>Open provider modal</Button> */}
      <Button onClick={showConfirmModal} color="red">
        Open confirm modal
      </Button>
      <Button onClick={showContentModal} color="violet">
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
