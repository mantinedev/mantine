import React from 'react';

interface AreaGradientCategory {
  color: string;
  id: string;
  withGradient: boolean | undefined;
}

export function AreaGradient({ color, id, withGradient }: AreaGradientCategory) {
  return (
    <>
      {withGradient ? (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.2} />
          <stop offset="100%" stopColor={color} stopOpacity={0.025} />
        </linearGradient>
      ) : (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity={0.25} />
        </linearGradient>
      )}
    </>
  );
}
