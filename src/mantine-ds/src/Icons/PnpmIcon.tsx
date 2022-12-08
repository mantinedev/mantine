import React from 'react';

interface PnpmIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export function PnpmIcon({ size, ...others }: PnpmIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="66.092 33.5 184.5 184.5"
      height={size}
      width={size}
      {...others}
    >
      <path fill="#fff" d="M67.59 35h180v180h-180V35z" />
      <path fill="#f9ad00" d="M237.6 95h-50V45h50v50z" />
      <path fill="#f9ad00" d="M182.59 95h-50V45h50v50z" />
      <path fill="#f9ad00" d="M127.59 95h-50V45h50v50z" />
      <path fill="#f9ad00" d="M237.6 150h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="M182.59 150h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="M182.59 205h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="M237.6 205h-50v-50h50v50z" />
      <path fill="#4e4e4e" d="M127.59 205h-50v-50h50v50z" />
    </svg>
  );
}
