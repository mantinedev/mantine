import { useCallback, useEffect, useRef } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';

export interface UseRovingIndexInput {
  /** Total number of items in the group */
  total: number;

  /** Which arrow keys navigate, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical' | 'both';

  /** Whether navigation wraps at boundaries, `true` by default */
  loop?: boolean;

  /** Text direction, `'ltr'` by default */
  dir?: 'rtl' | 'ltr';

  /** Whether to click element when it receives focus via keyboard, `false` by default */
  activateOnFocus?: boolean;

  /** Number of columns for grid (2D) navigation. When set, enables grid mode */
  columns?: number;

  /** Controlled focused index */
  focusedIndex?: number;

  /** Initial focused index for uncontrolled mode, first non-disabled item by default */
  initialIndex?: number;

  /** Called when focused index changes */
  onFocusChange?: (index: number) => void;

  /** Function to check if item at given index is disabled, `() => false` by default */
  isItemDisabled?: (index: number) => boolean;
}

export interface UseRovingIndexGetItemPropsInput {
  /** Index of the item in the group */
  index: number;

  /** Called when item is clicked */
  onClick?: React.MouseEventHandler;

  /** Called when keydown event fires on item */
  onKeyDown?: React.KeyboardEventHandler;
}

export interface UseRovingIndexReturnValue {
  /** Get props to spread on each navigable item */
  getItemProps: (options: UseRovingIndexGetItemPropsInput) => {
    tabIndex: 0 | -1;
    onKeyDown: React.KeyboardEventHandler;
    onClick: React.MouseEventHandler;
    ref: React.RefCallback<HTMLElement>;
  };

  /** Currently focused index */
  focusedIndex: number;

  /** Programmatically set focused index */
  setFocusedIndex: (index: number) => void;
}

function findNextEnabled(
  current: number,
  total: number,
  isItemDisabled: (index: number) => boolean,
  loop: boolean
): number {
  for (let i = current + 1; i < total; i += 1) {
    if (!isItemDisabled(i)) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < current; i += 1) {
      if (!isItemDisabled(i)) {
        return i;
      }
    }
  }

  return current;
}

function findPreviousEnabled(
  current: number,
  total: number,
  isItemDisabled: (index: number) => boolean,
  loop: boolean
): number {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!isItemDisabled(i)) {
      return i;
    }
  }

  if (loop) {
    for (let i = total - 1; i > current; i -= 1) {
      if (!isItemDisabled(i)) {
        return i;
      }
    }
  }

  return current;
}

function findFirstEnabled(total: number, isItemDisabled: (index: number) => boolean): number {
  for (let i = 0; i < total; i += 1) {
    if (!isItemDisabled(i)) {
      return i;
    }
  }

  return 0;
}

function findLastEnabled(total: number, isItemDisabled: (index: number) => boolean): number {
  for (let i = total - 1; i >= 0; i -= 1) {
    if (!isItemDisabled(i)) {
      return i;
    }
  }

  return 0;
}

const defaultIsItemDisabled = () => false;

