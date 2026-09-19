import { useEffect, useRef, useState } from 'react';
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
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../../core';
import { TransitionOverride } from '../../Transition';
import {
  SliderCssVariables,
  SliderProvider,
  SliderStylesNames,
  SliderVariant,
} from '../Slider.context';
import { SliderMark } from '../SliderMark';
import { SliderRoot } from '../SliderRoot/SliderRoot';
import { Thumb } from '../Thumb/Thumb';
import { Track } from '../Track/Track';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { getClientPosition } from '../utils/get-client-position/get-client-position';
import { getFloatingValue } from '../utils/get-floating-value/get-floating-value';
import { getPosition } from '../utils/get-position/get-position';
import { getPrecision } from '../utils/get-precision/get-precision';
import {
  getFirstMarkValue,
  getLastMarkValue,
  getNextMarkValue,
  getPreviousMarkValue,
} from '../utils/get-step-mark-value/get-step-mark-value';
import { getThumbSize } from '../utils/get-thumb-size/get-thumb-size';
import classes from '../Slider.module.css';

export type RangeSliderValue = [number, number];

export interface RangeSliderProps
  extends
    BoxProps,
    StylesApiProps<RangeSliderFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Thumb style: `default` is a white thumb with a colored border, `filled` is a colored thumb with a white border, `white` is a white thumb with a shadow and without a colored border @default 'default' */
  variant?: SliderVariant;

  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default 'xl' @category appearance */
  radius?: MantineRadius;

  /** Controls size of the track @default 'md' @category appearance */
  size?: MantineSize | (string & {}) | number;

  /** Minimal possible value @default 0 @category behavior */
  min?: number;

  /** Maximum possible value @default 100 @category behavior */
  max?: number;

  /** Domain of the slider, defines the selectable value range independently of min/max. Useful when you want to display a wider track range (min/max) but restrict actual selection to a subset (domain). @default [min, max] @category appearance */
  domain?: [number, number];

  /** Number by which value will be incremented/decremented with thumb drag and arrows @default 1 @category behavior */
  step?: number;

  /** Number by which the focused thumb is moved on `Shift + Arrow` and `PageUp`/`PageDown` keys. Ignored when `restrictToMarks` is set @default 10 × step @category behavior */
  largeStep?: number;

  /** Number of significant digits after the decimal point @category behavior */
  precision?: number;

  /** Controlled component value @category state */
  value?: RangeSliderValue;

  /** Uncontrolled component default value @category state */
  defaultValue?: RangeSliderValue;

  /** Called when value changes @category state */
  onChange?: (value: RangeSliderValue) => void;

  /** Called when user stops dragging slider or changes value with arrows @category state */
  onChangeEnd?: (value: RangeSliderValue) => void;

  /** Hidden input name, use with uncontrolled component */
  name?: string;

  /** Marks displayed on the track @category appearance */
  marks?: SliderMark[];

  /** Function to generate label or any react node to render instead, set to null to disable label @category appearance */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Props passed down to the `Transition` component @default { transition: 'fade', duration: 0 } @category appearance */
  labelTransitionProps?: TransitionOverride;

  /** Determines whether the label should be visible when the slider is not being dragged or hovered @default false @category appearance */
  labelAlwaysOn?: boolean;

  /** Determines whether the label should be displayed when the slider is hovered @default true @category appearance */
  showLabelOnHover?: boolean;

  /** Content rendered inside thumb @category appearance */
  thumbChildren?: React.ReactNode;

  /** Disables slider @category behavior */
  disabled?: boolean;

  /** Thumb `width` and `height`, by default value is computed based on `size` prop @category appearance */
  thumbSize?: number | string;

  /** A transformation function to change the scale of the slider @category behavior */
  scale?: (value: number) => number;

  /** Determines whether track values representation should be inverted @default false @category appearance */
  inverted?: boolean;

  /** Slider orientation @default 'horizontal' @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** Minimal range interval between the two thumbs. Consider this value relative to the total range (max - min). @default 10 @category behavior */
  minRange?: number;

  /** Maximum range interval @default Infinity @category behavior */
  maxRange?: number;

  /** `aria-label` for both thumbs (overridden by thumbFromLabel/thumbToLabel if provided) @category accessibility */
  thumbLabel?: string;

  /** `aria-valuetext` for both thumbs. When a function is provided, it receives the scaled value. @category accessibility */
  thumbValueText?: string | ((value: number) => string);

  /** First thumb `aria-label` @category accessibility */
  thumbFromLabel?: string;

  /** Second thumb `aria-label` @category accessibility */
  thumbToLabel?: string;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Determines whether the selection should be only allowed from the given marks array @default false @category behavior */
  restrictToMarks?: boolean;

  /** Props passed down to thumb element based on the thumb index */
  thumbProps?: (index: 0 | 1) => React.ComponentProps<'div'>;

  /** Determines whether the other thumb should be pushed by the current thumb dragging when `minRange`/`maxRange` is reached @default true @category behavior */
  pushOnOverlap?: boolean;
}

