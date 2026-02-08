import { useCallback, useEffect, useRef, useState } from 'react';
import { clamp, useMergedRef, useMove, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  findClosestNumber,
  getRadius,
  getSize,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  rem,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../../core';
import { TransitionOverride } from '../../Transition';
import { SliderCssVariables, SliderProvider, SliderStylesNames } from '../Slider.context';
import classes from '../Slider.module.css';
import { SliderRoot } from '../SliderRoot/SliderRoot';
import { Thumb } from '../Thumb/Thumb';
import { Track } from '../Track/Track';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { getFloatingValue } from '../utils/get-floating-value/get-floating-value';
import { getPosition } from '../utils/get-position/get-position';
import { getPrecision } from '../utils/get-precision/get-precision';
import {
  getFirstMarkValue,
  getLastMarkValue,
  getNextMarkValue,
  getPreviousMarkValue,
} from '../utils/get-step-mark-value/get-step-mark-value';

export interface SliderProps
  extends BoxProps, StylesApiProps<SliderFactory>, ElementProps<'div', 'onChange'> {
  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb @default theme.primaryColor */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default 'xl' */
  radius?: MantineRadius;

  /** Controls size of the track @default 'md' */
  size?: MantineSize | (string & {}) | number;

  /** Minimal possible value @default 0 */
  min?: number;

  /** Maximum possible value @default 100 */
  max?: number;

  /** Domain of the slider, defines the selectable value range independently of min/max. Useful when you want to display a wider track range (min/max) but restrict actual selection to a subset (domain). @default [min, max] */
  domain?: [number, number];

  /** Number by which value will be incremented/decremented with thumb drag and arrows @default 1 */
  step?: number;

  /** Number of significant digits after the decimal point */
  precision?: number;

  /** Controlled component value */
  value?: number;

  /** Uncontrolled component default value */
  defaultValue?: number;

  /** Called when value changes */
  onChange?: (value: number) => void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?: (value: number) => void;

  /** Hidden input name, use with uncontrolled component */
  name?: string;

  /** Marks displayed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Props passed down to the `Transition` component @default { transition: 'fade', duration: 0 } */
  labelTransitionProps?: TransitionOverride;

  /** Determines whether the label should be visible when the slider is not being dragged or hovered @default false */
  labelAlwaysOn?: boolean;

  /** Thumb `aria-label` */
  thumbLabel?: string;

  /** Determines whether the label should be displayed when the slider is hovered @default true */
  showLabelOnHover?: boolean;

  /** Content rendered inside thumb */
  thumbChildren?: React.ReactNode;

  /** Disables slider */
  disabled?: boolean;

  /** Thumb `width` and `height`, by default value is computed based on `size` prop */
  thumbSize?: number | string;

  /** A transformation function to change the scale of the slider */
  scale?: (value: number) => number;

  /** Determines whether track value representation should be inverted @default false */
  inverted?: boolean;

  /** Slider orientation @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Determines whether the selection should be only allowed from the given marks array @default false */
  restrictToMarks?: boolean;

  /** Props passed down to thumb element */
  thumbProps?: React.ComponentProps<'div'>;
}

export type SliderFactory = Factory<{
  props: SliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
}>;

const defaultProps = {
  radius: 'xl',
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: 'fade', duration: 0 },
  thumbLabel: '',
  showLabelOnHover: true,
  scale: (v) => v,
  size: 'md',
} satisfies Partial<SliderProps>;

const varsResolver = createVarsResolver<SliderFactory>(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      '--slider-size': getSize(size, 'slider-size'),
      '--slider-color': color ? getThemeColor(color, theme) : undefined,
      '--slider-radius': radius === undefined ? undefined : getRadius(radius),
      '--slider-thumb-size':
        thumbSize !== undefined ? rem(thumbSize) : 'calc(var(--slider-size) * 2)',
    },
  })
);

