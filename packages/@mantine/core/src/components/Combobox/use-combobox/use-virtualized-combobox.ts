import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import {
  getFirstIndex,
  getLastIndex,
  getNextIndex,
  getPreviousIndex,
} from './get-index/get-virtualized-index';
import { ComboboxDropdownEventSource, ComboboxStore } from './use-combobox';

export interface UseVirtualizedComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?: (opened: boolean) => void;

  /** Called when dropdown closes */
  onDropdownClose?: (eventSource: ComboboxDropdownEventSource) => void;

  /** Called when dropdown opens */
  onDropdownOpen?: (eventSource: ComboboxDropdownEventSource) => void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first) @default true */
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

const virtualizedStores = new WeakSet<ComboboxStore>();

export function isVirtualizedComboboxStore(store: ComboboxStore) {
  return virtualizedStores.has(store);
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
    selectedOptionIndex: -1,
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
  const dropdownOpenedRef = useLatestRef(dropdownOpened);
  const settings = useLatestRef({
    loop,
    totalOptionsCount,
    isOptionDisabled,
    getOptionId,
    selectedOptionIndex,
    setSelectedOptionIndex,
    activeOptionIndex,
    onSelectedOptionSubmit,
  });
  const handleDropdownOpen = useCallbackRef(onDropdownOpen);
  const handleDropdownClose = useCallbackRef(onDropdownClose);

  const isDropdownOpened = useCallback(() => dropdownOpenedRef.current, []);
  const getListId = useCallback(() => listId.current, []);
  const focusSearchTimeout = useRef<number>(-1);
  const focusTargetTimeout = useRef<number>(-1);

  const writeDropdownOpened = useCallbackRef((next: boolean) => {
    if (opened === undefined) {
      dropdownOpenedRef.current = next;
    }

    setDropdownOpened(next);
  });

  const openDropdown: ComboboxStore['openDropdown'] = useCallback((eventSource = 'unknown') => {
    if (!dropdownOpenedRef.current) {
      writeDropdownOpened(true);
      handleDropdownOpen(eventSource);
    }
  }, []);

  const closeDropdown: ComboboxStore['closeDropdown'] = useCallback((eventSource = 'unknown') => {
    if (dropdownOpenedRef.current) {
      writeDropdownOpened(false);
      handleDropdownClose(eventSource);
    }
  }, []);

  const toggleDropdown: ComboboxStore['toggleDropdown'] = useCallback((eventSource = 'unknown') => {
    if (dropdownOpenedRef.current) {
      closeDropdown(eventSource);
    } else {
      openDropdown(eventSource);
    }
  }, []);

  const selectOption = useCallback((index: number) => {
    const total = settings.current.totalOptionsCount;

    if (total === 0) {
      settings.current.setSelectedOptionIndex(-1);
      return null;
    }

    const nextIndex = index >= total ? 0 : index < 0 ? total - 1 : index;

    if (settings.current.isOptionDisabled(nextIndex)) {
      return null;
    }

    settings.current.setSelectedOptionIndex(nextIndex);
    return settings.current.getOptionId(nextIndex);
  }, []);

  const selectActiveOption = useCallback(() => {
    const activeIndex = settings.current.activeOptionIndex;
    return selectOption(typeof activeIndex === 'number' && activeIndex >= 0 ? activeIndex : 0);
  }, []);

  const selectNextOption = useCallback(
    () =>
      selectOption(
        getNextIndex({
          currentIndex: settings.current.selectedOptionIndex,
          isOptionDisabled: settings.current.isOptionDisabled,
          totalOptionsCount: settings.current.totalOptionsCount,
          loop: settings.current.loop,
        })
      ),
    []
  );

  const selectPreviousOption = useCallback(
    () =>
      selectOption(
        getPreviousIndex({
          currentIndex: settings.current.selectedOptionIndex,
          isOptionDisabled: settings.current.isOptionDisabled,
          totalOptionsCount: settings.current.totalOptionsCount,
          loop: settings.current.loop,
        })
      ),
    []
  );

  const selectFirstOption = useCallback(
    () =>
      selectOption(
        getFirstIndex({
          isOptionDisabled: settings.current.isOptionDisabled,
          totalOptionsCount: settings.current.totalOptionsCount,
        })
      ),
    []
  );

  const selectLastOption = useCallback(
    () =>
      selectOption(
        getLastIndex({
          isOptionDisabled: settings.current.isOptionDisabled,
          totalOptionsCount: settings.current.totalOptionsCount,
        })
      ),
    []
  );

  const resetSelectedOption = useCallback(() => {
    settings.current.setSelectedOptionIndex(-1);
  }, []);

  const clickSelectedOption = useCallback(() => {
    const index = settings.current.selectedOptionIndex;

    if (
      index >= 0 &&
      index < settings.current.totalOptionsCount &&
      !settings.current.isOptionDisabled(index)
    ) {
      settings.current.onSelectedOptionSubmit?.(index);
    }
  }, []);

  const setListId = useCallback((id: string) => {
    listId.current = id;
  }, []);

  const focusSearchInput = useCallback(() => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current?.focus(), 0);
  }, []);

  const focusTarget = useCallback(() => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current?.focus(), 0);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
    },
    []
  );

  const getSelectedOptionIndex = useCallback(() => settings.current.selectedOptionIndex, []);

  const getSelectedOptionId = useCallback(() => {
    const index = settings.current.selectedOptionIndex;
    return index >= 0 && index < settings.current.totalOptionsCount
      ? settings.current.getOptionId(index)
      : null;
  }, []);

  const subscribeToSelectedOptionId = useCallback(() => () => {}, []);

  const updateSelectedOptionIndex: ComboboxStore['updateSelectedOptionIndex'] = useCallback(
    (index?: 'active' | 'selected' | number) => {
      if (typeof index === 'number') {
        settings.current.setSelectedOptionIndex(index);
      }

      if (index === 'active' && typeof settings.current.activeOptionIndex === 'number') {
        settings.current.setSelectedOptionIndex(settings.current.activeOptionIndex);
      }
    },
    []
  );

  return useMemo(() => {
    const store: ComboboxStore = {
      dropdownOpened,
      isDropdownOpened,
      openDropdown,
      closeDropdown,
      toggleDropdown,

      getSelectedOptionIndex,
      selectOption,
      selectFirstOption,
      selectLastOption,
      selectActiveOption,
      selectNextOption,
      selectPreviousOption,
      resetSelectedOption,
      updateSelectedOptionIndex,

      getSelectedOptionId,
      subscribeToSelectedOptionId,

      getListId,
      setListId,
      clickSelectedOption,

      searchRef,
      focusSearchInput,

      targetRef,
      focusTarget,
    };

    virtualizedStores.add(store);
    return store;
  }, [dropdownOpened]);
}
