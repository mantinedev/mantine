import { useRef, useState } from 'react';
import {
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove,
  UseMovePosition,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '../../../core';
import { useColorPickerContext } from '../ColorPicker.context';
import { Thumb } from '../Thumb/Thumb';
import classes from '../ColorPicker.module.css';

export type ColorSliderStylesNames = 'slider' | 'sliderOverlay' | 'thumb';

export interface __ColorSliderProps extends ElementProps<'div', 'onChange'> {
  value: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
  size?: MantineSize | (string & {});
  focusable?: boolean;
}

export interface ColorSliderProps
  extends BoxProps,
    StylesApiProps<ColorSliderFactory>,
    __ColorSliderProps,
    ElementProps<'div', 'onChange'> {
  __staticSelector?: string;
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  thumbColor?: string;
}

export type ColorSliderFactory = Factory<{
  props: ColorSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}>;

const defaultProps: Partial<ColorSliderProps> = {};

export const ColorSlider = factory<ColorSliderFactory>((_props, ref) => {
  const props = useProps('ColorSlider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
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
    __staticSelector = 'ColorPicker',
    ...others
  } = props;

  const _getStyles = useStyles<ColorSliderFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const ctxGetStyles = useColorPickerContext()?.getStyles;
  const getStyles = ctxGetStyles || _getStyles;

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
      __vars={{
        '--cp-thumb-size': `var(--cp-thumb-size-${size})`,
      }}
    >
      {layers}

      <Thumb
        position={position}
        {...getStyles('thumb', { style: { top: rem(1), background: thumbColor } })}
      />
    </Box>
  );
});

ColorSlider.displayName = '@mantine/core/ColorSlider';
