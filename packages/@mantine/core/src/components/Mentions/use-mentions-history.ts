import { useRef } from 'react';
import type { MentionsChangeReasonType } from './Mentions.types';

export type MentionsHistoryChangeType =
  | Exclude<MentionsChangeReasonType, 'undo' | 'redo'>
  | 'external';

interface MentionsHistoryEntry {
  value: string;
  caret: number;
  caretBefore: number;
}

export interface MentionsHistoryRestore {
  value: string;
  caret: number;
}

interface MentionsHistoryState {
  entries: MentionsHistoryEntry[];
  index: number;
  lastType: MentionsHistoryChangeType | null;
  lastTime: number;
}

const MAX_ENTRIES = 100;
const COALESCE_MS = 400;

export function useMentionsHistory(initialValue: string, initialCaret: number) {
  const ref = useRef<MentionsHistoryState>(null as unknown as MentionsHistoryState);

  if (ref.current === null) {
    ref.current = {
      entries: [{ value: initialValue, caret: initialCaret, caretBefore: initialCaret }],
      index: 0,
      lastType: null,
      lastTime: 0,
    };
  }

  const push = (
    value: string,
    caret: number,
    caretBefore: number,
    type: MentionsHistoryChangeType
  ) => {
    const history = ref.current;
    const now = Date.now();
    const current = history.entries[history.index];
    if (current.value === value) {
      return;
    }

    const shouldCoalesce =
      type === 'input' && history.lastType === 'input' && now - history.lastTime < COALESCE_MS;

    if (shouldCoalesce) {
      history.entries[history.index] = { value, caret, caretBefore: current.caretBefore };
    } else {
      history.entries = history.entries.slice(0, history.index + 1);
      history.entries.push({ value, caret, caretBefore });
      if (history.entries.length > MAX_ENTRIES) {
        history.entries.shift();
      }
      history.index = history.entries.length - 1;
    }

    history.lastType = type;
    history.lastTime = now;
  };

  const undo = (): MentionsHistoryRestore | null => {
    const history = ref.current;
    if (history.index <= 0) {
      return null;
    }

    const undone = history.entries[history.index];
    history.index -= 1;
    history.lastType = null;
    return { value: history.entries[history.index].value, caret: undone.caretBefore };
  };

  const redo = (): MentionsHistoryRestore | null => {
    const history = ref.current;
    if (history.index >= history.entries.length - 1) {
      return null;
    }

    history.index += 1;
    history.lastType = null;
    const entry = history.entries[history.index];
    return { value: entry.value, caret: entry.caret };
  };

  const syncExternal = (value: string, caret: number) => {
    push(value, caret, caret, 'external');
  };

  return { push, undo, redo, syncExternal };
}
