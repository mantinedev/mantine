import React from 'react';

export function PrevIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1.25em"
      height="1.25em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
        fill="currentColor"
      />
    </svg>
  );
}
