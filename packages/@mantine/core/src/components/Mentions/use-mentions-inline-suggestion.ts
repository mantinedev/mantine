import { useState } from 'react';
import type { ActiveMentionQuery } from './detect-query';
import { normalizeMatchText, type MentionsQueryState } from './use-mentions-query';

interface UseMentionsInlineSuggestionInput {
  enabled: boolean;
  query: ActiveMentionQuery | null;
  queryState: MentionsQueryState;
  ignoreAccents: boolean | undefined;
  selection: { start: number; end: number };
  plainText: string;
  onAccept: (id: string) => void;
}

export function useMentionsInlineSuggestion({
  enabled,
  query,
  queryState,
  ignoreAccents,
  selection,
  plainText,
  onAccept,
}: UseMentionsInlineSuggestionInput) {
  const [dismissedQuery, setDismissedQuery] = useState<string | null>(null);

  const queryKey = query ? `${query.sourceIndex}:${query.queryStart}:${query.query}` : null;
  const canSuggest =
    enabled &&
    query != null &&
    !queryState.loading &&
    queryKey !== dismissedQuery &&
    selection.start === selection.end &&
    plainText.slice(query.queryEnd).split('\n')[0] === '';
  const normalizedQuery = query ? normalizeMatchText(query.query, ignoreAccents) : '';
  const candidate = canSuggest
    ? queryState.items.find((item) =>
        normalizeMatchText(item.display ?? item.id, ignoreAccents).startsWith(normalizedQuery)
      )
    : undefined;
  const display = candidate ? (candidate.display ?? candidate.id) : '';
  const inlineCompletion = candidate && query ? display.slice(query.query.length) : '';
  const inlineItem = inlineCompletion ? candidate : undefined;

  const handleInlineKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!inlineItem) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setDismissedQuery(queryKey);
      return;
    }

    const accept =
      event.key === 'Enter' ||
      (event.key === 'Tab' && !event.shiftKey) ||
      (event.key === 'ArrowRight' && selection.start === plainText.length);

    if (accept) {
      event.preventDefault();
      onAccept(inlineItem.id);
    }
  };

  return { inlineItem, inlineCompletion, handleInlineKeyDown };
}
