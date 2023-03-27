import React from 'react';
import { usePaginationContext } from '../Pagination.context';
import { PaginationControl } from '../PaginationControl/PaginationControl';
import { PaginationDots } from '../PaginationDots/PaginationDots';
import { PaginationIcon } from '../Pagination.icons';

export interface PaginationItemsProps {
  /** Dots icon component */
  dotsIcon?: PaginationIcon;
}

export function PaginationItems({ dotsIcon }: PaginationItemsProps) {
  const ctx = usePaginationContext();

  const items = ctx.range.map((page, index) => {
    if (page === 'dots') {
      return <PaginationDots icon={dotsIcon} key={index} />;
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
