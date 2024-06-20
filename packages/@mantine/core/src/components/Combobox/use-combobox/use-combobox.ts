import { useCallback, useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getFirstIndex, getNextIndex, getPreviousIndex } from './get-index/get-index';

export type ComboboxDropdownEventSource = 'keyboard' | 'mouse' | 'unknown';

export interface ComboboxStore {
  /** Current dropdown opened state */
  dropdownOpened: boolean;

  /** Opens dropdown */
  openDropdown: (eventSource?: ComboboxDropdownEventSource) => void;

  /** Closes dropdown */
  closeDropdown: (eventSource?: ComboboxDropdownEventSource) => void;

  /** Toggles dropdown opened state */
  toggleDropdown: (eventSource?: ComboboxDropdownEventSource) => void;

  /** Selected option index ref */
  selectedOptionIndex: number;

  /** Returns currently selected option index or `-1` if none of the options is selected */
  getSelectedOptionIndex: () => number;

  /** Selects `Combobox.Option` by index */
  selectOption: (index: number) => void;

  /** Selects first `Combobox.Option` with `active` prop.
   *  If there are no such options, the function does nothing.
   */
  selectActiveOption: () => string | null;

  /** Selects first `Combobox.Option` that is not disabled.
   *  If there are no such options, the function does nothing.
   * */
  selectFirstOption: () => string | null;

  /** Selects next `Combobox.Option` that is not disabled.
   *  If the current option is the last one, the function selects first option, if `loop` is true.
   */
  selectNextOption: () => string | null;

  /** Selects previous `Combobox.Option` that is not disabled.
   *  If the current option is the first one, the function selects last option, if `loop` is true.
   * */
  selectPreviousOption: () => string | null;

  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */
  resetSelectedOption: () => void;

  /** Triggers `onClick` event of selected option.
   *  If there is no selected option, the function does nothing.
   */
  clickSelectedOption: () => void;

  /** Updates selected option index to currently selected or active option.
   *  The function is required to be used with searchable components to update selected option index
   *  when options list changes based on search query.
   */
  updateSelectedOptionIndex: (
    target?: 'active' | 'selected',
    options?: { scrollIntoView?: boolean }
  ) => void;

  /** List id, used for `aria-*` attributes */
  listId: string | null;

  /** Sets list id */
  setListId: (id: string) => void;

  /** Ref of `Combobox.Search` input */
  searchRef: React.MutableRefObject<HTMLInputElement | null>;

  /** Moves focus to `Combobox.Search` input */
  focusSearchInput: () => void;

  /** Ref of the target element */
  targetRef: React.MutableRefObject<HTMLElement | null>;

  /** Moves focus to the target element */
  focusTarget: () => void;
}

export interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?: (opened: boolean) => void;

  /** Called when dropdown closes with event source: keyboard, mouse or unknown */
  onDropdownClose?: (eventSource: ComboboxDropdownEventSource) => void;

  /** Called when dropdown opens with event source: keyboard, mouse or unknown */
  onDropdownOpen?: (eventSource: ComboboxDropdownEventSource) => void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
  scrollBehavior?: ScrollBehavior;
}

