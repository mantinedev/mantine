import { ModalSettings, ModalState, OpenContextModal } from './context';

interface ModalsState {
  /**
   * The stack of modals.
   * The order of the array is from bottom to top.
   * The last modal is the most recently opened and the one currently displayed.
   *
   * Note: The `current` property has been removed. Use modals[modals.length - 1] to get the current modal.
   */
  modals: ModalState[];
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
      return {
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
        modals: [],
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

      return {
        modals: updatedModals,
      };
    }
    default: {
      return state;
    }
  }
}
