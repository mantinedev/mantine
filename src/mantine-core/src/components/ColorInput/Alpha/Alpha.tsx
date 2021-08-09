import React, { useState } from 'react';
import cx from 'clsx';
import { useMove, useDidUpdate } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { hsvaToHsl } from '../converters/hsva-to-hsl';
import { HsvaColor } from '../types';
import useStyles from './Alpha.styles';

export type AlphaStylesNames = keyof ReturnType<typeof useStyles>;

interface AlphaProps extends DefaultProps<AlphaStylesNames> {
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
}

export function Alpha({
  value,
  onChange,
  themeOverride,
  classNames,
  styles,
  style,
  className,
}: AlphaProps) {
  const classes = useStyles(null, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.a });
  const { ref } = useMove(({ x }) => onChange({ a: x }));

  useDidUpdate(() => {
    setPosition({ x: value.a, y: 0 });
  }, [value.a]);

  return (
    <div ref={ref} className={cx(classes.alpha, className)} style={{ ..._styles.alpha, ...style }}>
      <div
        className={cx(classes.alphaBackground, classes.alphaOverlay)}
        style={{ ..._styles.alphaBackground, ..._styles.alphaOverlay }}
      />

      <div
        className={classes.alphaOverlay}
        style={{
          ..._styles.alphaOverlay,
          backgroundImage: `linear-gradient(90deg, ${hsvaToHsl({ ...value, a: 0 })}, ${hsvaToHsl({
            ...value,
            a: 1,
          })})`,
        }}
      />
      <Thumb themeOverride={themeOverride} position={position} style={{ top: 1 }} />
    </div>
  );
}

Alpha.displayName = '@mantine/core/Alpha';
