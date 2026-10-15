import { useCallback, useEffect, useRef, useState } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { useLatestRef } from '../utils';
import {
  getArrowCaret,
  getDisplay,
  getEdit,
  getFirstTokenIndex,
  getStateFromRaw,
  getStateFromText,
  MaskEditIntent,
  MaskOptions,
  MaskState,
} from './mask-engine';

export { formatMask, generatePattern, isMaskComplete, unformatMask } from './mask-engine';

export interface UseMaskOptions extends MaskOptions {
  /** Clear value on blur when mask is incomplete, `false` by default */
  autoClear?: boolean;

  /** Sets `aria-invalid="true"` when `true` and removes the attribute when `false`, the attribute is left alone when not set */
  invalid?: boolean;

  /** Called on every edit, the first argument is the raw (unmasked) value, the second is the masked value displayed in the input */
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;

  /** Called when all required mask slots are filled, the first argument is the masked value, the second is the raw (unmasked) value */
  onComplete?: (maskedValue: string, rawValue: string) => void;
}

export interface UseMaskReturnValue {
  /** Ref to attach to the input element */
  ref: React.RefCallback<HTMLInputElement>;

  /** Current masked display value */
  value: string;

  /** Current raw unmasked value */
  rawValue: string;

  /** Whether all required mask slots are filled */
  isComplete: boolean;

  /** Clear the input value and reset state */
  reset: () => void;

  /** Sets the raw (unmasked) value and applies the mask to it, does not call `onChangeRaw` and `onComplete` */
  setValue: (value: string) => void;
}

interface HistoryEntry {
  state: MaskState;
  caret: number;
}

interface CommitOptions {
  caret?: number;
  range?: { start: number; end: number };
  notify: boolean;
}

interface MaskSnapshot {
  display: string;
  rawValue: string;
  isComplete: boolean;
}

const MAX_UNDO_HISTORY = 100;

function isLocked(input: HTMLInputElement) {
  return input.readOnly || input.disabled;
}

function getMaskKey(options: UseMaskOptions) {
  const serialize = (part: string | RegExp) => (typeof part === 'string' ? part : String(part));
  const mask = Array.isArray(options.mask) ? options.mask.map(serialize) : options.mask;
  const tokens = options.tokens
    ? Object.entries(options.tokens).map(([key, value]) => [key, String(value)])
    : null;

  return JSON.stringify([mask, tokens]);
}

function getDisplayKey(options: UseMaskOptions) {
  return JSON.stringify([options.slotChar, options.alwaysShowMask, options.showMaskOnFocus]);
}

function getInputIntent(inputType: string, data: string | null): MaskEditIntent | null {
  if (inputType === 'deleteContentBackward') {
    return { type: 'deleteBackward' };
  }
  if (inputType === 'deleteContentForward') {
    return { type: 'deleteForward' };
  }
  if (inputType === 'insertText' && data) {
    return { type: 'insert', text: data };
  }
  return null;
}

function getInputDiff(prev: string, curr: string) {
  let prefix = 0;
  const maxPrefix = Math.min(prev.length, curr.length);
  while (prefix < maxPrefix && prev[prefix] === curr[prefix]) {
    prefix++;
  }

  let suffix = 0;
  const maxSuffix = Math.min(prev.length - prefix, curr.length - prefix);
  while (suffix < maxSuffix && prev[prev.length - 1 - suffix] === curr[curr.length - 1 - suffix]) {
    suffix++;
  }

  return {
    prefix,
    removedEnd: prev.length - suffix,
    inserted: curr.slice(prefix, curr.length - suffix),
  };
}

