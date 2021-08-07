import React, { useState } from 'react';
import { useMove } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { hsvaToHsl } from '../converters/hsva-to-hsl';
import { HsvaColor } from '../types';
import useStyles from './Hue.styles';

export type HueStylesNames = keyof ReturnType<typeof useStyles>;

interface HueProps extends DefaultProps<HueStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
  thumbSize?: number;
}

export function Hue({
  value,
  onChange,
  thumbSize = 24,
  themeOverride,
  classNames,
  styles,
}: HueProps) {
  const classes = useStyles(null, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.h / 360 });

  const { ref } = useMove(({ x }) => {
    onChange({ ...value, h: Math.round(x * 360) });
    setPosition({ x, y: 0 });
  });

  return (
    <div ref={ref} className={classes.hue} style={_styles.hue}>
      <Thumb
        color={hsvaToHsl({ ...value, s: 100, v: 100 })}
        size={thumbSize}
        themeOverride={themeOverride}
        position={position}
        style={{ top: 'calc(50% - 12px)' }}
      />
    </div>
  );
}

Hue.displayName = '@mantine/core/Hue';
