import React from 'react';
import { UnstyledButton } from '../../Button/Button';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'value'> {
  label: React.ReactNode;
  elementRef: React.ForwardedRef<HTMLButtonElement>;
}

export function DefaultItem({ label, elementRef, ...others }: DefaultItemProps) {
  return (
    <UnstyledButton {...others} elementRef={elementRef} tabIndex={-1}>
      {label}
    </UnstyledButton>
  );
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
