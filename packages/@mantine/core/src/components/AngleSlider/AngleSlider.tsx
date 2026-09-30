import { useRef } from 'react';
import { normalizeRadialValue, useMergedRef, useRadialMove, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  findClosestNumber,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getLastRadialStep } from './step-radial-value';
import classes from './AngleSlider.module.css';

export type AngleSliderStylesNames = 'root' | 'thumb' | 'label' | 'marks' | 'mark';
export type AngleSliderCssVariables = {
  root: '--slider-size' | '--thumb-size';
};

export interface AngleSliderProps
  extends BoxProps, StylesApiProps<AngleSliderFactory>, ElementProps<'div', 'onChange'> {
  /** Step between values @default 1 @category behavior */
  step?: number;

  /** Number by which value is incremented/decremented on `Shift + Arrow` and `PageUp`/`PageDown` keys. Ignored when `restrictToMarks` is set @default 10 × step @category behavior */
  largeStep?: number;

  /** Controlled component value @category state */
  value?: number;

  /** Uncontrolled component default value @category state */
  defaultValue?: number;

  /** Called on value change @category state */
  onChange?: (value: number) => void;

  /** Called after the selection is finished @category state */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` @category behavior */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` @category behavior */
  onScrubEnd?: () => void;

  /** If set, the label is displayed inside the slider @default true @category appearance */
  withLabel?: boolean;

  /** Array of marks displayed on the slider @category appearance */
  marks?: { value: number; label?: string }[];

  /** Slider size in px @default 60 @category appearance */
  size?: number;

  /** Size of the thumb in px @default `size / 5`, but not larger than `size / 2` @category appearance */
  thumbSize?: number;

  /** A function to format label based on the current value @category appearance */
  formatLabel?: (value: number) => React.ReactNode;

  /** Sets `data-disabled` attribute, disables interactions @default false @category behavior */
  disabled?: boolean;

  /** If set, the value cannot be changed, but the slider remains focusable @default false @category behavior */
  readOnly?: boolean;

  /** If set, the selection is allowed only from the given marks array @default false @category behavior */
  restrictToMarks?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Hidden input name, use with uncontrolled component */
  name?: string;
}

export type AngleSliderFactory = Factory<{
  props: AngleSliderProps;
  ref: HTMLDivElement;
  stylesNames: AngleSliderStylesNames;
  vars: AngleSliderCssVariables;
}>;

const defaultProps = {
  step: 1,
  withLabel: true,
} satisfies Partial<AngleSliderProps>;

const DECREMENT_KEYS = new Set(['ArrowLeft', 'ArrowDown', 'PageDown']);
const INCREMENT_KEYS = new Set(['ArrowRight', 'ArrowUp', 'PageUp']);
const KEYBOARD_KEYS = new Set([...DECREMENT_KEYS, ...INCREMENT_KEYS, 'Home', 'End']);

const varsResolver = createVarsResolver<AngleSliderFactory>((_, { size, thumbSize }) => ({
  root: {
    '--slider-size': rem(size),
    '--thumb-size': rem(thumbSize),
  },
}));

export const AngleSlider = factory<AngleSliderFactory>((_props) => {
  const props = useProps('AngleSlider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    step,
    largeStep,
    value,
    defaultValue,
    onChange,
    withLabel,
    marks,
    thumbSize,
    restrictToMarks,
    formatLabel,
    onChangeEnd,
    disabled,
    readOnly,
    name,
    hiddenInputProps,
    'aria-label': ariaLabel,
    tabIndex,
    onScrubStart,
    onScrubEnd,
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
    if (rootRef.current && !disabled && !readOnly) {
      const newValue =
        restrictToMarks && Array.isArray(marks)
          ? findClosestNumber(
              val,
              marks.map((mark) => mark.value)
            )
          : val;

      setValue(newValue);
    }
  };

  const maxValue = getLastRadialStep(step);

  const { ref: radialMoveRef } = useRadialMove(update, {
    step,
    onChangeEnd,
    onScrubStart,
    onScrubEnd,
  });

  const getStyles = useStyles<AngleSliderFactory>({
    name: 'AngleSlider',
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
    if (disabled || readOnly || !KEYBOARD_KEYS.has(event.key)) {
      return;
    }

    event.preventDefault();

    const markValues = restrictToMarks && Array.isArray(marks) ? marks.map((m) => m.value) : null;
    const delta =
      event.key === 'PageUp' || event.key === 'PageDown' || event.shiftKey
        ? (largeStep ?? step * 10)
        : step;

    let newValue = _value;

    if (DECREMENT_KEYS.has(event.key) || INCREMENT_KEYS.has(event.key)) {
      const direction = INCREMENT_KEYS.has(event.key) ? 1 : -1;
      const next = _value + direction * delta;
      newValue = next < 0 ? maxValue : next >= 360 ? 0 : normalizeRadialValue(next, step);
    } else if (event.key === 'Home') {
      newValue = 0;
    } else if (event.key === 'End') {
      newValue = maxValue;
    }

    if (markValues) {
      const currentIndex = markValues.indexOf(_value);

      if (currentIndex !== -1 && DECREMENT_KEYS.has(event.key)) {
        newValue = markValues[currentIndex === 0 ? markValues.length - 1 : currentIndex - 1];
      } else if (currentIndex !== -1 && INCREMENT_KEYS.has(event.key)) {
        newValue = markValues[currentIndex === markValues.length - 1 ? 0 : currentIndex + 1];
      } else {
        newValue = findClosestNumber(newValue, markValues);
      }
    }

    setValue(newValue);
    onChangeEnd?.(newValue);
  };

  const label = typeof formatLabel === 'function' ? formatLabel(_value) : _value;
  const formattedLabel =
    typeof formatLabel === 'function' && (typeof label === 'string' || typeof label === 'number')
      ? String(label)
      : undefined;
  const valueText = formattedLabel ?? marks?.find((mark) => mark.value === _value)?.label;

  const marksItems = marks?.map((mark, index) => (
    <div
      {...getStyles('mark', { style: { '--angle': `${mark.value}deg` } })}
      data-label={mark.label || undefined}
      key={index}
    />
  ));

  return (
    <Box
      ref={useMergedRef(ref, rootRef, disabled || readOnly ? null : radialMoveRef)}
      {...getStyles('root', { focusable: true })}
      mod={[{ disabled, readOnly }, mod]}
      {...others}
    >
      {marksItems && marksItems.length > 0 && <div {...getStyles('marks')}>{marksItems}</div>}

      {withLabel && <div {...getStyles('label')}>{label}</div>}
      <div
        tabIndex={tabIndex ?? (disabled ? -1 : 0)}
        role="slider"
        aria-valuemax={maxValue}
        aria-valuemin={0}
        aria-valuenow={_value}
        aria-valuetext={valueText}
        aria-disabled={disabled || undefined}
        aria-readonly={readOnly || undefined}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        {...getStyles('thumb', { style: { transform: `rotate(${_value}deg)` } })}
      />
      <input type="hidden" name={name} value={_value} {...hiddenInputProps} />
    </Box>
  );
});

AngleSlider.displayName = '@mantine/core/AngleSlider';
AngleSlider.classes = classes;
AngleSlider.varsResolver = varsResolver;

export namespace AngleSlider {
  export type Props = AngleSliderProps;
  export type StylesNames = AngleSliderStylesNames;
  export type CssVariables = AngleSliderCssVariables;
  export type Factory = AngleSliderFactory;
}
