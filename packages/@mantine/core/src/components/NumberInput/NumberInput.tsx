import React, { useRef } from 'react';
import cx from 'clsx';
import { NumberFormatValues, NumericFormat, OnValueChange } from 'react-number-format';
import { assignRef, clamp, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
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

// Re for decimal numbers with trailing zeros like 13.0, 13.00, 5.10 ... strings
const trailingZerosPattern = /\.\d*0$/;

// Re for numbers with trailing decimal separator like 10. or -3.
const trailingDecimalSeparatorPattern = /^-?\d+\.$/;

export interface NumberInputHandlers {
  increment: () => void;
  decrement: () => void;
}

export type NumberInputMode = 'number' | 'bigint';
export type NumberInputNumericType = number | bigint;
export type NumberInputValue<T extends NumberInputNumericType = number> = T | string;
type NumberInputNumericValue<T extends NumberInputNumericType = number> = T;
type InternalNumberInputValue = string | number | bigint;

function isNumberString(value: unknown) {
  return typeof value === 'string' && value !== '' && !Number.isNaN(Number(value));
}

function isBigIntValue(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

function canStep(value: number | string) {
  if (typeof value === 'number') {
    return value < Number.MAX_SAFE_INTEGER;
  }

  return value === '' || (isNumberString(value) && Number(value) < Number.MAX_SAFE_INTEGER);
}

function isValidBigIntString(value: string, allowNegative: boolean) {
  if (value === '') {
    return false;
  }

  if (value === '-') {
    return false;
  }

  if (!allowNegative && value.startsWith('-')) {
    return false;
  }

  return /^-?\d+$/.test(value);
}

function canStepBigInt(value: bigint | string, allowNegative: boolean) {
  if (typeof value === 'bigint') {
    return true;
  }

  return value === '' || isValidBigIntString(value, allowNegative);
}

function parseBigIntFromString(value: string): bigint | null {
  if (!/^-?\d+$/.test(value)) {
    return null;
  }

  try {
    return BigInt(value);
  } catch {
    return null;
  }
}

function toBigIntOrUndefined(value: unknown): bigint | undefined {
  if (typeof value === 'bigint') {
    return value;
  }

  if (typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value)) {
    return BigInt(value);
  }

  return undefined;
}

function clampBigInt(value: bigint, min?: bigint, max?: bigint) {
  if (min !== undefined && value < min) {
    return min;
  }

  if (max !== undefined && value > max) {
    return max;
  }

  return value;
}

function getTotalDigits(inputValue: string | number): number {
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
    getTotalDigits(value) < 14 &&
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

export interface NumberInputProps<T extends NumberInputNumericType = number>
  extends
    BoxProps,
    Omit<__BaseInputProps, 'pointer'>,
    StylesApiProps<NumberInputFactory>,
    ElementProps<
      'input',
      'size' | 'type' | 'onChange' | 'value' | 'defaultValue' | 'min' | 'max' | 'step'
    > {
  /** Controlled component value */
  value?: NumberInputValue<T>;

  /** Uncontrolled component default value */
  defaultValue?: NumberInputValue<T>;

  /** Called when value changes */
  onChange?: (value: NumberInputValue<T>) => void;

  /** Called when value changes with `react-number-format` payload */
  onValueChange?: OnValueChange;

  /** Determines whether leading zeros are allowed during input. If `false`, leading zeros are removed as you type (e.g., typing `007` results in `7`). Works in conjunction with `trimLeadingZeroesOnBlur`. @default true */
  allowLeadingZeros?: boolean;

  /** Determines whether negative numbers are allowed. If `false`, the input will not accept negative values, and the decrement button will stop at `0` (when `min` is not set). @default true */
  allowNegative?: boolean;

  /** Characters which when pressed result in a decimal separator. These characters will be replaced by the `decimalSeparator` in the input value. @default ['.', ','] */
  allowedDecimalSeparators?: string[];

  /** Limits the number of digits that can be entered after the decimal point @default Infinity */
  decimalScale?: number;

  /** Character used as a decimal separator. Generally used with `allowedDecimalSeparators` prop. @default '.' */
  decimalSeparator?: string;

  /** If `true`, automatically pads the decimal part with zeros to match `decimalScale` (e.g., with `decimalScale={2}`, typing `5.1` displays as `5.10`). Requires `decimalScale` to be set. @default false */
  fixedDecimalScale?: boolean;

  /** Prefix added before the input value */
  prefix?: string;

  /** Suffix added after the input value */
  suffix?: string;

  /** Defines the thousand grouping style. 'thousand' (1,000), 'lakh' (1,00,000), 'wan' (1,0000), 'none'. */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';

  /** A function to validate the input value. If this function returns `false`, the `onChange` will not be called and the input value will not change. */
  isAllowed?: (values: NumberFormatValues) => boolean;

  /** Advanced: Set to `true` if you're passing numeric strings (e.g., `"12345"`) and using formatting props like `prefix` or `suffix`. In most cases, you don't need this prop. See [react-number-format docs](https://www.npmjs.com/package/react-number-format) for details. @default false */
  valueIsNumericString?: boolean;

  /** Controls input `type` attribute @default 'text' */
  type?: 'text' | 'tel' | 'password';

  /** A character used to separate thousands */
  thousandSeparator?: string | boolean;

  /** Minimum possible value */
  min?: NumberInputNumericValue<T>;

  /** Maximum possible value */
  max?: NumberInputNumericValue<T>;

  /** Number by which value will be incremented/decremented with up/down controls and keyboard arrows @default 1 */
  step?: NumberInputNumericValue<T>;

  /** If set, the up/down controls are hidden @default false */
  hideControls?: boolean;

  /** Controls how values are clamped to the `min`/`max` range:
   * - `'blur'` (default): User can type any value, but it's clamped when the input loses focus
   * - `'strict'`: User cannot type values outside the range
   * - `'none'`: No clamping; `min`/`max` only apply to increment/decrement controls and arrow keys
   */
  clampBehavior?: 'strict' | 'blur' | 'none';

  /** If set, decimal values are allowed @default true */
  allowDecimal?: boolean;

  /** Increment/decrement handlers */
  handlersRef?: React.Ref<NumberInputHandlers | undefined>;

  /** Value used when incrementing/decrementing an empty input. If `min` is set and `startValue < min`, `min` is used instead. @default 0 */
  startValue?: NumberInputNumericValue<T>;

  /** Interval in milliseconds between value steps when increment/decrement button is held down. Can be a number or a function `(stepCount) => number` for dynamic intervals. Requires `stepHoldDelay` to be set. @default undefined */
  stepHoldInterval?: number | ((stepCount: number) => number);

  /** Initial delay in milliseconds before stepping the value. */
  stepHoldDelay?: number;

  /** If set, up/down keyboard events increment/decrement value @default true */
  withKeyboardEvents?: boolean;

  /** If set, leading zeros are removed on blur. For example, `00100` -> `100` @default true */
  trimLeadingZeroesOnBlur?: boolean;

  /** If set, all text is selected when the input receives focus @default false */
  selectAllOnFocus?: boolean;

  /** Called when the increment button or arrow up key is pressed and the value has reached the maximum */
  onMinReached?: () => void;

  /** Called when the decrement button or arrow down key is pressed and the value has reached the minimum */
  onMaxReached?: () => void;
}

export type NumberInputFactory = Factory<{
  props: NumberInputProps;
  ref: HTMLInputElement;
  stylesNames: NumberInputStylesNames;
  vars: NumberInputCssVariables;
  variant: InputVariant;
  signature: <T extends NumberInputNumericType = number>(
    props: NumberInputProps<T>
  ) => React.JSX.Element;
}>;

const defaultProps = {
  step: 1,
  clampBehavior: 'blur',
  allowDecimal: true,
  allowNegative: true,
  withKeyboardEvents: true,
  allowLeadingZeros: true,
  trimLeadingZeroesOnBlur: true,
  startValue: 0,
  allowedDecimalSeparators: ['.', ','],
} satisfies Partial<NumberInputProps<number | bigint>>;

const varsResolver = createVarsResolver<NumberInputFactory>((_, { size }) => ({
  controls: {
    '--ni-chevron-size': getSize(size, 'ni-chevron-size'),
  },
}));

function clampAndSanitizeInput(sanitizedValue: string | number, max?: number, min?: number) {
  const stringValue = sanitizedValue.toString();
  const hasTrailingDecimalSeparator = trailingDecimalSeparatorPattern.test(stringValue);

  const replaced = stringValue.replace(/^0+(?=\d)/, '');
  const parsedValue = parseFloat(replaced);

  if (Number.isNaN(parsedValue)) {
    return replaced;
  }

  if (parsedValue > Number.MAX_SAFE_INTEGER) {
    return max !== undefined ? max : replaced;
  }

  const clamped = clamp(parsedValue, min, max);

  if (hasTrailingDecimalSeparator) {
    const clampedString = clamped.toString().replace(/^0+(?=\d)/, '');
    return `${clampedString}.`;
  }

  return clamped;
}

function clampAndSanitizeBigIntInput(
  sanitizedValue: string,
  options: { min?: bigint; max?: bigint; clampBehavior: NumberInputProps['clampBehavior'] }
) {
  if (sanitizedValue === '' || sanitizedValue === '-') {
    return sanitizedValue;
  }

  const parsed = parseBigIntFromString(sanitizedValue);

  if (parsed === null) {
    return sanitizedValue;
  }

  return options.clampBehavior === 'blur' ? clampBigInt(parsed, options.min, options.max) : parsed;
}

export const NumberInput = genericFactory<NumberInputFactory>(
  <T extends NumberInputNumericType = number>(_props: NumberInputProps<T>) => {
    const props = useProps(
      'NumberInput',
      defaultProps as Partial<NumberInputProps>,
      _props as unknown as NumberInputProps
    );
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
      allowedDecimalSeparators,
      selectAllOnFocus,
      onMinReached,
      onMaxReached,
      onFocus,
      attributes,
      ref,
      ...others
    } = props;
    const allowNegativeResolved = allowNegative ?? true;
    const allowLeadingZerosResolved = allowLeadingZeros ?? true;

    const getStyles = useStyles<NumberInputFactory>({
      name: 'NumberInput',
      classes,
      props: props as NumberInputProps,
      classNames,
      styles,
      unstyled,
      attributes,
      vars,
      varsResolver,
    });

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<NumberInputFactory>({
      classNames,
      styles,
      props: props as NumberInputProps,
    });

    const valueModeRef = useRef<NumberInputMode>(
      isBigIntValue(value) || isBigIntValue(defaultValue) ? 'bigint' : 'number'
    );

    if (isBigIntValue(value)) {
      valueModeRef.current = 'bigint';
    } else if (typeof value === 'number') {
      valueModeRef.current = 'number';
    }

    const isBigIntMode = valueModeRef.current === 'bigint';

    const [_value, setValue] = useUncontrolled<InternalNumberInputValue>({
      value: value as InternalNumberInputValue | undefined,
      defaultValue: defaultValue as InternalNumberInputValue | undefined,
      finalValue: '',
      onChange: onChange as ((value: InternalNumberInputValue) => void) | undefined,
    });

    const shouldUseStepInterval = stepHoldDelay !== undefined && stepHoldInterval !== undefined;
    const inputRef = useRef<HTMLInputElement>(null);
    const onStepTimeoutRef = useRef<number | null>(null);
    const stepCountRef = useRef<number>(0);

    const minNumber = typeof min === 'number' ? min : undefined;
    const maxNumber = typeof max === 'number' ? max : undefined;
    const stepNumber = typeof step === 'number' ? step : defaultProps.step;
    const startValueNumber = typeof startValue === 'number' ? startValue : defaultProps.startValue;

    const minBigInt = toBigIntOrUndefined(min);
    const maxBigInt = toBigIntOrUndefined(max);
    const stepBigInt = toBigIntOrUndefined(step) ?? BigInt(1);
    const startValueBigInt = toBigIntOrUndefined(startValue) ?? BigInt(0);

    const parseBigIntOrString = (inputValue: string): bigint | string => {
      if (
        !isValidBigIntString(inputValue, allowNegativeResolved) ||
        (allowLeadingZerosResolved && leadingZerosPattern.test(inputValue))
      ) {
        return inputValue;
      }

      const parsed = parseBigIntFromString(inputValue);
      return parsed ?? inputValue;
    };

    const getBigIntFloatValue = (inputValue: bigint) => {
      const numericValue = Number(inputValue);
      return Number.isSafeInteger(numericValue) ? numericValue : undefined;
    };

    const handleValueChange: OnValueChange = (payload, event) => {
      if (event.source === 'event') {
        if (isBigIntMode) {
          setValue(parseBigIntOrString(payload.value));
        } else {
          setValue(
            isValidNumber(payload.floatValue, payload.value) &&
              !leadingDecimalZeroPattern.test(payload.value) &&
              !(allowLeadingZerosResolved ? leadingZerosPattern.test(payload.value) : false) &&
              !trailingZerosPattern.test(payload.value) &&
              !trailingDecimalSeparatorPattern.test(payload.value)
              ? payload.floatValue
              : payload.value
          );
        }
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
      if (isBigIntMode) {
        if (!canStepBigInt(_value as bigint | string, allowNegativeResolved)) {
          return;
        }

        let val: bigint;
        const currentValue = _value;

        if (typeof currentValue === 'bigint') {
          const incrementedValue = currentValue + stepBigInt;
          if (maxBigInt !== undefined && incrementedValue > maxBigInt) {
            onMaxReached?.();
          }
          val =
            maxBigInt !== undefined && incrementedValue > maxBigInt ? maxBigInt : incrementedValue;
        } else if (typeof currentValue === 'string' && currentValue !== '') {
          const parsed = parseBigIntFromString(currentValue);
          if (parsed === null) {
            return;
          }

          const incrementedValue = parsed + stepBigInt;
          if (maxBigInt !== undefined && incrementedValue > maxBigInt) {
            onMaxReached?.();
          }
          val =
            maxBigInt !== undefined && incrementedValue > maxBigInt ? maxBigInt : incrementedValue;
        } else {
          val = clampBigInt(startValueBigInt, minBigInt, maxBigInt);
        }

        const formattedValue = val.toString();
        setValue(val);
        onValueChange?.(
          { floatValue: getBigIntFloatValue(val), formattedValue, value: formattedValue },
          { source: 'increment' as any }
        );
        setTimeout(() => adjustCursor(inputRef.current?.value.length), 0);
        return;
      }

      if (!canStep(_value as number | string)) {
        return;
      }

      let val: number;
      const currentValuePrecision = getDecimalPlaces(_value as number | string);
      const stepPrecision = getDecimalPlaces(stepNumber);
      const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
      const factor = 10 ** maxPrecision;

      if (!isNumberString(_value) && (typeof _value !== 'number' || Number.isNaN(_value))) {
        val = clamp(startValueNumber, minNumber, maxNumber);
      } else if (maxNumber !== undefined) {
        const incrementedValue =
          (Math.round(Number(_value) * factor) + Math.round(stepNumber * factor)) / factor;
        if (incrementedValue > maxNumber) {
          onMaxReached?.();
        }
        val = incrementedValue <= maxNumber ? incrementedValue : maxNumber;
      } else {
        val = (Math.round(Number(_value) * factor) + Math.round(stepNumber * factor)) / factor;
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
      if (isBigIntMode) {
        if (!canStepBigInt(_value as bigint | string, allowNegativeResolved)) {
          return;
        }

        let val: bigint;
        const minValue =
          minBigInt !== undefined ? minBigInt : !allowNegativeResolved ? BigInt(0) : undefined;
        const currentValue = _value;

        if (typeof currentValue === 'bigint') {
          const decrementedValue = currentValue - stepBigInt;
          if (minValue !== undefined && decrementedValue < minValue) {
            onMinReached?.();
          }
          val = minValue !== undefined && decrementedValue < minValue ? minValue : decrementedValue;
        } else if (typeof currentValue === 'string' && currentValue !== '') {
          const parsed = parseBigIntFromString(currentValue);
          if (parsed === null) {
            return;
          }

          const decrementedValue = parsed - stepBigInt;
          if (minValue !== undefined && decrementedValue < minValue) {
            onMinReached?.();
          }
          val = minValue !== undefined && decrementedValue < minValue ? minValue : decrementedValue;
        } else {
          val = clampBigInt(startValueBigInt, minValue, maxBigInt);
        }

        const formattedValue = val.toString();
        setValue(val);
        onValueChange?.(
          { floatValue: getBigIntFloatValue(val), formattedValue, value: formattedValue },
          { source: 'decrement' as any }
        );
        setTimeout(() => adjustCursor(inputRef.current?.value.length), 0);
        return;
      }

      if (!canStep(_value as number | string)) {
        return;
      }

      let val: number;
      const minValue =
        minNumber !== undefined ? minNumber : !allowNegativeResolved ? 0 : Number.MIN_SAFE_INTEGER;
      const currentValuePrecision = getDecimalPlaces(_value as number | string);
      const stepPrecision = getDecimalPlaces(stepNumber);
      const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
      const factor = 10 ** maxPrecision;

      if ((!isNumberString(_value) && typeof _value !== 'number') || Number.isNaN(_value)) {
        val = clamp(startValueNumber, minValue, maxNumber);
      } else {
        const decrementedValue =
          (Math.round(Number(_value) * factor) - Math.round(stepNumber * factor)) / factor;
        if (minValue !== undefined && decrementedValue < minValue) {
          onMinReached?.();
        }
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

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedText = event.clipboardData.getData('text');
      const _decimalSeparator = others.decimalSeparator || '.';
      const separatorsToReplace = (allowedDecimalSeparators || ['.', ',']).filter(
        (s) => s !== _decimalSeparator
      );

      if (separatorsToReplace.some((s) => pastedText.includes(s))) {
        event.preventDefault();
        let modifiedText = pastedText;
        separatorsToReplace.forEach((s) => {
          modifiedText = modifiedText.split(s).join(_decimalSeparator);
        });

        const input = inputRef.current;
        if (input) {
          const start = input.selectionStart ?? 0;
          const end = input.selectionEnd ?? 0;
          const currentValue = input.value;
          const newValue =
            currentValue.substring(0, start) + modifiedText + currentValue.substring(end);

          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value'
          )?.set;
          nativeInputValueSetter?.call(input, newValue);
          input.dispatchEvent(new Event('change', { bubbles: true }));

          const cursorPos = start + modifiedText.length;
          setTimeout(() => adjustCursor(cursorPos), 0);
        }
      }

      others.onPaste?.(event as any);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if (readOnly || !withKeyboardEvents) {
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        incrementRef.current?.();
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        decrementRef.current?.();
      }
    };

    const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDownCapture?.(event);
      if (event.key === 'Backspace') {
        const input = inputRef.current;
        if (input && input.selectionStart === 0 && input.selectionStart === input.selectionEnd) {
          event.preventDefault();
          window.setTimeout(() => adjustCursor(0), 0);
        }
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (selectAllOnFocus) {
        setTimeout(() => event.currentTarget.select(), 0);
      }
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      let sanitizedValue = _value;

      if (isBigIntMode) {
        if (clampBehavior === 'blur' && typeof sanitizedValue === 'bigint') {
          sanitizedValue = clampBigInt(sanitizedValue, minBigInt, maxBigInt);
        }

        if (trimLeadingZeroesOnBlur && typeof sanitizedValue === 'string') {
          sanitizedValue = clampAndSanitizeBigIntInput(sanitizedValue, {
            min: minBigInt,
            max: maxBigInt,
            clampBehavior,
          });
        }
      } else {
        if (clampBehavior === 'blur' && typeof sanitizedValue === 'number') {
          sanitizedValue = clamp(sanitizedValue, minNumber, maxNumber);
        }

        if (
          trimLeadingZeroesOnBlur &&
          typeof sanitizedValue === 'string' &&
          getDecimalPlaces(sanitizedValue) < 15
        ) {
          sanitizedValue = clampAndSanitizeInput(sanitizedValue, maxNumber, minNumber);
        }
      }

      if (_value !== sanitizedValue) {
        setValue(sanitizedValue);
      }

      onBlur?.(event);
    };

    assignRef(handlersRef, { increment: incrementRef.current, decrement: decrementRef.current });

    const onStepHandleChange = (isIncrement: boolean) => {
      if (isIncrement) {
        incrementRef.current?.();
      } else {
        decrementRef.current?.();
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
          disabled={
            disabled ||
            (typeof _value === 'number' && maxNumber !== undefined && _value >= maxNumber) ||
            (typeof _value === 'bigint' && maxBigInt !== undefined && _value >= maxBigInt)
          }
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
          disabled={
            disabled ||
            (typeof _value === 'number' && minNumber !== undefined && _value <= minNumber) ||
            (typeof _value === 'bigint' && minBigInt !== undefined && _value <= minBigInt)
          }
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
        inputMode={isBigIntMode ? 'numeric' : 'decimal'}
        readOnly={readOnly}
        disabled={disabled}
        value={typeof _value === 'bigint' ? _value.toString() : _value}
        getInputRef={useMergedRef(ref, inputRef)}
        onValueChange={handleValueChange}
        rightSection={
          hideControls ||
          readOnly ||
          !(isBigIntMode
            ? canStepBigInt(_value as bigint | string, allowNegativeResolved)
            : canStep(_value as number | string))
            ? rightSection
            : rightSection || controls
        }
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        __staticSelector="NumberInput"
        decimalScale={isBigIntMode ? 0 : allowDecimal ? decimalScale : 0}
        onPaste={handlePaste}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyDownCapture={handleKeyDownCapture}
        rightSectionPointerEvents={rightSectionPointerEvents ?? (disabled ? 'none' : undefined)}
        rightSectionWidth={rightSectionWidth ?? `var(--ni-right-section-width-${size || 'sm'})`}
        allowLeadingZeros={allowLeadingZeros}
        allowedDecimalSeparators={allowedDecimalSeparators}
        onBlur={handleBlur}
        attributes={attributes}
        isAllowed={(val) => {
          const userAllowed = isAllowed ? isAllowed(val) : true;
          if (!userAllowed) {
            return false;
          }

          if (clampBehavior !== 'strict') {
            return true;
          }

          if (!isBigIntMode) {
            return isInRange(val.floatValue, minNumber, maxNumber);
          }

          if (val.value === '' || val.value === '-') {
            return true;
          }

          const parsed = parseBigIntFromString(val.value);

          if (parsed === null) {
            return true;
          }

          return (
            (minBigInt === undefined || parsed >= minBigInt) &&
            (maxBigInt === undefined || parsed <= maxBigInt)
          );
        }}
      />
    );
  }
);

NumberInput.classes = { ...InputBase.classes, ...classes };
NumberInput.varsResolver = varsResolver;
NumberInput.displayName = '@mantine/core/NumberInput';
