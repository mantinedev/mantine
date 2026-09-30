import { useState } from 'react';
import type { ActiveMentionQuery } from './detect-query';
import type { MentionsQueryState } from './use-mentions-query';

interface UseMentionsInlineSuggestionInput {
  enabled: boolean;
  query: ActiveMentionQuery | null;
  queryState: MentionsQueryState;
  selection: { start: number; end: number };
  plainText: string;
  onAccept: (id: string) => void;
}

export function useMentionsInlineSuggestion({
  enabled,
  query,
  queryState,
  selection,
  plainText,
  onAccept,
}: UseMentionsInlineSuggestionInput) {
  const [dismissedQuery, setDismissedQuery] = useState<string | null>(null);

  const queryKey = query ? `${query.sourceIndex}:${query.queryStart}:${query.query}` : null;
  const candidate =
    enabled &&
    query &&
    !queryState.loading &&
    queryKey !== dismissedQuery &&
    selection.start === selection.end
      ? queryState.items[0]
      : undefined;
  const display = candidate ? (candidate.display ?? candidate.id) : '';
  const inlineCompletion =
    candidate &&
    query &&
    display.toLowerCase().startsWith(query.query.toLowerCase()) &&
    plainText.slice(query.queryEnd).split('\n')[0] === ''
      ? display.slice(query.query.length)
      : '';
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