export function useRovingIndex(input: UseRovingIndexInput): UseRovingIndexReturnValue {
  const {
    total,
    orientation = 'horizontal',
    loop = true,
    dir = 'ltr',
    activateOnFocus = false,
    columns,
    focusedIndex,
    initialIndex,
    onFocusChange,
    isItemDisabled = defaultIsItemDisabled,
  } = input;

  const itemRefs = useRef<Map<number, HTMLElement>>(new Map());
  const isGrid = typeof columns === 'number' && columns > 0;

  const resolvedInitialIndex =
    initialIndex !== undefined ? initialIndex : findFirstEnabled(total, isItemDisabled);

  const [activeIndex, setActiveIndex] = useUncontrolled({
    value: focusedIndex,
    defaultValue: resolvedInitialIndex,
    finalValue: 0,
    onChange: onFocusChange,
  });

  useEffect(() => {
    if (total === 0) {
      return;
    }

    if (activeIndex >= total) {
      setActiveIndex(findLastEnabled(total, isItemDisabled));
    } else if (isItemDisabled(activeIndex)) {
      setActiveIndex(findFirstEnabled(total, isItemDisabled));
    }
  }, [total, activeIndex, isItemDisabled]);

  const focusItem = useCallback(
    (index: number) => {
      setActiveIndex(index);
      const element = itemRefs.current.get(index);
      if (element) {
        element.focus();
        if (activateOnFocus) {
          element.click();
        }
      }
    },
    [activateOnFocus, setActiveIndex]
  );

  const handleGridKeyDown = useCallback(
    (event: React.KeyboardEvent, currentIndex: number) => {
      const row = Math.floor(currentIndex / columns!);
      const col = currentIndex % columns!;
      const totalRows = Math.ceil(total / columns!);
      let nextIndex: number | null = null;

      const isRtl = dir === 'rtl';

      switch (event.key) {
        case 'ArrowRight': {
          const targetCol = isRtl ? col - 1 : col + 1;
          if (targetCol >= 0 && targetCol < columns! && row * columns! + targetCol < total) {
            const candidate = row * columns! + targetCol;
            if (!isItemDisabled(candidate)) {
              nextIndex = candidate;
            }
          }
          break;
        }

        case 'ArrowLeft': {
          const targetCol = isRtl ? col + 1 : col - 1;
          if (targetCol >= 0 && targetCol < columns! && row * columns! + targetCol < total) {
            const candidate = row * columns! + targetCol;
            if (!isItemDisabled(candidate)) {
              nextIndex = candidate;
            }
          }
          break;
        }

        case 'ArrowDown': {
          for (let r = row + 1; r < totalRows; r += 1) {
            const candidate = r * columns! + col;
            if (candidate < total && !isItemDisabled(candidate)) {
              nextIndex = candidate;
              break;
            }
          }
          break;
        }

        case 'ArrowUp': {
          for (let r = row - 1; r >= 0; r -= 1) {
            const candidate = r * columns! + col;
            if (candidate < total && !isItemDisabled(candidate)) {
              nextIndex = candidate;
              break;
            }
          }
          break;
        }

        case 'Home': {
          if (event.ctrlKey) {
            nextIndex = findFirstEnabled(total, isItemDisabled);
          } else {
            const rowStart = row * columns!;
            for (let i = rowStart; i < rowStart + columns! && i < total; i += 1) {
              if (!isItemDisabled(i)) {
                nextIndex = i;
                break;
              }
            }
          }
          break;
        }

        case 'End': {
          if (event.ctrlKey) {
            nextIndex = findLastEnabled(total, isItemDisabled);
          } else {
            const rowStart = row * columns!;
            const rowEnd = Math.min(rowStart + columns!, total) - 1;
            for (let i = rowEnd; i >= rowStart; i -= 1) {
              if (!isItemDisabled(i)) {
                nextIndex = i;
                break;
              }
            }
          }
          break;
        }
      }

      if (nextIndex !== null && nextIndex !== currentIndex) {
        event.preventDefault();
        event.stopPropagation();
        focusItem(nextIndex);
      }
    },
    [total, columns, dir, isItemDisabled, focusItem]
  );

  const handleListKeyDown = useCallback(
    (event: React.KeyboardEvent, currentIndex: number) => {
      const isRtl = dir === 'rtl';
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowRight': {
          if (orientation === 'horizontal' || orientation === 'both') {
            nextIndex = isRtl
              ? findPreviousEnabled(currentIndex, total, isItemDisabled, loop)
              : findNextEnabled(currentIndex, total, isItemDisabled, loop);
          }
          break;
        }

        case 'ArrowLeft': {
          if (orientation === 'horizontal' || orientation === 'both') {
            nextIndex = isRtl
              ? findNextEnabled(currentIndex, total, isItemDisabled, loop)
              : findPreviousEnabled(currentIndex, total, isItemDisabled, loop);
          }
          break;
        }

        case 'ArrowDown': {
          if (orientation === 'vertical' || orientation === 'both') {
            nextIndex = findNextEnabled(currentIndex, total, isItemDisabled, loop);
          }
          break;
        }

        case 'ArrowUp': {
          if (orientation === 'vertical' || orientation === 'both') {
            nextIndex = findPreviousEnabled(currentIndex, total, isItemDisabled, loop);
          }
          break;
        }

        case 'Home': {
          nextIndex = findFirstEnabled(total, isItemDisabled);
          break;
        }

        case 'End': {
          nextIndex = findLastEnabled(total, isItemDisabled);
          break;
        }
      }

      if (nextIndex !== null && nextIndex !== currentIndex) {
        event.preventDefault();
        event.stopPropagation();
        focusItem(nextIndex);
      }
    },
    [total, orientation, loop, dir, isItemDisabled, focusItem]
  );

  const getItemProps = useCallback(
    (options: UseRovingIndexGetItemPropsInput) => {
      const { index, onClick, onKeyDown } = options;

      return {
        tabIndex: (index === activeIndex ? 0 : -1) as 0 | -1,

        ref: (node: HTMLElement | null) => {
          if (node) {
            itemRefs.current.set(index, node);
          } else {
            itemRefs.current.delete(index);
          }
        },

        onKeyDown: (event: React.KeyboardEvent) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (isGrid) {
            handleGridKeyDown(event, index);
          } else {
            handleListKeyDown(event, index);
          }
        },

        onClick: (event: React.MouseEvent) => {
          onClick?.(event);
          setActiveIndex(index);
        },
      };
    },
    [activeIndex, isGrid, handleGridKeyDown, handleListKeyDown, setActiveIndex]
  );

  return {
    getItemProps,
    focusedIndex: activeIndex,
    setFocusedIndex: setActiveIndex,
  };
}

export namespace useRovingIndex {
  export type Input = UseRovingIndexInput;
  export type GetItemPropsInput = UseRovingIndexGetItemPropsInput;
  export type ReturnValue = UseRovingIndexReturnValue;
}
