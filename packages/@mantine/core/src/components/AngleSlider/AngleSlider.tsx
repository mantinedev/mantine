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
import classes from './AngleSlider.module.css';

export type AngleSliderStylesNames = 'root' | 'thumb' | 'label' | 'marks' | 'mark';
export type AngleSliderCssVariables = {
  root: '--slider-size' | '--thumb-size';
};

export interface AngleSliderProps
  extends BoxProps,
    StylesApiProps<AngleSliderFactory>,
    ElementProps<'div', 'onChange'> {
  /** Step between values, `1` by default */
  step?: number;

  /** Controlled component value */
  value?: number;

  /** Uncontrolled component default value */
  defaultValue?: number;

  /** Called on value change */
  onChange?: (value: number) => void;

  /** Called after the selection is finished */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` */
  onScrubEnd?: () => void;

  /** If set, the label is displayed inside the slider, `true` by default */
  withLabel?: boolean;

  /** Array of marks displayed on the slider */
  marks?: { value: number; label?: string }[];

  /** Slider size in px, `60px` */
  size?: number;

  /** Size of the thumb in px. Calculated based on the `size` value by default. */
  thumbSize?: number;

  /** A function to format label based on the current value */
  formatLabel?: (value: number) => React.ReactNode;

  /** Sets `data-disabled` attribute, disables interactions */
  disabled?: boolean;

  /** If set, the selection is allowed only from the given marks array, `false` by default */
  restrictToMarks?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'>;

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

const varsResolver = createVarsResolver<AngleSliderFactory>((_, { size, thumbSize }) => ({
  root: {
    '--slider-size': rem(size),
    '--thumb-size': rem(thumbSize),
  },
}));

export const AngleSlider = factory<AngleSliderFactory>((_props, ref) => {
  const props = useProps('AngleSlider', defaultProps, _props);
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
    onMouseDown,
    withLabel,
    marks,
    thumbSize,
    restrictToMarks,
    formatLabel,
    onChangeEnd,
    disabled,
    onTouchStart,
    name,
    hiddenInputProps,
    'aria-label': ariaLabel,
    tabIndex,
    onScrubStart,
    onScrubEnd,
    mod,
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
    vars,
    varsResolver,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    let newValue = _value;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      newValue = normalizeRadialValue(_value - step, step);
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      newValue = normalizeRadialValue(_value + step, step);
    }

    if (event.key === 'Home') {
      newValue = 0;
    }

    if (event.key === 'End') {
      newValue = 359;
    }

    if (restrictToMarks && Array.isArray(marks)) {
      const markValues = marks.map((mark) => mark.value);
      const currentIndex = markValues.indexOf(_value);

      if (currentIndex !== -1) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
          newValue = markValues[Math.max(0, currentIndex - 1)];
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
          newValue = markValues[Math.min(markValues.length - 1, currentIndex + 1)];
        } else {
          newValue = findClosestNumber(newValue, markValues);
        }
      } else {
        newValue = findClosestNumber(newValue, markValues);
      }
    }

    setValue(newValue);
    onChangeEnd?.(newValue);
  };

  const marksItems = marks?.map((mark, index) => (
    <div
      {...getStyles('mark', { style: { '--angle': `${mark.value}deg` } })}
      data-label={mark.label || undefined}
      key={index}
    />
  ));

  return (
    <Box
      ref={useMergedRef(ref, rootRef, radialMoveRef)}
      {...getStyles('root', { focusable: true })}
      mod={[{ disabled }, mod]}
      {...others}
    >
      {marksItems && marksItems.length > 0 && <div {...getStyles('marks')}>{marksItems}</div>}

      {withLabel && (
        <div {...getStyles('label')}>
          {typeof formatLabel === 'function' ? formatLabel(_value) : _value}
        </div>
      )}
      <div
        tabIndex={tabIndex ?? (disabled ? -1 : 0)}
        role="slider"
        aria-valuemax={360}
        aria-valuemin={0}
        aria-valuenow={_value}
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
