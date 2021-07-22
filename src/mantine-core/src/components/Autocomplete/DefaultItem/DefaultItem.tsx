import React from 'react';
import { UnstyledButton } from '../../Button/Button';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'value'> {
  value: React.ReactNode;
}

export function DefaultItem({ value, ...others }: DefaultItemProps) {
  return <UnstyledButton {...others}>{value}</UnstyledButton>;
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
