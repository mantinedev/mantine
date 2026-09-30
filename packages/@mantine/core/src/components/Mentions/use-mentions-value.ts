import { useEffect } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import type { MentionsChangePayload, MentionsChangeReason } from './Mentions.types';
import { useMentionsHistory } from './use-mentions-history';
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

export function useMentionsValue({
  value,
  defaultValue,
  onChange,
  singleLine,
  configs,
  setCaret,
}: UseMentionsValueInput) {
  const [_value, setValueState] = useUncontrolled({
    value: value === undefined ? undefined : normalizeNewlines(value, singleLine),
    defaultValue:
      defaultValue === undefined ? undefined : normalizeNewlines(defaultValue, singleLine),
    finalValue: '',
  });

  const walk = walkMentions(_value, configs);
  const history = useMentionsHistory(_value, walk.plainText.length);

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
    if (reason.type !== 'undo' && reason.type !== 'redo') {
      history.push(nextWalk.value, caret, caretBefore, reason.type);
    }
    setCaret(caret, nextWalk);
    return nextWalk;
  };

  useEffect(() => {
    history.syncExternal(_value, walk.plainText.length);
  }, [_value]);

  return {
    walk,
    applyEdit,
    undo: history.undo,
    redo: history.redo,
  };
}
