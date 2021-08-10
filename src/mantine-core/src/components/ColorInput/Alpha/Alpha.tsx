import React, { useState } from 'react';
import cx from 'clsx';
import { useMove, clampUseMovePosition, UseMovePosition, useDidUpdate } from '@mantine/hooks';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { convertHsvaTo } from '../converters';
import { HsvaColor } from '../types';
import useStyles from './Alpha.styles';

export type AlphaStylesNames = keyof ReturnType<typeof useStyles>;

interface AlphaProps extends DefaultProps<AlphaStylesNames> {
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
  alphaLabel?: string;
}

export function Alpha({
  value,
  onChange,
  alphaLabel,
  themeOverride,
  classNames,
  styles,
  style,
  className,
}: AlphaProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.a });
  const { ref } = useMove(({ x }) => onChange({ a: x }));

  useDidUpdate(() => {
    setPosition({ x: value.a, y: 0 });
  }, [value.a]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ a: _position.x });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowRight': {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }

      case 'ArrowLeft': {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cx(classes.alpha, className)}
      style={{ ..._styles.alpha, ...style }}
      role="slider"
      aria-label={alphaLabel}
      aria-valuenow={value.a}
      aria-valuemax={1}
      aria-valuemin={0}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className={cx(classes.alphaBackground, classes.alphaOverlay)}
        style={{ ..._styles.alphaBackground, ..._styles.alphaOverlay }}
      />

      <div
        className={classes.alphaOverlay}
        style={{
          ..._styles.alphaOverlay,
          backgroundImage: `linear-gradient(90deg, ${convertHsvaTo('rgba', {
            ...value,
            a: 0,
          })}, ${convertHsvaTo('rgba', {
            ...value,
            a: 1,
          })})`,
        }}
      />
      <Thumb
        themeOverride={themeOverride}
        position={position}
        style={{ top: 1 }}
        className={classes.alphaThumb}
      />
    </div>
  );
}

Alpha.displayName = '@mantine/core/Alpha';
