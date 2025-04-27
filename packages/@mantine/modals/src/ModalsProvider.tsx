import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
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

  /** Whether to show all modals or only the last one, `false` by default */
  showAllModals?: boolean;

  /** Determines whether only the top modal should respond to escape key press, `true` by default */
  closeOnEscapeTopOnly?: boolean;
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

export function ModalsProvider({
  children,
  modalProps,
  labels,
  modals,
  showAllModals = false,
  closeOnEscapeTopOnly = true,
}: ModalsProviderProps) {
  const [state, dispatch] = useReducer(modalsReducer, { modals: [] });

  /**
   * IMPORTANT: Do NOT replace this with `const topModalIndex = state.modals.length - 1`.
   * If we use the direct calculation, during modal close on Esc, React's batch updates and multiple renders
   * can cause lower modals to also get closeOnEscape = true in the same render cycle, resulting in multiple modals closing at once.
   * useState + useEffect ensures topModalIndex updates "one render late", so only the top modal responds to Esc, preventing this bug
   */
  const [topModalIndex, setTopModalIndex] = useState(state.modals.length - 1);

  useEffect(() => {
    setTopModalIndex(state.modals.length - 1);
  }, [state.modals.length]);

  const closeAll = useCallback(
    (canceled?: boolean) => {
      dispatch({ type: 'CLOSE_ALL', canceled });
    },
    [dispatch]
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
    [dispatch]
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

  const getModalPropsAndContent = (currentModal: ModalState) => {
    switch (currentModal.type) {
      case 'context': {
        const { innerProps, ...rest } = currentModal.props;
        const ContextModal = modals?.[currentModal.ctx];

        return {
          modalProps: rest,
          content: ContextModal ? <ContextModal innerProps={innerProps} context={ctx} id={currentModal.id} /> : null,
        };
      }
      case 'confirm': {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } =
          separateConfirmModalProps(currentModal.props);

        return {
          modalProps: separatedModalProps,
          content: (
            <ConfirmModal
              {...separatedConfirmProps}
              id={currentModal.id}
              labels={currentModal.props.labels || labels}
            />
          ),
        };
      }
      case 'content': {
        const { children: currentModalChildren, ...rest } = currentModal.props;

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
  };

  const renderModals = (modalsToRender: ModalState[]) => {
    return modalsToRender.map((modal, index) => {
      const { modalProps: currentModalProps, content } = getModalPropsAndContent(modal);
      const closeOnEscape = closeOnEscapeTopOnly ? index === topModalIndex : true;
      return (
        <Modal
          key={modal.id}
          zIndex={getDefaultZIndex('modal') + 1}
          {...modalProps}
          {...currentModalProps}
          opened
          closeOnEscape={closeOnEscape}
          onClose={() => closeModal(modal.id)}
        >
          {content}
        </Modal>
      );
    });
  };

  const visibleModals = state.modals.length > 0 ? 
    (showAllModals 
      ? state.modals 
      : state.modals.slice(-1)
    ) : [];

  return (
    <ModalsContext.Provider value={ctx}>
      <>
        {renderModals(visibleModals)}
      </>
      {children}
    </ModalsContext.Provider>
  );
}
