import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useMergedRef, assignRef, clamp, useOs } from '@mantine/hooks';
import { DefaultProps, ClassNames, useMantineDefaultProps } from '@mantine/styles';
import { getInputMode } from '../../utils';
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

type Formatter = (value: string | undefined) => string;
type Parser = (value: string | undefined) => string | undefined;

export interface NumberInputProps
  extends DefaultProps<NumberInputStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<typeof TextInput>,
      'onChange' | 'value' | 'classNames' | 'styles'
    > {
  /** onChange input handler for controlled variant, note that input event is not exposed. It will return undefined if the input is empty, otherwise it'll return a number */
  onChange?(value: number | undefined): void;

  /** Input value for controlled variant */
  value?: number | undefined;

  /** The decimal separator */
  decimalSeparator?: string;

  /** Maximum possible value */
  max?: number;

  /** Minimal possible value */
  min?: number;

  /** Number by which value will be incremented/decremented with controls and up/down arrows */
  step?: number;

  /** Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. */
  stepHoldInterval?: number | ((stepCount: number) => number);

  /** Initial delay in milliseconds before stepping the value. */
  stepHoldDelay?: number;

  /** Removes increment/decrement controls */
  hideControls?: boolean;

  /** Amount of digits after the decimal point  */
  precision?: number;

  /** Default value for uncontrolled variant only */
  defaultValue?: number | undefined;

  /** Prevent value clamp on blur */
  noClampOnBlur?: boolean;

  /** Get increment/decrement handlers */
  handlersRef?: React.ForwardedRef<NumberInputHandlers | undefined>;

  /** Formats the number into the input */
  formatter?: Formatter;

  /** Parsers the value from formatter, should be used with formatter at the same time */
  parser?: Parser;
}

const defaultFormatter: Formatter = (value) => value || '';
const defaultParser: Parser = (num) => {
  const parsedNum = parseFloat(num);

  if (Number.isNaN(parsedNum)) {
    return undefined;
  }

  return num;
};

