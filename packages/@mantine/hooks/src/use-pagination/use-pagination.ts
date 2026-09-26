import { useCallback, useMemo } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';
import { useCallbackRef, useLatestRef } from '../utils';

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export const DOTS = 'dots';

interface PaginationRangeOptions {
  siblings: number;
  boundaries: number;
  startValue: number;
  endValue: number;
}

function getPaginationRange(
  activePage: number,
  { siblings, boundaries, startValue, endValue }: PaginationRangeOptions
): (number | 'dots')[] {
  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
  if (totalPageNumbers >= endValue - startValue + 1) {
    return range(startValue, endValue);
  }

  const leftSiblingIndex = Math.max(activePage - siblings, startValue + boundaries - 1);
  const rightSiblingIndex = Math.min(activePage + siblings, endValue - boundaries);

  const shouldShowLeftDots = leftSiblingIndex > startValue + boundaries + 1;
  const shouldShowRightDots = rightSiblingIndex < endValue - boundaries;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...range(startValue, startValue + leftItemCount - 1),
      DOTS,
      ...range(endValue - (boundaries - 1), endValue),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...range(startValue, startValue + boundaries - 1),
      DOTS,
      ...range(endValue - rightItemCount, endValue),
    ];
  }

  return [
    ...range(startValue, startValue + boundaries - 1),
    DOTS,
    ...range(leftSiblingIndex, rightSiblingIndex),
    DOTS,
    ...range(endValue - boundaries + 1, endValue),
  ];
}

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

  /** Total amount of pages, same value as the `total` option */
  total: number;

  /** Function to get active page number */
  getActive: () => number;

  /** Function to get array of page numbers and dots */
  getRange: () => (number | 'dots')[];

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
  const _initialPage = initialPage ?? _startValue;

  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: _initialPage,
    finalValue: _initialPage,
  });

  const activeRef = useLatestRef(activePage);

  const setPage = useCallbackRef((pageNumber: number) => {
    const nextPage = Math.min(Math.max(pageNumber, _startValue), _endValue);

    if (page === undefined) {
      activeRef.current = nextPage;
    }

    setActivePage(nextPage);
  });

  const next = useCallbackRef(() => setPage(activeRef.current + 1));
  const previous = useCallbackRef(() => setPage(activeRef.current - 1));
  const first = useCallbackRef(() => setPage(_startValue));
  const last = useCallbackRef(() => setPage(_endValue));

  const rangeOptions = { siblings, boundaries, startValue: _startValue, endValue: _endValue };
  const paginationRange = useMemo(
    () => getPaginationRange(activePage, rangeOptions),
    [siblings, activePage, _startValue, _endValue, boundaries]
  );

  const latest = useLatestRef({ range: paginationRange, active: activePage, rangeOptions });

  const getActive = useCallback(() => activeRef.current, []);
  const getRange = useCallback(
    () =>
      activeRef.current === latest.current.active
        ? latest.current.range
        : getPaginationRange(activeRef.current, latest.current.rangeOptions),
    []
  );

  return useMemo(
    () => ({
      range: paginationRange,
      active: activePage,
      total,
      getActive,
      getRange,
      setPage,
      next,
      previous,
      first,
      last,
    }),
    [paginationRange, activePage, total]
  );
}

export namespace usePagination {
  export type Options = UsePaginationOptions;
  export type ReturnValue = UsePaginationReturnValue;
}
