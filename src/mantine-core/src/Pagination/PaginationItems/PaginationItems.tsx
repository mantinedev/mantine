import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { usePaginationContext } from '../Pagination.context';
import { PaginationControl } from '../PaginationControl/PaginationControl';
import { PaginationDots } from '../PaginationDots/PaginationDots';

export interface PaginationItemsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function PaginationItems() {
  const ctx = usePaginationContext();

  const items = ctx.range.map((pageNumber, index) => {
    if (pageNumber === 'dots') {
      return <PaginationDots />;
    }

    return (
      <PaginationControl
        key={index}
        active={pageNumber === ctx.active}
        aria-current={pageNumber === ctx.active ? 'page' : undefined}
        onClick={() => ctx.onChange(pageNumber)}
        disabled={ctx.disabled}
      >
        {pageNumber}
      </PaginationControl>
    );
  });
  return <>{items}</>;
}

PaginationItems.displayName = '@mantine/core/PaginationItems';
