import { useEffect, useState } from 'react';
import type { ComboboxStore } from '../Combobox';

interface UseMentionsDropdownInput {
  combobox: ComboboxStore;
  shouldOpen: boolean;
  hasOptions: boolean;
  optionsKey: string;
}

export function useMentionsDropdown({
  combobox,
  shouldOpen,
  hasOptions,
  optionsKey,
}: UseMentionsDropdownInput) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldOpen) {
      combobox.closeDropdown();
      setSelectedOptionId(null);
      return;
    }

    if (!combobox.dropdownOpened) {
      combobox.openDropdown();
      return;
    }

    if (hasOptions) {
      setSelectedOptionId(combobox.selectFirstOption());
    } else {
      combobox.resetSelectedOption();
      setSelectedOptionId(null);
    }
  }, [shouldOpen, combobox.dropdownOpened, hasOptions, optionsKey]);

  return {
    selectedOptionId,
    selectNext: () => setSelectedOptionId(combobox.selectNextOption()),
    selectPrevious: () => setSelectedOptionId(combobox.selectPreviousOption()),
    activeDescendant:
      combobox.dropdownOpened && hasOptions ? (selectedOptionId ?? undefined) : undefined,
  };
}
