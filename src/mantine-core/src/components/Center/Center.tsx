import React from 'react';
import clsx from 'clsx';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export function Center({ style, className, inline = false, ...others }: CenterProps) {
  return (
    <div
      {...others}
      className={clsx('mantine-center', className)}
      style={{
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    />
  );
}

Center.displayName = '@mantine/core/Center';
