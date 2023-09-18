import React, { useRef, useState, forwardRef } from 'react';
import {
  UseMovePosition,
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove,
} from '@mantine/hooks';
import { Box, ElementProps, MantineSize, useMantineTheme, rem } from '../../../core';
import { Thumb } from '../Thumb/Thumb';
import { useColorPickerContext } from '../ColorPicker.context';

export interface __ColorSliderProps extends ElementProps<'div', 'onChange'> {
  value: number;
  onChange?(value: number): void;
  onChangeEnd?(value: number): void;
  onScrubStart?(): void;
  onScrubEnd?(): void;
  size?: MantineSize | (string & {});
  focusable?: boolean;
}

export interface ColorSliderProps extends __ColorSliderProps {
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  thumbColor?: string;
}

export const ColorSlider = forwardRef<HTMLDivElement, ColorSliderProps>((props, ref) => {
  const {
    className,
    onChange,
    onChangeEnd,
    maxValue,
    round,
    size = 'md',
    focusable = true,
    value,
    overlays,
    thumbColor = 'transparent',
    onScrubStart,
    onScrubEnd,
    ...others
  } = props;

  const { getStyles } = useColorPickerContext();

  const theme = useMantineTheme();
  const [position, setPosition] = useState({ y: 0, x: value / maxValue });
  const positionRef = useRef(position);
  const getChangeValue = (val: number) => (round ? Math.round(val * maxValue) : val * maxValue);
  const { ref: sliderRef } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange?.(getChangeValue(x));
    },
    {
      onScrubEnd: () => {
        const { x } = positionRef.current;
        onChangeEnd?.(getChangeValue(x));
        onScrubEnd?.();
      },
      onScrubStart,
    }
  );

  useDidUpdate(() => {
    setPosition({ y: 0, x: value / maxValue });
  }, [value]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange?.(getChangeValue(_position.x));
    onChangeEnd?.(getChangeValue(_position.x));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
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
    <div {...getStyles('sliderOverlay')} style={overlay} key={index} />
  ));

  return (
    <Box
      {...others}
      ref={useMergedRef(sliderRef, ref)}
      {...getStyles('slider')}
      role="slider"
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-valuemin={0}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
      data-focus-ring={theme.focusRing}
    >
      {layers}

      <Thumb
        position={position}
        size={size!}
        {...getStyles('thumb', { style: { top: rem(1), background: thumbColor } })}
      />
    </Box>
  );
});

ColorSlider.displayName = '@mantine/core/ColorSlider';
