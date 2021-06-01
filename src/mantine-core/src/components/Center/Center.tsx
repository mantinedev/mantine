import React from 'react';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;
}

export function Center({ style, ...others }: CenterProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      {...others}
    />
  );
}

Center.displayName = '@mantine/core/Center';
