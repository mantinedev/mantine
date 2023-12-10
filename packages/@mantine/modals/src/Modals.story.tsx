/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Group, Modal, Text } from '@mantine/core';
import {
  closeAllModals,
  closeModal,
  ContextModalProps,
  ModalsProvider,
  openConfirmModal,
  openContextModal,
  openModal,
  useModals,
} from './index';

export default { title: 'Modals manager' };

export function Usage() {
  const showContextModal = () =>
    openContextModal({
      modalId: 'context-modal',
      modal: 'hello',
      title: 'Context modal',
      centered: true,
      onClose: () => console.log('context modal closed'),
      innerProps: {
        contextProp: 'test-modal',
      },
    });

  const showContentModal = () =>
    openModal({
      modalId: 'content-modal',
      title: 'Hello there',
      children: (
        <Text c="blue" onClick={() => closeModal('content-modal')}>
          My content modal
        </Text>
      ),
      onClose: () => console.log('content modal 1 closed'),
    });

  const showSingleConfirmModal = () =>
    openConfirmModal({
      title: 'Just confirm',
      onCancel: () => console.log('Single confirm modal cancelled'),
      onConfirm: () => console.log('Single confirm modal confirmed'),
      onClose: () => console.log('Single confirm modal closed'),
    });

  const showNestedModal = () =>
    openConfirmModal({
      title: 'Are you really sure?',
      closeOnConfirm: false,
      onConfirm: closeAllModals,
      onClose: () => console.log('confirm modal 2 closed'),
    });

  const showConfirmModal = () =>
    openConfirmModal({
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
    <ModalsProvider
      modalProps={{ centered: true }}
      modals={{
        hello: ({ context, id, innerProps }: ContextModalProps<{ contextProp: string }>) => {
          console.log(innerProps, id, context);
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
      <Group p={40}>
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
      </Group>
    </ModalsProvider>
  );
}

export function NestedInsideModal() {
  const [opened, setIsOpened] = useState(false);
  const handleConfirm = () =>
    openConfirmModal({
      title: 'Title',
      children: <Text size="md">Are you sure?</Text>,
      labels: { confirm: 'Yes', cancel: 'Noo' },
    });
  return (
    <ModalsProvider>
      <Button onClick={() => setIsOpened(true)}>Open modal</Button>
      <Modal
        size="xl"
        padding={0}
        opened={opened}
        onClose={() => setIsOpened(false)}
        centered
        styles={{
          header: {
            margin: 0,
          },
          close: {
            position: 'absolute',
            top: 10,
            right: 10,
            boxShadow: '0 0 14px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Button variant="outline" radius="lg" onClick={() => handleConfirm()}>
          Open confirm modal
        </Button>
      </Modal>
    </ModalsProvider>
  );
}

function CloseAllApp() {
  const modals = useModals();

  const handleClick = () => {
    const modalId = Date.now();
    console.log('Open modal', modalId);

    modals.openModal({
      title: `Created at ${modalId}`,
      children: (
        <div>
          <p>Modal content...</p>
          <Button onClick={handleClick}>Open other modal</Button>
        </div>
      ),
      centered: true,
      onClose: () => {
        console.log('Close modal', modalId);
        modals.closeAll();
      },
    });
  };

  return <Button onClick={handleClick}>Open modal</Button>;
}

export function closeAll() {
  return (
    <ModalsProvider>
      <CloseAllApp />
    </ModalsProvider>
  );
}
