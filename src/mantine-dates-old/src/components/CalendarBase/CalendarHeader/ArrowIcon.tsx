import React from 'react';
import { useMantineTheme } from '@mantine/core';

interface ArrowIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  direction: 'left' | 'right';
}

export function ArrowIcon({ direction, style, ...others }: ArrowIconProps) {
  const theme = useMantineTheme();
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...style,
        transform:
          (direction === 'right' && theme.dir === 'ltr') ||
          (direction === 'left' && theme.dir === 'rtl')
            ? 'rotate(180deg)'
            : 'none',
      }}
      {...others}
    >
      <path
        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

ArrowIcon.displayName = '@mantine/dates/ArrowIcon';
