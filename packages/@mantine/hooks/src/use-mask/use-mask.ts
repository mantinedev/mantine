import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_TOKENS: Record<string, RegExp> = {
  '9': /[0-9]/,
  a: /[A-Za-z]/,
  A: /[A-Z]/,
  '*': /[A-Za-z0-9]/,
  '#': /[-+0-9]/,
};

export interface UseMaskOptions {
  /** Mask pattern string or array of string literals and RegExp objects */
  mask: string | Array<string | RegExp>;

  /** Override or extend the default token map */
  tokens?: Record<string, RegExp>;

  /** Called before masking on each keystroke, can return overrides for mask options */
  modify?: (
    value: string
  ) => Partial<Pick<UseMaskOptions, 'mask' | 'tokens' | 'slotChar' | 'separate'>> | undefined;

  /** When true, raw and display values are decoupled */
  separate?: boolean;

  /** Character displayed in unfilled slots, `"_"` by default */
  slotChar?: string | null;

  /** Show mask pattern even when field is empty and unfocused */
  alwaysShowMask?: boolean;

  /** Show mask placeholder on focus, `true` by default */
  showMaskOnFocus?: boolean;

  /** Transform each character before validation and insertion */
  transform?: (char: string) => string;

  /** Clear value on blur when mask is incomplete, `false` by default */
  autoClear?: boolean;

  /** Sets aria-invalid on the input */
  invalid?: boolean;

  /** Called on every change with raw and masked values */
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;

  /** Called when all required mask slots are filled */
  onComplete?: (maskedValue: string, rawValue: string) => void;

  /** Escape hatch for advanced cursor/value manipulation */
  beforeMaskedStateChange?: (states: {
    previousState: MaskState;
    currentState: MaskState;
    nextState: MaskState;
  }) => MaskState;
}

export interface MaskState {
  value: string;
  selection: { start: number; end: number } | null;
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
}

interface MaskSlot {
  type: 'token' | 'literal';
  char: string;
  pattern?: RegExp;
  optional?: boolean;
}

function parseMask(
  mask: string | Array<string | RegExp>,
  tokens: Record<string, RegExp>
): MaskSlot[] {
  if (Array.isArray(mask)) {
    return mask.map((item) => {
      if (item instanceof RegExp) {
        return { type: 'token', char: '_', pattern: item };
      }
      return { type: 'literal', char: item };
    });
  }

  const slots: MaskSlot[] = [];
  let optional = false;

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];

    if (char === '\\' && i + 1 < mask.length) {
      i++;
      slots.push({ type: 'literal', char: mask[i] });
      continue;
    }

    if (char === '?') {
      optional = true;
      continue;
    }

    if (tokens[char]) {
      slots.push({ type: 'token', char, pattern: tokens[char], optional });
    } else {
      slots.push({ type: 'literal', char, optional });
    }
  }

  return slots;
}

function getSlotChar(slotCharOption: string | null | undefined, index: number): string {
  if (slotCharOption === null || slotCharOption === '' || slotCharOption === undefined) {
    return '';
  }
  if (slotCharOption.length > 1) {
    return slotCharOption[index] || '_';
  }
  return slotCharOption;
}

function applyMaskToRaw(
  raw: string,
  slots: MaskSlot[],
  _slotCharOption: string | null | undefined,
  transform?: (char: string) => string
): string {
  let result = '';
  let rawIndex = 0;
  let slotIndex = 0;

  for (slotIndex = 0; slotIndex < slots.length; slotIndex++) {
    const slot = slots[slotIndex];
    if (slot.type === 'literal') {
      result += slot.char;
    } else if (rawIndex < raw.length) {
      const ch = transform ? transform(raw[rawIndex]) : raw[rawIndex];
      if (slot.pattern && slot.pattern.test(ch)) {
        result += ch;
        rawIndex++;
      } else {
        rawIndex++;
        slotIndex--;
      }
    } else {
      break;
    }
  }

  return result;
}

function buildDisplayValue(
  value: string,
  slots: MaskSlot[],
  slotCharOption: string | null | undefined,
  showSlots: boolean
): string {
  if (!showSlots) {
    return value;
  }

  let display = value;

  for (let i = value.length; i < slots.length; i++) {
    const slot = slots[i];
    if (slot.type === 'literal') {
      display += slot.char;
    } else {
      const sc = getSlotChar(slotCharOption, i);
      if (!sc) {
        break;
      }
      display += sc;
    }
  }

  return display;
}

