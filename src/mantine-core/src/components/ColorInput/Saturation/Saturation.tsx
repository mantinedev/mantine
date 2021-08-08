import React, { useState, useRef, useEffect } from 'react';
import { useMove } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '../../../theme';
import { HsvaColor } from '../types';
import { Thumb } from '../Thumb/Thumb';
import useStyles from './Saturation.styles';

export type SaturationStylesNames = keyof ReturnType<typeof useStyles>;

interface SaturationProps extends DefaultProps<SaturationStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
}

export function Saturation({
  value,
  onChange,
  themeOverride,
  classNames,
  styles,
}: SaturationProps) {
  const classes = useStyles(null, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ x: value.s / 100, y: value.v / 100 });
  const refValue = useRef(value);

  useEffect(() => {
    refValue.current = value;
  }, [value]);

  const { ref } = useMove(({ x, y }) => {
    onChange({ ...refValue.current, s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    setPosition({ x, y });
  });

  return (
    <div className={classes.saturation} ref={ref} style={{ ..._styles.saturation }}>
      <div
        className={classes.saturationOverlay}
        style={{ backgroundColor: `hsl(${value.h}, 100%, 50%)` }}
      />
      <div
        className={classes.saturationOverlay}
        style={{
          ..._styles.saturationOverlay,
          backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
        }}
      />

      <div
        className={classes.saturationOverlay}
        style={{
          ..._styles.saturationOverlay,
          backgroundImage: 'linear-gradient(0deg, #000, transparent)',
        }}
      />

      <Thumb themeOverride={themeOverride} position={position} />
    </div>
  );
}

Saturation.displayName = '@mantine/core/Saturation';
