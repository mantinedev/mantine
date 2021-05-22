import React from 'react';

interface RingProgressCircleProps extends React.ComponentProps<'circle'> {
  thickness?: number;
  value?: number;
  offset?: number;
}

export function RingProgressCircle(props: RingProgressCircleProps) {
  const { thickness, value, offset, ...rest } = props;
  const radius = 50 - thickness / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <circle
      cx="50"
      cy="50"
      r={radius}
      strokeWidth={thickness}
      fill="transparent"
      strokeDasharray={`${circumference} ${circumference}`}
      strokeDashoffset={`${offset}`}
      style={{
        transform: 'rotate(-90deg)',
        transformOrigin: '50% 50%',
      }}
      {...rest}
    />
  );
}
