import { useCallback, useRef } from 'react';
import { clamp, useMergedRef, useUncontrolled } from '@mantine/hooks';
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
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  withLabel?: boolean;
  marks?: { value: number; label?: string }[];
  size?: number;
  thumbSize?: number;
  formatLabel?: (value: number) => React.ReactNode;
  disabled?: boolean;

  /** Determines whether the selection should be only allowed from the given marks array, `false` by default */
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

function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

function getElementCenter(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return [rect.left + rect.width / 2, rect.top + rect.height / 2];
}

function getAngle(coordinates: [number, number], element: HTMLElement) {
  const center = getElementCenter(element);
  const x = coordinates[0] - center[0];
  const y = coordinates[1] - center[1];
  const deg = radiansToDegrees(Math.atan2(x, y)) + 180;
  return 360 - deg;
}

function normalize(degree: number, step: number) {
  const clamped = clamp(degree, 0, 360);
  const high = Math.ceil(clamped / step);
  const low = Math.round(clamped / step);
  return high >= clamped / step ? (high * step === 360 ? 0 : high * step) : low * step;
}

const defaultProps: Partial<AngleSliderProps> = {
  step: 1,
  withLabel: true,
};

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
    ...others
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
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

  const update = (event: MouseEvent, done = false) => {
    if (rootRef.current) {
      const deg = getAngle([event.clientX, event.clientY], rootRef.current);
      const val = normalize(deg, step || 1);
      const newValue =
        restrictToMarks && Array.isArray(marks)
          ? findClosestNumber(
              val,
              marks.map((mark) => mark.value)
            )
          : val;

      setValue(newValue);
      done && onChangeEnd?.(newValue);
    }
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    update(event);
  }, []);

  const handleMouseUp = useCallback((event: MouseEvent) => {
    update(event, true);
    endTracking();
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    update(event.touches[0] as any);
  }, []);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    update(event.changedTouches[0] as any, true);
    endTracking();
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart?.(event);
    beginTracking();
  };

  const beginTracking = () => {
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);
  };

  const endTracking = () => {
    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
    document.removeEventListener('touchmove', handleTouchMove, false);
    document.removeEventListener('touchend', handleTouchEnd, false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown?.(event);
    beginTracking();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      setValue(normalize(_value - step!, step!));
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      setValue(normalize(_value + step!, step!));
    }
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
      ref={useMergedRef(ref, rootRef)}
      {...getStyles('root', { focusable: true })}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      {...others}
    >
      {marksItems && marksItems.length > 0 && <div {...getStyles('marks')}>{marksItems}</div>}

      {withLabel && (
        <div {...getStyles('label')}>
          {typeof formatLabel === 'function' ? formatLabel(_value) : _value}
        </div>
      )}
      <div
        tabIndex={disabled ? -1 : 0}
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
