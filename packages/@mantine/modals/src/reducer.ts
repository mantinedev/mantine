import { ModalSettings, ModalState, OpenContextModal } from './context';

interface ModalsState {
  modals: ModalState[];

  /**
   * Modals that are currently visible/rendered.
   * Changed from single modal to array to support multiple visible modals.
   */
  current: ModalState[];
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

interface UpdateAction {
  type: 'UPDATE';
  modalId: string;
  newProps: Partial<ModalSettings>;
}

function handleCloseModal(modal: ModalState, canceled?: boolean) {
  if (canceled && modal.type === 'confirm') {
    modal.props.onCancel?.();
  }

  modal.props.onClose?.();
}

export function modalsReducer(
  state: ModalsState,
  action: OpenAction | CloseAction | CloseAllAction | UpdateAction
): ModalsState {
  switch (action.type) {
    case 'OPEN': {
      const shouldReplace = action.modal.props.shouldReplaceExistingModal ?? true;

      return {
        modals: [...state.modals, action.modal],
        current: shouldReplace ? [action.modal] : [...state.current, action.modal],
      };
    }
    case 'CLOSE': {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }

      handleCloseModal(modal, action.canceled);

      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);
      const remainingCurrent = state.current.filter((m) => m.id !== action.modalId);

      return {
        modals: remainingModals,
        current:
          remainingCurrent.length > 0
            ? remainingCurrent
            : remainingModals.length > 0
              ? [remainingModals[remainingModals.length - 1]]
              : [],
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
        modals: [],
        current: [],
      };
    }
    case 'UPDATE': {
      const { modalId, newProps } = action;

      const updatedModals = state.modals.map((modal) => {
        if (modal.id !== modalId) {
          return modal;
        }

        if (modal.type === 'content' || modal.type === 'confirm') {
          return {
            ...modal,
            props: {
              ...modal.props,
              ...newProps,
            },
          };
        }

        if (modal.type === 'context') {
          return {
            ...modal,
            props: {
              ...modal.props,
              ...newProps,
              innerProps: {
                ...modal.props.innerProps,
                ...(newProps as Partial<OpenContextModal<any>>).innerProps,
              },
            },
          };
        }

        return modal;
      });

      const updatedCurrent = state.current.map((modal) =>
        modal.id === modalId ? updatedModals.find((m) => m.id === modalId) || modal : modal
      );

      return {
        ...state,
        modals: updatedModals,
        current: updatedCurrent,
      };
    }
    default: {
      return state;
    }
  }
}
