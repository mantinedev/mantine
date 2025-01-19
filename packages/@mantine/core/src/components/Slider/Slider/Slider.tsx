import { useCallback, useRef, useState } from 'react';
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
import { SliderRoot } from '../SliderRoot/SliderRoot';
import { Thumb } from '../Thumb/Thumb';
import { Track } from '../Track/Track';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { getFloatingValue } from '../utils/get-floating-value/get-gloating-value';
import { getPosition } from '../utils/get-position/get-position';
import { getPrecision } from '../utils/get-precision/get-precision';
import {
  getFirstMarkValue,
  getLastMarkValue,
  getNextMarkValue,
  getPreviousMarkValue,
} from '../utils/get-step-mark-value/get-step-mark-value';
import classes from '../Slider.module.css';

export interface SliderProps
  extends BoxProps,
    StylesApiProps<SliderFactory>,
    ElementProps<'div', 'onChange'> {
  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: MantineRadius;

  /** Controls size of the track, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Minimal possible value, `0` by default */
  min?: number;

  /** Maximum possible value, `100` by default */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
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

  /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
  labelTransitionProps?: TransitionOverride;

  /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
  labelAlwaysOn?: boolean;

  /** Thumb `aria-label` */
  thumbLabel?: string;

  /** Determines whether the label should be displayed when the slider is hovered, `true` by default */
  showLabelOnHover?: boolean;

  /** Content rendered inside thumb */
  thumbChildren?: React.ReactNode;

  /** Disables slider */
  disabled?: boolean;

  /** Thumb `width` and `height`, by default value is computed based on `size` prop */
  thumbSize?: number | string;

  /** A transformation function to change the scale of the slider */
  scale?: (value: number) => number;

  /** Determines whether track value representation should be inverted, `false` by default */
  inverted?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'>;

  /** Determines whether the selection should be only allowed from the given marks array, `false` by default */
  restrictToMarks?: boolean;

  /** Props passed down to thumb element */
  thumbProps?: React.ComponentPropsWithoutRef<'div'>;
}

export type SliderFactory = Factory<{
  props: SliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
}>;

const defaultProps: Partial<SliderProps> = {
  radius: 'xl',
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: 'fade', duration: 0 },
  labelAlwaysOn: false,
  thumbLabel: '',
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v,
};

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

export const Slider = factory<SliderFactory>((_props, ref) => {
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
    className,
    style,
    vars,
    hiddenInputProps,
    restrictToMarks,
    thumbProps,
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
    vars,
    varsResolver,
    unstyled,
  });

  const { dir } = useDirection();
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === 'number' ? clamp(value, min!, max!) : value,
    defaultValue: typeof defaultValue === 'number' ? clamp(defaultValue, min!, max!) : defaultValue,
    finalValue: clamp(0, min!, max!),
    onChange,
  });

  const valueRef = useRef(_value);
  const root = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);
  const position = getPosition({ value: _value, min: min!, max: max! });
  const scaledValue = scale!(_value);
  const _label = typeof label === 'function' ? label(scaledValue) : label;
  const precision = _precision ?? getPrecision(step!);

  const handleChange = useCallback(
    ({ x }: { x: number }) => {
      if (!disabled) {
        const nextValue = getChangeValue({
          value: x,
          min: min!,
          max: max!,
          step: step!,
          precision,
        });
        setValue(
          restrictToMarks && marks?.length
            ? findClosestNumber(
                nextValue,
                marks.map((mark) => mark.value)
              )
            : nextValue
        );
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision, setValue, marks, restrictToMarks]
  );

  const { ref: container, active } = useMove(
    handleChange,
    {
      onScrubEnd: () =>
        !disabled &&
        onChangeEnd?.(
          restrictToMarks && marks?.length
            ? findClosestNumber(
                valueRef.current,
                marks.map((mark) => mark.value)
              )
            : valueRef.current
        ),
    },
    dir
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
            onChangeEnd?.(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(_value + step!, min!), max!),
            precision
          );
          setValue(nextValue);
          onChangeEnd?.(nextValue);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue =
              dir === 'rtl' ? getPreviousMarkValue(_value, marks) : getNextMarkValue(_value, marks);
            setValue(nextValue);
            onChangeEnd?.(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === 'rtl' ? _value - step! : _value + step!, min!), max!),
            precision
          );
          setValue(nextValue);
          onChangeEnd?.(nextValue);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue = getPreviousMarkValue(_value, marks);
            setValue(nextValue);
            onChangeEnd?.(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(_value - step!, min!), max!),
            precision
          );
          setValue(nextValue);
          onChangeEnd?.(nextValue);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            const nextValue =
              dir === 'rtl' ? getNextMarkValue(_value, marks) : getPreviousMarkValue(_value, marks);
            setValue(nextValue);
            onChangeEnd?.(nextValue);
            break;
          }

          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === 'rtl' ? _value + step! : _value - step!, min!), max!),
            precision
          );
          setValue(nextValue);
          onChangeEnd?.(nextValue);
          break;
        }

        case 'Home': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            setValue(getFirstMarkValue(marks));
            onChangeEnd?.(getFirstMarkValue(marks));
            break;
          }

          setValue(min!);
          onChangeEnd?.(min!);
          break;
        }

        case 'End': {
          event.preventDefault();
          thumb.current?.focus();

          if (restrictToMarks && marks) {
            setValue(getLastMarkValue(marks));
            onChangeEnd?.(getLastMarkValue(marks));
            break;
          }

          setValue(max!);
          onChangeEnd?.(max!);
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
        size={size!}
        disabled={disabled}
      >
        <Track
          inverted={inverted}
          offset={0}
          filled={position}
          marks={marks}
          min={min!}
          max={max!}
          value={scaledValue}
          disabled={disabled}
          containerProps={{
            ref: container as any,
            onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
            onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
          }}
        >
          <Thumb
            max={max!}
            min={min!}
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
Slider.displayName = '@mantine/core/Slider';
