import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useMergedRef, assignRef, useOs, clamp } from '@mantine/hooks';
import { DefaultProps, Selectors, useComponentDefaultProps, rem, getSize } from '@mantine/styles';
import { TextInput } from '../TextInput';
import { InputStylesNames, InputWrapperStylesNames } from '../Input';
import { getInputMode } from './get-input-mode/get-input-mode';
import { Chevron } from './Chevron';
import useStyles, { CONTROL_SIZES } from './NumberInput.styles';

export type InnerNumberInputStylesNames = Selectors<typeof useStyles>;
export type NumberInputStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | InnerNumberInputStylesNames;

export interface NumberInputHandlers {
  increment(): void;
  decrement(): void;
}

type Formatter = (value: string | '') => string;
type Parser = (value: string | '') => string;

export interface NumberInputProps
  extends DefaultProps<NumberInputStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<typeof TextInput>,
      'onChange' | 'value' | 'classNames' | 'styles' | 'type'
    > {
  /** Called when value changes */
  onChange?(value: number | ''): void;

  /** Input value for controlled component */
  value?: number | '';

  /** Default value for uncontrolled component */
  defaultValue?: number | '';

  /** The decimal separator */
  decimalSeparator?: string;

  /** The thousands separator */
  thousandsSeparator?: string;

  /** Maximum possible value */
  max?: number;

  /** Minimal possible value */
  min?: number;

  /** First value if no initial value was set and increment/decrement is triggered using controls or up/down arrows */
  startValue?: number;

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

  /** Only works if a precision is given, removes the trailing zeros, false by default */
  removeTrailingZeros?: boolean;

  /** Prevent value clamp on blur */
  noClampOnBlur?: boolean;

  /** Get increment/decrement handlers */
  handlersRef?: React.ForwardedRef<NumberInputHandlers | undefined>;

  /** Formats the number into the input */
  formatter?: Formatter;

  /** Parses the value from formatter, should be used with formatter at the same time */
  parser?: Parser;

  /** Input type, defaults to text */
  type?: 'text' | 'number';
}

const defaultFormatter: Formatter = (value) => value || '';
const defaultParser: Parser = (num) => {
  if (num === '-') {
    return num;
  }

  let tempNum = num;

  if (tempNum[0] === '.') {
    tempNum = `0${num}`;
  }

  const parsedNum = parseFloat(tempNum);

  if (Number.isNaN(parsedNum)) {
    return '';
  }

  return num;
};

const CHEVRON_SIZES = {
  xs: rem(10),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
};

