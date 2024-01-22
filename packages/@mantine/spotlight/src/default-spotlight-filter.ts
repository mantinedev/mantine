import type {
  SpotlightActionData,
  SpotlightActionGroupData,
  SpotlightActions,
  SpotlightFilterFunction,
} from './Spotlight';

function getKeywords(keywords: string | string[] | undefined) {
  if (Array.isArray(keywords)) {
    return keywords
      .map((keyword) => keyword.trim())
      .join(',')
      .toLowerCase()
      .trim();
  }

  if (typeof keywords === 'string') {
    return keywords.toLowerCase().trim();
  }

  return '';
}

function getFlatActions(data: SpotlightActions[]) {
  return data.reduce<SpotlightActionData[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }

    return [...acc, item];
  }, []);
}

function flatActionsToGroups(data: SpotlightActionData[]) {
  const groups: Record<string, { pushed: boolean; data: SpotlightActionGroupData }> = {};
  const result: SpotlightActions[] = [];

  data.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }

      groups[action.group].data.actions.push(action);

      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
}

export const defaultSpotlightFilter: SpotlightFilterFunction = (_query, data) => {
  const query = _query.trim().toLowerCase();
  const priorityMatrix: SpotlightActionData[][] = [[], []];
  const flatActions = getFlatActions(data);
  flatActions.forEach((item) => {
    if (item.label?.toLowerCase().includes(query)) {
      priorityMatrix[0].push(item);
    } else if (
      item.description?.toLowerCase().includes(query) ||
      getKeywords(item.keywords).includes(query)
    ) {
      priorityMatrix[1].push(item);
    }
  });

  return flatActionsToGroups(priorityMatrix.flat());
};
