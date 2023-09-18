import React from 'react';
import { rem } from '../../core';

export interface RadioIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: string | number;
}

export function RadioIcon({ size, style, ...others }: RadioIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 5 5"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path fill="currentColor" d="M0 2.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
    </svg>
  );
}
