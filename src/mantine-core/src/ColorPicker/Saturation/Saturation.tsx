import React, { useState, useEffect, useRef } from 'react';
import { useMove, clampUseMovePosition, UseMovePosition } from '@mantine/hooks';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { HsvaColor } from '../types';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import useStyles from './Saturation.styles';
import { convertHsvaTo } from '../converters';

export type SaturationStylesNames =
  | Exclude<Selectors<typeof useStyles>, 'saturationOverlay' | 'saturationThumb'>
  | ThumbStylesNames;

interface SaturationProps extends DefaultProps<SaturationStylesNames> {
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
  onChangeEnd(color: Partial<HsvaColor>): void;
  saturationLabel?: string;
  size: MantineSize;
  color: string;
  focusable?: boolean;
  __staticSelector?: string;
}

export function Saturation({
  value,
  onChange,
  onChangeEnd,
  focusable = true,
  __staticSelector = 'saturation',
  size,
  color,
  saturationLabel,
  classNames,
  styles,
  unstyled,
}: SaturationProps) {
  const { classes } = useStyles({ size }, { classNames, styles, name: __staticSelector, unstyled });
  const [position, setPosition] = useState({ x: value.s / 100, y: 1 - value.v / 100 });
  const positionRef = useRef(position);

  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
      },
    }
  );

  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
    onChangeEnd({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
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
        style={{ backgroundImage: 'linear-gradient(90deg, #fff, transparent)' }}
      />

      <div
        className={classes.saturationOverlay}
        style={{ backgroundImage: 'linear-gradient(0deg, #000, transparent)' }}
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
