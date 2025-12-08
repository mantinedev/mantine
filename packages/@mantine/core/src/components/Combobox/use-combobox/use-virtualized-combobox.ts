import { useCallback, useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getFirstIndex, getNextIndex, getPreviousIndex } from './get-index/get-virtualized-index';
import { ComboboxDropdownEventSource, ComboboxStore } from './use-combobox';

export interface UseVirtualizedComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?: (opened: boolean) => void;

  /** Called when dropdown closes */
  onDropdownClose?: (eventSource?: ComboboxDropdownEventSource) => void;

  /** Called when dropdown opens */
  onDropdownOpen?: (eventSource?: ComboboxDropdownEventSource) => void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** Function to determine whether the option is disabled */
  isOptionDisabled?: (optionIndex: number) => boolean;

  /** Total number of options in the virtualized list. Required for proper keyboard navigation and index calculations. */
  totalOptionsCount: number;

  /** Function that returns the id of the option at the given index. Required for setting aria attributes and element references. */
  getOptionId: (index: number) => string | null;

  /** Current selected option index. Must be controlled by parent component. */
  selectedOptionIndex: number;

  /** Callback to update the selected option index. Called when user navigates or selects options. */
  setSelectedOptionIndex: (index: number) => void;

  /** Currently active/highlighted option index. Used to determine which option to select when selectActiveOption is called. */
  activeOptionIndex?: number;

  /** Called when the selected option is submitted (e.g., via Enter key or clicking). Receives the selected option index. */
  onSelectedOptionSubmit: (index: number) => void;
}

export function useVirtualizedCombobox(
  {
    defaultOpened,
    opened,
    onOpenedChange,
    onDropdownClose,
    onDropdownOpen,
    loop = true,
    totalOptionsCount,
    isOptionDisabled = () => false,
    getOptionId,
    selectedOptionIndex,
    setSelectedOptionIndex,
    activeOptionIndex,
    onSelectedOptionSubmit,
  }: UseVirtualizedComboboxOptions = {
    totalOptionsCount: 0,
    getOptionId: () => null,
    selectedOptionIndex: 1,
    setSelectedOptionIndex: () => {},
    onSelectedOptionSubmit: () => {},
  }
): ComboboxStore {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange,
  });

  const listId = useRef<string | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const focusSearchTimeout = useRef<number>(-1);
  const focusTargetTimeout = useRef<number>(-1);

  const openDropdown = (eventSource?: ComboboxDropdownEventSource) => {
    if (!dropdownOpened) {
      setDropdownOpened(true);
      onDropdownOpen?.(eventSource);
    }
  };

  const closeDropdown = (eventSource?: ComboboxDropdownEventSource) => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      onDropdownClose?.(eventSource);
    }
  };

  const toggleDropdown = (eventSource?: ComboboxDropdownEventSource) => {
    if (dropdownOpened) {
      closeDropdown(eventSource);
    } else {
      openDropdown(eventSource);
    }
  };

  const selectOption = (index: number) => {
    const nextIndex = index >= totalOptionsCount ? 0 : index < 0 ? totalOptionsCount - 1 : index;
    setSelectedOptionIndex(nextIndex);
    return getOptionId(nextIndex);
  };

  const selectActiveOption = () => selectOption(activeOptionIndex ?? 0);

  const selectNextOption = () =>
    selectOption(
      getNextIndex({ currentIndex: selectedOptionIndex, isOptionDisabled, totalOptionsCount, loop })
    );

  const selectPreviousOption = () =>
    selectOption(
      getPreviousIndex({
        currentIndex: selectedOptionIndex,
        isOptionDisabled,
        totalOptionsCount,
        loop,
      })
    );

  const selectFirstOption = () =>
    selectOption(getFirstIndex({ isOptionDisabled, totalOptionsCount }));

  const resetSelectedOption = () => {
    setSelectedOptionIndex(-1);
  };

  const clickSelectedOption = () => {
    onSelectedOptionSubmit?.(selectedOptionIndex);
  };

  const setListId = (id: string) => {
    listId.current = id;
  };

  const focusSearchInput = () => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current!.focus(), 0);
  };

  const focusTarget = () => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current!.focus(), 0);
  };

  useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
    },
    []
  );

  const getSelectedOptionIndex = useCallback(() => selectedOptionIndex, []);

  const updateSelectedOptionIndex = useCallback(
    (index?: 'active' | 'selected' | number) => {
      if (typeof index === 'number') {
        setSelectedOptionIndex(index);
      }

      if (index === 'active' && typeof activeOptionIndex === 'number') {
        setSelectedOptionIndex(activeOptionIndex);
      }

      // 'selected' not applicable for virtualized combobox
      // only kept for API consistency
    },
    [setSelectedOptionIndex, activeOptionIndex]
  );

  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,

    selectedOptionIndex,
    getSelectedOptionIndex,
    selectOption,
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex,

    listId: listId.current,
    setListId,
    clickSelectedOption,

    searchRef,
    focusSearchInput,

    targetRef,
    focusTarget,
  };
}
