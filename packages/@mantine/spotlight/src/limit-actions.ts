import { isActionsGroup } from './is-actions-group';
import type { SpotlightActionData, SpotlightActions } from './Spotlight';

export function limitActions(actions: SpotlightActions[], limit: number) {
  if (!Array.isArray(actions)) {
    return [];
  }

  let count = 0;
  return actions.reduce<SpotlightActions[]>((acc, item) => {
    if (count >= limit) {
      return acc;
    }

    if (isActionsGroup(item)) {
      const groupActions = limitActions(item.actions, limit - count);
      acc.push({
        group: item.group,
        actions: groupActions as SpotlightActionData[],
      });
      count += groupActions.length;
    } else {
      acc.push(item);
      count += 1;
    }

    return acc;
  }, []);
}
