import React, { useRef } from 'react';
import cx from 'clsx';
import { NumberFormatValues, NumericFormat, OnValueChange } from 'react-number-format';
import { assignRef, clamp, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  noop,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { __BaseInputProps, __InputStylesNames, InputVariant } from '../Input';
import { InputBase } from '../InputBase';
import { UnstyledButton } from '../UnstyledButton';
import { NumberInputChevron } from './NumberInputChevron';
import classes from './NumberInput.module.css';

// Re for negative -0, -0., -0.0, -0.00, -0.000 ... strings
// And for positive 0., 0.0, 0.00, 0.000 ... strings
const leadingDecimalZeroPattern = /^(0\.0*|-0(\.0*)?)$/;

// Re for 01, 006, 00.02, -0010, -000.293 ... and negative counterparts
const leadingZerosPattern = /^-?0\d+(\.\d+)?\.?$/;

export interface NumberInputHandlers {
  increment: () => void;
  decrement: () => void;
}

function isNumberString(value: unknown) {
  return typeof value === 'string' && value !== '' && !Number.isNaN(Number(value));
}

function canIncrement(value: number | string) {
  if (typeof value === 'number') {
    return value < Number.MAX_SAFE_INTEGER;
  }

  return value === '' || (isNumberString(value) && Number(value) < Number.MAX_SAFE_INTEGER);
}

function getDecimalPlaces(inputValue: string | number): number {
  // All digits must be counted, parseFloat precision depends
  // on the number of digits in the input, not only on the decimal scale
  return inputValue.toString().replace('.', '').length;
}

function isValidNumber(floatValue: number | undefined, value: string): floatValue is number {
  return (
    (typeof floatValue === 'number'
      ? floatValue < Number.MAX_SAFE_INTEGER
      : !Number.isNaN(Number(floatValue))) &&
    !Number.isNaN(floatValue) &&
    getDecimalPlaces(value) < 14 &&
    value !== ''
  );
}

function isInRange(value: number | undefined, min: number | undefined, max: number | undefined) {
  if (value === undefined) {
    return true;
  }

  const minValid = min === undefined || value >= min;
  const maxValid = max === undefined || value <= max;

  return minValid && maxValid;
}

export type NumberInputStylesNames = 'controls' | 'control' | __InputStylesNames;
export type NumberInputCssVariables = {
  controls: '--ni-chevron-size';
};

export interface NumberInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<NumberInputFactory>,
    ElementProps<'input', 'size' | 'type' | 'onChange'> {
  /** Controlled component value */
  value?: number | string;

  /** Uncontrolled component default value */
  defaultValue?: number | string;

  /** Called when value changes */
  onChange?: (value: number | string) => void;

  /** Called when value changes with `react-number-format` payload */
  onValueChange?: OnValueChange;

  /** Determines whether leading zeros are allowed. If set to `false`, leading zeros are removed when the input value becomes a valid number. `true` by default */
  allowLeadingZeros?: boolean;

  /** Determines whether negative values are allowed, `true` by default */
  allowNegative?: boolean;

  /** Characters which when pressed result in a decimal separator, `['.']` by default */
  allowedDecimalSeparators?: string[];

  /** Limits the number of digits that can be entered after the decimal point */
  decimalScale?: number;

  /** Character used as a decimal separator, `'.'` by default */
  decimalSeparator?: string;

  /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
  fixedDecimalScale?: boolean;

  /** Prefix added before the input value */
  prefix?: string;

  /** Suffix added after the input value */
  suffix?: string;

  /** Defines the thousand grouping style. */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';

  /** A function to validate the input value. If this function returns `false`, the `onChange` will not be called and the input value will not change. */
  isAllowed?: (values: NumberFormatValues) => boolean;

  /** If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as `true`. `false` by default. */
  valueIsNumericString?: boolean;

  /** Controls input `type` attribute, `'text'` by default */
  type?: 'text' | 'tel' | 'password';

  /** A character used to separate thousands */
  thousandSeparator?: string | boolean;

  /** Minimum possible value */
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with up/down controls and keyboard arrows, `1` by default */
  step?: number;

  /** Determines whether the up/down controls should be hidden, `false` by default */
  hideControls?: boolean;

  /** Controls how value is clamped, `strict` – user is not allowed to enter values that are not in `[min, max]` range, `blur` – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), `none` – lifts all restrictions, `[min, max]` range is applied only for controls and up/down keys */
  clampBehavior?: 'strict' | 'blur' | 'none';

  /** Determines whether decimal values are allowed, `true` by default */
  allowDecimal?: boolean;

  /** Increment/decrement handlers */
  handlersRef?: React.ForwardedRef<NumberInputHandlers | undefined>;

  /** Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, `0` by default */
  startValue?: number;

  /** Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. */
  stepHoldInterval?: number | ((stepCount: number) => number);

  /** Initial delay in milliseconds before stepping the value. */
  stepHoldDelay?: number;

  /** Determines whether up/down keyboard events should be handled to increment/decrement value, `true` by default */
  withKeyboardEvents?: boolean;

  /** Determines whether leading zeros (e.g. `00100` -> `100`) should be removed on blur, `true` by default */
  trimLeadingZeroesOnBlur?: boolean;
}

export type NumberInputFactory = Factory<{
  props: NumberInputProps;
  ref: HTMLInputElement;
  stylesNames: NumberInputStylesNames;
  vars: NumberInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps: Partial<NumberInputProps> = {
  step: 1,
  clampBehavior: 'blur',
  allowDecimal: true,
  allowNegative: true,
  withKeyboardEvents: true,
  allowLeadingZeros: true,
  trimLeadingZeroesOnBlur: true,
  startValue: 0,
};

const varsResolver = createVarsResolver<NumberInputFactory>((_, { size }) => ({
  controls: {
    '--ni-chevron-size': getSize(size, 'ni-chevron-size'),
  },
}));

export const NumberInput = factory<NumberInputFactory>((_props, ref) => {
  const props = useProps('NumberInput', defaultProps, _props);
  const {
    className,
    classNames,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    max,
    min,
    step,
    hideControls,
    rightSection,
    isAllowed,
    clampBehavior,
    onBlur,
    allowDecimal,
    decimalScale,
    onKeyDown,
    onKeyDownCapture,
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative,
    readOnly,
    size,
    rightSectionWidth,
    stepHoldInterval,
    stepHoldDelay,
    allowLeadingZeros,
    withKeyboardEvents,
    trimLeadingZeroesOnBlur,
    ...others
  } = props;

  const getStyles = useStyles<NumberInputFactory>({
    name: 'NumberInput',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<NumberInputFactory>({
    classNames,
    styles,
    props,
  });

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const shouldUseStepInterval = stepHoldDelay !== undefined && stepHoldInterval !== undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const onStepTimeoutRef = useRef<number | null>(null);
  const stepCountRef = useRef<number>(0);

  const handleValueChange: OnValueChange = (payload, event) => {
    if (event.source === 'event') {
      setValue(
        isValidNumber(payload.floatValue, payload.value) &&
          !leadingDecimalZeroPattern.test(payload.value) &&
          !(allowLeadingZeros ? leadingZerosPattern.test(payload.value) : false)
          ? payload.floatValue
          : payload.value
      );
    }
    onValueChange?.(payload, event);
  };

  const getDecimalPlaces = (inputValue: number | string): number => {
    const match = String(inputValue).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
      return 0;
    }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
  };

  const adjustCursor = (position?: number) => {
    if (inputRef.current && typeof position !== 'undefined') {
      inputRef.current.setSelectionRange(position, position);
    }
  };

  const incrementRef = useRef<() => void>(noop);
  incrementRef.current = () => {
    if (!canIncrement(_value)) {
      return;
    }

    let val: number;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step!);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;

    if (!isNumberString(_value) && (typeof _value !== 'number' || Number.isNaN(_value))) {
      val = clamp(startValue!, min, max);
    } else if (max !== undefined) {
      const incrementedValue =
        (Math.round(Number(_value) * factor) + Math.round(step! * factor)) / factor;
      val = incrementedValue <= max ? incrementedValue : max;
    } else {
      val = (Math.round(Number(_value) * factor) + Math.round(step! * factor)) / factor;
    }

    const formattedValue = val.toFixed(maxPrecision);
    setValue(parseFloat(formattedValue));
    onValueChange?.(
      { floatValue: parseFloat(formattedValue), formattedValue, value: formattedValue },
      { source: 'increment' as any }
    );
    setTimeout(() => adjustCursor(inputRef.current?.value.length), 0);
  };

  const decrementRef = useRef<() => void>(noop);
  decrementRef.current = () => {
    if (!canIncrement(_value)) {
      return;
    }

    let val: number;
    const minValue = min !== undefined ? min : !allowNegative ? 0 : Number.MIN_SAFE_INTEGER;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step!);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;

    if ((!isNumberString(_value) && typeof _value !== 'number') || Number.isNaN(_value)) {
      val = clamp(startValue!, minValue, max);
    } else {
      const decrementedValue =
        (Math.round(Number(_value) * factor) - Math.round(step! * factor)) / factor;
      val = minValue !== undefined && decrementedValue < minValue ? minValue : decrementedValue;
    }

    const formattedValue = val.toFixed(maxPrecision);
    setValue(parseFloat(formattedValue));
    onValueChange?.(
      { floatValue: parseFloat(formattedValue), formattedValue, value: formattedValue },
      { source: 'decrement' as any }
    );
    setTimeout(() => adjustCursor(inputRef.current?.value.length), 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (readOnly || !withKeyboardEvents) {
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      incrementRef.current!();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      decrementRef.current!();
    }
  };

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDownCapture?.(event);
    if (event.key === 'Backspace') {
      const input = inputRef.current!;
      if (input.selectionStart === 0 && input.selectionStart === input.selectionEnd) {
        event.preventDefault();
        window.setTimeout(() => adjustCursor(0), 0);
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let sanitizedValue = _value;

    if (clampBehavior === 'blur' && typeof sanitizedValue === 'number') {
      const clampedValue = clamp(sanitizedValue, min, max);
      sanitizedValue = clampedValue;
    }

    if (
      trimLeadingZeroesOnBlur &&
      typeof sanitizedValue === 'string' &&
      getDecimalPlaces(sanitizedValue) < 15
    ) {
      const replaced = sanitizedValue.toString().replace(/^0+/, '');
      const parsedValue = parseFloat(replaced);
      sanitizedValue =
        Number.isNaN(parsedValue) || parsedValue > Number.MAX_SAFE_INTEGER
          ? replaced
          : clamp(parsedValue, min, max);
    }

    if (_value !== sanitizedValue) {
      setValue(sanitizedValue);
    }

    onBlur?.(event);
  };

  assignRef(handlersRef, { increment: incrementRef.current, decrement: decrementRef.current });

  const onStepHandleChange = (isIncrement: boolean) => {
    if (isIncrement) {
      incrementRef.current!();
    } else {
      decrementRef.current!();
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
    inputRef.current?.focus();
    onStepHandleChange(isIncrement);
    if (shouldUseStepInterval) {
      onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), stepHoldDelay);
    }
  };

  const onStepDone = () => {
    if (onStepTimeoutRef.current) {
      window.clearTimeout(onStepTimeoutRef.current);
    }
    onStepTimeoutRef.current = null;
    stepCountRef.current = 0;
  };

  const controls = (
    <div {...getStyles('controls')}>
      <UnstyledButton
        {...getStyles('control')}
        tabIndex={-1}
        aria-hidden
        disabled={disabled || (typeof _value === 'number' && max !== undefined && _value >= max)}
        mod={{ direction: 'up' }}
        onMouseDown={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          onStep(event, true);
        }}
        onPointerUp={onStepDone}
        onPointerLeave={onStepDone}
      >
        <NumberInputChevron direction="up" />
      </UnstyledButton>
      <UnstyledButton
        {...getStyles('control')}
        tabIndex={-1}
        aria-hidden
        disabled={disabled || (typeof _value === 'number' && min !== undefined && _value <= min)}
        mod={{ direction: 'down' }}
        onMouseDown={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          onStep(event, false);
        }}
        onPointerUp={onStepDone}
        onPointerLeave={onStepDone}
      >
        <NumberInputChevron direction="down" />
      </UnstyledButton>
    </div>
  );

  return (
    <InputBase
      component={NumericFormat}
      allowNegative={allowNegative}
      className={cx(classes.root, className)}
      size={size}
      {...others}
      readOnly={readOnly}
      disabled={disabled}
      value={_value}
      getInputRef={useMergedRef(ref, inputRef)}
      onValueChange={handleValueChange}
      rightSection={
        hideControls || readOnly || !canIncrement(_value) ? rightSection : rightSection || controls
      }
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      __staticSelector="NumberInput"
      decimalScale={allowDecimal ? decimalScale : 0}
      onKeyDown={handleKeyDown}
      onKeyDownCapture={handleKeyDownCapture}
      rightSectionPointerEvents={rightSectionPointerEvents ?? (disabled ? 'none' : undefined)}
      rightSectionWidth={rightSectionWidth ?? `var(--ni-right-section-width-${size || 'sm'})`}
      allowLeadingZeros={allowLeadingZeros}
      onBlur={handleBlur}
      isAllowed={(val) => {
        if (clampBehavior === 'strict') {
          if (isAllowed) {
            return isAllowed(val) && isInRange(val.floatValue, min, max);
          }

          return isInRange(val.floatValue, min, max);
        }

        return isAllowed ? isAllowed(val) : true;
      }}
    />
  );
});

NumberInput.classes = { ...InputBase.classes, ...classes };
NumberInput.displayName = '@mantine/core/NumberInput';
