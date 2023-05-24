import { ModalState } from './context';

interface ModalsState {
  modals: ModalState[];

  /**
   * Modal that is currently open or was the last open one.
   * Keeping the last one is necessary for providing a clean exit transition.
   */
  current: ModalState | null;
}

interface OpenAction {
  type: 'OPEN';
  modal: ModalState;
}

interface CloseAction {
  type: 'CLOSE';
  modalId: string;
  canceled?: boolean;
}

interface CloseAllAction {
  type: 'CLOSE_ALL';
  canceled?: boolean;
}

function handleCloseModal(modal: ModalState, canceled?: boolean) {
  if (canceled && modal.type === 'confirm') {
    modal.props.onCancel?.();
  }

  modal.props.onClose?.();
}

export function modalsReducer(
  state: ModalsState,
  action: OpenAction | CloseAction | CloseAllAction
): ModalsState {
  switch (action.type) {
    case 'OPEN': {
      return {
        current: action.modal,
        modals: [...state.modals, action.modal],
      };
    }
    case 'CLOSE': {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }

      handleCloseModal(modal, action.canceled);

      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);

      return {
        current: remainingModals[remainingModals.length - 1] || state.current,
        modals: remainingModals,
      };
    }
    case 'CLOSE_ALL': {
      if (!state.modals.length) {
        return state;
      }

      // Resolve modal stack from top to bottom
      state.modals
        .concat()
        .reverse()
        .forEach((modal) => {
          handleCloseModal(modal, action.canceled);
        });

      return {
        current: state.current,
        modals: [],
      };
    }
    default: {
      return state;
    }
  }
}
