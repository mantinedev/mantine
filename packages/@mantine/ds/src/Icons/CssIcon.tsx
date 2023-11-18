import { rem } from '@mantine/core';
import React from 'react';

interface CssIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function CssIcon({ size, style, ...others }: CssIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
      <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
      <path
        fill="#EEE"
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      />
    </svg>
  );
}
