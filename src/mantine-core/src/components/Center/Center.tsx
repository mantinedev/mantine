import React from 'react';
import cx from 'clsx';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export function Center({ style, className, inline = false, ...others }: CenterProps) {
  return (
    <div
      style={{
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      className={cx('mantine-center', className)}
      {...others}
    />
  );
}

Center.displayName = '@mantine/core/Center';
