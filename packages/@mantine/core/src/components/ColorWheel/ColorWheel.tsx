import { useRef } from 'react';
import { normalizeRadialValue, useMergedRef, useRadialMove, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './ColorWheel.module.css';

export type ColorWheelStylesNames = 'root' | 'thumb';
export type ColorWheelCssVariables = {
  root: '--cw-size' | '--cw-thickness' | '--cw-thumb-size' | '--cw-ring-background';
};

export interface ColorWheelProps
  extends BoxProps, StylesApiProps<ColorWheelFactory>, ElementProps<'div', 'onChange'> {
  /** Step between values @default 1 @category behavior */
  step?: number;

  /** Controlled component value, hue in degrees (0–360) @category state */
  value?: number;

  /** Uncontrolled component default value, hue in degrees (0–360) @default 0 @category state */
  defaultValue?: number;

  /** Called on value change @category state */
  onChange?: (value: number) => void;

  /** Called after the selection is finished @category state */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` @category behavior */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` @category behavior */
  onScrubEnd?: () => void;

  /** Wheel outer diameter @default 180 @category appearance */
  size?: number | string;

  /** Ring thickness in px @default 24 @category appearance */
  thickness?: number;

  /** Size of the thumb in px. Calculated based on the `thickness` value by default. @category appearance */
  thumbSize?: number;

  /** Saturation (0–100) used to render the ring colors @default 100 @category appearance */
  saturation?: number;

  /** Lightness (0–100) used to render the ring colors @default 50 @category appearance */
  lightness?: number;

  /** If set, the thumb indicator is displayed @default true @category appearance */
  withThumbIndicator?: boolean;

  /** Sets `data-disabled` attribute, disables interactions @category behavior */
  disabled?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Hidden input name, use with uncontrolled component */
  name?: string;
}

export type ColorWheelFactory = Factory<{
  props: ColorWheelProps;
  ref: HTMLDivElement;
  stylesNames: ColorWheelStylesNames;
  vars: ColorWheelCssVariables;
}>;

const defaultProps = {
  step: 1,
  size: 180,
  thickness: 24,
  saturation: 100,
  lightness: 50,
  withThumbIndicator: true,
} satisfies Partial<ColorWheelProps>;

const varsResolver = createVarsResolver<ColorWheelFactory>(
  (_, { size, thickness, thumbSize, saturation, lightness }) => {
    const stops = Array.from(
      { length: 13 },
      (_stop, index) => `hsl(${index * 30}, ${saturation}%, ${lightness}%)`
    ).join(', ');

    return {
      root: {
        '--cw-size': rem(size),
        '--cw-thickness': rem(thickness),
        '--cw-thumb-size': rem(thumbSize),
        '--cw-ring-background': `conic-gradient(from 0deg, ${stops})`,
      },
    };
  }
);

export const ColorWheel = factory<ColorWheelFactory>((_props) => {
  const props = useProps('ColorWheel', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    step,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    onScrubStart,
    onScrubEnd,
    thickness,
    thumbSize,
    saturation,
    lightness,
    withThumbIndicator,
    disabled,
    name,
    hiddenInputProps,
    'aria-label': ariaLabel,
    tabIndex,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const update = (val: number) => {
    if (rootRef.current && !disabled) {
      setValue(val % 360);
    }
  };

  const { ref: radialMoveRef } = useRadialMove(update, {
    step,
    onChangeEnd: disabled ? undefined : (val) => onChangeEnd?.(val % 360),
    onScrubStart,
    onScrubEnd,
  });

  const getStyles = useStyles<ColorWheelFactory>({
    name: 'ColorWheel',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    const supportedKeys = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

    if (!supportedKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    let newValue = _value;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      newValue = normalizeRadialValue((_value + 360 - step!) % 360, step!);
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      newValue = normalizeRadialValue((_value + step!) % 360, step!);
    }

    if (event.key === 'Home') {
      newValue = 0;
    }

    if (event.key === 'End') {
      newValue = normalizeRadialValue(360 - step!, step!);
    }

    const wrappedValue = newValue % 360;
    setValue(wrappedValue);
    onChangeEnd?.(wrappedValue);
  };

  return (
    <Box
      ref={useMergedRef(ref, rootRef, radialMoveRef)}
      {...getStyles('root', { focusable: true })}
      mod={[{ disabled }, mod]}
      {...others}
    >
      <div
        tabIndex={tabIndex ?? (disabled ? -1 : 0)}
        role="slider"
        aria-valuemax={360}
        aria-valuemin={0}
        aria-valuenow={_value}
        aria-valuetext={`${_value}°`}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        data-hidden={!withThumbIndicator || undefined}
        onKeyDown={handleKeyDown}
        {...getStyles('thumb', {
          style: {
            backgroundColor: `hsl(${_value}, ${saturation}%, ${lightness}%)`,
            transform: `rotate(${_value}deg) translateY(calc(-1 * var(--cw-thumb-offset)))`,
          },
        })}
      />
      <input type="hidden" name={name} value={_value} {...hiddenInputProps} />
    </Box>
  );
});

ColorWheel.displayName = '@mantine/core/ColorWheel';
ColorWheel.classes = classes;
ColorWheel.varsResolver = varsResolver;

export namespace ColorWheel {
  export type Props = ColorWheelProps;
  export type StylesNames = ColorWheelStylesNames;
  export type CssVariables = ColorWheelCssVariables;
  export type Factory = ColorWheelFactory;
}