export function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  scrollBehavior = 'instant',
}: UseComboboxOptions = {}): ComboboxStore {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange,
  });

  const listId = useRef<string | null>(null);
  const selectedOptionIndex = useRef<number>(-1);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const focusSearchTimeout = useRef<number>(-1);
  const focusTargetTimeout = useRef<number>(-1);
  const selectedIndexUpdateTimeout = useRef<number>(-1);

  const openDropdown: ComboboxStore['openDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (!dropdownOpened) {
        setDropdownOpened(true);
        onDropdownOpen?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownOpen, dropdownOpened]
  );

  const closeDropdown: ComboboxStore['closeDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (dropdownOpened) {
        setDropdownOpened(false);
        onDropdownClose?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownClose, dropdownOpened]
  );

  const toggleDropdown: ComboboxStore['toggleDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (dropdownOpened) {
        closeDropdown(eventSource);
      } else {
        openDropdown(eventSource);
      }
    },
    [closeDropdown, openDropdown, dropdownOpened]
  );

  const clearSelectedItem = useCallback(() => {
    const selected = document.querySelector(`#${listId.current} [data-combobox-selected]`);
    selected?.removeAttribute('data-combobox-selected');
    selected?.removeAttribute('aria-selected');
  }, []);

  const selectOption = useCallback(
    (index: number) => {
      const list = document.getElementById(listId.current!);
      const items = list?.querySelectorAll('[data-combobox-option]');

      if (!items) {
        return null;
      }

      const nextIndex = index >= items!.length ? 0 : index < 0 ? items!.length - 1 : index;
      selectedOptionIndex.current = nextIndex;

      if (items?.[nextIndex] && !items[nextIndex].hasAttribute('data-combobox-disabled')) {
        clearSelectedItem();
        items[nextIndex].setAttribute('data-combobox-selected', 'true');
        items[nextIndex].setAttribute('aria-selected', 'true');
        items[nextIndex].scrollIntoView({ block: 'nearest', behavior: scrollBehavior });
        return items[nextIndex].id;
      }

      return null;
    },
    [scrollBehavior, clearSelectedItem]
  );

  const selectActiveOption = useCallback(() => {
    const activeOption = document.querySelector<HTMLDivElement>(
      `#${listId.current} [data-combobox-active]`
    );

    if (activeOption) {
      const items = document.querySelectorAll<HTMLDivElement>(
        `#${listId.current} [data-combobox-option]`
      );
      const index = Array.from(items).findIndex((option) => option === activeOption);
      return selectOption(index);
    }

    return selectOption(0);
  }, [selectOption]);

  const selectNextOption = useCallback(
    () =>
      selectOption(
        getNextIndex(
          selectedOptionIndex.current,
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
          loop
        )
      ),
    [selectOption, loop]
  );

  const selectPreviousOption = useCallback(
    () =>
      selectOption(
        getPreviousIndex(
          selectedOptionIndex.current,
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
          loop
        )
      ),
    [selectOption, loop]
  );

  const selectFirstOption = useCallback(
    () =>
      selectOption(
        getFirstIndex(
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`)
        )
      ),
    [selectOption]
  );

  const updateSelectedOptionIndex = useCallback(
    (target: 'active' | 'selected' = 'selected', options?: { scrollIntoView?: boolean }) => {
      selectedIndexUpdateTimeout.current = window.setTimeout(() => {
        const items = document.querySelectorAll<HTMLDivElement>(
          `#${listId.current} [data-combobox-option]`
        );
        const index = Array.from(items).findIndex((option) =>
          option.hasAttribute(`data-combobox-${target}`)
        );

        selectedOptionIndex.current = index;

        if (options?.scrollIntoView) {
          items[index]?.scrollIntoView({ block: 'nearest', behavior: scrollBehavior });
        }
      }, 0);
    },
    []
  );

  const resetSelectedOption = useCallback(() => {
    selectedOptionIndex.current = -1;
    clearSelectedItem();
  }, [clearSelectedItem]);

  const clickSelectedOption = useCallback(() => {
    const items = document.querySelectorAll<HTMLDivElement>(
      `#${listId.current} [data-combobox-option]`
    );
    const item = items?.[selectedOptionIndex.current];
    item?.click();
  }, []);

  const setListId = useCallback((id: string) => {
    listId.current = id;
  }, []);

  const focusSearchInput = useCallback(() => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current!.focus(), 0);
  }, []);

  const focusTarget = useCallback(() => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current!.focus(), 0);
  }, []);

  const getSelectedOptionIndex = useCallback(() => selectedOptionIndex.current, []);

  useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
      window.clearTimeout(selectedIndexUpdateTimeout.current);
    },
    []
  );

  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,

    selectedOptionIndex: selectedOptionIndex.current,
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
