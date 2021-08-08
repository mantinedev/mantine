import React, { useState } from 'react';
import cx from 'clsx';
import { useMove } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { HsvaColor } from '../types';
import useStyles from './Hue.styles';

export type HueStylesNames = keyof ReturnType<typeof useStyles>;

interface HueProps extends DefaultProps<HueStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
}

export function Hue({
  value,
  onChange,
  themeOverride,
  classNames,
  styles,
  className,
  style,
}: HueProps) {
  const classes = useStyles(null, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.h / 360 });

  const { ref } = useMove(({ x }) => {
    onChange({ ...value, h: Math.round(x * 360) });
    setPosition({ x, y: 0 });
  });

  return (
    <div ref={ref} className={cx(classes.hue, className)} style={{ ..._styles.hue, ...style }}>
      <div className={classes.hueOverlay} />
      <Thumb themeOverride={themeOverride} position={position} style={{ top: 1 }} />
    </div>
  );
}

Hue.displayName = '@mantine/core/Hue';
