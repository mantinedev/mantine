// WIP, not planned to be released in 7.0, maybe in 7.x
import { useCallback, useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getFirstIndex, getNextIndex, getPreviousIndex } from './get-index/get-virtualized-index';
import { ComboboxStore } from './use-combobox';

interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?: (opened: boolean) => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** Function to determine whether the option is disabled */
  isOptionDisabled?: (optionIndex: number) => boolean;

  totalOptionsCount: number;

  getOptionId: (index: number) => string | null;

  selectedOptionIndex: number;

  setSelectedOptionIndex: (index: number) => void;

  activeOptionIndex?: number;

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
  }: UseComboboxOptions = {
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

  const openDropdown = () => {
    if (!dropdownOpened) {
      setDropdownOpened(true);
      onDropdownOpen?.();
    }
  };

  const closeDropdown = () => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      onDropdownClose?.();
    }
  };

  const toggleDropdown = () => {
    if (dropdownOpened) {
      closeDropdown();
    } else {
      openDropdown();
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
    updateSelectedOptionIndex: () => {},

    listId: listId.current,
    setListId,
    clickSelectedOption,

    searchRef,
    focusSearchInput,

    targetRef,
    focusTarget,
  };
}
