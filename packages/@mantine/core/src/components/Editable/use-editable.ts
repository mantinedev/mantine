import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useIsomorphicEffect, useLatestRef, useUncontrolled } from '@mantine/hooks';

export type EditableActivationMode = 'focus' | 'click' | 'dblclick' | 'none';
export type EditableSubmitMode = 'both' | 'enter' | 'blur' | 'none';

export interface EditableControllerOptions {
  /** Controlled value */
  value?: string;

  /** Uncontrolled value initial state */
  defaultValue?: string;

  /** Called on every value change (on each keystroke) */
  onChange?: (value: string) => void;

  /** Called when the edit is confirmed, on every submit even when the value did not change */
  onValueCommit?: (value: string) => void;

  /** Called when the edit is cancelled */
  onValueRevert?: (value: string) => void;

  /** Controlled editing state */
  editing?: boolean;

  /** Uncontrolled editing state initial value, `false` by default */
  defaultEditing?: boolean;

  /** Called when the editing state changes */
  onEditingChange?: (editing: boolean) => void;

  /** How the preview enters edit mode, `'focus'` by default */
  activationMode?: EditableActivationMode;

  /** What confirms the edit, `'both'` by default */
  submitMode?: EditableSubmitMode;

  /** If set, the input contents are selected when entering edit mode, `true` by default */
  selectOnFocus?: boolean;

  /** If set, entering edit mode is disabled, `false` by default */
  disabled?: boolean;

  /** If set, the value cannot be changed, `false` by default */
  readOnly?: boolean;
}

export interface EditableController {
  /** Current value */
  value: string;

  /** `true` while the field is in edit mode */
  editing: boolean;

  /** Returns current value */
  getValue: () => string;

  /** Returns `true` while the field is in edit mode */
  isEditing: () => boolean;

  /** Resolved activation mode */
  activationMode: EditableActivationMode;

  /** Resolved submit mode */
  submitMode: EditableSubmitMode;

  /** Resolved `selectOnFocus` value */
  selectOnFocus: boolean;

  /** Resolved `disabled` value */
  disabled: boolean;

  /** Resolved `readOnly` value */
  readOnly: boolean;

  /** Enters edit mode */
  edit: () => void;

  /** Confirms the edit: exits edit mode and calls `onValueCommit` with the current value. Does nothing when not editing */
  submit: () => void;

  /** Cancels the edit: exits edit mode, reverts the value to the one it had when editing started and calls `onValueRevert` with it. Does nothing when not editing */
  cancel: () => void;

  /** Updates the current value, a following `submit` call in the same handler commits it */
  setValue: (value: string) => void;
}

export function useEditable(options: EditableControllerOptions = {}): EditableController {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    onValueCommit,
    onValueRevert,
    editing: editingProp,
    defaultEditing,
    onEditingChange,
    activationMode = 'focus',
    submitMode = 'both',
    selectOnFocus = true,
    disabled = false,
    readOnly = false,
  } = options;

  const [value, setValueState] = useUncontrolled({
    value: valueProp,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const [editing, setEditingState] = useUncontrolled({
    value: editingProp,
    defaultValue: defaultEditing,
    finalValue: false,
    onChange: onEditingChange,
  });

  const handleValueCommit = useCallbackRef(onValueCommit);
  const handleValueRevert = useCallbackRef(onValueRevert);

  const latest = useLatestRef({ disabled, readOnly });
  const stateRef = useRef({ value, editing });
  const previousValueRef = useRef(value);

  useIsomorphicEffect(() => {
    const entered = editing && !stateRef.current.editing;
    stateRef.current = { value, editing };
    if (entered) {
      previousValueRef.current = value;
    }
  });

  const getValue = useCallback(() => stateRef.current.value, []);
  const isEditing = useCallback(() => stateRef.current.editing, []);

  const isControlled = useLatestRef(valueProp !== undefined);

  const setValue = useCallback((next: string) => {
    if (!isControlled.current) {
      stateRef.current.value = next;
    }
    setValueState(next);
  }, []);

  const edit = useCallback(() => {
    if (latest.current.disabled || latest.current.readOnly || stateRef.current.editing) {
      return;
    }
    previousValueRef.current = stateRef.current.value;
    stateRef.current.editing = true;
    setEditingState(true);
  }, []);

  const submit = useCallback(() => {
    if (!stateRef.current.editing) {
      return;
    }
    stateRef.current.editing = false;
    setEditingState(false);
    handleValueCommit(stateRef.current.value);
  }, []);

  const cancel = useCallback(() => {
    if (!stateRef.current.editing) {
      return;
    }
    const previousValue = previousValueRef.current;
    stateRef.current.editing = false;
    setEditingState(false);
    setValue(previousValue);
    handleValueRevert(previousValue);
  }, []);

  return useMemo(
    () => ({
      value,
      editing,
      getValue,
      isEditing,
      activationMode,
      submitMode,
      selectOnFocus,
      disabled,
      readOnly,
      edit,
      submit,
      cancel,
      setValue,
    }),
    [value, editing, activationMode, submitMode, selectOnFocus, disabled, readOnly]
  );
}