export const Slider = factory<SliderFactory>((_props) => {
  const props = useProps('Slider', defaultProps, _props);
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    domain,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    orientation,
    className,
    style,
    vars,
    hiddenInputProps,
    restrictToMarks,
    thumbProps,
    attributes,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<SliderFactory>({
    name: 'Slider',
    props,
    classes,
    classNames,
    className,
    styles,
    style,
    attributes,
    vars,
    varsResolver,
    unstyled,
  });

  const { dir } = useDirection();
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === 'number' ? clamp(value, min, max) : value,
    defaultValue: typeof defaultValue === 'number' ? clamp(defaultValue, min, max) : defaultValue,
    finalValue: clamp(0, min, max),
    onChange,
  });

  const valueRef = useRef(_value);
  const onChangeEndRef = useRef(onChangeEnd);

  useEffect(() => {
    onChangeEndRef.current = onChangeEnd;
  }, [onChangeEnd]);

  const root = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);
  const [domainMin, domainMax] = domain || [min, max];
  const position = getPosition({ value: _value, min: domainMin, max: domainMax });
  const scaledValue = scale!(_value);
  const _label = typeof label === 'function' ? label(scaledValue) : label;
  const precision = _precision ?? getPrecision(step);

  const handleChange = useCallback(
    ({ x }: { x: number }) => {
      if (!disabled) {
        const nextValue = getChangeValue({
          value: x,
          min: domainMin,
          max: domainMax,
          step,
          precision,
        });
        const clampedValue = clamp(nextValue, min!, max!);
        setValue(
          restrictToMarks && marks?.length
            ? findClosestNumber(
                clampedValue,
                marks.map((mark) => mark.value)
              )
            : clampedValue
        );
        valueRef.current = clampedValue;
      }
    },
    [disabled, min, max, domainMin, domainMax, step, precision, setValue, marks, restrictToMarks]
  );

  const handleScrubEnd = useCallback(() => {
    if (!disabled && onChangeEndRef.current) {
      const finalValue =
        restrictToMarks && marks?.length
          ? findClosestNumber(
              valueRef.current,
              marks.map((mark) => mark.value)
            )
          : valueRef.current;
      onChangeEndRef.current(finalValue);
    }
  }, [disabled, marks, restrictToMarks]);

  const { ref: container, active } = useMove(
    ({ x, y }) => handleChange({ x: orientation === 'vertical' ? 1 - y : x }),
    { onScrubEnd: handleScrubEnd },
    dir
  );

  const callOnChangeEnd = useCallback(
    (value: number) => {
      if (!disabled && onChangeEndRef.current) {
        onChangeEndRef.current(value);
      }
    },
    [disabled]
  );

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue = getNextMarkValue(_value, marks);
            setValue(nextValue);
            callOnChangeEnd(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(_value + step, min), max),
            precision
          );
          setValue(nextValue);
          callOnChangeEnd(nextValue);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue =
              dir === 'rtl' ? getPreviousMarkValue(_value, marks) : getNextMarkValue(_value, marks);
            setValue(nextValue);
            callOnChangeEnd(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === 'rtl' ? _value - step : _value + step, min), max),
            precision
          );
          setValue(nextValue);
          callOnChangeEnd(nextValue);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue = getPreviousMarkValue(_value, marks);
            setValue(nextValue);
            callOnChangeEnd(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(_value - step, min), max),
            precision
          );
          setValue(nextValue);
          callOnChangeEnd(nextValue);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue =
              dir === 'rtl' ? getNextMarkValue(_value, marks) : getPreviousMarkValue(_value, marks);
            setValue(nextValue);
            callOnChangeEnd(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === 'rtl' ? _value + step : _value - step, min), max),
            precision
          );
          setValue(nextValue);
          callOnChangeEnd(nextValue);
          break;
        }

        case 'Home': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            setValue(getFirstMarkValue(marks));
            callOnChangeEnd(getFirstMarkValue(marks));
            break;
          }

          setValue(min);
          callOnChangeEnd(min);
          break;
        }

        case 'End': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            setValue(getLastMarkValue(marks));
            callOnChangeEnd(getLastMarkValue(marks));
            break;
          }

          setValue(max);
          callOnChangeEnd(max);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  return (
    <SliderProvider value={{ getStyles }}>
      <SliderRoot
        {...others}
        ref={useMergedRef(ref, root)}
        onKeyDownCapture={handleTrackKeydownCapture}
        onMouseDownCapture={() => root.current?.focus()}
        size={size}
        disabled={disabled}
        orientation={orientation}
      >
        <Track
          inverted={inverted}
          offset={0}
          filled={position}
          marks={marks}
          min={domainMin}
          max={domainMax}
          value={scaledValue}
          disabled={disabled}
          containerProps={{
            ref: container,
            onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
            onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
          }}
        >
          <Thumb
            max={domainMax}
            min={domainMin}
            value={scaledValue}
            position={position}
            dragging={active}
            label={_label}
            ref={thumb as any}
            labelTransitionProps={labelTransitionProps}
            labelAlwaysOn={labelAlwaysOn}
            thumbLabel={thumbLabel}
            showLabelOnHover={showLabelOnHover}
            isHovered={hovered}
            disabled={disabled}
            {...thumbProps}
          >
            {thumbChildren}
          </Thumb>
        </Track>

        <input type="hidden" name={name} value={scaledValue} {...hiddenInputProps} />
      </SliderRoot>
    </SliderProvider>
  );
});

Slider.classes = classes;
Slider.varsResolver = varsResolver;
Slider.displayName = '@mantine/core/Slider';
