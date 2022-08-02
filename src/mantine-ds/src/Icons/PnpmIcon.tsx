import React from 'react';

interface PnpmIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export function PnpmIcon({ size, ...others }: PnpmIconProps) {
  return (
    <svg
      {...others}
      viewBox="76.59 44 164.01 164"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path fill="#f9ad00" d="m237.6 95h-50v-50h50v50z" />
      <path fill="#f9ad00" d="m182.59 95h-50v-50h50v50z" />
      <path fill="#f9ad00" d="m127.59 95h-50v-50h50v50z" />
      <path fill="#f9ad00" d="m237.6 150h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="m182.59 150h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="m182.59 205h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="m237.6 205h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="m127.59 205h-50v-50h50v50z" />
    </svg>
  );
}
