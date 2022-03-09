import { useState, useEffect } from 'react';
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

export function useActionsState(
  initialActions: SpotlightAction[] | ((query: string) => SpotlightAction[]),
  query: string
) {
  const [actions, setActions] = useState(
    prepareActions(typeof initialActions === 'function' ? initialActions(query) : initialActions)
  );

  useEffect(() => {
    if (typeof initialActions === 'function') {
      setActions(prepareActions(initialActions(query)));
    }
  }, [query]);

  const registerActions = (payload: SpotlightAction[]) =>
    setActions((current) => prepareActions([...current, ...payload]));

  const removeActions = (ids: string[]) =>
    setActions((current) => current.filter((action) => !ids.includes(action.id)));

  const triggerAction = (id: string) => {
    const action = actions.find((item) => item.id === id);
    action?.onTrigger?.(action);
  };

  return [
    actions,
    {
      registerActions,
      removeActions,
      triggerAction,
    },
  ] as const;
}
