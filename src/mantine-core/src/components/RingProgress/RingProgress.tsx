import React from 'react';
import cx from 'clsx';
import { Curve } from './Curve/Curve';
import { DefaultProps, mergeStyles } from '../../theme';
import { getCurves } from './get-curves/get-curves';
import useStyles from './RingProgress.styles';

export type RingProgressStylesNames = keyof ReturnType<typeof useStyles>;

export interface RingProgressProps
  extends DefaultProps<RingProgressStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
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
  className,
  style,
  label,
  sections,
  size = 120,
  thickness = size / 10,
  themeOverride,
  classNames,
  styles,
  ...others
}: RingProgressProps) {
  const classes = useStyles(null, classNames, 'ring-progress');
  const _styles = mergeStyles(classes, styles);

  const curves = getCurves({ size, thickness, sections }).map((curve, index) => (
    <Curve
      key={index}
      value={curve.data?.value}
      size={size}
      thickness={thickness}
      sum={curve.sum}
      offset={curve.offset}
      color={curve.data?.color}
      root={curve.root}
      themeOverride={themeOverride}
    />
  ));

  return (
    <div
      style={{ width: size, height: size, ...style, ..._styles.root }}
      className={cx(classes.root, className)}
      {...others}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {curves}
      </svg>

      {label && (
        <div
          className={classes.label}
          style={{
            right: thickness * 2,
            left: thickness * 2,
            ..._styles.label,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

RingProgress.displayName = '@mantine/core/RingProgress';
