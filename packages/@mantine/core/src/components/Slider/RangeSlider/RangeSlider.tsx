import { useEffect, useRef, useState } from 'react';
import { useMove, useUncontrolled } from '@mantine/hooks';
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
import { getClientPosition } from '../utils/get-client-position/get-client-position';
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

export type RangeSliderValue = [number, number];

export interface RangeSliderProps
  extends BoxProps,
    StylesApiProps<RangeSliderFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
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
  value?: RangeSliderValue;

  /** Uncontrolled component default value */
  defaultValue?: RangeSliderValue;

  /** Called when value changes */
  onChange?: (value: RangeSliderValue) => void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?: (value: RangeSliderValue) => void;

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

  /** Determines whether track values representation should be inverted, `false` by default */
  inverted?: boolean;

  /** Minimal range interval, `10` by default */
  minRange?: number;

  /** Maximum range interval, `Infinity` by default */
  maxRange?: number;

  /** First thumb `aria-label` */
  thumbFromLabel?: string;

  /** Second thumb `aria-label` */
  thumbToLabel?: string;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'>;

  /** Determines whether the selection should be only allowed from the given marks array, `false` by default */
  restrictToMarks?: boolean;

  /** Props passed down to thumb element based on the thumb index */
  thumbProps?: (index: 0 | 1) => React.ComponentPropsWithoutRef<'div'>;
}

export type RangeSliderFactory = Factory<{
  props: RangeSliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
}>;

const varsResolver = createVarsResolver<RangeSliderFactory>(
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

const defaultProps: Partial<RangeSliderProps> = {
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: 'fade', duration: 0 },
  labelAlwaysOn: false,
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v,
};

