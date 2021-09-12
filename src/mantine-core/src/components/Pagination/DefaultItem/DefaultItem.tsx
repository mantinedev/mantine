import React from 'react';
import { UnstyledButton } from '../../Button/Button';

import { PrevIcon } from '../icons/PrevIcon';
import { NextIcon } from '../icons/NextIcon';
import { DotsIcon } from '../icons/DotsIcon';

export interface PaginationItemProps extends
    React.ComponentPropsWithoutRef<'button'> {
  page: number | 'dots' | 'prev' | 'next';
  active?: boolean;
  onClick?: () => void;
}

export function DefaultItem({
  page,
  active,
  onClick,
  ...rest
}: PaginationItemProps) {
  const renderContent = () => {
    switch (page) {
      case 'dots':
        return <DotsIcon />;
      case 'next':
        return <NextIcon />;
      case 'prev':
        return <PrevIcon />;
      default:
        return page;
    }
  };

  return (
    <UnstyledButton
      onClick={onClick}
      {...rest}
    >
      {renderContent()}
    </UnstyledButton>
  );
}

DefaultItem.displayName = '@mantine/core/Pagination/DefaultItem';
