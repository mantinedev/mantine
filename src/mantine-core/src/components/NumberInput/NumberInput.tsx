import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useMergedRef, assignRef, clamp } from '@mantine/hooks';
import { DefaultProps, getSizeValue, ClassNames } from '@mantine/styles';
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
  /** onChange input handler for controlled variant, note that input event is not exposed. It will return undefined if the input is empty, otherwise it'll return a number */
  onChange?(value: number | undefined): void;

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

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      disabled,
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
    }: NumberInputProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { radius, size },
      { classNames, styles, name: 'NumberInput' }
    );
    const [focused, setFocused] = useState(false);
    const [_value, setValue] = useState(
      typeof value === 'number'
        ? value
        : typeof defaultValue === 'number'
        ? defaultValue
        : undefined
    );
    const finalValue = typeof value === 'number' ? value : _value;
    const [tempValue, setTempValue] = useState(
      typeof finalValue === 'number' ? finalValue.toFixed(precision) : ''
    );
    const inputRef = useRef<HTMLInputElement>();
    const handleValueChange = (val: number | undefined) => {
      typeof onChange === 'function' && onChange(val);
      setValue(val);
    };

    const _min = typeof min === 'number' ? min : -Infinity;
    const _max = typeof max === 'number' ? max : Infinity;

    const increment = () => {
      if (_value === undefined) {
        // if the input is empty, on increment set the value to the min
        // or if the min is not defined, set the value to 0.
        handleValueChange(min ?? 0);
        setTempValue(min?.toFixed(precision) ?? '0');
      } else {
        const result = clamp({ value: _value + step, min: _min, max: _max }).toFixed(precision);
        handleValueChange(parseFloat(result));
        setTempValue(result);
      }
    };

    const decrement = () => {
      if (_value === undefined) {
        // if the input is empty, on decrement set the value to the min
        // or if the min is not defined, set the value to 0.
        handleValueChange(min ?? 0);
        setTempValue(min?.toFixed(precision) ?? '0');
      } else {
        const result = clamp({ value: _value - step, min: _min, max: _max }).toFixed(precision);
        handleValueChange(parseFloat(result));
        setTempValue(result);
      }
    };

    assignRef(handlersRef, { increment, decrement });

    useEffect(() => {
      if (typeof value === 'number' && !focused) {
        setValue(value);
        setTempValue(value.toFixed(precision));
      }
      if (defaultValue === undefined && value === undefined && !focused) {
        setValue(value);
        setTempValue('');
      }
    }, [value]);

    const rightSection = (
      <div className={classes.rightSection}>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          disabled={finalValue >= max}
          className={cx(classes.control, classes.controlUp)}
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
          onMouseDown={(event) => {
            event.preventDefault();
            decrement();
            inputRef.current.focus();
          }}
        />
      </div>
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      setTempValue(val);
      // Check if the input is empty. This relies on the input type being "text" and not "number". See #375 for more details.
      if (val === '') {
        handleValueChange(undefined);
      } else {
        const parsed = Number(val);
        val.trim() !== '' && !Number.isNaN(parsed) && handleValueChange(parsed);
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      // Check if the input is empty. This relies on the input type being "text" and not "number". See #375 for more details.
      if (event.target.value === '') {
        // if the input is empty, handle the change by propogating undefined to onChange.
        setTempValue('');
        handleValueChange(undefined);
      } else {
        // The input is not empty, set the value to the clamped value unless the noClampOnBlur prop is set.
        const parsedVal = parseFloat(event.target.value);
        const val = clamp({ value: parsedVal, min: _min, max: _max });

        if (!Number.isNaN(val)) {
          if (!noClampOnBlur) {
            // the input is a parsable number, set the value to the clamped value.
            // This will turn an input like "2.34abc" into 2.34 if precision is 2.
            setTempValue(val.toFixed(precision));
            handleValueChange(val);
          }
        } else {
          // The input is not empty but the input is not a number and should be set to the last number value or empty.
          // i.e. in the case that the input was "10" and the user selected it and then typed "abc" onBlur it'll reset to 10.
          // in the case that the input was empty and the user typed "abc" onBlur it'll reset to empty.
          setTempValue(finalValue?.toFixed(precision) ?? '');
        }
      }

      setFocused(false);
      typeof onBlur === 'function' && onBlur(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      typeof onFocus === 'function' && onFocus(event);
    };

    /**
     * Handle KeyDown to have arrow up and down events trigger increment/decrement.
     * Since we're using `type="text"` instead of `type="number"` we have to manually handle the up/down keys.
     */
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowUp') {
        // prevent cursor from going to the beginning of the input.
        // it will now mimic the behavior of an input type="number" and move the cursor to the end.
        event.preventDefault();
        increment();
      } else if (event.key === 'ArrowDown') {
        decrement();
      }
    };

    return (
      <TextInput
        {...others}
        variant={variant}
        value={tempValue}
        disabled={disabled}
        ref={useMergedRef(inputRef, ref)}
        type="text" // type="text" is used to be able to distuinguish between an empty input and an input with an invalid number string entered. See #375 for more details.
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        rightSection={disabled || hideControls || variant === 'unstyled' ? null : rightSection}
        rightSectionWidth={getSizeValue({ size, sizes: CONTROL_SIZES }) + 1}
        radius={radius}
        max={max}
        min={min}
        step={step}
        size={size}
        styles={styles}
        classNames={classNames}
        __staticSelector="NumberInput"
      />
    );
  }
);

NumberInput.displayName = '@mantine/core/NumberInput';
