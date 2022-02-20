import { useState } from 'react';
import type { SpotlightAction } from '../types';

export function useActionsState(initialActions: SpotlightAction[]) {
  const [actions, setActions] = useState(initialActions);
  const handlers = {
    registerActions: () => {},
    removeActions: () => {},
    triggerAction: () => {},
  };

  return [actions, handlers] as const;
}
