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
      aria-hidden
      {...others}
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor" />
    </svg>
  );
}
