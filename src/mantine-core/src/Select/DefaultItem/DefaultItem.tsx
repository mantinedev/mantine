import React, { forwardRef } from 'react';

export interface SelectItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  value?: string;
}

export const DefaultItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, ...others }: SelectItemProps, ref) => (
    <div ref={ref} {...others}>
      {label || value}
    </div>
  )
);

DefaultItem.displayName = '@mantine/core/DefaultItem';
