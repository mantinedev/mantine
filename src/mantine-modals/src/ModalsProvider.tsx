import React, { useReducer } from 'react';
import { Modal } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import {
  ModalsContext,
  ModalSettings,
  ConfirmLabels,
  OpenConfirmModal,
  OpenContextModal,
  ContextModalProps,
  ModalsContextProps,
} from './context';
import { ConfirmModal } from './ConfirmModal';
import { modalsReducer } from './reducer';

export interface ModalsProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined modals */
  modals?: Record<string, React.FC<ContextModalProps<any>>>;

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
  const [state, dispatch] = useReducer(modalsReducer, { modals: [], current: null });
  const closeAll = (canceled?: boolean) => {
    state.modals.forEach((modal) => {
      if (modal.type === 'confirm' && canceled) {
        modal.props?.onCancel?.();
      }

      modal.props?.onClose?.();
    });
    dispatch({ type: 'CLOSE_ALL' });
  };

  const openModal = (props: ModalSettings) => {
    const id = props.id || randomId();
    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'content',
        props,
      },
    });
    return id;
  };

  const openConfirmModal = (props: OpenConfirmModal) => {
    const id = props.id || randomId();
    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'confirm',
        props,
      },
    });
    return id;
  };

  const openContextModal = (modal: string, props: OpenContextModal) => {
    const id = props.id || randomId();
    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'context',
        props,
        ctx: modal,
      },
    });
    return id;
  };

  const closeModal = (id: string, canceled?: boolean) => {
    if (state.modals.length <= 1) {
      closeAll(canceled);
      return;
    }

    const modal = state.modals.find((item) => item.id === id);
    if (modal?.type === 'confirm' && canceled) {
      modal.props?.onCancel?.();
    }
    modal?.props?.onClose?.();
    dispatch({ type: 'CLOSE', payload: modal.id });
  };

  const ctx: ModalsContextProps = {
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll,
  };

  const getCurrentModal = () => {
    switch (state.current?.type) {
      case 'context': {
        const { innerProps, ...rest } = state.current.props;
        const ContextModal = modals[state.current.ctx];

        return {
          modalProps: rest,
          content: <ContextModal innerProps={innerProps} context={ctx} id={state.current.id} />,
        };
      }
      case 'confirm': {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } =
          separateConfirmModalProps(state.current.props);

        return {
          modalProps: separatedModalProps,
          content: (
            <ConfirmModal
              {...separatedConfirmProps}
              id={state.current.id}
              labels={state.current.props.labels || labels}
            />
          ),
        };
      }
      case 'content': {
        const { children: currentModalChildren, ...rest } = state.current.props;

        return {
          modalProps: rest,
          content: <>{currentModalChildren}</>,
        };
      }
      default: {
        return {
          modalProps: {},
          content: null,
        };
      }
    }
  };

  const { modalProps: currentModalProps, content } = getCurrentModal();

  return (
    <ModalsContext.Provider value={ctx}>
      <Modal
        {...modalProps}
        {...currentModalProps}
        opened={state.modals.length > 0}
        onClose={() => closeModal(state.current.id)}
      >
        {content}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
