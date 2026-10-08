import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useFormField, useLatestRef, useUncontrolled } from '@mantine/hooks';
import { createPinArray } from '../create-pin-array/create-pin-array';

export interface PinInputControllerOptions {
  /** Number of inputs @default 4 */
  length?: number;

  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Called when all inputs have value, called once per completion */
  onComplete?: (value: string) => void;
}

export interface PinInputController {
  /** Resolved `length` option, used internally by `PinInput` to render the inputs and to clamp every action that takes an index */
  length: number;

  /** Current value */
  value: string;

  /** Value of each input, always `length` items, empty string for an input without a value */
  fieldValues: string[];

  /** Index of the focused input, `-1` when none of the inputs is focused */
  focusedIndex: number;

  /** Returns current value */
  getValue: () => string;

  /** Returns value of each input, always `length` items, empty string for an input that has no value */
  getFieldValues: () => string[];

  /** Returns index of the focused input, `-1` when none of the inputs is focused */
  getFocusedIndex: () => number;

  /** Sets the value of all inputs at once, the value is truncated to `length` characters */
  setValue: (value: string) => void;

  /** Sets the value of a single input to the first character of the given value, ignored when the index is out of range */
  setFieldValue: (index: number, value: string) => void;

  /** Clears the value of all inputs */
  clear: () => void;

  /** Focuses the input at the given index, ignored when the index is out of range */
  focus: (index: number) => void;

  /** Focuses the input after the focused one, or after the last focused one when none of the inputs is focused. Focuses the first input when no input has been focused yet, ignored at the last input */
  focusNext: () => void;

  /** Focuses the input before the focused one, or before the last focused one when none of the inputs is focused. Focuses the last input when no input has been focused yet, ignored at the first input */
  focusPrevious: () => void;

  /** Returns `true` if all inputs have a value */
  isComplete: () => boolean;

  /** Returns the input element at the given index, `null` until a `PinInput` is mounted */
  getInputNode: (index: number) => HTMLInputElement | null;

  /** Sets the index of the focused input without moving focus, used internally by `PinInput` focus and blur handlers */
  setFocusedIndex: (index: number) => void;

  /** Associates an input element with an index, used internally by `PinInput` input ref */
  registerInput: (index: number, node: HTMLInputElement | null) => void;
}

export function usePinInput(options: PinInputControllerOptions = {}): PinInputController {
  const { length = 4, value: valueOption, defaultValue, onChange, onComplete } = options;
  const formField = useFormField<string>(onChange);
  const valueProp = formField.subscribed ? formField.value : valueOption;

  const completedRef = useRef(false);
  const lastFocusedIndexRef = useRef(-1);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const controlledValue = useMemo(
    () => (valueProp !== undefined ? createPinArray(length, valueProp) : undefined),
    [valueProp, length]
  );

  const [_fieldValues, setFieldValuesState] = useUncontrolled<string[]>({
    value: controlledValue,
    defaultValue: defaultValue?.split('').slice(0, length),
    finalValue: createPinArray(length, ''),
    onChange: (val) => {
      const stringValue = val.join('').trim();
      onChange?.(stringValue);

      if (stringValue.length === length && !completedRef.current) {
        completedRef.current = true;
        onComplete?.(stringValue);
      } else if (stringValue.length < length) {
        completedRef.current = false;
      }
    },
  });

  const fieldValues = useMemo(
    () =>
      _fieldValues.length !== length ? createPinArray(length, _fieldValues.join('')) : _fieldValues,
    [_fieldValues, length]
  );

  const value = useMemo(() => fieldValues.join('').trim(), [fieldValues]);

  const [focusedIndex, setFocusedIndexState] = useState(-1);

  const latest = useLatestRef({ fieldValues, focusedIndex, length });

  const setFieldValues = useCallbackRef((next: string[]) => {
    if (valueProp === undefined) {
      latest.current.fieldValues = next;
    }

    setFieldValuesState(next);
  });

  const setValue = useCallbackRef((next: string) => {
    setFieldValues(createPinArray(latest.current.length, next));
  });

  const setFieldValue = useCallbackRef((index: number, next: string) => {
    if (index < 0 || index >= latest.current.length) {
      return;
    }

    const values = [...latest.current.fieldValues];
    values[index] = next.slice(0, 1);
    setFieldValues(values);
  });

  const clear = useCallbackRef(() => {
    setValue('');
  });

  const focus = useCallbackRef((index: number) => {
    if (index < 0 || index >= latest.current.length) {
      return;
    }

    inputsRef.current[index]?.focus();
  });

  const focusNext = useCallbackRef(() => {
    focus(lastFocusedIndexRef.current + 1);
  });

  const focusPrevious = useCallbackRef(() => {
    const current = lastFocusedIndexRef.current;
    focus(current === -1 ? latest.current.length - 1 : current - 1);
  });

  const getValue = useCallback(() => latest.current.fieldValues.join('').trim(), []);

  const getFieldValues = useCallback(() => latest.current.fieldValues, []);

  const getFocusedIndex = useCallback(() => latest.current.focusedIndex, []);

  const isComplete = useCallback(
    () => latest.current.fieldValues.join('').trim().length === latest.current.length,
    []
  );

  const getInputNode = useCallback((index: number) => inputsRef.current[index] ?? null, []);

  const setFocusedIndex = useCallback((index: number) => {
    latest.current.focusedIndex = index;

    if (index !== -1) {
      lastFocusedIndexRef.current = index;
    }

    setFocusedIndexState(index);
  }, []);

  const registerInput = useCallback((index: number, node: HTMLInputElement | null) => {
    inputsRef.current[index] = node;
  }, []);

  return useMemo(
    () => ({
      length,
      value,
      fieldValues,
      focusedIndex,
      getValue,
      getFieldValues,
      getFocusedIndex,
      setValue,
      setFieldValue,
      clear,
      focus,
      focusNext,
      focusPrevious,
      isComplete,
      getInputNode,
      setFocusedIndex,
      registerInput,
    }),
    [length, value, fieldValues, focusedIndex]
  );
}
