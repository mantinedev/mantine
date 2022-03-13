import { ModalState } from './context';

interface ModalsState {
  modals: ModalState[];
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
      return {
        current: state.modals[state.modals.length - 2] || null,
        modals: state.modals.filter((m) => m.id !== action.payload),
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
