import React from 'react';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  elementRef: React.ForwardedRef<HTMLDivElement>;
}

export function DefaultItem({ label, elementRef, ...others }: DefaultItemProps) {
  return (
    <div ref={elementRef} {...others}>
      {label}
    </div>
  );
}

DefaultItem.displayName = '@mantine/core/DefaultItem';
