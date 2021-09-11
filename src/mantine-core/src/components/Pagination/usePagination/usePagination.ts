import { useUncontrolled } from '@mantine/hooks';
import { useMemo, useCallback } from 'react';

export const DOTS = 'dots';

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export interface PaginationParams {
  /** Page selected on initial render, defaults to 1 */
  initialPage?: number;

  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundary?: number;

  /** Callback fired after change of each page */
  onChange?: (page: number) => void;
}

export const usePagination = ({
  total,
  siblings = 1,
  boundary = 1,
  page,
  initialPage = 1,
  onChange,
}: PaginationParams) => {
  const [activePage, setPage] = useUncontrolled<number>({
    value: page,
    onChange,
    defaultValue: initialPage,
    finalValue: initialPage,
    rule: (_page) => typeof _page === 'number' && _page <= total,
  });

  const goToPage = useCallback(
    (pageNumber: number) => {
      if (pageNumber <= 0) {
        setPage(1);

        return;
      }

      if (pageNumber > total) {
        setPage(total);

        return;
      }

      setPage(pageNumber);
    },
    [total]
  );

  const goNextPage = () => {
    const nextPage = activePage + 1;

    goToPage(nextPage);
  };

  const goPrevPage = () => {
    const prevPage = activePage - 1;

    goToPage(prevPage);
  };

  const paginationRange = useMemo((): (number | 'dots')[] => {
    // Pages count is determined as siblings (left/right) + boundary(left/right) + currentPage + 2*DOTS
    const totalPageNumbers = siblings * 2 + 3 + boundary * 2;

    /*
    If the number of pages is less than the page numbers we want to show in our
    paginationComponent, we return the range [1..total]
    */
    if (totalPageNumbers >= total) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(activePage - siblings, boundary);
    const rightSiblingIndex = Math.min(activePage + siblings, total - boundary);

    /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > boundary + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundary + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundary + 2;

      return [...range(1, leftItemCount), DOTS, ...range(total - (boundary - 1), total)];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundary + 1 + 2 * siblings;

      return [...range(1, boundary), DOTS, ...range(total - rightItemCount, total)];
    }

    return [
      ...range(1, boundary),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total - boundary + 1, total),
    ];
  }, [total, siblings, activePage]);

  return {
    paginationRange,
    goToPage,
    goNextPage,
    goPrevPage,
    activePage,
  };
};
