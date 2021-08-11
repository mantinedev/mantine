import React, { useState } from 'react';
import cx from 'clsx';
import { useMove, clampUseMovePosition, useDidUpdate, UseMovePosition } from '@mantine/hooks';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { Thumb } from '../Thumb/Thumb';
import useStyles from './ColorSlider.styles';

export type ColorSliderStylesNames = keyof ReturnType<typeof useStyles>;

interface ColorSliderProps extends DefaultProps<ColorSliderStylesNames> {
  value: number;
  onChange(value: number): void;
  maxValue: number;
  label?: string;
  overlays: React.CSSProperties[];
  shouldRound: boolean;
}

export function ColorSlider({
  value,
  onChange,
  maxValue,
  label,
  shouldRound,
  overlays,
  themeOverride,
  classNames,
  styles,
  className,
  style,
}: ColorSliderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value / maxValue });
  const getChangeValue = (val: number) =>
    shouldRound ? Math.round(val * maxValue) : val * maxValue;
  const { ref } = useMove(({ x }) => onChange(getChangeValue(x)));

  useDidUpdate(() => {
    setPosition({ y: 0, x: value / maxValue });
  }, [value]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange(getChangeValue(_position.x));
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

  const layers = overlays.map((overlay, index) => (
    <div className={classes.sliderOverlay} style={overlay} key={index} />
  ));

  return (
    <div
      ref={ref}
      className={cx(classes.slider, className)}
      style={{ ..._styles.slider, ...style }}
      role="slider"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-valuemin={0}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {layers}

      <Thumb
        themeOverride={themeOverride}
        position={position}
        style={{ top: 1 }}
        className={classes.sliderThumb}
      />
    </div>
  );
}

ColorSlider.displayName = '@mantine/core/ColorSlider';
