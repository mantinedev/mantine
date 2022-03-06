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
  ContextModalProps,
} from './context';
import { ConfirmModal } from './ConfirmModal';

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

function separateConfirmModalProps(props: OpenConfirmModal) {
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

  return {
    confirmProps: {
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
    },
    modalProps: {
      id,
      ...others,
    },
  };
}

export function ModalsProvider({ children, modalProps, labels, modals }: ModalsProviderProps) {
  const [state, handlers] = useListState<ModalState>([]);
  const [currentModal, setCurrentModal] = useState<ModalState | null>(null);
  const closeAll = (canceled?: boolean) => {
    state.forEach((modal) => {
      if (modal.type === 'confirm' && canceled) {
        modal.props?.onCancel?.();
      }

      modal.props?.onClose?.();
    });
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

  const closeModal = (id: string, canceled?: boolean) => {
    const index = state.findIndex((item) => item.id === id);
    if (state.length <= 1) {
      closeAll(canceled);
    } else {
      const modal = state.find((item) => item.id === id);
      if (modal?.type === 'confirm' && canceled) {
        modal.props?.onCancel?.();
      }
      modal?.props?.onClose?.();
      index !== -1 && handlers.remove(index);
      setCurrentModal(state[state.length - 2] || null);
    }
  };

  const ctx: ModalsContext = {
    modals: state,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll,
  };

  const baseModalProps = {
    opened: state.length > 0,
    onClose: () => closeModal(currentModal.id),
  };

  const renderModal = (): JSX.Element => {
    if (!currentModal) return null;

    switch (currentModal.type) {
      case 'context': {
        const { customProps, ...rest } = currentModal.props;
        const ContextModal = modals[currentModal.ctx];

        return (
          <Modal {...modalProps} {...rest} {...baseModalProps}>
            <ContextModal customProps={customProps} context={ctx} id={currentModal.id} />
          </Modal>
        );
      }
      case 'confirm': {
        const { confirmProps: separatedConfirmProps, modalProps: separatedModalProps } =
          separateConfirmModalProps(currentModal.props);

        return (
          <Modal {...modalProps} {...separatedModalProps} {...baseModalProps}>
            <ConfirmModal
              {...currentModal.props}
              {...separatedConfirmProps}
              labels={currentModal.props.labels || labels}
            />
          </Modal>
        );
      }
      case 'content': {
        return (
          <Modal {...modalProps} {...currentModal.props} {...baseModalProps}>
            {currentModal.props.children};
          </Modal>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <modalsContext.Provider value={ctx}>
      {renderModal()}

      {children}
    </modalsContext.Provider>
  );
}
