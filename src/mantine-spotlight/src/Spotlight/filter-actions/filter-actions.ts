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
  return actions.filter(
    (action) =>
      action.title?.toLowerCase().includes(query) ||
      action.description?.toLowerCase().includes(query) ||
      getKeywords(action.keywords).includes(query)
  );
}