function extractRaw(masked: string, slots: MaskSlot[]): string {
  let raw = '';
  for (let i = 0; i < masked.length && i < slots.length; i++) {
    if (slots[i].type === 'token') {
      raw += masked[i];
    }
  }
  return raw;
}

function checkComplete(masked: string, slots: MaskSlot[]): boolean {
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].type === 'token' && !slots[i].optional) {
      if (i >= masked.length) {
        return false;
      }
      if (!slots[i].pattern!.test(masked[i])) {
        return false;
      }
    }
  }
  return true;
}

function findNextTokenIndex(slots: MaskSlot[], from: number): number {
  for (let i = from; i < slots.length; i++) {
    if (slots[i].type === 'token') {
      return i;
    }
  }
  return slots.length;
}

function findPrevTokenIndex(slots: MaskSlot[], from: number): number {
  for (let i = from; i >= 0; i--) {
    if (slots[i].type === 'token') {
      return i;
    }
  }
  return -1;
}

function processInput(
  inputValue: string,
  slots: MaskSlot[],
  _slotCharOption: string | null | undefined
): string {
  let result = '';
  let inputIndex = 0;

  for (
    let slotIndex = 0;
    slotIndex < slots.length && inputIndex <= inputValue.length;
    slotIndex++
  ) {
    const slot = slots[slotIndex];

    if (slot.type === 'literal') {
      result += slot.char;
      if (inputIndex < inputValue.length && inputValue[inputIndex] === slot.char) {
        inputIndex++;
      }
      continue;
    }

    if (inputIndex >= inputValue.length) {
      break;
    }

    while (inputIndex < inputValue.length) {
      const ch = inputValue[inputIndex];
      inputIndex++;

      if (slot.pattern!.test(ch)) {
        result += ch;
        break;
      }
    }

    if (result.length <= slotIndex) {
      break;
    }
  }

  return result;
}

function getResolvedOptions(options: UseMaskOptions, rawValue: string) {
  const tokens = { ...DEFAULT_TOKENS, ...options.tokens };
  let mask = options.mask;
  let slotChar: string | null | undefined = options.slotChar === undefined ? '_' : options.slotChar;
  let separate = options.separate ?? false;

  if (options.modify) {
    const overrides = options.modify(rawValue);
    if (overrides) {
      if (overrides.mask !== undefined) {
        mask = overrides.mask;
      }
      if (overrides.tokens !== undefined) {
        Object.assign(tokens, overrides.tokens);
      }
      if (overrides.slotChar !== undefined) {
        slotChar = overrides.slotChar;
      }
      if (overrides.separate !== undefined) {
        separate = overrides.separate;
      }
    }
  }

  const slots = parseMask(mask, tokens);
  return { slots, slotChar, separate, tokens, transform: options.transform };
}

export function formatMask(raw: string, options: UseMaskOptions): string {
  const { slots, slotChar, transform } = getResolvedOptions(options, raw);
  return applyMaskToRaw(raw, slots, slotChar, transform);
}

export function unformatMask(masked: string, options: UseMaskOptions): string {
  const { slots } = getResolvedOptions(options, '');
  return extractRaw(masked, slots);
}

export function isMaskComplete(masked: string, options: UseMaskOptions): boolean {
  const { slots } = getResolvedOptions(options, '');
  return checkComplete(masked, slots);
}

export function generatePattern(mode: 'full' | 'full-inexact', options: UseMaskOptions): string {
  const { slots } = getResolvedOptions(options, '');
  let pattern = '';

  for (const slot of slots) {
    if (slot.type === 'literal') {
      pattern += slot.char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    } else {
      const src = slot.pattern!.source;
      if (mode === 'full-inexact') {
        pattern += slot.optional ? `${src}?` : src;
      } else {
        pattern += slot.optional ? `(${src})?` : `(${src})`;
      }
    }
  }

  return pattern;
}

