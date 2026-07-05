import { useCallback, useMemo, useRef, useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import type { CascaderOption } from './Cascader';
import { cascaderOptionHasChildren, getCascaderColumns } from './get-cascader-columns';
import { getCascaderPathOptions } from './get-cascader-path-options';

export interface UseCascaderInput {
  data: CascaderOption[];
  value: string[] | null | undefined;
  defaultValue: string[] | null | undefined;
  onChange: ((value: string[] | null, options: CascaderOption[]) => void) | undefined;
  changeOnSelect: boolean | undefined;
  allowDeselect: boolean | undefined;
  expandTrigger: 'click' | 'hover' | undefined;
  onLeafSelect?: () => void;
}

function pathsEqual(a: string[] | null, b: string[]): boolean {
  return !!a && a.length === b.length && a.every((item, index) => item === b[index]);
}

function findEnabledIndex(options: CascaderOption[], from: number, direction: 1 | -1): number {
  let index = from + direction;

  while (index >= 0 && index < options.length) {
    if (!options[index].disabled) {
      return index;
    }
    index += direction;
  }

  return -1;
}

export function useCascader({
  data,
  value,
  defaultValue,
  onChange,
  changeOnSelect,
  allowDeselect,
  expandTrigger,
  onLeafSelect,
}: UseCascaderInput) {
  const [keyboardNav, setKeyboardNav] = useState(false);

  const [_value, setValue] = useUncontrolled<string[] | null>({
    value: value as any,
    defaultValue: defaultValue as any,
    finalValue: null,
    onChange: (val) => onChange?.(val, getCascaderPathOptions(data, val)),
  });

  const [activePath, setActivePath] = useState<string[]>(() => _value ?? []);
  const activePathRef = useRef(activePath);
  activePathRef.current = activePath;

  const resetActivePath = useCallback(() => {
    setActivePath(_value ?? []);
  }, [_value]);

  const selectPath = useCallback(
    (path: string[]) => {
      setValue(allowDeselect && pathsEqual(_value, path) ? null : path);
    },
    [allowDeselect, _value, setValue]
  );

  const expandOption = useCallback((level: number, option: CascaderOption) => {
    const optionPath = [...activePathRef.current.slice(0, level), option.value];
    const children = option.children;

    if (Array.isArray(children) && children.length > 0) {
      const first = findEnabledIndex(children, -1, 1);
      setActivePath(first >= 0 ? [...optionPath, children[first].value] : optionPath);
    } else {
      setActivePath(optionPath);
    }
  }, []);

  const handleOptionClick = useCallback(
    (level: number, option: CascaderOption) => {
      setKeyboardNav(false);
      const path = [...activePath.slice(0, level), option.value];

      if (cascaderOptionHasChildren(option)) {
        if (changeOnSelect) {
          selectPath(path);
        }
        expandOption(level, option);
        if (changeOnSelect) {
          onLeafSelect?.();
        }
      } else {
        selectPath(path);
        onLeafSelect?.();
      }
    },
    [activePath, changeOnSelect, selectPath, expandOption, onLeafSelect]
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
      const focusedLevel = Math.max(0, activePath.length - 1);
      const currentColumn = columns[focusedLevel] ?? columns[0] ?? [];
      const focusedIndex = currentColumn.findIndex(
        (item) => item.value === activePath[focusedLevel]
      );
      const focusedOption = focusedIndex >= 0 ? currentColumn[focusedIndex] : undefined;

      switch (event.key) {
        case 'ArrowDown': {
          const next = findEnabledIndex(currentColumn, focusedIndex, 1);
          if (next >= 0) {
            setActivePath([...activePath.slice(0, focusedLevel), currentColumn[next].value]);
          }
          return true;
        }
        case 'ArrowUp': {
          const from = focusedIndex < 0 ? currentColumn.length : focusedIndex;
          const prev = findEnabledIndex(currentColumn, from, -1);
          if (prev >= 0) {
            setActivePath([...activePath.slice(0, focusedLevel), currentColumn[prev].value]);
          }
          return true;
        }
        case 'ArrowRight': {
          if (focusedOption && cascaderOptionHasChildren(focusedOption)) {
            expandOption(focusedLevel, focusedOption);
          }
          return true;
        }
        case 'ArrowLeft': {
          if (activePath.length > 1) {
            setActivePath(activePath.slice(0, -1));
          }
          return true;
        }
        case 'Enter': {
          if (!focusedOption) {
            return false;
          }

          if (cascaderOptionHasChildren(focusedOption)) {
            if (changeOnSelect) {
              selectPath([...activePath.slice(0, focusedLevel), focusedOption.value]);
            }
            expandOption(focusedLevel, focusedOption);
            if (changeOnSelect) {
              onLeafSelect?.();
            }
          } else {
            selectPath([...activePath.slice(0, focusedLevel), focusedOption.value]);
            onLeafSelect?.();
          }
          return true;
        }
        default:
          return false;
      }
    },
    [data, activePath, changeOnSelect, selectPath, expandOption, onLeafSelect]
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