export function useMask(options: UseMaskOptions): UseMaskReturnValue {
  const optionsRef = useLatestRef(options);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const stateRef = useRef<MaskState | null>(null);
  const displayRef = useRef('');
  const focusedRef = useRef(false);
  const composingRef = useRef(false);
  const attachedNodeRef = useRef<HTMLInputElement | null>(null);
  const ariaInvalidSetRef = useRef(false);
  const undoStackRef = useRef<HistoryEntry[]>([]);
  const redoStackRef = useRef<HistoryEntry[]>([]);
  const [snapshot, setSnapshot] = useState<MaskSnapshot>({
    display: '',
    rawValue: '',
    isComplete: false,
  });

  if (stateRef.current === null) {
    stateRef.current = getStateFromRaw(options, '');
  }

  const getState = useCallback(() => stateRef.current!, []);

  const commit = useCallback((next: MaskState, { caret, range, notify }: CommitOptions) => {
    const opts = optionsRef.current;
    const prev = stateRef.current!;
    const display = getDisplay(next, opts, focusedRef.current);
    const input = inputRef.current;

    stateRef.current = next;
    displayRef.current = display;

    if (input) {
      input.value = display;
      if (input === document.activeElement) {
        if (caret !== undefined) {
          const position = Math.min(caret, next.cells.length);
          input.setSelectionRange(position, position);
        } else if (range) {
          input.setSelectionRange(
            Math.min(range.start, display.length),
            Math.min(range.end, display.length)
          );
        }
      }
    }

    setSnapshot((current) =>
      current.display === display &&
      current.rawValue === next.raw &&
      current.isComplete === next.complete
        ? current
        : { display, rawValue: next.raw, isComplete: next.complete }
    );

    if (notify && next.raw !== prev.raw) {
      opts.onChangeRaw?.(next.raw, display);
    }

    if (notify && next.complete && !prev.complete) {
      opts.onComplete?.(getDisplay(next, opts, false), next.raw);
    }
  }, []);

  const clearHistory = useCallback(() => {
    undoStackRef.current = [];
    redoStackRef.current = [];
  }, []);

  const pushHistory = useCallback(
    (caret: number) => {
      const state = getState();
      const stack = undoStackRef.current;
      const top = stack[stack.length - 1];
      redoStackRef.current = [];

      if (top && top.state.cells === state.cells && top.caret === caret) {
        return;
      }

      stack.push({ state, caret });
      if (stack.length > MAX_UNDO_HISTORY) {
        stack.shift();
      }
    },
    [getState]
  );

  const moveHistory = useCallback(
    (from: HistoryEntry[], to: HistoryEntry[], input: HTMLInputElement) => {
      const target = from.pop();
      if (!target) {
        return;
      }

      to.push({ state: getState(), caret: input.selectionStart ?? 0 });
      commit(target.state, { caret: target.caret, notify: true });
    },
    [commit, getState]
  );

  const runEdit = useCallback(
    (start: number, end: number, intent: MaskEditIntent) => {
      const current = getState();
      const edit = getEdit(optionsRef.current, current, start, end, intent);
      if (!edit) {
        return false;
      }

      if (edit.state.cells !== current.cells) {
        pushHistory(start);
      }

      commit(edit.state, { caret: edit.caret, notify: true });
      return true;
    },
    [commit, getState, pushHistory]
  );

  const syncInput = useCallback(
    (node: HTMLInputElement, isFirstNode: boolean) => {
      const opts = optionsRef.current;
      const text = node.value;
      const emptyDisplay = getDisplay(getStateFromRaw(opts, ''), opts, focusedRef.current);
      const keep = text === '' || text === displayRef.current || text === emptyDisplay;
      commit(keep ? getState() : getStateFromText(opts, text), { notify: !isFirstNode });
    },
    [commit, getState]
  );

  const normalizeInput = useCallback(
    (input: HTMLInputElement, inputType?: string) => {
      const { prefix, removedEnd, inserted } = getInputDiff(displayRef.current, input.value);
      if (!inserted && removedEnd === prefix) {
        return;
      }

      const single = removedEnd - prefix === 1;
      let start = prefix;
      let end = removedEnd;
      let intent: MaskEditIntent = { type: 'deleteBackward' };

      if (inserted) {
        intent = { type: 'insert', text: inserted };
      } else if (single && inputType === 'deleteContentBackward') {
        start = removedEnd;
      } else if (single && inputType === 'deleteContentForward') {
        intent = { type: 'deleteForward' };
        end = prefix;
      }

      if (!runEdit(start, end, intent)) {
        commit(getState(), { range: { start, end }, notify: false });
      }
    },
    [commit, getState, runEdit]
  );

  const handleBeforeInput = useCallback(
    (e: InputEvent) => {
      const input = e.target as HTMLInputElement;
      if (isLocked(input) || e.isComposing || composingRef.current || !e.cancelable) {
        return;
      }

      const intent = getInputIntent(e.inputType, e.data);
      if (!intent) {
        return;
      }

      e.preventDefault();
      const start = input.selectionStart ?? 0;
      runEdit(start, input.selectionEnd ?? start, intent);
    },
    [runEdit]
  );

  const handleInput = useCallback(
    (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (isLocked(input) || (e as InputEvent).isComposing || composingRef.current) {
        return;
      }

      normalizeInput(input, (e as InputEvent).inputType);
    },
    [normalizeInput]
  );

  const handleCompositionStart = useCallback(() => {
    composingRef.current = true;
  }, []);

  const handleCompositionEnd = useCallback(
    (e: Event) => {
      composingRef.current = false;
      const input = e.target as HTMLInputElement;
      if (!isLocked(input)) {
        normalizeInput(input);
      }
    },
    [normalizeInput]
  );

  const clampCaret = useCallback(
    (input: HTMLInputElement, clampStart: boolean) => {
      const start = input.selectionStart ?? 0;
      if (input !== document.activeElement || start !== input.selectionEnd) {
        return;
      }

      const state = getState();
      const endPosition = state.cells.length;
      if (start > endPosition || (clampStart && start < getFirstTokenIndex(state))) {
        input.setSelectionRange(endPosition, endPosition);
      }
    },
    [getState]
  );

  const handleFocus = useCallback(() => {
    focusedRef.current = true;
    const input = inputRef.current;
    if (!input) {
      return;
    }

    commit(getState(), { notify: false });
    requestAnimationFrame(() => clampCaret(input, true));
  }, [clampCaret, commit, getState]);

  const handleMouseUp = useCallback(() => {
    if (inputRef.current) {
      clampCaret(inputRef.current, true);
    }
  }, [clampCaret]);

  const handleMouseDown = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      requestAnimationFrame(() => clampCaret(input, false));
    }
  }, [clampCaret]);

  const handleBlur = useCallback(() => {
    focusedRef.current = false;
    const opts = optionsRef.current;
    const state = getState();

    if (opts.autoClear && !state.complete && state.raw) {
      commit(getStateFromRaw(opts, ''), { notify: true });
    } else {
      commit(state, { notify: false });
    }
  }, [commit, getState]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      if (e.isComposing || composingRef.current) {
        return;
      }

      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? start;

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        if (e.shiftKey || e.metaKey || e.altKey || e.ctrlKey || start !== end) {
          return;
        }
        const direction = e.key === 'ArrowRight' ? 'right' : 'left';
        const caret = getArrowCaret(getState(), start, direction, input.value.length);
        if (caret !== null) {
          e.preventDefault();
          input.setSelectionRange(caret, caret);
        }
        return;
      }

      if (isLocked(input)) {
        return;
      }

      const modifier = e.metaKey || (e.ctrlKey && !e.altKey);
      const key = e.key.toLowerCase();

      if (modifier && key === 'z' && !e.shiftKey) {
        e.preventDefault();
        moveHistory(undoStackRef.current, redoStackRef.current, input);
      } else if (modifier && ((key === 'z' && e.shiftKey) || (key === 'y' && !e.shiftKey))) {
        e.preventDefault();
        moveHistory(redoStackRef.current, undoStackRef.current, input);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        runEdit(start, end, { type: modifier ? 'deleteToStart' : 'deleteBackward' });
      } else if (e.key === 'Delete') {
        e.preventDefault();
        runEdit(start, end, { type: 'deleteForward' });
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        runEdit(start, end, { type: 'insert', text: e.key });
      }
    },
    [getState, moveHistory, runEdit]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      const input = e.target as HTMLInputElement;
      if (isLocked(input)) {
        return;
      }

      e.preventDefault();
      const start = input.selectionStart ?? 0;
      const text = e.clipboardData?.getData('text') ?? '';
      runEdit(start, input.selectionEnd ?? start, { type: 'insert', text });
    },
    [runEdit]
  );

  const setAriaAttributes = useCallback((input: HTMLInputElement) => {
    const opts = optionsRef.current;

    if (opts.invalid) {
      input.setAttribute('aria-invalid', 'true');
      ariaInvalidSetRef.current = true;
    } else if (opts.invalid === false || ariaInvalidSetRef.current) {
      input.removeAttribute('aria-invalid');
      ariaInvalidSetRef.current = false;
    }
  }, []);

  const refCallback = useCallback(
    (node: HTMLInputElement | null) => {
      const listeners: Array<[string, EventListener]> = [
        ['beforeinput', handleBeforeInput as EventListener],
        ['input', handleInput],
        ['change', handleInput],
        ['compositionstart', handleCompositionStart],
        ['compositionend', handleCompositionEnd],
        ['focus', handleFocus],
        ['blur', handleBlur],
        ['mousedown', handleMouseDown],
        ['mouseup', handleMouseUp],
        ['keydown', handleKeyDown as EventListener],
        ['paste', handlePaste as EventListener],
      ];

      listeners.forEach(([type, listener]) =>
        inputRef.current?.removeEventListener(type, listener)
      );

      inputRef.current = node;

      if (node) {
        listeners.forEach(([type, listener]) => node.addEventListener(type, listener));
        focusedRef.current = node === document.activeElement;
        setAriaAttributes(node);

        const previousNode = attachedNodeRef.current;
        attachedNodeRef.current = node;
        if (node === previousNode && composingRef.current) {
          return;
        }

        composingRef.current = false;
        syncInput(node, previousNode === null);
      }
    },
    [
      handleBeforeInput,
      handleInput,
      handleCompositionStart,
      handleCompositionEnd,
      handleFocus,
      handleBlur,
      handleMouseDown,
      handleMouseUp,
      handleKeyDown,
      handlePaste,
      syncInput,
      setAriaAttributes,
    ]
  );

  const maskKey = getMaskKey(options);
  const displayKey = getDisplayKey(options);

  useDidUpdate(() => {
    clearHistory();
    commit(getStateFromRaw(optionsRef.current, getState().raw), { notify: false });
  }, [maskKey, clearHistory, commit, getState]);

  useDidUpdate(() => {
    commit(getState(), { notify: false });
  }, [displayKey, commit, getState]);

  useEffect(() => {
    if (inputRef.current) {
      setAriaAttributes(inputRef.current);
    }
  }, [options.invalid, setAriaAttributes]);

  const applyRaw = useCallback(
    (raw: string, notify: boolean) => {
      const next = getStateFromRaw(optionsRef.current, raw);
      clearHistory();
      commit(next, { caret: next.cells.length, notify });
    },
    [clearHistory, commit]
  );

  const reset = useCallback(() => applyRaw('', true), [applyRaw]);
  const setValue = useCallback((next: string) => applyRaw(next, false), [applyRaw]);

  return {
    ref: refCallback,
    value: snapshot.display,
    rawValue: snapshot.rawValue,
    isComplete: snapshot.isComplete,
    reset,
    setValue,
  };
}

export namespace useMask {
  export type Options = UseMaskOptions;
  export type ReturnValue = UseMaskReturnValue;
}
