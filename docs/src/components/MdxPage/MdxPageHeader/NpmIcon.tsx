import React from 'react';

export function NpmIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 14, height: 14, ...props.style }}
    >
      <path d="M0 256V0h256v256z" fill="#C12127" />
      <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF" />
    </svg>
  );
}
