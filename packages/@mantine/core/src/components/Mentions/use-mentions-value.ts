import { useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import type { MentionsChangePayload, MentionsChangeReason } from './Mentions.types';
import { useMentionsHistory, type MentionsHistoryChangeType } from './use-mentions-history';
import { toMentionOccurrence } from './utils/find-mention-occurrences';
import { getIdText } from './utils/get-plain-text';
import { normalizeNewlines } from './utils/normalize-newlines';
import type { MentionConfig } from './utils/types';
import { walkMentions, type MentionWalk } from './utils/walk-mentions';

interface UseMentionsValueInput {
  value: string | undefined;
  defaultValue: string | undefined;
  onChange: ((payload: MentionsChangePayload) => void) | undefined;
  singleLine: boolean;
  configs: MentionConfig[];
  setCaret: (caret: number, walk: MentionWalk) => void;
}

interface PendingEdit {
  value: string;
  caret: number;
  caretBefore: number;
  type: MentionsHistoryChangeType;
}

function toMarkupValue(value: unknown): string | undefined {
  if (typeof value === 'object' && value !== null && 'value' in value) {
    const markup = (value as { value?: unknown }).value;
    return typeof markup === 'string' ? markup : undefined;
  }
  return typeof value === 'string' ? value : undefined;
}

export function useMentionsValue({
  value,
  defaultValue,
  onChange,
  singleLine,
  configs,
  setCaret,
}: UseMentionsValueInput) {
  const markupValue = toMarkupValue(value);
  const [_value, setValueState] = useUncontrolled({
    value: markupValue === undefined ? undefined : normalizeNewlines(markupValue, singleLine),
    defaultValue:
      defaultValue === undefined ? undefined : normalizeNewlines(defaultValue, singleLine),
    finalValue: '',
  });

  const walk = walkMentions(_value, configs);
  const history = useMentionsHistory(_value, walk.plainText.length);
  const pendingEditRef = useRef<PendingEdit | null>(null);

  const applyEdit = (
    newValue: string,
    caret: number,
    caretBefore: number,
    reason: MentionsChangeReason,
    mentionId?: string
  ) => {
    const nextWalk = walkMentions(normalizeNewlines(newValue, singleLine), configs);
    setValueState(nextWalk.value);
    onChange?.({
      value: nextWalk.value,
      plainTextValue: nextWalk.plainText,
      idValue: getIdText(nextWalk, configs),
      mentions: nextWalk.spans.map(toMentionOccurrence),
      mentionId,
      previousValue: _value,
      reason,
    });
    pendingEditRef.current =
      reason.type === 'undo' || reason.type === 'redo'
        ? null
        : { value: nextWalk.value, caret, caretBefore, type: reason.type };
    setCaret(caret, nextWalk);
    return nextWalk;
  };

  useEffect(() => {
    const pending = pendingEditRef.current;
    pendingEditRef.current = null;
    if (pending && pending.value === _value) {
      history.push(_value, pending.caret, pending.caretBefore, pending.type);
    } else {
      history.syncExternal(_value, walk.plainText.length);
    }
  }, [_value]);

  return {
    walk,
    applyEdit,
    undo: history.undo,
    redo: history.redo,
  };
}
