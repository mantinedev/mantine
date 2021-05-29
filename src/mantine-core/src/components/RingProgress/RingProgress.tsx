import React from 'react';
import cx from 'clsx';
import { Curve } from './Curve';
import { DefaultProps } from '../../theme';
import { getCurves } from './get-curves';
import useStyles from './RingProgress.styles';

export interface RingProgressProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Label displayed in the center of the ring */
  label?: React.ReactNode;

  /** Ring thickness */
  thickness?: number;

  /** Width and height of the progress ring in px */
  size?: number;

  /** Ring sections */
  sections: { value: number; color: string }[];
}

export function RingProgress({
  label,
  sections,
  size = 120,
  thickness = size / 10,
  themeOverride,
  className,
  style,
  ...others
}: RingProgressProps) {
  const classes = useStyles();

  const curves = getCurves({ size, thickness, sections }).map((curve, index) => (
    <Curve
      key={index}
      value={curve.data?.value}
      size={size}
      thickness={thickness}
      sum={curve.sum}
      offset={curve.offset}
      color={curve.data?.color}
      empty={curve.root}
      themeOverride={themeOverride}
    />
  ));

  return (
    <div
      style={{ ...style, width: size, height: size }}
      className={cx(classes.wrapper, className)}
      {...others}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {curves}
      </svg>

      {label && <div className={classes.label}>{label}</div>}
    </div>
  );
}

RingProgress.displayName = '@mantine/core/RingProgress';
