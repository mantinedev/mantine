import { useCallback, useMemo, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';

export type EditableActivationMode = 'focus' | 'click' | 'dblclick' | 'none';
export type EditableSubmitMode = 'both' | 'enter' | 'blur' | 'none';

export interface EditableControllerOptions {
  /** Controlled value */
  value?: string;

  /** Uncontrolled value initial state */
  defaultValue?: string;

  /** Called on every value change (on each keystroke) */
  onChange?: (value: string) => void;

  /** Called when the edit is confirmed */
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

  /** Confirms the edit and calls `onValueCommit` */
  submit: () => void;

  /** Cancels the edit, reverts to the last committed value and calls `onValueRevert` */
  cancel: () => void;

  /** Updates the current value */
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

  const valueRef = useRef(value);
  const editingRef = useRef(editing);
  const previousValueRef = useRef(value);
  const setValueStateRef = useRef(setValueState);
  const setEditingStateRef = useRef(setEditingState);
  const onValueCommitRef = useRef(onValueCommit);
  const onValueRevertRef = useRef(onValueRevert);
  const disabledRef = useRef(disabled);
  const readOnlyRef = useRef(readOnly);

  valueRef.current = value;
  editingRef.current = editing;
  setValueStateRef.current = setValueState;
  setEditingStateRef.current = setEditingState;
  onValueCommitRef.current = onValueCommit;
  onValueRevertRef.current = onValueRevert;
  disabledRef.current = disabled;
  readOnlyRef.current = readOnly;

  const setValue = useCallback((next: string) => {
    setValueStateRef.current(next);
  }, []);

  const edit = useCallback(() => {
    if (disabledRef.current || readOnlyRef.current || editingRef.current) {
      return;
    }
    previousValueRef.current = valueRef.current;
    editingRef.current = true;
    setEditingStateRef.current(true);
  }, []);

  const submit = useCallback(() => {
    if (!editingRef.current) {
      return;
    }
    editingRef.current = false;
    setEditingStateRef.current(false);
    previousValueRef.current = valueRef.current;
    onValueCommitRef.current?.(valueRef.current);
  }, []);

  const cancel = useCallback(() => {
    if (!editingRef.current) {
      return;
    }
    editingRef.current = false;
    setEditingStateRef.current(false);
    setValueStateRef.current(previousValueRef.current);
    onValueRevertRef.current?.(previousValueRef.current);
  }, []);

  return useMemo(
    () => ({
      value,
      editing,
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
