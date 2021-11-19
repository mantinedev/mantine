import React from 'react';
import * as _icons from '../icons';

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<'button'> {
  page: number | 'dots' | 'prev' | 'next' | 'first' | 'last';
  active?: boolean;
  onClick?: () => void;
}

const icons = {
  dots: _icons.DotsIcon,
  next: _icons.NextIcon,
  prev: _icons.PrevIcon,
  first: _icons.FirstIcon,
  last: _icons.LastIcon,
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