const defaultProps: Partial<NumberInputProps> = {
  step: 1,
  hideControls: false,
  size: 'sm',
  precision: 0,
  noClampOnBlur: false,
  formatter: defaultFormatter,
  parser: defaultParser,
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props: NumberInputProps, ref) => {
    const {
      disabled,
      value,
      onChange,
      decimalSeparator,
      min,
      max,
      step,
      stepHoldInterval,
      stepHoldDelay,
      onBlur,
      onFocus,
      hideControls,
      radius,
      variant,
      precision,
      defaultValue,
      noClampOnBlur,
      handlersRef,
      classNames,
      styles,
      size,
      rightSection,
      rightSectionWidth,
      formatter,
      parser,
      ...others
    } = useMantineDefaultProps('NumberInput', defaultProps, props);

    const { classes, cx, theme } = useStyles(
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

    const formatNum = (val: string | number = '') => {
      let parsedStr = typeof val === 'number' ? String(val) : val;

      if (decimalSeparator) {
        parsedStr = parsedStr.replace(/\./g, decimalSeparator);
      }

      return formatter(parsedStr);
    };

    const parseNum = (val: string): string | undefined => {
      let num = val;

      if (decimalSeparator) {
        num = num.replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.');
      }

      return parser(num);
    };

    const _min = typeof min === 'number' ? min : -Infinity;
    const _max = typeof max === 'number' ? max : Infinity;

    const incrementRef = useRef<() => void>();
    incrementRef.current = () => {
      if (_value === undefined) {
        handleValueChange(min ?? 0);
        setTempValue(min?.toFixed(precision) ?? '0');
      } else {
        const result = clamp({ value: _value + step, min: _min, max: _max }).toFixed(precision);

        handleValueChange(parseFloat(result));
        setTempValue(result);
      }
    };

    const decrementRef = useRef<() => void>();
    decrementRef.current = () => {
      if (_value === undefined) {
        handleValueChange(min ?? 0);
        setTempValue(min?.toFixed(precision) ?? '0');
      } else {
        const result = clamp({ value: _value - step, min: _min, max: _max }).toFixed(precision);
        handleValueChange(parseFloat(result));
        setTempValue(result);
      }
    };

    assignRef(handlersRef, { increment: incrementRef.current, decrement: decrementRef.current });

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

    const shouldUseStepInterval = stepHoldDelay !== undefined && stepHoldInterval !== undefined;
    const onStepTimeoutRef = useRef<number>(null);
    const stepCountRef = useRef<number>(0);

    const onStepDone = () => {
      if (onStepTimeoutRef.current) {
        window.clearTimeout(onStepTimeoutRef.current);
      }
      onStepTimeoutRef.current = null;
      stepCountRef.current = 0;
    };

    const onStepHandleChange = (isIncrement: boolean) => {
      if (isIncrement) {
        incrementRef.current();
      } else {
        decrementRef.current();
      }
      stepCountRef.current += 1;
    };

    const onStepLoop = (isIncrement: boolean) => {
      onStepHandleChange(isIncrement);

      if (shouldUseStepInterval) {
        const interval =
          typeof stepHoldInterval === 'number'
            ? stepHoldInterval
            : stepHoldInterval(stepCountRef.current);
        onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), interval);
      }
    };

    const onStep = (
      event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
      isIncrement: boolean
    ) => {
      event.preventDefault();
      onStepHandleChange(isIncrement);
      if (shouldUseStepInterval) {
        onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), stepHoldDelay);
      }
      inputRef.current.focus();
    };

    useEffect(() => {
      onStepDone();
      return onStepDone;
    }, []);

    const controls = (
      <div className={classes.rightSection}>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          disabled={finalValue >= max}
          className={cx(classes.control, classes.controlUp)}
          onMouseDown={(event) => {
            onStep(event, true);
          }}
          onMouseUp={onStepDone}
          onMouseLeave={onStepDone}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          disabled={finalValue <= min}
          className={cx(classes.control, classes.controlDown)}
          onMouseDown={(event) => {
            onStep(event, false);
          }}
          onMouseUp={onStepDone}
          onMouseLeave={onStepDone}
        />
      </div>
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const parsed = parseNum(val);

      setTempValue(parsed);

      if (val === '') {
        handleValueChange(undefined);
      } else {
        val.trim() !== '' && !Number.isNaN(parsed) && handleValueChange(parseFloat(parsed));
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (event.target.value === '') {
        setTempValue('');
        handleValueChange(undefined);
      } else {
        const parsedVal = parseNum(event.target.value);
        const val = clamp({ value: parseFloat(parsedVal), min: _min, max: _max });

        if (!Number.isNaN(val)) {
          if (!noClampOnBlur) {
            setTempValue(val.toFixed(precision));
            handleValueChange(parseFloat(val.toFixed(precision)));
          }
        } else {
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.repeat && shouldUseStepInterval) {
        event.preventDefault();
        return;
      }

      if (event.key === 'ArrowUp') {
        onStep(event, true);
      } else if (event.key === 'ArrowDown') {
        onStep(event, false);
      }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        onStepDone();
      }
    };

    return (
      <TextInput
        {...others}
        variant={variant}
        value={formatNum(tempValue)}
        disabled={disabled}
        ref={useMergedRef(inputRef, ref)}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        rightSection={
          rightSection || (disabled || hideControls || variant === 'unstyled' ? null : controls)
        }
        rightSectionWidth={rightSectionWidth || theme.fn.size({ size, sizes: CONTROL_SIZES }) + 1}
        radius={radius}
        max={max}
        min={min}
        step={step}
        size={size}
        styles={styles}
        classNames={classNames}
        inputMode={getInputMode(step, precision, useOs())}
        __staticSelector="NumberInput"
      />
    );
  }
);

NumberInput.displayName = '@mantine/core/NumberInput';
