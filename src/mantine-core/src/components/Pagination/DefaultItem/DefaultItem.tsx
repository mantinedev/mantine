import React from 'react';
import { PrevIcon } from '../icons/PrevIcon';
import { NextIcon } from '../icons/NextIcon';
import { DotsIcon } from '../icons/DotsIcon';
import { ShowFirst } from '../icons/ShowFirst';
import { ShowLast } from '../icons/ShowLast';

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<'button'> {
  page: number | 'dots' | 'prev' | 'next' | 'showFirst' | 'showLast';
  active?: boolean;
  onClick?: () => void;
}

const icons = {
  dots: DotsIcon,
  next: NextIcon,
  prev: PrevIcon,
  showFirst: ShowFirst,
  showLast: ShowLast,
};

export function DefaultItem({ page, active, onClick, ...others }: PaginationItemProps) {
  const Item = icons[page];
  const children = Item ? <Item /> : page;

  return (
    <button type="button" onClick={onClick} {...others}>
      {children}
    </button>
  );
}

DefaultItem.displayName = '@mantine/core/Pagination/DefaultItem';
