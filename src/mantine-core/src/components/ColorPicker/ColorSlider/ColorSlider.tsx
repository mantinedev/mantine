import React, { useState } from 'react';
import {
  useMove,
  clampUseMovePosition,
  useDidUpdate,
  UseMovePosition,
  useMergedRef,
} from '@mantine/hooks';
import { mergeStyles } from '@mantine/tss';
import { DefaultProps, MantineSize } from '@mantine/theme';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import useStyles from './ColorSlider.styles';

export type ColorSliderStylesNames =
  | Exclude<keyof ReturnType<typeof useStyles>['classes'], 'sliderThumb'>
  | ThumbStylesNames;

export interface BaseColorSliderProps
  extends DefaultProps<ColorSliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  value: number;
  onChange(value: number): void;
  size: MantineSize;
  focusable?: boolean;
  elementRef?: React.ForwardedRef<HTMLDivElement>;
  __staticSelector?: string;
}

interface ColorSliderProps extends BaseColorSliderProps {
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  thumbColor?: string;
}

export function ColorSlider({
  value,
  onChange,
  maxValue,
  round,
  size,
  thumbColor = 'transparent',
  __staticSelector = 'color-slider',
  focusable = true,
  elementRef,
  overlays,
  classNames,
  styles,
  className,
  style,
  ...others
}: ColorSliderProps) {
  const { classes, cx } = useStyles({ size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const [position, setPosition] = useState({ y: 0, x: value / maxValue });
  const getChangeValue = (val: number) => (round ? Math.round(val * maxValue) : val * maxValue);
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
    <div
      className={classes.sliderOverlay}
      style={{ ..._styles.sliderOverlay, ...overlay }}
      key={index}
    />
  ));

  return (
    <div
      {...others}
      ref={useMergedRef(ref, elementRef)}
      className={cx(classes.slider, className)}
      style={{ ..._styles.slider, ...style }}
      role="slider"
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-valuemin={0}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {layers}

      <Thumb
        __staticSelector={__staticSelector}
        classNames={classNames}
        styles={styles}
        position={position}
        style={{ top: 1, backgroundColor: thumbColor }}
        className={classes.sliderThumb}
        size={size}
      />
    </div>
  );
}

ColorSlider.displayName = '@mantine/core/ColorSlider';
