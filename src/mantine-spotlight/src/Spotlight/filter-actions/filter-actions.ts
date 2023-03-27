import type { SpotlightAction } from '../../types';

function getKeywords(keywords: string | string[]) {
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

export function filterActions(_query: string, actions: SpotlightAction[]) {
  const query = _query.trim().toLowerCase();
  const priorityMatrix = [[], []];
  actions.forEach((action) => {
    if (action.title?.toLowerCase().includes(query)) {
      priorityMatrix[0].push(action);
    } else if (
      action.description?.toLowerCase().includes(query) ||
      getKeywords(action.keywords).includes(query)
    ) {
      priorityMatrix[1].push(action);
    }
  });

  return priorityMatrix.flat();
}
