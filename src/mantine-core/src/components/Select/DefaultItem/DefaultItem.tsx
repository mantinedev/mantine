import React from 'react';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  elementRef: React.ForwardedRef<HTMLButtonElement>;
}

export function DefaultItem({ label, ...others }: DefaultItemProps) {
  return <div {...others}>{label}</div>;
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
