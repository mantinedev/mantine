import { DrawerState } from './context';

interface DrawersState {
  drawers: DrawerState[];
  current: DrawerState | null;
}

interface OpenAction {
  type: 'OPEN';
  payload: DrawerState;
}

interface CloseAction {
  type: 'CLOSE';
  payload: string;
}

interface CloseAllAction {
  type: 'CLOSE_ALL';
}

export function drawersReducer(
  state: DrawersState,
  action: OpenAction | CloseAction | CloseAllAction
): DrawersState {
  switch (action.type) {
    case 'OPEN': {
      return {
        current: action.payload,
        drawers: [...state.drawers, action.payload],
      };
    }
    case 'CLOSE': {
      return {
        current: state.drawers[state.drawers.length - 2] || null,
        drawers: state.drawers.filter((m) => m.id !== action.payload),
      };
    }
    case 'CLOSE_ALL': {
      return {
        current: state.current,
        drawers: [],
      };
    }
    default: {
      return state;
    }
  }
}
