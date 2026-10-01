import { useCallback, useMemo } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import { ComboboxStore } from '../../Combobox';
import {
  ComboboxDropdownCallbacks,
  useComboboxWithCallbacks,
} from '../../Combobox/use-combobox/use-combobox-with-callbacks';
import { getSplittedTags } from '../get-splitted-tags';

export interface TagsInputStoreOptions {
  /** Controlled value */
  value?: string[];

  /** Uncontrolled default value */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?: (value: string[]) => void;

  /** Controlled search value */
  searchValue?: string;

  /** Uncontrolled default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** `behavior` passed down to `element.scrollIntoView` when options are scrolled into view with keyboard navigation @default 'instant' */
  scrollBehavior?: ScrollBehavior;

  /** Maximum number of tags @default Infinity */
  maxTags?: number;

  /** Called when a tag is not added because the value already has `maxTags` tags */
  onMaxTags?: (value: string) => void;

  /** If set, duplicate tags are allowed @default false */
  allowDuplicates?: boolean;

  /** Determines whether a tag is a duplicate of one of the current values. By default, compares tags case-insensitively */
  isDuplicate?: (value: string, currentValues: string[]) => boolean;

  /** Called when a duplicate tag is submitted */
  onDuplicate?: (value: string) => void;

  /** Characters that split the entered text into tags @default [','] */
  splitChars?: string[];

  /** Determines whether a tag can be added. A rejected tag is not added and stays in the search so the user can correct it */
  isValidTag?: (value: string, currentValues: string[]) => boolean;

  /** Called when a tag is rejected by `isValidTag`, after the search is updated */
  onInvalidTag?: (value: string) => void;
}

export interface TagsInputStore extends ComboboxStore {
  /** Current value */
  value: string[];

  /** Returns current value */
  getValue: () => string[];

  /** Sets the value and calls `onChange`. Does not check `maxTags`, duplicates or `isValidTag` */
  setValue: (value: string[]) => void;

  /** Current search value */
  search: string;

  /** Returns current search value */
  getSearch: () => string;

  /** Sets the search value and calls `onSearchChange` */
  setSearch: (search: string) => void;

  /** Adds a tag to the value after checking `isValidTag`, duplicates and `maxTags`. Clears the search when the tag is added or rejected as a duplicate, sets it to the tag when the tag is rejected by `isValidTag`, keeps it when the tag is rejected by `maxTags`. Returns `true` when the tag was added */
  addTag: (tag: string) => boolean;

  /** Splits `text` with `splitChars` and adds the resulting tags, used internally by `TagsInput` on paste and when a split character is typed */
  addSplittedTags: (text: string) => void;

  /** Returns `true` when `char` is one of `splitChars` */
  isSplitChar: (char: string) => boolean;

  /** Registers dropdown open and close callbacks, used internally by `TagsInput` on every render */
  registerDropdownCallbacks: (callbacks: ComboboxDropdownCallbacks) => void;
}

const DEFAULT_SPLIT_CHARS = [','];

export function useTagsInput(options: TagsInputStoreOptions = {}): TagsInputStore {
  const {
    value: valueOption,
    defaultValue,
    onChange,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    scrollBehavior,
    maxTags = Infinity,
    onMaxTags,
    allowDuplicates,
    isDuplicate,
    onDuplicate,
    splitChars = DEFAULT_SPLIT_CHARS,
    isValidTag,
    onInvalidTag,
  } = options;

  const { combobox, registerDropdownCallbacks } = useComboboxWithCallbacks({
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    scrollBehavior,
  });

  const [value, setValueState, valueControlled] = useUncontrolled<string[]>({
    value: valueOption,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const [search, setSearchState, searchControlled] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const latest = useLatestRef({ value, search, splitChars });

  const getValue = useCallback(() => latest.current.value, []);
  const getSearch = useCallback(() => latest.current.search, []);
  const isSplitChar = useCallback((char: string) => latest.current.splitChars.includes(char), []);

  const setValue = useCallbackRef((next: string[]) => {
    if (!valueControlled) {
      latest.current.value = next;
    }

    setValueState(next);
  });

  const setSearch = useCallbackRef((next: string) => {
    if (!searchControlled) {
      latest.current.search = next;
    }

    setSearchState(next);
  });

  const addTag = useCallbackRef((tag: string) => {
    if (tag.length === 0) {
      return false;
    }

    const current = latest.current.value;

    if (isValidTag && !isValidTag(tag, current)) {
      setSearch(tag);
      onInvalidTag?.(tag);
      return false;
    }

    const duplicated = isDuplicate
      ? isDuplicate(tag, current)
      : current.some((item) => item.toLowerCase() === tag.toLowerCase());

    if (duplicated) {
      onDuplicate?.(tag);

      if (!allowDuplicates) {
        setSearch('');
        return false;
      }
    }

    if (current.length >= maxTags) {
      onMaxTags?.(tag);
      return false;
    }

    setSearch('');
    setValue([...current, tag]);
    return true;
  });

  const addSplittedTags = useCallbackRef((text: string) => {
    const result = getSplittedTags({
      splitChars,
      allowDuplicates,
      maxTags,
      value: text,
      currentTags: latest.current.value,
      isDuplicate,
      onDuplicate,
      isValidTag,
    });

    setValue(result.tags);
    setSearch(result.invalid.join(splitChars[0] ?? ''));
    result.invalid.forEach((tag) => onInvalidTag?.(tag));
  });

  return useMemo(
    () => ({
      ...combobox,
      value,
      getValue,
      setValue,
      search,
      getSearch,
      setSearch,
      addTag,
      addSplittedTags,
      isSplitChar,
      registerDropdownCallbacks,
    }),
    [combobox, value, search]
  );
}
