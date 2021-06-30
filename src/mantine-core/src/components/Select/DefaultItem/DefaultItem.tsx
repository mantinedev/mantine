import React from 'react';
import { UnstyledButton } from '../../Button/Button';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'value'> {
  label: React.ReactNode;
}

export function DefaultItem({ label, ...others }: DefaultItemProps) {
  return (
    <UnstyledButton {...others} tabIndex={-1}>
      {label}
    </UnstyledButton>
  );
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