export const RangeSlider = factory<RangeSliderFactory>((_props, ref) => {
  const props = useProps('RangeSlider', defaultProps, _props);
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    minRange,
    maxRange,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
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

  const getStyles = useStyles<RangeSliderFactory>({
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
  const [focused, setFocused] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled<RangeSliderValue>({
    value,
    defaultValue,
    finalValue: [min!, max!],
    onChange,
  });
  const valueRef = useRef(_value);
  const thumbs = useRef<HTMLDivElement[]>([]);
  const thumbIndex = useRef<number | undefined>(undefined);
  const positions = [
    getPosition({ value: _value[0], min: min!, max: max! }),
    getPosition({ value: _value[1], min: min!, max: max! }),
  ];

  const precision = _precision ?? getPrecision(step!);

  const _setValue = (val: RangeSliderValue) => {
    setValue(val);
    valueRef.current = val;
  };

  useEffect(
    () => {
      if (Array.isArray(value)) {
        valueRef.current = value;
      }
    },
    Array.isArray(value) ? [value[0], value[1]] : [null, null]
  );

  const setRangedValue = (val: number, index: number, triggerChangeEnd: boolean) => {
    if (index === -1) {
      return;
    }

    const clone: RangeSliderValue = [...valueRef.current];

    if (restrictToMarks && marks) {
      const closest = findClosestNumber(
        val,
        marks.map((m) => m.value)
      );

      const current = clone[index];
      clone[index] = closest;
      const otherIndex = index === 0 ? 1 : 0;

      const lastMarkValue = getLastMarkValue(marks);
      const firstMarkValue = getFirstMarkValue(marks);

      if (closest === lastMarkValue && clone[otherIndex] === lastMarkValue) {
        clone[index] = current;
      } else if (closest === firstMarkValue && clone[otherIndex] === firstMarkValue) {
        clone[index] = current;
      } else if (closest === clone[otherIndex]) {
        if (current > clone[otherIndex]) {
          clone[otherIndex] = getPreviousMarkValue(closest, marks);
        } else {
          clone[otherIndex] = getNextMarkValue(closest, marks);
        }
      }
    } else {
      clone[index] = val;

      if (index === 0) {
        if (val > clone[1] - (minRange! - 0.000000001)) {
          clone[1] = Math.min(val + minRange!, max!);
        }

        if (val > (max! - (minRange! - 0.000000001) || min!)) {
          clone[index] = valueRef.current[index];
        }

        if (clone[1] - val > maxRange!) {
          clone[1] = val + maxRange!;
        }
      }

      if (index === 1) {
        if (val < clone[0] + minRange!) {
          clone[0] = Math.max(val - minRange!, min!);
        }

        if (val < clone[0] + minRange!) {
          clone[index] = valueRef.current[index];
        }

        if (val - clone[0] > maxRange!) {
          clone[0] = val - maxRange!;
        }
      }
    }

    clone[0] = getFloatingValue(clone[0], precision);
    clone[1] = getFloatingValue(clone[1], precision);

    if (clone[0] > clone[1]) {
      const temp = clone[0];
      clone[0] = clone[1];
      clone[1] = temp;
    }

    _setValue(clone);

    if (triggerChangeEnd) {
      onChangeEnd?.(valueRef.current);
    }
  };

  const handleChange = (val: number) => {
    if (!disabled) {
      const nextValue = getChangeValue({
        value: val,
        min: min!,
        max: max!,
        step: step!,
        precision,
      });
      setRangedValue(nextValue, thumbIndex.current!, false);
    }
  };

  const { ref: container, active } = useMove(
    ({ x }) => handleChange(x),
    { onScrubEnd: () => !disabled && onChangeEnd?.(valueRef.current) },
    dir
  );

  function handleThumbMouseDown(index: number) {
    thumbIndex.current = index;
  }

  const handleTrackMouseDownCapture = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    container.current!.focus();
    const rect = container.current!.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max: max!,
      min: min!,
      step: step!,
      containerWidth: rect.width,
    });

    const nearestHandle =
      Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
    const _nearestHandle = dir === 'ltr' ? nearestHandle : nearestHandle === 1 ? 0 : 1;

    thumbIndex.current = _nearestHandle;
  };

  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }

    return focused;
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          const nextValue =
            restrictToMarks && marks
              ? getNextMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(Math.max(valueRef.current[focusedIndex] + step!, min!), max!);
          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();

          const nextValue =
            restrictToMarks && marks
              ? (dir === 'rtl' ? getPreviousMarkValue : getNextMarkValue)(
                  valueRef.current[focusedIndex],
                  marks
                )
              : Math.min(
                  Math.max(
                    dir === 'rtl'
                      ? valueRef.current[focusedIndex] - step!
                      : valueRef.current[focusedIndex] + step!,
                    min!
                  ),
                  max!
                );

          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          const nextValue =
            restrictToMarks && marks
              ? getPreviousMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(Math.max(valueRef.current[focusedIndex] - step!, min!), max!);
          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();

          const nextValue =
            restrictToMarks && marks
              ? (dir === 'rtl' ? getNextMarkValue : getPreviousMarkValue)(
                  valueRef.current[focusedIndex],
                  marks
                )
              : Math.min(
                  Math.max(
                    dir === 'rtl'
                      ? valueRef.current[focusedIndex] + step!
                      : valueRef.current[focusedIndex] - step!,
                    min!
                  ),
                  max!
                );

          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  const sharedThumbProps = {
    max: max!,
    min: min!,
    size,
    labelTransitionProps,
    labelAlwaysOn,
    onBlur: () => setFocused(-1),
  };

  const hasArrayThumbChildren = Array.isArray(thumbChildren);

  return (
    <SliderProvider value={{ getStyles }}>
      <SliderRoot {...others} size={size!} ref={ref} disabled={disabled}>
        <Track
          offset={positions[0]}
          marksOffset={_value[0]}
          filled={positions[1] - positions[0]}
          marks={marks}
          inverted={inverted}
          min={min!}
          max={max!}
          value={_value[1]}
          disabled={disabled}
          containerProps={{
            ref: container as any,
            onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
            onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
            onTouchStartCapture: handleTrackMouseDownCapture,
            onTouchEndCapture: () => {
              thumbIndex.current = -1;
            },
            onMouseDownCapture: handleTrackMouseDownCapture,
            onMouseUpCapture: () => {
              thumbIndex.current = -1;
            },
            onKeyDownCapture: handleTrackKeydownCapture,
          }}
        >
          <Thumb
            {...sharedThumbProps}
            value={scale!(_value[0])}
            position={positions[0]}
            dragging={active}
            label={
              typeof label === 'function'
                ? label(getFloatingValue(scale!(_value[0]), precision))
                : label
            }
            ref={(node) => {
              thumbs.current[0] = node!;
            }}
            thumbLabel={thumbFromLabel}
            onMouseDown={() => handleThumbMouseDown(0)}
            onFocus={() => setFocused(0)}
            showLabelOnHover={showLabelOnHover}
            isHovered={hovered}
            disabled={disabled}
            {...thumbProps?.(0)}
          >
            {hasArrayThumbChildren ? thumbChildren[0] : thumbChildren}
          </Thumb>

          <Thumb
            {...sharedThumbProps}
            thumbLabel={thumbToLabel}
            value={scale!(_value[1])}
            position={positions[1]}
            dragging={active}
            label={
              typeof label === 'function'
                ? label(getFloatingValue(scale!(_value[1]), precision))
                : label
            }
            ref={(node) => {
              thumbs.current[1] = node!;
            }}
            onMouseDown={() => handleThumbMouseDown(1)}
            onFocus={() => setFocused(1)}
            showLabelOnHover={showLabelOnHover}
            isHovered={hovered}
            disabled={disabled}
            {...thumbProps?.(1)}
          >
            {hasArrayThumbChildren ? thumbChildren[1] : thumbChildren}
          </Thumb>
        </Track>

        <input type="hidden" name={`${name}_from`} value={_value[0]} {...hiddenInputProps} />
        <input type="hidden" name={`${name}_to`} value={_value[1]} {...hiddenInputProps} />
      </SliderRoot>
    </SliderProvider>
  );
});

RangeSlider.classes = classes;
RangeSlider.displayName = '@mantine/core/RangeSlider';
