import React from 'react';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  value?: string;
  elementRef: React.ForwardedRef<HTMLDivElement>;
}

export function DefaultItem({ label, value, elementRef, ...others }: DefaultItemProps) {
  return (
    <div ref={elementRef} {...others}>
      {label || value}
    </div>
  );
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
