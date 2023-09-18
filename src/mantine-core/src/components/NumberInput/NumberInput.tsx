import React from 'react';
import { NumericFormat, OnValueChange, NumberFormatValues } from 'react-number-format';
import { assignRef, clamp, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getSize,
  useResolvedStylesApi,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { InputBase } from '../InputBase';
import { __BaseInputProps, __InputStylesNames, InputVariant } from '../Input';
import { NumberInputChevron } from './NumberInputChevron';
import classes from './NumberInput.module.css';

export interface NumberInputHandlers {
  increment(): void;
  decrement(): void;
}

function isValidNumber(value: number | undefined): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

interface GetDecrementedValueInput {
  value: number;
  min: number | undefined;
  step: number | undefined;
  allowNegative: boolean | undefined;
}

function getDecrementedValue({ value, min, step = 1, allowNegative }: GetDecrementedValueInput) {
  const nextValue = value - step;

  if (min !== undefined && nextValue < min) {
    return min;
  }

  if (!allowNegative && nextValue < 0 && min === undefined) {
    return value;
  }

  if (min !== undefined && min >= 0 && nextValue <= min) {
    return nextValue;
  }

  return nextValue;
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
  onChange?(value: number | string): void;

  /** Called when value changes with `react-number-format` payload */
  onValueChange?: OnValueChange;

  /** Determines whether leading zeros are allowed. If not set, leading zeros are removed when the input is blurred. `false` by default */
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
  isAllowed?(values: NumberFormatValues): boolean;

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
}

export type NumberInputFactory = Factory<{
  props: NumberInputProps;
  ref: HTMLDivElement;
  stylesNames: NumberInputStylesNames;
  vars: NumberInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps: Partial<NumberInputProps> = {
  step: 1,
  clampBehavior: 'blur',
  allowDecimal: true,
  allowNegative: true,
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
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative,
    readOnly,
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
    onChange,
  });

  const handleValueChange: OnValueChange = (payload, event) => {
    setValue(isValidNumber(payload.floatValue) ? payload.floatValue : payload.value);
    onValueChange?.(payload, event);
  };

  const increment = () => {
    if (typeof _value !== 'number' || Number.isNaN(_value)) {
      setValue(min ?? clamp(startValue!, min, max));
    } else if (max !== undefined) {
      setValue(_value + step! <= max ? _value + step! : max);
    } else {
      setValue(_value + step!);
    }
  };

  const decrement = () => {
    if (typeof _value !== 'number' || Number.isNaN(_value)) {
      setValue(max ?? clamp(startValue!, min, max));
    } else {
      setValue(getDecrementedValue({ value: _value, min, step, allowNegative }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (readOnly) {
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      increment();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      decrement();
    }
  };

  assignRef(handlersRef, { increment, decrement });

  const controls = (
    <div {...getStyles('controls')}>
      <UnstyledButton
        {...getStyles('control')}
        tabIndex={-1}
        aria-hidden
        disabled={disabled || (typeof _value === 'number' && max !== undefined && _value >= max)}
        mod={{ direction: 'up' }}
        onPointerDown={increment}
      >
        <NumberInputChevron direction="up" />
      </UnstyledButton>
      <UnstyledButton
        {...getStyles('control')}
        tabIndex={-1}
        aria-hidden
        disabled={disabled || (typeof _value === 'number' && min !== undefined && _value <= min)}
        mod={{ direction: 'down' }}
        onPointerDown={decrement}
      >
        <NumberInputChevron direction="down" />
      </UnstyledButton>
    </div>
  );

  return (
    <InputBase
      component={NumericFormat}
      allowNegative={allowNegative}
      {...others}
      readOnly={readOnly}
      disabled={disabled}
      value={_value}
      getInputRef={ref}
      onValueChange={handleValueChange}
      rightSection={hideControls || readOnly ? rightSection : rightSection || controls}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      __staticSelector="NumberInput"
      decimalScale={allowDecimal ? decimalScale : 0}
      onKeyDown={handleKeyDown}
      rightSectionPointerEvents={rightSectionPointerEvents ?? disabled ? 'none' : undefined}
      onBlur={(event) => {
        onBlur?.(event);
        if (clampBehavior === 'blur' && typeof _value === 'number') {
          setValue(clamp(_value, min, max));
        }
      }}
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
