import React, { forwardRef, useRef, useState, useCallback } from 'react';
import { useMove, useUncontrolled, clamp, useMergedRef } from '@mantine/hooks';
import {
  DefaultProps,
  MantineColor,
  MantineNumberSize,
  useComponentDefaultProps,
  useMantineTheme,
} from '@mantine/styles';
import { MantineTransition } from '../../Transition';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import { Track, TrackStylesNames } from '../Track/Track';
import { MarksStylesNames } from '../Marks/Marks';
import { SliderRoot, SliderRootStylesNames } from '../SliderRoot/SliderRoot';
import { getFloatingValue } from '../get-floating-value';
import { getPrecision } from '../get-precision';

export type SliderStylesNames =
  | SliderRootStylesNames
  | ThumbStylesNames
  | TrackStylesNames
  | MarksStylesNames;

export interface SliderProps
  extends DefaultProps<SliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  variant?: string;

  /** Color from theme.colors */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** Controls size of track and thumb */
  size?: MantineNumberSize;

  /** Minimal possible value */
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows */
  step?: number;

  /** Amount of digits after the decimal point */
  precision?: number;

  /** Current value for controlled slider */
  value?: number;

  /** Default value for uncontrolled slider */
  defaultValue?: number;

  /** Called each time value changes */
  onChange?(value: number): void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: number): void;

  /** Hidden input name, use with uncontrolled variant */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition */
  labelTransition?: MantineTransition;

  /** Label appear/disappear transition duration in ms */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
  labelTransitionTimingFunction?: string;

  /** If true label will be not be hidden when user stops dragging */
  labelAlwaysOn?: boolean;

  /** Thumb aria-label */
  thumbLabel?: string;

  /** If true slider label will appear on hover */
  showLabelOnHover?: boolean;

  /** Thumb children, can be used to add icon */
  thumbChildren?: React.ReactNode;

  /** Disables slider */
  disabled?: boolean;

  /** Thumb width and height */
  thumbSize?: number;

  /** A transformation function, to change the scale of the slider */
  scale?: (value: number) => number;

  /** Allows the track to be inverted */
  inverted?: boolean;
}

const defaultProps: Partial<SliderProps> = {
  size: 'md',
  radius: 'xl',
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransition: 'skew-down',
  labelTransitionDuration: 0,
  labelAlwaysOn: false,
  thumbLabel: '',
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v,
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    classNames,
    styles,
    color,
    value,
    onChange,
    onChangeEnd,
    size,
    radius,
    min,
    max,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransition,
    labelTransitionDuration,
    labelTransitionTimingFunction,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    thumbSize,
    scale,
    inverted,
    variant,
    ...others
  } = useComponentDefaultProps('Slider', defaultProps, props);

  const precision = _precision ?? getPrecision(step);
  const theme = useMantineTheme();
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === 'number' ? clamp(value, min, max) : value,
    defaultValue: typeof defaultValue === 'number' ? clamp(defaultValue, min, max) : defaultValue,
    finalValue: clamp(0, min, max),
    onChange,
  });

  const valueRef = useRef(_value);
  const root = useRef<HTMLDivElement>();
  const thumb = useRef<HTMLDivElement>();
  const position = getPosition({ value: _value, min, max });
  const scaledValue = scale(_value);
  const _label = typeof label === 'function' ? label(scaledValue) : label;

  const handleChange = useCallback(
    ({ x }: { x: number }) => {
      if (!disabled) {
        const nextValue = getChangeValue({ value: x, min, max, step, precision });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision, setValue]
  );

  const { ref: container, active } = useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd?.(valueRef.current) },
    theme.dir
  );

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(_value + step, min), max),
            precision
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(theme.dir === 'rtl' ? _value - step : _value + step, min), max),
            precision
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(_value - step, min), max),
            precision
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(theme.dir === 'rtl' ? _value + step : _value - step, min), max),
            precision
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'Home': {
          event.preventDefault();
          thumb.current.focus();
          onChangeEnd?.(min);
          setValue(min);
          break;
        }

        case 'End': {
          event.preventDefault();
          thumb.current.focus();
          onChangeEnd?.(max);
          setValue(max);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  return (
    <SliderRoot
      {...others}
      ref={useMergedRef(ref, root)}
      onKeyDownCapture={handleTrackKeydownCapture}
      onMouseDownCapture={() => root.current?.focus()}
      size={size}
      classNames={classNames}
      styles={styles}
      disabled={disabled}
      unstyled={unstyled}
      variant={variant}
    >
      <Track
        inverted={inverted}
        offset={0}
        filled={position}
        marks={marks}
        size={size}
        thumbSize={thumbSize}
        radius={radius}
        color={color}
        min={min}
        max={max}
        value={scaledValue}
        onChange={setValue}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        variant={variant}
        containerProps={{
          ref: container,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
        }}
      >
        <Thumb
          max={max}
          min={min}
          value={scaledValue}
          position={position}
          dragging={active}
          color={color}
          size={size}
          label={_label}
          ref={thumb}
          labelTransition={labelTransition}
          labelTransitionDuration={labelTransitionDuration}
          labelTransitionTimingFunction={labelTransitionTimingFunction}
          labelAlwaysOn={labelAlwaysOn}
          classNames={classNames}
          styles={styles}
          thumbLabel={thumbLabel}
          showLabelOnHover={showLabelOnHover}
          isHovered={hovered}
          disabled={disabled}
          unstyled={unstyled}
          thumbSize={thumbSize}
          variant={variant}
        >
          {thumbChildren}
        </Thumb>
      </Track>

      <input type="hidden" name={name} value={scaledValue} />
    </SliderRoot>
  );
});

Slider.displayName = '@mantine/core/Slider';