const defaultProps: Partial<NumberInputProps> = {
  step: 1,
  hideControls: false,
  size: 'sm',
  precision: 0,
  noClampOnBlur: false,
  removeTrailingZeros: false,
  decimalSeparator: '.',
  formatter: defaultFormatter,
  parser: defaultParser,
  type: 'text',
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const {
    readOnly,
    disabled,
    value,
    onChange,
    decimalSeparator,
    thousandsSeparator,
    min,
    max,
    startValue,
    step,
    stepHoldInterval,
    stepHoldDelay,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    hideControls,
    radius,
    variant,
    precision,
    removeTrailingZeros,
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
    inputMode,
    unstyled,
    type,
    ...others
  } = useComponentDefaultProps('NumberInput', defaultProps, props);

  const { classes, cx } = useStyles(
    { radius },
    { classNames, styles, unstyled, name: 'NumberInput', variant, size }
  );

  const parsePrecision = (val: number | '') => {
    if (val === '') return '';

    let result = val.toFixed(precision);

    if (removeTrailingZeros && precision > 0) {
      result = result.replace(new RegExp(`[0]{0,${precision}}$`), '');
      if (result.endsWith('.')) {
        result = result.slice(0, -1);
      }
    }

    return result;
  };

  const formatNum = (val: string) => {
    let parsedStr = val;
    if (decimalSeparator) {
      parsedStr = parsedStr.replace('.', decimalSeparator);
    }

    return formatter(parsedStr);
  };

  const parseNum = (val: string): string | '' => {
    let num = val;

    if (decimalSeparator) {
      num = num.replaceAll(thousandsSeparator, '').replace(decimalSeparator, '.');
    }

    return parser(num);
  };

  const formatInternalValue = (val: number | '') => formatNum(parsePrecision(val));

  // Parsed value that will be used for uncontrolled state and for setting the inputValue
  const [internalValue, _setInternalValue] = useState<number | ''>(
    typeof value === 'number' ? value : typeof defaultValue === 'number' ? defaultValue : ''
  );

  // Value of input field. Gets changed through user input and on internalValue change
  const [inputValue, setInputValue] = useState(() => formatInternalValue(internalValue));

  const inputRef = useRef<HTMLInputElement>();

  const [isFocussed, setIsFocussed] = useState(false);

  const setInternalValue = (val: number | '', forceInputValueUpdate?: boolean) => {
    if (!isFocussed || forceInputValueUpdate) {
      const newInputValue = formatInternalValue(val);
      if (newInputValue !== inputValue) {
        // Make sure to update/reset the input value even if the internal value stays the same
        // E. g. this may happen if the internalValue is "10" and the user entered "10abc"
        setInputValue(newInputValue);
      }
    }

    if (val !== internalValue) {
      _setInternalValue(val);
    }
  };

  const _min = typeof min === 'number' ? min : -Infinity;
  const _max = typeof max === 'number' ? max : Infinity;

  const incrementRef = useRef<() => void>();
  incrementRef.current = () => {
    let newInternalValue: number;
    if (internalValue === '') {
      newInternalValue = startValue ?? min ?? 0;
    } else {
      newInternalValue = parseFloat(parsePrecision(clamp(internalValue + step, _min, _max)));
    }

    setInternalValue(newInternalValue, true);
    onChange?.(newInternalValue);
  };

  const decrementRef = useRef<() => void>();
  decrementRef.current = () => {
    let newInternalValue: number;
    if (internalValue === '') {
      newInternalValue = startValue ?? min ?? 0;
    } else {
      newInternalValue = parseFloat(parsePrecision(clamp(internalValue - step, _min, _max)));
    }

    setInternalValue(newInternalValue, true);
    onChange?.(newInternalValue);
  };

  assignRef(handlersRef, { increment: incrementRef.current, decrement: decrementRef.current });

  useEffect(() => {
    if (isFocussed) {
      return;
    }

    if (value === undefined) {
      // For uncontrolled inputs reapply internalValue
      setInternalValue(internalValue, true);
    } else {
      // For controlled inputs apply value
      setInternalValue(value, true);
    }
  }, [value, isFocussed]);

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
    inputRef.current.focus();
    onStepHandleChange(isIncrement);
    if (shouldUseStepInterval) {
      onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), stepHoldDelay);
    }
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
        disabled={internalValue >= max}
        className={cx(classes.control, classes.controlUp)}
        onPointerDown={(event) => {
          onStep(event, true);
        }}
        onPointerUp={onStepDone}
        onPointerLeave={onStepDone}
      >
        <Chevron size={getSize({ size, sizes: CHEVRON_SIZES })} direction="up" />
      </button>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        disabled={internalValue <= min}
        className={cx(classes.control, classes.controlDown)}
        onPointerDown={(event) => {
          onStep(event, false);
        }}
        onPointerUp={onStepDone}
        onPointerLeave={onStepDone}
      >
        <Chevron size={getSize({ size, sizes: CHEVRON_SIZES })} direction="down" />
      </button>
    </div>
  );

  /**
   * Parse new input value and propagate it via `onChange` to parent.
   */
  const processInputValue = (newInputValue: string) => {
    let normalizedInputValue = newInputValue;
    if (normalizedInputValue[0] === `${decimalSeparator}` || normalizedInputValue[0] === '.') {
      normalizedInputValue = `0${normalizedInputValue}`;
    }

    const parsedValue = parseFloat(parsePrecision(parseFloat(parseNum(normalizedInputValue))));
    const clampedValue = !noClampOnBlur ? clamp(parsedValue, _min, _max) : parsedValue;
    const finalValue = Number.isNaN(clampedValue) ? '' : clampedValue;

    const internalValueChanged = internalValue !== finalValue;

    setInputValue(newInputValue);
    setInternalValue(finalValue);

    if (internalValueChanged) {
      onChange?.(finalValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const evt = event.nativeEvent as InputEvent;
    if (evt.isComposing) {
      return;
    }

    processInputValue(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocussed(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocussed(false);
    onBlur?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);
    if (
      event.repeat &&
      shouldUseStepInterval &&
      (event.key === 'ArrowUp' || event.key === 'ArrowDown')
    ) {
      event.preventDefault();
      return;
    }

    if (!readOnly) {
      if (event.key === 'ArrowUp') {
        onStep(event, true);
      } else if (event.key === 'ArrowDown') {
        onStep(event, false);
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyUp === 'function' && onKeyUp(event);
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      onStepDone();
    }
  };

  return (
    <TextInput
      {...others}
      type={type}
      variant={variant}
      value={inputValue}
      disabled={disabled}
      readOnly={readOnly}
      ref={useMergedRef(inputRef, ref)}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      rightSection={
        rightSection ||
        (disabled || readOnly || hideControls || variant === 'unstyled' ? null : controls)
      }
      rightSectionWidth={
        rightSectionWidth ?? `calc(${getSize({ size, sizes: CONTROL_SIZES })} + ${rem(1)})`
      }
      radius={radius}
      max={max}
      min={min}
      step={step}
      size={size}
      styles={styles}
      classNames={classNames}
      inputMode={inputMode || getInputMode(step, precision, useOs())}
      __staticSelector="NumberInput"
      unstyled={unstyled}
    />
  );
});

NumberInput.displayName = '@mantine/core/NumberInput';
