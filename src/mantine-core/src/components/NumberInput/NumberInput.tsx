import React, { useState, useEffect, useRef } from 'react';
import { useMergedRef, assignRef, clamp } from '@mantine/hooks';
import { mergeStyles, DefaultProps, getSizeValue, ClassNames } from '@mantine/styles';
import { TextInput } from '../TextInput/TextInput';
import { InputStylesNames } from '../Input/Input';
import { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';
import useStyles, { CONTROL_SIZES } from './NumberInput.styles';

export type InnerNumberInputStylesNames = ClassNames<typeof useStyles>;
export type NumberInputStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | InnerNumberInputStylesNames;

export interface NumberInputHandlers {
  increment(): void;
  decrement(): void;
}

export interface NumberInputProps
  extends DefaultProps<NumberInputStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<typeof TextInput>,
      | 'rightSection'
      | 'rightSectionProps'
      | 'rightSectionWidth'
      | 'onChange'
      | 'value'
      | 'classNames'
      | 'styles'
    > {
  /** onChange input handler for controlled variant, note that input event is not exposed */
  onChange?(value: number): void;

  /** Input value for controlled variant */
  value?: number;

  /** Maximum possible value */
  max?: number;

  /** Minimal possible value */
  min?: number;

  /** Number by which value will be incremented/decremented with controls and up/down arrows */
  step?: number;

  /** Removes increment/decrement controls */
  hideControls?: boolean;

  /** Amount of digits after the decimal point  */
  precision?: number;

  /** Default value for uncontrolled variant only */
  defaultValue?: number;

  /** Prevent value clamp on blur */
  noClampOnBlur?: boolean;

  /** Get increment/decrement handlers */
  handlersRef?: React.ForwardedRef<NumberInputHandlers>;
}

export function NumberInput({
  disabled,
  elementRef,
  value,
  onChange,
  min,
  max,
  step = 1,
  onBlur,
  onFocus,
  hideControls = false,
  radius = 'sm',
  variant,
  precision = 0,
  defaultValue,
  noClampOnBlur = false,
  handlersRef,
  classNames,
  styles,
  size,
  ...others
}: NumberInputProps) {
  const { classes, cx } = useStyles({ radius, size }, classNames, 'number-input');
  const _styles = mergeStyles(classes, styles);
  const [focused, setFocused] = useState(false);
  const [_value, setValue] = useState(
    typeof value === 'number' ? value : typeof defaultValue === 'number' ? defaultValue : 0
  );
  const finalValue = typeof value === 'number' ? value : _value;
  const [tempValue, setTempValue] = useState(
    typeof finalValue === 'number' ? finalValue.toFixed(precision) : ''
  );
  const inputRef = useRef<HTMLInputElement>();
  const handleValueChange = (val: number) => {
    typeof onChange === 'function' && onChange(val);
    setValue(val);
  };

  const _min = typeof min === 'number' ? min : -Infinity;
  const _max = typeof max === 'number' ? max : Infinity;

  const increment = () => {
    const result = clamp({ value: finalValue + step, min: _min, max: _max }).toFixed(precision);
    handleValueChange(parseFloat(result));
    setTempValue(result);
  };

  const decrement = () => {
    const result = clamp({ value: finalValue - step, min: _min, max: _max }).toFixed(precision);
    handleValueChange(parseFloat(result));
    setTempValue(result);
  };

  assignRef(handlersRef, { increment, decrement });

  useEffect(() => {
    if (typeof value === 'number' && !focused) {
      setValue(value);
      setTempValue(value.toFixed(precision));
    }
  }, [value]);

  const rightSection = (
    <div className={classes.rightSection} style={_styles.rightSection}>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        disabled={finalValue >= max}
        className={cx(classes.control, classes.controlUp)}
        style={{ ..._styles.control, ..._styles.controlUp }}
        onMouseDown={(event) => {
          event.preventDefault();
          increment();
          inputRef.current.focus();
        }}
      />
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        disabled={finalValue <= min}
        className={cx(classes.control, classes.controlDown)}
        style={{ ..._styles.control, ..._styles.controlDown }}
        onMouseDown={(event) => {
          event.preventDefault();
          decrement();
          inputRef.current.focus();
        }}
      />
    </div>
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setTempValue(val);

    const parsed = Number(val);
    val.trim() !== '' && !Number.isNaN(parsed) && handleValueChange(parsed);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const parsedVal = parseFloat(event.target.value);
    const val = clamp({ value: parsedVal, min: _min, max: _max });

    if (!Number.isNaN(val)) {
      if (!noClampOnBlur) {
        setTempValue(val.toFixed(precision));
        handleValueChange(val);
      }
    } else {
      setTempValue(finalValue.toFixed(precision));
    }

    setFocused(false);
    typeof onBlur === 'function' && onBlur(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    typeof onFocus === 'function' && onBlur(event);
  };

  return (
    <TextInput
      {...others}
      variant={variant}
      value={tempValue}
      disabled={disabled}
      elementRef={useMergedRef(inputRef, elementRef)}
      type="number"
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      rightSection={disabled || hideControls || variant === 'unstyled' ? null : rightSection}
      rightSectionWidth={getSizeValue({ size, sizes: CONTROL_SIZES }) + 1}
      radius={radius}
      max={max}
      min={min}
      step={step}
      size={size}
      styles={styles}
      classNames={classNames}
      __staticSelector="number-input"
    />
  );
}

NumberInput.displayName = '@mantine/core/NumberInput';
