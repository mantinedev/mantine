import { useEffect, useRef, useState } from 'react';
import type { MentionOccurrence } from './Mentions.types';
import { toMentionOccurrence } from './utils/find-mention-occurrences';
import { getSelectionStates } from './utils/selection';
import type { MentionWalk } from './utils/walk-mentions';

type MentionsControlElement = HTMLTextAreaElement | HTMLInputElement;

export interface MentionsSelectionRange {
  start: number;
  end: number;
}

interface UseMentionsSelectionInput {
  controlRef: React.RefObject<MentionsControlElement | null>;
  onSelectionChange:
    | ((selection: MentionsSelectionRange, mentions: MentionOccurrence[]) => void)
    | undefined;
  onCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement> | undefined;
  onCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement> | undefined;
}

export function useMentionsSelection({
  controlRef,
  onSelectionChange,
  onCompositionStart,
  onCompositionEnd,
}: UseMentionsSelectionInput) {
  const [selection, setSelection] = useState<MentionsSelectionRange>({ start: 0, end: 0 });
  const selectionRef = useRef<MentionsSelectionRange>({ start: 0, end: 0 });
  const pendingCaretRef = useRef<number | null>(null);
  const composingRef = useRef(false);
  const notifiedRef = useRef<string | null>(null);

  const notifySelection = (start: number, end: number, walk: MentionWalk) => {
    const key = `${start}:${end}:${walk.value}`;
    if (!onSelectionChange || notifiedRef.current === key) {
      return;
    }

    notifiedRef.current = key;
    const states = getSelectionStates(walk.spans, start, end);
    onSelectionChange(
      { start, end },
      walk.spans.filter((span) => states.has(span.markupStart)).map(toMentionOccurrence)
    );
  };

  const setCaret = (caret: number, walk: MentionWalk) => {
    pendingCaretRef.current = caret;
    selectionRef.current = { start: caret, end: caret };
    setSelection({ start: caret, end: caret });
    notifySelection(caret, caret, walk);
  };

  const syncSelection = (target: MentionsControlElement, walk: MentionWalk) => {
    const start = target.selectionStart ?? 0;
    const end = target.selectionEnd ?? 0;
    selectionRef.current = { start, end };
    setSelection({ start, end });
    notifySelection(start, end, walk);
    return { start, end };
  };

  const readLiveSelection = (target: MentionsControlElement) => {
    const start = target.selectionStart ?? 0;
    const end = target.selectionEnd ?? 0;
    if (selectionRef.current.start !== start || selectionRef.current.end !== end) {
      selectionRef.current = { start, end };
    }
    return { start, end };
  };

  const isCaretRestorePending = () => pendingCaretRef.current != null;

  useEffect(() => {
    const control = controlRef.current;
    if (pendingCaretRef.current == null || !control) {
      return;
    }

    const caret = pendingCaretRef.current;
    pendingCaretRef.current = null;

    if (composingRef.current) {
      return;
    }

    control.setSelectionRange(caret, caret);
    selectionRef.current = { start: caret, end: caret };
  });

  const compositionHandlers = {
    onCompositionStart: (event: React.CompositionEvent<HTMLTextAreaElement>) => {
      composingRef.current = true;
      onCompositionStart?.(event);
    },
    onCompositionEnd: (event: React.CompositionEvent<HTMLTextAreaElement>) => {
      composingRef.current = false;
      onCompositionEnd?.(event);
    },
  };

  return {
    selection,
    selectionRef,
    setCaret,
    syncSelection,
    readLiveSelection,
    isCaretRestorePending,
    compositionHandlers,
  };
}
