import React, { useState } from 'react';
import cx from 'clsx';
import { useMove, clampUseMovePosition, useDidUpdate, UseMovePosition } from '@mantine/hooks';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import { HsvaColor } from '../types';
import useStyles from './Hue.styles';

export type HueStylesNames = keyof ReturnType<typeof useStyles>;

interface HueProps extends DefaultProps<HueStylesNames> {
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
  hueLabel?: string;
}

export function Hue({
  value,
  onChange,
  hueLabel,
  themeOverride,
  classNames,
  styles,
  className,
  style,
}: HueProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value.h / 360 });
  const { ref } = useMove(({ x }) => onChange({ h: Math.round(x * 360) }));

  useDidUpdate(() => {
    setPosition({ y: 0, x: value.h / 360 });
  }, [value.h]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ h: Math.round(_position.x * 360) });
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
      className={cx(classes.hue, className)}
      style={{ ..._styles.hue, ...style }}
      role="slider"
      aria-label={hueLabel}
      aria-valuenow={value.h}
      aria-valuemax={360}
      aria-valuemin={0}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={classes.hueOverlay} />
      <Thumb
        themeOverride={themeOverride}
        position={position}
        style={{ top: 1 }}
        className={classes.hueThumb}
      />
    </div>
  );
}

Hue.displayName = '@mantine/core/Hue';
