import { useCallback, useReducer, useRef } from 'react';
import { getDefaultZIndex, Modal } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { ConfirmModal } from './ConfirmModal';
import {
  ConfirmLabels,
  ContextModalProps,
  ModalsContext,
  ModalsContextProps,
  ModalSettings,
  ModalState,
  OpenConfirmModal,
  OpenContextModal,
} from './context';
import { useModalsEvents } from './events';
import { modalsReducer } from './reducer';

export interface ModalsProviderProps {
  /** Your app */
  children?: React.ReactNode;

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
  const [state, dispatch] = useReducer(modalsReducer, { modals: [], current: [] });
  const stateRef = useRef(state);
  stateRef.current = state;

  const closeAll = useCallback(
    (canceled?: boolean) => {
      dispatch({ type: 'CLOSE_ALL', canceled });
    },
    [stateRef, dispatch]
  );

  const openModal = useCallback(
    ({ modalId, ...props }: ModalSettings) => {
      const id = modalId || randomId();

      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'content',
          props,
        },
      });
      return id;
    },
    [dispatch]
  );

  const openConfirmModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'confirm',
          props,
        },
      });
      return id;
    },
    [dispatch]
  );

  const openContextModal = useCallback(
    (modal: string, { modalId, ...props }: OpenContextModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'context',
          props,
          ctx: modal,
        },
      });
      return id;
    },
    [dispatch]
  );

  const closeModal = useCallback(
    (id: string, canceled?: boolean) => {
      dispatch({ type: 'CLOSE', modalId: id, canceled });
    },
    [stateRef, dispatch]
  );

  const updateModal = useCallback(
    ({ modalId, ...newProps }: Partial<ModalSettings> & { modalId: string }) => {
      dispatch({
        type: 'UPDATE',
        modalId,
        newProps,
      });
    },
    [dispatch]
  );

  const updateContextModal = useCallback(
    ({ modalId, ...newProps }: { modalId: string } & Partial<OpenContextModal<any>>) => {
      dispatch({ type: 'UPDATE', modalId, newProps });
    },
    [dispatch]
  );

  useModalsEvents({
    openModal,
    openConfirmModal,
    openContextModal: ({ modal, ...payload }: any) => openContextModal(modal, payload),
    closeModal,
    closeContextModal: closeModal,
    closeAllModals: closeAll,
    updateModal,
    updateContextModal,
  });

  const ctx: ModalsContextProps = {
    modalProps: modalProps || {},
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeContextModal: closeModal,
    closeAll,
    updateModal,
    updateContextModal,
  };

  const getModalContent = useCallback(
    (modal: ModalState) => {
      switch (modal.type) {
        case 'context': {
          const { innerProps, ...rest } = modal.props;
          const ContextModal = modals![modal.ctx];

          return {
            modalProps: rest,
            content: <ContextModal innerProps={innerProps} context={ctx} id={modal.id} />,
          };
        }
        case 'confirm': {
          const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } =
            separateConfirmModalProps(modal.props);

          return {
            modalProps: separatedModalProps,
            content: (
              <ConfirmModal
                {...separatedConfirmProps}
                id={modal.id}
                labels={modal.props.labels || labels}
              />
            ),
          };
        }
        case 'content': {
          const { children: currentModalChildren, ...rest } = modal.props;

          return {
            modalProps: rest,
            content: currentModalChildren,
          };
        }
        default: {
          return {
            modalProps: {},
            content: null,
          };
        }
      }
    },
    [ctx, labels, modals]
  );

  return (
    <ModalsContext.Provider value={ctx}>
      {state.current.map((modal, index) => {
        const { modalProps: currentModalProps, content } = getModalContent(modal);
        const baseZIndex = getDefaultZIndex('modal');
        const opened = true; // always opened because this will only render for current modals

        return (
          <Modal
            key={modal.id}
            zIndex={baseZIndex + index + 1}
            {...modalProps}
            {...currentModalProps}
            opened={opened}
            onClose={() => closeModal(modal.id)}
          >
            {content}
          </Modal>
        );
      })}

      {children}
    </ModalsContext.Provider>
  );
}
