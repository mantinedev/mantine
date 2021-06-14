import React from 'react';

export function GitterLogo(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 132" {...props}>
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M.914.873h12.525v82.661H.914V.873zm76.149 20.039h12.524v62.622H77.063V20.912zm-50.599 0h12.524v110.466H26.464V20.912zm25.049 0h12.525v110.466H51.513V20.912z"
      />
    </svg>
  );
}
