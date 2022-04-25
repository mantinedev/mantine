/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Text, Group } from '@mantine/core';
import { ModalsProvider, useModals, ContextModalProps } from './index';

function DemoWithoutLabels() {
  const modals = useModals();

  const showConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Oh no! No labels!',
      onCancel: () => console.log('Single confirm modal cancelled'),
      onConfirm: () => console.log('Single confirm modal confirmed'),
      onClose: () => console.log('Single confirm modal closed'),
    });
  return <Button onClick={showConfirmModal}>Open confirm modal w/o labels</Button>;
}

function Demo() {
  const modals = useModals();

  const showContextModal = () =>
    modals.openContextModal('hello', {
      title: 'Context modal',
      onClose: () => console.log('context modal closed'),
      innerProps: {
        contextProp: 'test-modal',
      },
    });

  const showContentModal = () =>
    modals.openModal({
      title: 'Hello there',
      children: <Text color="blue">My content modal</Text>,
      onClose: () => console.log('content modal 1 closed'),
    });

  const showSingleConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Just confirm',
      onCancel: () => console.log('Single confirm modal cancelled'),
      onConfirm: () => console.log('Single confirm modal confirmed'),
      onClose: () => console.log('Single confirm modal closed'),
    });

  const showNestedModal = () =>
    modals.openConfirmModal({
      title: 'Are you really sure?',
      closeOnConfirm: false,
      onConfirm: () => modals.closeAll(),
      onClose: () => console.log('confirm modal 2 closed'),
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
      onClose: () => console.log('confirm modal 1 closed'),
    });

  return (
    <Group sx={{ padding: 40 }}>
      <Button onClick={showContextModal}>Open context modal</Button>
      <Button onClick={showConfirmModal} color="red">
        Open nested confirm modal
      </Button>
      <Button onClick={showSingleConfirmModal} color="cyan">
        Open single confirm modal
      </Button>
      <Button onClick={showContentModal} color="violet">
        Open content modal
      </Button>
      <ModalsProvider>
        <DemoWithoutLabels />
      </ModalsProvider>
    </Group>
  );
}

storiesOf('Modals Manager', module).add('Custom modal', () => (
  <ModalsProvider
    modals={{
      hello: ({ context, id, innerProps }: ContextModalProps<{ contextProp: string }>) => {
        console.log(innerProps);
        return (
          <div>
            <div>Test custom modal: {innerProps.contextProp}</div>
            <Button onClick={() => context.closeModal(id)}>Close</Button>
          </div>
        );
      },
    }}
    labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
  >
    <Demo />
  </ModalsProvider>
));
