import React from 'react';
import cx from 'clsx';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;
}

export function Center({ style, className, ...others }: CenterProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      className={cx('mantine-center', className)}
      {...others}
    />
  );
}

Center.displayName = '@mantine/core/Center';
