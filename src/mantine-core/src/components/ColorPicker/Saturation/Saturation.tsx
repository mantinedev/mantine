import React, { useState, useEffect } from 'react';
import { useMove, clampUseMovePosition, UseMovePosition } from '@mantine/hooks';
import { mergeStyles, DefaultProps, MantineSize, ClassNames } from '@mantine/styles';
import { HsvaColor } from '../types';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import useStyles from './Saturation.styles';
import { convertHsvaTo } from '../converters';

export type SaturationStylesNames =
  | Exclude<ClassNames<typeof useStyles>, 'saturationOverlay' | 'saturationThumb'>
  | ThumbStylesNames;

interface SaturationProps extends DefaultProps<SaturationStylesNames> {
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
  saturationLabel?: string;
  size: MantineSize;
  color: string;
  focusable?: boolean;
  __staticSelector?: string;
}

export function Saturation({
  value,
  onChange,
  focusable = true,
  __staticSelector = 'saturation',
  size,
  color,
  saturationLabel,
  classNames,
  styles,
}: SaturationProps) {
  const { classes } = useStyles({ size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ x: value.s / 100, y: 1 - value.v / 100 });

  const { ref } = useMove(({ x, y }) => {
    onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
  });

  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }

      case 'ArrowDown': {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }

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
      className={classes.saturation}
      ref={ref}
      style={{ ..._styles.saturation }}
      role="slider"
      aria-label={saturationLabel}
      aria-valuenow={position.x}
      aria-valuetext={convertHsvaTo('rgba', value)}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
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

      <Thumb
        __staticSelector={__staticSelector}
        classNames={classNames}
        styles={styles}
        position={position}
        className={classes.saturationThumb}
        style={{ backgroundColor: color }}
        size={size}
      />
    </div>
  );
}

Saturation.displayName = '@mantine/core/Saturation';
