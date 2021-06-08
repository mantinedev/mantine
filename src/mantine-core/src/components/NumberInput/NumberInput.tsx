import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { useMergedRef, assignRef } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../theme';
import { TextInput } from '../TextInput/TextInput';
import { InputStylesNames } from '../Input/Input';
import { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';
import useStyles, { CONTROL_WIDTH } from './NumberInput.styles';

export type NumberInputStylesNames = keyof ReturnType<typeof useStyles>;

export interface NumberInputHandlers {
  increment(): void;
  decrement(): void;
}

export interface NumberInputProps
  extends DefaultProps<InputStylesNames | InputWrapperStylesNames | NumberInputStylesNames>,
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
  themeOverride,
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
  ...others
}: NumberInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, radius }, classNames as any, 'number-input');
  const _styles = mergeStyles(classes, styles as any);
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
  const clamp = (v: string | number) => {
    const val = typeof v === 'number' ? v : parseFloat(v);
    return Math.min(Math.max(val, _min), _max);
  };

  const increment = () => {
    const result = clamp(finalValue + step).toFixed(precision);
    handleValueChange(parseFloat(result));
    setTempValue(result);
  };

  const decrement = () => {
    const result = clamp(finalValue - step).toFixed(precision);
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
    const val = clamp(event.currentTarget.value);

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
      themeOverride={themeOverride}
      elementRef={useMergedRef(inputRef, elementRef)}
      type="number"
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      rightSection={disabled || hideControls || variant === 'unstyled' ? null : rightSection}
      rightSectionWidth={CONTROL_WIDTH + 1}
      radius={radius}
      max={max}
      min={min}
      step={step}
      styles={styles as any}
      classNames={classNames as any}
    />
  );
}

NumberInput.displayName = '@mantine/core/NumberInput';
