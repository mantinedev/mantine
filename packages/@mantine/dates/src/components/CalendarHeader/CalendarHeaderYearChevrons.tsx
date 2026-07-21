import { rem } from '@mantine/core';

export interface CalendarHeaderYearChevronsProps extends React.ComponentProps<'svg'> {
  /** Controls `width` and `height` of the icon, `16` by default */
  size?: number | string;
}

export function CalendarHeaderYearChevrons({
  style,
  size = 16,
  ...others
}: CalendarHeaderYearChevronsProps) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style, width: rem(size), height: rem(size), display: 'block' }}
      {...others}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.135 7.278a.5.5 0 0 1 .707-.023l3.658 3.43 3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.135 3.278a.5.5 0 0 1 .707-.023L7.5 6.685l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

CalendarHeaderYearChevrons.displayName = '@mantine/core/CalendarHeaderYearChevrons';

export namespace CalendarHeaderYearChevrons {
  export type Props = CalendarHeaderYearChevronsProps;
}
