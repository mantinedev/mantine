import { useState } from 'react';
import { PickerDropdownType } from '../use-resolved-dropdown-type/use-resolved-dropdown-type';

export function isIncompleteRange(type: string | undefined, value: unknown) {
  return type === 'range' && Array.isArray(value) && !!value[0] && !value[1];
}

interface UseDropdownDraftInput<Value> {
  dropdownType: PickerDropdownType;
  applyOnSubmit: boolean | undefined;
  opened: boolean;
  type: string | undefined;
  value: Value;
  setValue: (value: Value) => void;
  commitValue?: (value: Value) => void;
  closeDropdown: () => void;
}

export function useDropdownDraft<Value>({
  dropdownType,
  applyOnSubmit,
  opened,
  type,
  value,
  setValue,
  commitValue = setValue,
  closeDropdown,
}: UseDropdownDraftInput<Value>) {
  const draftMode = dropdownType !== 'popover' && applyOnSubmit !== false;
  const committedKey = JSON.stringify(value);
  const [draft, setDraft] = useState({ opened, committedKey, value });

  if (draft.opened !== opened || draft.committedKey !== committedKey) {
    setDraft({ opened, committedKey, value });
  }

  const pickerValue = draftMode && opened ? draft.value : value;
  const submitDisabled = isIncompleteRange(type, pickerValue);

  const onPickerChange = (nextValue: Value) => {
    if (draftMode) {
      setDraft({ opened: true, committedKey, value: nextValue });
    } else {
      setValue(nextValue);
    }
  };

  const submit = () => {
    if (submitDisabled) {
      return;
    }

    if (draftMode && JSON.stringify(draft.value) !== committedKey) {
      commitValue(draft.value);
    }

    closeDropdown();
  };

  return { draftMode, pickerValue, onPickerChange, submit, submitDisabled };
}
