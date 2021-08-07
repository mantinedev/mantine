import React, { useState } from 'react';
import cx from 'clsx';
import { useMove } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { hsvaToHsl } from '../converters/hsva-to-hsl';
import { HsvaColor } from '../types';
import useStyles from './Alpha.styles';

export type AlphaStylesNames = keyof ReturnType<typeof useStyles>;

interface AlphaProps extends DefaultProps<AlphaStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
  thumbSize?: number;
}

export function Alpha({
  value,
  onChange,
  thumbSize = 24,
  themeOverride,
  classNames,
  styles,
}: AlphaProps) {
  const classes = useStyles(null, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.a });

  const { ref } = useMove(({ x }) => {
    onChange({ ...value, a: x });
    setPosition({ x, y: 0 });
  });

  return (
    <div ref={ref} className={classes.hue} style={_styles.hue}>
      <div className={cx(classes.alphaBackground, classes.overlay)} />
      <div
        className={classes.overlay}
        style={{
          backgroundImage: `linear-gradient(90deg, ${hsvaToHsl({ ...value, a: 0 })}, ${hsvaToHsl({
            ...value,
            a: 1,
          })})`,
        }}
      />
      <Thumb
        color={hsvaToHsl(value)}
        size={thumbSize}
        themeOverride={themeOverride}
        position={position}
        style={{ top: 'calc(50% - 12px)' }}
      />
    </div>
  );
}

Alpha.displayName = '@mantine/core/Alpha';
