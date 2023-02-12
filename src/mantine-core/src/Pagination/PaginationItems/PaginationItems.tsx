import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { usePaginationContext } from '../Pagination.context';
import { PaginationControl } from '../PaginationControl/PaginationControl';
import { PaginationDots } from '../PaginationDots/PaginationDots';

export interface PaginationItemsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function PaginationItems() {
  const ctx = usePaginationContext();

  const items = ctx.range.map((page, index) => {
    if (page === 'dots') {
      return <PaginationDots />;
    }

    return (
      <PaginationControl
        key={index}
        active={page === ctx.active}
        aria-current={page === ctx.active ? 'page' : undefined}
        onClick={() => ctx.onChange(page)}
        disabled={ctx.disabled}
        {...ctx.getItemProps?.(page)}
      >
        {page}
      </PaginationControl>
    );
  });
  return <>{items}</>;
}

PaginationItems.displayName = '@mantine/core/PaginationItems';
