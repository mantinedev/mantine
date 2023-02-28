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
  payload: ModalState;
}

interface CloseAction {
  type: 'CLOSE';
  payload: string;
}

interface CloseAllAction {
  type: 'CLOSE_ALL';
}

export function modalsReducer(
  state: ModalsState,
  action: OpenAction | CloseAction | CloseAllAction
): ModalsState {
  switch (action.type) {
    case 'OPEN': {
      return {
        current: action.payload,
        modals: [...state.modals, action.payload],
      };
    }
    case 'CLOSE': {
      const modals = state.modals.filter((m) => m.id !== action.payload);
      return {
        current: modals[modals.length - 1] || state.current,
        modals,
      };
    }
    case 'CLOSE_ALL': {
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
