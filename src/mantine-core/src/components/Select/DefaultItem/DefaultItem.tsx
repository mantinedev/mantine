import React from 'react';

export interface SelectItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  value?: string;
  elementRef: React.ForwardedRef<HTMLDivElement>;
}

export function DefaultItem({ label, value, elementRef, ...others }: SelectItemProps) {
  return (
    <div ref={elementRef} {...others}>
      {label || value}
    </div>
  );
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
