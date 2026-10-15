import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import type { CascaderOption } from './Cascader';
import {
  cascaderOptionHasChildren,
  findEnabledCascaderOptionIndex,
  getCascaderColumns,
  getCascaderOptionText,
} from './get-cascader-columns';
import { getCascaderPathOptions } from './get-cascader-path-options';

export interface UseCascaderInput {
  data: CascaderOption[];
  value: string[] | null | undefined;
  defaultValue: string[] | null | undefined;
  onChange: ((value: string[] | null, options: CascaderOption[]) => void) | undefined;
  changeOnSelect: boolean | undefined;
  allowDeselect: boolean | undefined;
  expandTrigger: 'click' | 'hover' | undefined;
  searchable: boolean | undefined;
  dir: 'ltr' | 'rtl';
  onSelect?: () => void;
}

const TYPEAHEAD_TIMEOUT = 500;

function pathsEqual(a: string[] | null, b: string[]): boolean {
  return !!a && a.length === b.length && a.every((item, index) => item === b[index]);
}

function findOptionByText(options: CascaderOption[], query: string, from: number): number {
  const isRepeatedChar = query.split('').every((char) => char === query[0]);
  const search = isRepeatedChar ? query[0] : query;
  const startIndex = isRepeatedChar ? from + 1 : Math.max(from, 0);

  for (let offset = 0; offset < options.length; offset += 1) {
    const index = (startIndex + offset) % options.length;
    const option = options[index];
    if (!option.disabled && getCascaderOptionText(option).toLowerCase().startsWith(search)) {
      return index;
    }
  }

  return -1;
}

function isPrintableKey(event: React.KeyboardEvent) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
}

export function useCascader({
  data,
  value,
  defaultValue,
  onChange,
  changeOnSelect,
  allowDeselect,
  expandTrigger,
  searchable,
  dir,
  onSelect,
}: UseCascaderInput) {
  const [keyboardNav, setKeyboardNav] = useState(false);
  const typeahead = useRef('');
  const typeaheadTimeout = useRef(-1);

  useEffect(() => () => window.clearTimeout(typeaheadTimeout.current), []);

  const [_value, setValue] = useUncontrolled<string[] | null>({
    value: value as any,
    defaultValue: defaultValue as any,
    finalValue: null,
    onChange: (val) => onChange?.(val, getCascaderPathOptions(data, val)),
  });

  const [activePath, setActivePath] = useState<string[]>(() => _value ?? []);

  const resetActivePath = useCallback(() => {
    setActivePath(_value ?? []);
  }, [_value]);

  const selectPath = useCallback(
    (path: string[], keepOpen = false) => {
      const unchanged = pathsEqual(_value, path);

      if (!unchanged || allowDeselect) {
        setValue(unchanged ? null : path);
      }

      if (!keepOpen) {
        onSelect?.();
      }
    },
    [allowDeselect, _value, setValue, onSelect]
  );

  const expandOption = useCallback(
    (level: number, option: CascaderOption) => {
      const optionPath = [...activePath.slice(0, level), option.value];

      if (cascaderOptionHasChildren(option)) {
        const children = option.children!;
        const first = findEnabledCascaderOptionIndex(children, -1, 1);
        setActivePath(first >= 0 ? [...optionPath, children[first].value] : optionPath);
      } else {
        setActivePath(optionPath);
      }
    },
    [activePath]
  );

  const activateOption = useCallback(
    (level: number, option: CascaderOption) => {
      const hasChildren = cascaderOptionHasChildren(option);

      if (hasChildren) {
        expandOption(level, option);
      }

      if (!hasChildren || changeOnSelect) {
        selectPath([...activePath.slice(0, level), option.value], hasChildren);
      }
    },
    [activePath, changeOnSelect, selectPath, expandOption]
  );

  const handleOptionClick = useCallback(
    (level: number, option: CascaderOption) => {
      setKeyboardNav(false);
      activateOption(level, option);
    },
    [activateOption]
  );

  const handleOptionMouseEnter = useCallback(
    (level: number, option: CascaderOption) => {
      setKeyboardNav(false);

      if (expandTrigger !== 'hover') {
        return;
      }

      if (cascaderOptionHasChildren(option)) {
        expandOption(level, option);
      } else {
        setActivePath([...activePath.slice(0, level), option.value]);
      }
    },
    [expandTrigger, activePath, expandOption]
  );

  const handleColumnsKeyDown = useCallback(
    (event: React.KeyboardEvent): boolean => {
      setKeyboardNav(true);
      const columns = getCascaderColumns(data, activePath);
      const currentLevel = Math.max(0, activePath.length - 1);
      const currentColumn = columns[currentLevel] ?? columns[0] ?? [];
      const currentIndex = currentColumn.findIndex(
        (item) => item.value === activePath[currentLevel]
      );
      const currentOption = currentIndex >= 0 ? currentColumn[currentIndex] : undefined;

      const forwardKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
      const backKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
      const setCurrentIndex = (index: number) => {
        if (index >= 0) {
          setActivePath([...activePath.slice(0, currentLevel), currentColumn[index].value]);
        }
      };

      if (!searchable && isPrintableKey(event) && (event.key !== ' ' || typeahead.current)) {
        window.clearTimeout(typeaheadTimeout.current);
        typeahead.current += event.key.toLowerCase();
        typeaheadTimeout.current = window.setTimeout(() => {
          typeahead.current = '';
        }, TYPEAHEAD_TIMEOUT);
        setCurrentIndex(findOptionByText(currentColumn, typeahead.current, currentIndex));
        return true;
      }

      const key = !searchable && event.key === ' ' ? 'Enter' : event.key;

      switch (key) {
        case 'ArrowDown': {
          setCurrentIndex(findEnabledCascaderOptionIndex(currentColumn, currentIndex, 1));
          return true;
        }
        case 'ArrowUp': {
          const from = currentIndex < 0 ? currentColumn.length : currentIndex;
          setCurrentIndex(findEnabledCascaderOptionIndex(currentColumn, from, -1));
          return true;
        }
        case 'Home': {
          if (searchable) {
            return false;
          }
          setCurrentIndex(findEnabledCascaderOptionIndex(currentColumn, -1, 1));
          return true;
        }
        case 'End': {
          if (searchable) {
            return false;
          }
          setCurrentIndex(findEnabledCascaderOptionIndex(currentColumn, currentColumn.length, -1));
          return true;
        }
        case forwardKey: {
          if (currentOption && cascaderOptionHasChildren(currentOption)) {
            expandOption(currentLevel, currentOption);
          }
          return true;
        }
        case backKey: {
          if (activePath.length > 1) {
            setActivePath(activePath.slice(0, -1));
          }
          return true;
        }
        case 'Enter': {
          if (!currentOption) {
            return false;
          }

          activateOption(currentLevel, currentOption);
          return true;
        }
        default:
          return false;
      }
    },
    [data, activePath, searchable, dir, expandOption, activateOption]
  );

  const pathOptions = useMemo(() => getCascaderPathOptions(data, _value), [data, _value]);

  return {
    value: _value,
    setValue,
    selectPath,
    activePath,
    setActivePath,
    resetActivePath,
    keyboardNav,
    setKeyboardNav,
    handleOptionClick,
    handleOptionMouseEnter,
    handleColumnsKeyDown,
    pathOptions,
  };
}
