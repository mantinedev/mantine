import React from 'react';

interface NpmIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export function NpmIcon({ size, ...others }: NpmIconProps) {
  return (
    <svg
      {...others}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path d="M0 256V0h256v256z" fill="#C12127" />
      <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF" />
    </svg>
  );
}
