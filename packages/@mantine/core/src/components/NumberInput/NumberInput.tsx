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
import classes from './NumberInput.module.css';
import { NumberInputChevron } from './NumberInputChevron';

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

function isNumberString(value: unknown) {
  return typeof value === 'string' && value !== '' && !Number.isNaN(Number(value));
}

function canStep(value: number | string) {
  if (typeof value === 'number') {
    return value < Number.MAX_SAFE_INTEGER;
  }

  return value === '' || (isNumberString(value) && Number(value) < Number.MAX_SAFE_INTEGER);
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

export interface NumberInputProps
  extends
    BoxProps,
    Omit<__BaseInputProps, 'pointer'>,
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
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with up/down controls and keyboard arrows @default 1 */
  step?: number;

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
  startValue?: number;

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
} satisfies Partial<NumberInputProps>;

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

export const NumberInput = factory<NumberInputFactory>((_props) => {
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
    allowedDecimalSeparators,
    selectAllOnFocus,
    onMinReached,
    onMaxReached,
    onFocus,
    attributes,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<NumberInputFactory>({
    name: 'NumberInput',
    classes,
    props,
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
          !(allowLeadingZeros ? leadingZerosPattern.test(payload.value) : false) &&
          !trailingZerosPattern.test(payload.value) &&
          !trailingDecimalSeparatorPattern.test(payload.value)
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
    if (!canStep(_value)) {
      return;
    }

    let val: number;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;

    if (!isNumberString(_value) && (typeof _value !== 'number' || Number.isNaN(_value))) {
      val = clamp(startValue, min, max);
    } else if (max !== undefined) {
      const incrementedValue =
        (Math.round(Number(_value) * factor) + Math.round(step * factor)) / factor;
      if (incrementedValue > max) {
        onMaxReached?.();
      }
      val = incrementedValue <= max ? incrementedValue : max;
    } else {
      val = (Math.round(Number(_value) * factor) + Math.round(step * factor)) / factor;
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
    if (!canStep(_value)) {
      return;
    }

    let val: number;
    const minValue = min !== undefined ? min : !allowNegative ? 0 : Number.MIN_SAFE_INTEGER;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;

    if ((!isNumberString(_value) && typeof _value !== 'number') || Number.isNaN(_value)) {
      val = clamp(startValue, minValue, max);
    } else {
      const decrementedValue =
        (Math.round(Number(_value) * factor) - Math.round(step * factor)) / factor;
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

    if (clampBehavior === 'blur' && typeof sanitizedValue === 'number') {
      sanitizedValue = clamp(sanitizedValue, min, max);
    }

    if (
      trimLeadingZeroesOnBlur &&
      typeof sanitizedValue === 'string' &&
      getDecimalPlaces(sanitizedValue) < 15
    ) {
      sanitizedValue = clampAndSanitizeInput(sanitizedValue, max, min);
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
      inputMode="decimal"
      {...others}
      readOnly={readOnly}
      disabled={disabled}
      value={_value}
      getInputRef={useMergedRef(ref, inputRef)}
      onValueChange={handleValueChange}
      rightSection={
        hideControls || readOnly || !canStep(_value) ? rightSection : rightSection || controls
      }
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      __staticSelector="NumberInput"
      decimalScale={allowDecimal ? decimalScale : 0}
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
NumberInput.varsResolver = varsResolver;
NumberInput.displayName = '@mantine/core/NumberInput';