export type RangeSliderFactory = Factory<{
  props: RangeSliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  variant: SliderVariant;
}>;

const varsResolver = createVarsResolver<RangeSliderFactory>(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      '--slider-size': getSize(size, 'slider-size'),
      '--slider-color': color ? getThemeColor(color, theme) : undefined,
      '--slider-radius': radius === undefined ? undefined : getRadius(radius),
      '--slider-thumb-size': getThumbSize(size, thumbSize),
    },
  })
);

const defaultProps = {
  variant: 'default',
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
  pushOnOverlap: true,
  scale: (v) => v,
  size: 'md',
  maxRange: Infinity,
} satisfies Partial<RangeSliderProps>;

export const RangeSlider = factory<RangeSliderFactory>((_props) => {
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
    domain,
    minRange,
    maxRange,
    step,
    largeStep,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
    thumbValueText,
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
    pushOnOverlap,
    attributes,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<RangeSliderFactory>({
    name: 'RangeSlider',
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { dir } = useDirection();
  const [focused, setFocused] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled<RangeSliderValue>({
    value,
    defaultValue,
    finalValue: [min, max],
    onChange,
  });
  const valueRef = useRef(_value);
  const thumbs = useRef<HTMLDivElement[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const thumbIndex = useRef<number | undefined>(undefined);
  const [domainMin, domainMax] = domain || [min!, max!];
  const positions = [
    getPosition({ value: _value[0], min: domainMin, max: domainMax }),
    getPosition({ value: _value[1], min: domainMin, max: domainMax }),
  ];

  const largeStepValue = largeStep ?? step * 10;
  const precision = _precision ?? Math.max(getPrecision(step), getPrecision(largeStepValue));

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
      const clampedVal = clamp(val, min!, max!);
      clone[index] = clampedVal;

      if (index === 0) {
        if (clampedVal > clone[1] - (minRange - 0.000000001)) {
          if (pushOnOverlap) {
            clone[1] = Math.min(val + minRange, max);
          } else {
            clone[index] = valueRef.current[index];
          }
        }

        if (clampedVal > (max - (minRange - 0.000000001) || min)) {
          clone[index] = valueRef.current[index];
        }

        if (clone[1] - val > maxRange) {
          if (pushOnOverlap) {
            clone[1] = val + maxRange;
          } else {
            clone[index] = valueRef.current[index];
          }
        }
      }

      if (index === 1) {
        if (clampedVal < clone[0] + minRange) {
          if (pushOnOverlap) {
            clone[0] = Math.max(val - minRange, min);
          } else {
            clone[index] = valueRef.current[index];
          }
        }

        if (clampedVal < clone[0] + minRange) {
          clone[index] = valueRef.current[index];
        }

        if (clampedVal - clone[0] > maxRange) {
          if (pushOnOverlap) {
            clone[0] = val - maxRange;
          } else {
            clone[index] = valueRef.current[index];
          }
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
    if (!disabled && thumbIndex.current !== undefined) {
      const nextValue = getChangeValue({
        value: val,
        min: domainMin,
        max: domainMax,
        step,
        precision,
      });
      setRangedValue(nextValue, thumbIndex.current, false);
    }
  };

  const { ref: useMoveRef, active } = useMove(
    ({ x, y }) => handleChange(orientation === 'vertical' ? 1 - y : x),
    { onScrubEnd: () => !disabled && onChangeEnd?.(valueRef.current) },
    dir
  );

  function handleThumbMouseDown(index: number) {
    thumbIndex.current = index;
  }

  const handleTrackMouseDownCapture = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (containerRef.current) {
      containerRef.current.focus();
      const rect = containerRef.current.getBoundingClientRect();
      const changePosition = getClientPosition(event.nativeEvent, orientation);

      const changeValue =
        orientation === 'vertical'
          ? getChangeValue({
              value: rect.bottom - changePosition,
              max,
              min,
              step,
              containerWidth: rect.height,
            })
          : getChangeValue({
              value: changePosition - rect.left,
              max,
              min,
              step,
              containerWidth: rect.width,
            });

      const nearestHandle =
        Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
      const _nearestHandle =
        orientation === 'vertical'
          ? nearestHandle
          : dir === 'ltr'
            ? nearestHandle
            : nearestHandle === 1
              ? 0
              : 1;

      thumbIndex.current = _nearestHandle;
    }
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
          const delta = event.shiftKey ? largeStepValue : step;
          const nextValue =
            restrictToMarks && marks
              ? getNextMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(Math.max(valueRef.current[focusedIndex] + delta, domainMin), domainMax);
          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();

          const delta = event.shiftKey ? largeStepValue : step;
          const nextValue =
            restrictToMarks && marks
              ? (dir === 'rtl' ? getPreviousMarkValue : getNextMarkValue)(
                  valueRef.current[focusedIndex],
                  marks
                )
              : Math.min(
                  Math.max(
                    dir === 'rtl'
                      ? valueRef.current[focusedIndex] - delta
                      : valueRef.current[focusedIndex] + delta,
                    domainMin
                  ),
                  domainMax
                );

          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          const delta = event.shiftKey ? largeStepValue : step;
          const nextValue =
            restrictToMarks && marks
              ? getPreviousMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(Math.max(valueRef.current[focusedIndex] - delta, domainMin), domainMax);
          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();

          const delta = event.shiftKey ? largeStepValue : step;
          const nextValue =
            restrictToMarks && marks
              ? (dir === 'rtl' ? getNextMarkValue : getPreviousMarkValue)(
                  valueRef.current[focusedIndex],
                  marks
                )
              : Math.min(
                  Math.max(
                    dir === 'rtl'
                      ? valueRef.current[focusedIndex] + delta
                      : valueRef.current[focusedIndex] - delta,
                    domainMin
                  ),
                  domainMax
                );

          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'PageUp': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          const nextValue =
            restrictToMarks && marks
              ? getNextMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(
                  Math.max(valueRef.current[focusedIndex] + largeStepValue, domainMin),
                  domainMax
                );
          setRangedValue(getFloatingValue(nextValue, precision), focusedIndex, true);
          break;
        }

        case 'PageDown': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          const nextValue =
            restrictToMarks && marks
              ? getPreviousMarkValue(valueRef.current[focusedIndex], marks)
              : Math.min(
                  Math.max(valueRef.current[focusedIndex] - largeStepValue, domainMin),
                  domainMax
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
    max,
    min,
    size,
    labelTransitionProps,
    labelAlwaysOn,
    orientation,
    onBlur: () => setFocused(-1),
  };

  const hasArrayThumbChildren = Array.isArray(thumbChildren);

  return (
    <SliderProvider value={{ getStyles }}>
      <SliderRoot
        {...others}
        size={size}
        ref={useMergedRef(ref, root)}
        disabled={disabled}
        orientation={orientation}
        onMouseDownCapture={() => root.current?.focus()}
        onKeyDownCapture={() => {
          if (thumbs.current[0]?.parentElement?.contains(document.activeElement)) {
            return;
          }
          thumbs.current[0]?.focus();
        }}
      >
        <Track
          offset={positions[0]}
          marksOffset={_value[0]}
          filled={positions[1] - positions[0]}
          marks={marks}
          inverted={inverted}
          min={domainMin}
          max={domainMax}
          value={_value[1]}
          disabled={disabled}
          containerProps={{
            ref: useMergedRef(containerRef, useMoveRef) as any,
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
            value={scale(_value[0])}
            position={positions[0]}
            dragging={active}
            label={
              typeof label === 'function'
                ? label(getFloatingValue(scale(_value[0]), precision))
                : label
            }
            ref={(node) => {
              if (node) {
                thumbs.current[0] = node;
              }
            }}
            thumbLabel={thumbFromLabel}
            thumbValueText={thumbValueText}
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
            value={scale(_value[1])}
            position={positions[1]}
            dragging={active}
            label={
              typeof label === 'function'
                ? label(getFloatingValue(scale(_value[1]), precision))
                : label
            }
            ref={(node) => {
              if (node) {
                thumbs.current[1] = node;
              }
            }}
            thumbValueText={thumbValueText}
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
RangeSlider.varsResolver = varsResolver;
RangeSlider.displayName = '@mantine/core/RangeSlider';

export namespace RangeSlider {
  export type Props = RangeSliderProps;
  export type Value = RangeSliderValue;
  export type Factory = RangeSliderFactory;
  export type StylesNames = SliderStylesNames;
  export type CssVariables = SliderCssVariables;
  export type Mark = SliderMark;
}
