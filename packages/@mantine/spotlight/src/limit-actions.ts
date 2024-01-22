import { isActionsGroup } from './is-actions-group';
import type { SpotlightActionData, SpotlightActions } from './Spotlight';

export function limitActions(actions: SpotlightActions[], limit: number) {
  const result: SpotlightActions[] = [];

  if (!Array.isArray(actions)) {
    return [];
  }

  for (let i = 0; i < actions.length; i += 1) {
    const item = actions[i];

    if (result.length >= limit) {
      return result;
    }

    if (isActionsGroup(item)) {
      result.push({
        group: item.group,
        actions: limitActions(item.actions, limit - result.length) as SpotlightActionData[],
      });
    }

    if (!isActionsGroup(item)) {
      result.push(item);
    }
  }

  return result;
}
