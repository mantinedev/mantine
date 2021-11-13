import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { useListState, randomId } from '@mantine/hooks';
import {
  ModalsContext,
  ModalSettings,
  ConfirmLabels,
  OpenConfirmModal,
  ModalState,
} from './context';
import { ConfirmModal } from './ConfirmModal';

export interface ModalsProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined modals */
  modals?: Record<string, React.ReactNode>;

  /** Shared Modal component props, applied for every modal */
  modalProps?: ModalSettings;

  /** Confirm modal labels */
  labels?: ConfirmLabels;
}

export function ModalsProvider({ children, modalProps, labels }: ModalsProviderProps) {
  const [state, handlers] = useListState<ModalState>([]);
  const [currentModal, setCurrentModal] = useState<ModalState>({
    id: null,
    props: null,
    type: 'content',
  });
  const closeAll = () => handlers.setState([]);

  const openModal = (props: ModalSettings) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'content' });
    setCurrentModal({ id, props, type: 'content' });
    return id;
  };

  const openConfirmModal = (props: OpenConfirmModal) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'confirm' });
    setCurrentModal({ id, props, type: 'confirm' });
    return id;
  };

  const closeModal = (id: string) => {
    if (state.length <= 1) {
      closeAll();
    } else {
      const index = state.findIndex((item) => item.id === id);
      index !== -1 && handlers.remove(index);
      setCurrentModal(state[state.length - 2]);
    }
  };

  const content =
    currentModal?.type === 'confirm' ? (
      <ConfirmModal
        {...currentModal.props}
        id={currentModal.id}
        labels={currentModal.props.labels || labels}
      />
    ) : (
      currentModal?.props?.children
    );

  return (
    <ModalsContext.Provider
      value={{
        modals: state,
        openModal,
        openConfirmModal,
        closeModal,
        closeAll,
      }}
    >
      <Modal
        opened={state.length > 0}
        onClose={() => closeModal(currentModal?.id)}
        {...modalProps}
        {...currentModal?.props}
      >
        {content}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
