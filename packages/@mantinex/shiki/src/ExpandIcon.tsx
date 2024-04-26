import { rem } from '@mantine/core';

interface ExpandIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  expanded: boolean;
}

export function ExpandIcon({ expanded, style, ...others }: ExpandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(18), height: rem(18), ...style }}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...others}
    >
      {expanded ? (
        <>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 13v-8l-3 3m6 0l-3 -3" />
          <path d="M9 17l1 0" />
          <path d="M14 17l1 0" />
          <path d="M19 17l1 0" />
          <path d="M4 17l1 0" />
        </>
      ) : (
        <>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 11v8l3 -3m-6 0l3 3" />
          <path d="M9 7l1 0" />
          <path d="M14 7l1 0" />
          <path d="M19 7l1 0" />
          <path d="M4 7l1 0" />
        </>
      )}
    </svg>
  );
}
