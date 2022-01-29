import React from 'react';

export function FacebookIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="facebook"
      className="svg-inline--fa fa-facebook"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={14}
      height={14}
      {...props}
    >
      <path
        fill="currentColor"
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
      />
    </svg>
  );
}
