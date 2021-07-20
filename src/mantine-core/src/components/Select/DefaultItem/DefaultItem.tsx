import React from 'react';
import { UnstyledButton } from '../../Button/Button';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'value'> {
  label: React.ReactNode;
  elementRef: React.ForwardedRef<HTMLButtonElement>;
}

export function DefaultItem({ label, ...others }: DefaultItemProps) {
  return <UnstyledButton {...others}>{label}</UnstyledButton>;
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