export function useMask(options: UseMaskOptions): UseMaskReturnValue {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [maskedValue, setMaskedValue] = useState('');
  const [rawValue, setRawValue] = useState('');
  const processedRef = useRef('');
  const wasCompleteRef = useRef(false);
  const isFocusedRef = useRef(false);

  const getOptions = useCallback(() => {
    const opts = optionsRef.current;
    return getResolvedOptions(opts, rawValue);
  }, [rawValue]);

  const updateValue = useCallback(
    (newMasked: string, cursorPos?: number) => {
      const opts = optionsRef.current;
      const { slots } = getResolvedOptions(
        opts,
        extractRaw(newMasked, getResolvedOptions(opts, '').slots)
      );
      const raw = extractRaw(newMasked, slots);

      const { slots: resolvedSlots, slotChar } = getResolvedOptions(opts, raw);

      const reprocessed = processInput(newMasked, resolvedSlots, slotChar);
      const newRaw = extractRaw(reprocessed, resolvedSlots);

      const showSlots = opts.alwaysShowMask || isFocusedRef.current;
      const showOnFocus = opts.showMaskOnFocus !== false;
      const shouldShowSlots = showSlots && (showOnFocus || reprocessed.length > 0);

      const displayValue = buildDisplayValue(reprocessed, resolvedSlots, slotChar, shouldShowSlots);

      processedRef.current = reprocessed;
      setMaskedValue(displayValue);
      setRawValue(newRaw);

      if (inputRef.current) {
        inputRef.current.value = displayValue;
        if (cursorPos !== undefined && document.activeElement === inputRef.current) {
          const pos = Math.min(cursorPos, reprocessed.length);
          inputRef.current.setSelectionRange(pos, pos);
        }
      }

      if (opts.onChangeRaw) {
        opts.onChangeRaw(newRaw, displayValue);
      }

      const complete = checkComplete(reprocessed, resolvedSlots);
      if (complete && !wasCompleteRef.current && opts.onComplete) {
        opts.onComplete(displayValue, newRaw);
      }
      wasCompleteRef.current = complete;

      return { displayValue, newRaw, reprocessed, resolvedSlots };
    },
    [getOptions]
  );

  const handleInput = useCallback(
    (e: Event) => {
      const input = e.target as HTMLInputElement;
      const opts = optionsRef.current;

      const { slots: resolvedSlots, slotChar, transform } = getResolvedOptions(opts, '');
      const raw = extractRaw(input.value, resolvedSlots);
      const reformatted = applyMaskToRaw(raw, resolvedSlots, slotChar, transform);
      updateValue(reformatted, reformatted.length);
    },
    [updateValue]
  );

  const clampCursorToProcessed = useCallback((input: HTMLInputElement) => {
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    if (start !== end) {
      return;
    }

    const opts = optionsRef.current;
    const { slots } = getResolvedOptions(opts, '');
    const processed = processedRef.current;
    const endPos =
      processed.length > 0
        ? findNextEditablePosition(processed.length, slots, processed)
        : findNextTokenIndex(slots, 0);
    const startPos = findNextTokenIndex(slots, 0);

    if (start > endPos || start < startPos) {
      input.setSelectionRange(endPos, endPos);
    }
  }, []);

  const handleFocus = useCallback(() => {
    isFocusedRef.current = true;
    const opts = optionsRef.current;
    const input = inputRef.current;

    if (!input) {
      return;
    }

    const { slots, slotChar } = getResolvedOptions(opts, '');
    const showOnFocus = opts.showMaskOnFocus !== false;
    const processed = processedRef.current;

    if (showOnFocus || opts.alwaysShowMask) {
      const display = buildDisplayValue(processed, slots, slotChar, true);
      input.value = display;
      setMaskedValue(display);
    }

    requestAnimationFrame(() => {
      if (input === document.activeElement) {
        clampCursorToProcessed(input);
      }
    });
  }, [clampCursorToProcessed]);

  const handleMouseUp = useCallback(() => {
    const input = inputRef.current;
    if (!input || input !== document.activeElement) {
      return;
    }

    clampCursorToProcessed(input);
  }, [clampCursorToProcessed]);

  const handleMouseDown = useCallback(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    requestAnimationFrame(() => {
      if (input !== document.activeElement) {
        return;
      }

      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? 0;
      if (start !== end) {
        return;
      }

      const opts = optionsRef.current;
      const { slots } = getResolvedOptions(opts, '');
      const processed = processedRef.current;
      const endPos =
        processed.length > 0
          ? findNextEditablePosition(processed.length, slots, processed)
          : findNextTokenIndex(slots, 0);

      if (start > endPos) {
        input.setSelectionRange(endPos, endPos);
      }
    });
  }, []);

  const handleBlur = useCallback(() => {
    isFocusedRef.current = false;
    const opts = optionsRef.current;
    const input = inputRef.current;

    if (!input) {
      return;
    }

    const { slots, slotChar } = getResolvedOptions(opts, rawValue);
    const expectedFocusDisplay = buildDisplayValue(processedRef.current, slots, slotChar, true);
    const processed =
      input.value === expectedFocusDisplay
        ? processedRef.current
        : processInput(input.value, slots, slotChar);
    const complete = checkComplete(processed, slots);

    if (opts.autoClear && !complete && processed.length > 0) {
      input.value = '';
      processedRef.current = '';
      setMaskedValue('');
      setRawValue('');
      wasCompleteRef.current = false;

      if (opts.onChangeRaw) {
        opts.onChangeRaw('', '');
      }

      if (opts.alwaysShowMask) {
        const emptyDisplay = buildDisplayValue('', slots, slotChar, true);
        input.value = emptyDisplay;
        setMaskedValue(emptyDisplay);
      }
      return;
    }

    if (!opts.alwaysShowMask && !complete) {
      if (extractRaw(processed, slots).length === 0) {
        input.value = '';
        processedRef.current = '';
        setMaskedValue('');
        setRawValue('');
        wasCompleteRef.current = false;

        if (opts.onChangeRaw) {
          opts.onChangeRaw('', '');
        }
        return;
      }

      const display = buildDisplayValue(processed, slots, slotChar, false);
      input.value = display;
      setMaskedValue(display);
    }
  }, [rawValue]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      const opts = optionsRef.current;

      const { slots, slotChar, transform } = getResolvedOptions(opts, rawValue);
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? 0;
      const processed = processedRef.current;

      if (e.key === 'Backspace') {
        e.preventDefault();

        if (e.metaKey || (e.ctrlKey && !e.altKey)) {
          const clampedStart = Math.min(start, processed.length);
          const afterRaw = extractRaw(processed.slice(clampedStart), slots.slice(clampedStart));
          const newValue = applyMaskToRaw(afterRaw, slots, slotChar, transform);
          updateValue(newValue, 0);
          return;
        }

        if (start !== end) {
          const clampedEnd = Math.min(end, processed.length);
          const before = processed.slice(0, start);
          const afterRaw = extractRaw(processed.slice(clampedEnd), slots.slice(clampedEnd));
          const newValue = applyMaskToRaw(
            extractRaw(before, slots) + afterRaw,
            slots,
            slotChar,
            transform
          );
          updateValue(newValue, start);
          return;
        }

        if (start === 0) {
          return;
        }

        let deletePos = start - 1;
        while (deletePos >= 0 && slots[deletePos] && slots[deletePos].type === 'literal') {
          deletePos--;
        }

        if (deletePos < 0) {
          return;
        }

        const beforeRaw = extractRaw(processed.slice(0, deletePos), slots.slice(0, deletePos));
        const afterRaw = extractRaw(processed.slice(deletePos + 1), slots.slice(deletePos + 1));
        const newValue = applyMaskToRaw(beforeRaw + afterRaw, slots, slotChar, transform);
        updateValue(newValue, deletePos);
      } else if (e.key === 'Delete') {
        e.preventDefault();

        if (start !== end) {
          const clampedEnd = Math.min(end, processed.length);
          const before = processed.slice(0, start);
          const afterRaw = extractRaw(processed.slice(clampedEnd), slots.slice(clampedEnd));
          const newValue = applyMaskToRaw(
            extractRaw(before, slots) + afterRaw,
            slots,
            slotChar,
            transform
          );
          updateValue(newValue, start);
          return;
        }

        let deletePos = start;
        while (
          deletePos < slots.length &&
          slots[deletePos] &&
          slots[deletePos].type === 'literal'
        ) {
          deletePos++;
        }

        if (deletePos >= processed.length) {
          return;
        }

        const beforeRaw = extractRaw(processed.slice(0, start), slots.slice(0, start));
        const afterRaw = extractRaw(processed.slice(deletePos + 1), slots.slice(deletePos + 1));
        const newValue = applyMaskToRaw(beforeRaw + afterRaw, slots, slotChar, transform);
        updateValue(newValue, start);
      } else if (e.key === 'ArrowRight' && !e.shiftKey) {
        const nextPos = findNextEditablePosition(start + 1, slots, input.value);
        if (nextPos !== start + 1) {
          e.preventDefault();
          input.setSelectionRange(nextPos, nextPos);
        }
      } else if (e.key === 'ArrowLeft' && !e.shiftKey) {
        if (start > 0) {
          const prevToken = findPrevTokenIndex(slots, start - 1);
          if (prevToken >= 0 && prevToken !== start - 1) {
            e.preventDefault();
            input.setSelectionRange(prevToken + 1, prevToken + 1);
          }
        }
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();

        let insertPos = Math.min(start, processed.length);
        while (
          insertPos < slots.length &&
          slots[insertPos] &&
          slots[insertPos].type === 'literal'
        ) {
          insertPos++;
        }

        if (insertPos >= slots.length) {
          return;
        }

        const slot = slots[insertPos];
        const ch = transform ? transform(e.key) : e.key;
        if (!slot.pattern!.test(ch)) {
          return;
        }

        const beforeRaw = extractRaw(processed.slice(0, insertPos), slots.slice(0, insertPos));
        const afterRaw =
          start < end
            ? extractRaw(
                processed.slice(Math.min(end, processed.length)),
                slots.slice(Math.min(end, processed.length))
              )
            : extractRaw(processed.slice(insertPos), slots.slice(insertPos));
        const newValue = applyMaskToRaw(beforeRaw + ch + afterRaw, slots, slotChar, transform);
        const newCursorPos = findNextEditablePosition(insertPos + 1, slots, newValue);
        updateValue(newValue, newCursorPos);
      }
    },
    [rawValue, updateValue]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      e.preventDefault();
      const input = e.target as HTMLInputElement;
      const opts = optionsRef.current;

      const pastedText = e.clipboardData?.getData('text') ?? '';
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? 0;
      const processed = processedRef.current;

      const { slots, slotChar, transform } = getResolvedOptions(opts, '');
      const clampedEnd = Math.min(end, processed.length);
      const beforeRaw = extractRaw(processed.slice(0, start), slots.slice(0, start));
      const afterRaw = extractRaw(processed.slice(clampedEnd), slots.slice(clampedEnd));
      const newValue = applyMaskToRaw(
        beforeRaw + pastedText + afterRaw,
        slots,
        slotChar,
        transform
      );

      const { reprocessed } = updateValue(newValue);

      const pasteEndPos = Math.min((reprocessed || newValue).length, slots.length);
      if (input === document.activeElement) {
        input.setSelectionRange(pasteEndPos, pasteEndPos);
      }
    },
    [updateValue]
  );

  const setAriaAttributes = useCallback((input: HTMLInputElement) => {
    const opts = optionsRef.current;

    if (opts.invalid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  }, []);

  const refCallback = useCallback(
    (node: HTMLInputElement | null) => {
      const prevInput = inputRef.current;

      if (prevInput) {
        prevInput.removeEventListener('input', handleInput);
        prevInput.removeEventListener('focus', handleFocus);
        prevInput.removeEventListener('blur', handleBlur);
        prevInput.removeEventListener('mousedown', handleMouseDown);
        prevInput.removeEventListener('mouseup', handleMouseUp);
        prevInput.removeEventListener('keydown', handleKeyDown as EventListener);
        prevInput.removeEventListener('paste', handlePaste as EventListener);
      }

      inputRef.current = node;

      if (node) {
        node.addEventListener('input', handleInput);
        node.addEventListener('focus', handleFocus);
        node.addEventListener('blur', handleBlur);
        node.addEventListener('mousedown', handleMouseDown);
        node.addEventListener('mouseup', handleMouseUp);
        node.addEventListener('keydown', handleKeyDown as EventListener);
        node.addEventListener('paste', handlePaste as EventListener);

        setAriaAttributes(node);

        if (options.alwaysShowMask && !node.value) {
          const { slots, slotChar } = getResolvedOptions(options, '');
          const display = buildDisplayValue('', slots, slotChar, true);
          node.value = display;
          setMaskedValue(display);
        }
      }
    },
    [
      handleInput,
      handleFocus,
      handleBlur,
      handleMouseDown,
      handleMouseUp,
      handleKeyDown,
      handlePaste,
      setAriaAttributes,
      options,
    ]
  );

  useEffect(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    setAriaAttributes(input);
  }, [options.invalid, setAriaAttributes]);

  const isComplete = (() => {
    const { slots } = getOptions();
    return checkComplete(processedRef.current, slots);
  })();

  const reset = useCallback(() => {
    const opts = optionsRef.current;
    const input = inputRef.current;

    processedRef.current = '';
    setMaskedValue('');
    setRawValue('');
    wasCompleteRef.current = false;

    if (input) {
      if (opts.alwaysShowMask) {
        const { slots, slotChar } = getResolvedOptions(opts, '');
        const display = buildDisplayValue('', slots, slotChar, true);
        input.value = display;
        setMaskedValue(display);
      } else {
        input.value = '';
      }
    }

    if (opts.onChangeRaw) {
      opts.onChangeRaw('', '');
    }
  }, []);

  return {
    ref: refCallback,
    value: maskedValue,
    rawValue,
    isComplete,
    reset,
  };
}

function findNextEditablePosition(from: number, slots: MaskSlot[], value: string): number {
  let pos = from;
  while (pos < slots.length && pos < value.length && slots[pos] && slots[pos].type === 'literal') {
    pos++;
  }
  return pos;
}

export namespace useMask {
  export type Options = UseMaskOptions;
  export type ReturnValue = UseMaskReturnValue;
}
