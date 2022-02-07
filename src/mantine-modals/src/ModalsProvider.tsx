import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { useListState, randomId } from '@mantine/hooks';
import {
  modalsContext,
  ModalsContext,
  ModalSettings,
  ConfirmLabels,
  OpenConfirmModal,
  OpenContextModal,
  ModalState,
} from './context';
import { ConfirmModal } from './ConfirmModal';

export interface ContextModalProps {
  context: ModalsContext;
  props: Record<string, any>;
  id: string;
}

export interface ModalsProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined modals */
  modals?: Record<string, React.FC<ContextModalProps>>;

  /** Shared Modal component props, applied for every modal */
  modalProps?: ModalSettings;

  /** Confirm modal labels */
  labels?: ConfirmLabels;
}

function extractConfirmModalProps(props: OpenConfirmModal) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }

  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels,
    ...others
  } = props;

  return { id, ...others };
}

export function ModalsProvider({ children, modalProps, labels, modals }: ModalsProviderProps) {
  const [state, handlers] = useListState<ModalState>([]);
  const [currentModal, setCurrentModal] = useState<ModalState>({
    id: null,
    props: null,
    type: 'content',
  });
  const closeAll = () => {
    state.forEach((modal) => modal.props?.onClose?.());
    handlers.setState([]);
  };

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

  const openContextModal = (modal: string, props: OpenContextModal) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'context', ctx: modal });
    setCurrentModal({ id, props, type: 'context', ctx: modal });
    return id;
  };

  const closeModal = (id: string) => {
    const index = state.findIndex((item) => item.id === id);
    if (state.length <= 1) {
      closeAll();
    } else {
      const modal = state.find((item) => item.id === id);
      modal?.props?.onClose?.();
      index !== -1 && handlers.remove(index);
      setCurrentModal(
        state[state.length - 2] || {
          id: null,
          props: null,
          type: 'content',
        }
      );
    }
  };

  const ContextModal = currentModal?.type === 'context' ? modals[currentModal?.ctx] : () => null;

  const ctx = {
    modals: state,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll,
  };

  const content =
    currentModal?.type === 'context' ? (
      <ContextModal context={ctx} id={currentModal?.id} {...(currentModal?.props as any)} />
    ) : currentModal?.type === 'confirm' ? (
      <ConfirmModal
        {...currentModal.props}
        id={currentModal.id}
        labels={currentModal.props.labels || labels}
      />
    ) : (
      currentModal?.props?.children
    );

  return (
    <modalsContext.Provider value={ctx}>
      <Modal
        {...modalProps}
        {...(currentModal?.type === 'confirm'
          ? extractConfirmModalProps(currentModal?.props)
          : currentModal?.props)}
        opened={state.length > 0}
        onClose={() => closeModal(currentModal?.id)}
      >
        {content}
      </Modal>

      {children}
    </modalsContext.Provider>
  );
}
