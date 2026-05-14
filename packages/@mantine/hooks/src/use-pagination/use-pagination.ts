import { useCallback, useMemo } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export const DOTS = 'dots';

export interface UsePaginationOptions {
  /** Page selected on initial render, defaults to 1 or startValue if provided */
  initialPage?: number;

  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number;

  /** Callback fired after change of each page */
  onChange?: (page: number) => void;

  /** Starting page number, defaults to 1 */
  startValue?: number;
}

export interface UsePaginationReturnValue {
  /** Array of page numbers and dots */
  range: (number | 'dots')[];

  /** Active page number */
  active: number;

  /** Function to set active page */
  setPage: (page: number) => void;

  /** Function to go to next page */
  next: () => void;

  /** Function to go to previous page */
  previous: () => void;

  /** Function to go to first page */
  first: () => void;

  /** Function to go to last page */
  last: () => void;
}

export function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  initialPage,
  onChange,
  startValue = 1,
}: UsePaginationOptions): UsePaginationReturnValue {
  const _startValue = Math.max(Math.trunc(startValue), 1);
  const _endValue = Math.max(Math.trunc(total), _startValue);
  const _total = _endValue - _startValue + 1;
  const _initialPage = initialPage ?? _startValue;

  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: _initialPage,
    finalValue: _initialPage,
  });

  const setPage = useCallback(
    (pageNumber: number) => {
      if (pageNumber < _startValue) {
        setActivePage(_startValue);
      } else if (pageNumber > _endValue) {
        setActivePage(_endValue);
      } else {
        setActivePage(pageNumber);
      }
    },
    [_startValue, _endValue, setActivePage]
  );

  const next = useCallback(() => setPage(activePage + 1), [activePage, setPage]);
  const previous = useCallback(() => setPage(activePage - 1), [activePage, setPage]);
  const first = useCallback(() => setPage(_startValue), [setPage, _startValue]);
  const last = useCallback(() => setPage(_endValue), [_endValue, setPage]);

  const paginationRange = useMemo((): (number | 'dots')[] => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= _total) {
      return range(_startValue, _endValue);
    }

    const leftSiblingIndex = Math.max(activePage - siblings, _startValue + boundaries - 1);
    const rightSiblingIndex = Math.min(activePage + siblings, _endValue - boundaries);

    const shouldShowLeftDots = leftSiblingIndex > _startValue + boundaries + 1;
    const shouldShowRightDots = rightSiblingIndex < _endValue - boundaries;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [
        ...range(_startValue, _startValue + leftItemCount - 1),
        DOTS,
        ...range(_endValue - (boundaries - 1), _endValue),
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [
        ...range(_startValue, _startValue + boundaries - 1),
        DOTS,
        ...range(_endValue - rightItemCount, _endValue),
      ];
    }

    return [
      ...range(_startValue, _startValue + boundaries - 1),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(_endValue - boundaries + 1, _endValue),
    ];
  }, [_total, siblings, activePage, _startValue, _endValue, boundaries]);

  return {
    range: paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last,
  };
}

export namespace usePagination {
  export type Options = UsePaginationOptions;
  export type ReturnValue = UsePaginationReturnValue;
}
