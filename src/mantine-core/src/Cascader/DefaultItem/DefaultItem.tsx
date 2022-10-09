import React, { forwardRef } from 'react';
import { MantineSize } from '@mantine/styles';
import { ArrowIcon } from './ArrowIcon';

interface DefaultItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label?: React.ReactNode;
  hasChildren: boolean;
  size: MantineSize;
  value: string;
}

export const DefaultItem = forwardRef<HTMLDivElement, DefaultItemProps>(
  ({ label, value, hasChildren, size, ...rest }: DefaultItemProps, ref) => (
    <div ref={ref} {...rest}>
      {label || value}
      {hasChildren && <ArrowIcon size={size} />}
    </div>
  )
);
