/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { usePagination } from '@mantine/hooks';
import { createEventHandler } from '@mantine/utils';
import { PaginationProvider } from '../Pagination.context';

export interface PaginationRootSettings {
  /** Total number of pages, must be an integer */
  total: number;

  /** Active page for controlled component, must be an integer in [0, total] interval */
  value?: number;

  /** Active page for uncontrolled component, must be an integer in [0, total] interval */
  defaultValue?: number;

  /** Called when page changes */
  onChange?(value: number): void;

  /** Determines whether all controls should be disabled, false by default */
  disabled?: boolean;

  /** Number of siblings displayed on the left/right side of selected page, 1 by default */
  siblings?: number;

  /** Number of elements visible on the left/right edges, 1 by default */
  boundaries?: number;

  /** Called when next page control is clicked */
  onNextPage?(): void;

  /** Called when previous page control is clicked */
  onPreviousPage?(): void;

  /** Called when first page control is clicked */
  onFirstPage?(): void;

  /** Called when last page control is clicked */
  onLastPage?(): void;
}

export interface PaginationRootProps extends PaginationRootSettings {
  /** Pagination content */
  children?: React.ReactNode;
}

const defaultProps: Partial<PaginationRootProps> = {
  siblings: 1,
  boundaries: 1,
};

export function PaginationRoot(props: PaginationRootProps) {
  const {
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    children,
    siblings,
    boundaries,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
  } = useComponentDefaultProps('PaginationRoot', defaultProps, props);

  const { range, setPage, next, previous, active, first, last } = usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries,
  });

  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);

  return (
    <PaginationProvider
      value={{
        range,
        active,
        disabled,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
      }}
    >
      {children}
    </PaginationProvider>
  );
}
