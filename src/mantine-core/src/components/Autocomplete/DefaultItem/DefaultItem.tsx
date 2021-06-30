import React from 'react';
import { UnstyledButton } from '../../Button/Button';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'value'> {
  value: React.ReactNode;
}

export function DefaultItem({ value, ...others }: DefaultItemProps) {
  return (
    <UnstyledButton {...others} tabIndex={-1}>
      {value}
    </UnstyledButton>
  );
}
