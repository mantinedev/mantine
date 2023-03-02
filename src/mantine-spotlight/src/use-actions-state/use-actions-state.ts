import { randomId } from '@mantine/hooks';
import type { SpotlightAction } from '../types';

function prepareAction(action: SpotlightAction) {
  return { ...action, id: action.id || randomId() };
}

function filterDuplicateActions(actions: SpotlightAction[]) {
  const ids = [];

  return actions
    .reduceRight<SpotlightAction[]>((acc, action) => {
      if (!ids.includes(action.id)) {
        ids.push(action.id);
        acc.push(action);
      }

      return acc;
    }, [])
    .reverse();
}

function prepareActions(initialActions: SpotlightAction[]) {
  return filterDuplicateActions(initialActions.map((action) => prepareAction(action)));
}

interface UseActionsState {
  actions: SpotlightAction[];
  onActionsChange: (actions: SpotlightAction[]) => void;
}

export function useActionsState({ actions, onActionsChange }: UseActionsState) {
  const registerActions = (payload: SpotlightAction[]) =>
    onActionsChange?.(prepareActions([...actions, ...payload]));

  const removeActions = (ids: string[]) =>
    onActionsChange?.(actions.filter((action) => !ids.includes(action.id)));

  const triggerAction = (id: string) => {
    const action = actions.find((item) => item.id === id);
    action?.onTrigger?.(action);
  };

  return [
    prepareActions(actions),
    {
      registerActions,
      removeActions,
      triggerAction,
    },
  ] as const;
}
