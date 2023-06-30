import React from 'react';

export function RadioIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  const { width, height, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 5 5" style={{ width, height }} {...others}>
      <path fill="currentColor" d="M0 2.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
    </svg>
  );
}
