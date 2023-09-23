import React, { useRef, useState, useEffect } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  Factory,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Group } from '../Group';
import { Input } from '../Input';
import { createPinArray } from './create-pin-array/create-pin-array';
import classes from './PinInput.module.css';
import { InputBase } from '../InputBase';

const regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i,
};

export type PinInputStylesNames = 'root' | 'pinInput' | 'input';

export type PinInputCssVariables = {
  root: '--pin-input-size';
};

export interface PinInputProps
  extends BoxProps,
    StylesApiProps<PinInputFactory>,
    ElementProps<'div', 'onChange'> {
  /** Hidden input name attribute */
  name?: string;

  /** Hidden input form attribute */
  form?: string;

  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem, `'md'` by default */
  gap?: MantineSpacing;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Controls inputs `width` and `height`, `'sm'` by default */
  size?: MantineSize;

  /** If set, the first input is focused when component is mounted, `false` by default */
  autoFocus?: boolean;

  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Called when all inputs have value */
  onComplete?(value: string): void;

  /** Inputs placeholder, `'○'` by default */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled, `true` by default */
  manageFocus?: boolean;

  /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs, `true` by default */
  oneTimeCode?: boolean;

  /** Base id used for all inputs, generated randomly by default */
  id?: string;

  /** Disables all inputs */
  disabled?: boolean;

  /** Adds error styles to all inputs */
  error?: boolean;

  /** Allowed values, `'alphanumeric'` by default */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to `"password"`, `false` by default */
  mask?: boolean;

  /** Number of input boxes, `4` by default */
  length?: number;

  /** Determines whether input content can be edited */
  readOnly?: boolean;

  /** Inputs `type` attribute, inferred from the `type` prop if not specified */
  inputType?: React.HTMLInputTypeAttribute;

  /** `inputmode` attribute, inferred from the `type` prop if not specified */
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;

  /** `aria-label` for the inputs */
  ariaLabel?: string;
}

export type PinInputFactory = Factory<{
  props: PinInputProps;
  ref: HTMLInputElement;
  stylesNames: PinInputStylesNames;
  vars: PinInputCssVariables;
}>;

const defaultProps: Partial<PinInputProps> = {
  gap: 'sm',
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: '○',
  type: 'alphanumeric',
  ariaLabel: 'PinInput',
};

const varsResolver = createVarsResolver<PinInputFactory>((_, { size }) => ({
  root: {
    '--pin-input-size': getSize(size ?? defaultProps.size, 'pin-input-size'),
  },
}));

export const PinInput = factory<PinInputFactory>((props, ref) => {
  const {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars,
    id,
    ...others
  } = useProps('PinInput', defaultProps, props);

  const uuid = useId(id);

  const getStyles = useStyles<PinInputFactory>({
    name: 'PinInput',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PinInputFactory>({
    classNames,
    styles,
    props,
  });

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const [_value, setValues] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const validate = (code: string) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re?.test(code);
  };

  const focusInputField = (dir: 'next' | 'prev', index: number) => {
    if (!manageFocus) return;

    if (dir === 'next') {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < (length ?? 0) ? nextIndex : index].focus();
    }

    if (dir === 'prev') {
      const nextIndex = index - 1;

      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };

  const setFieldValue = (val: string, index: number) => {
    const values = [...createPinArray(length ?? 0, _value)];
    values[index] = val;
    setValues(values.join(''));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;
    const nextCharOrValue =
      inputValue.length === 2 ? inputValue.split('')[inputValue.length - 1] : inputValue;

    const isValid = validate(nextCharOrValue);

    if (nextCharOrValue.length < 2) {
      if (isValid) {
        setFieldValue(nextCharOrValue, index);
        focusInputField('next', index);
      } else {
        setFieldValue('', index);
      }
    } else if (isValid) {
      setValues(inputValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusInputField('prev', index);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusInputField('next', index);
    } else if (event.key === 'Delete') {
      event.preventDefault();
      setFieldValue('', index);
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      setFieldValue('', index);
      if (length === index + 1) {
        if ((event.target as HTMLInputElement).value === '') {
          focusInputField('prev', index);
        }
      } else {
        focusInputField('prev', index);
      }
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>, index: number) => {
    event.target.select();
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData('Text');
    const isValid = validate(copyValue);

    if (isValid) {
      setValues(copyValue);
    }
  };

  useEffect(() => {
    if (_value.length !== length) return;

    onComplete?.(_value);
  }, [_value]);

  return (
    <>
      <Group
        {...others}
        {...getStyles('root')}
        role="group"
        id={uuid}
        gap={gap}
        ref={ref}
        unstyled={unstyled}
        wrap="nowrap"
        variant={variant}
        __size={size}
      >
        {createPinArray(length ?? 0, _value).map((char, index) => (
          <Input
            component="input"
            {...getStyles('pinInput', {
              style: {
                '--_input-padding': '0',
                '--_input-text-align': 'center',
              } as React.CSSProperties,
            })}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            size={size}
            __staticSelector="PinInput"
            id={`${uuid}-${index + 1}`}
            key={`${uuid}-${index}`}
            inputMode={inputMode || (type === 'number' ? 'numeric' : 'text')}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onFocus={(event) => handleFocus(event, index)}
            onBlur={handleBlur}
            onPaste={handlePaste}
            type={inputType || (mask ? 'password' : type === 'number' ? 'tel' : 'text')}
            radius={radius}
            error={error}
            variant={variant}
            disabled={disabled}
            ref={(node) => {
              inputsRef.current[index] = node!;
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={focusedIndex === index ? '' : placeholder}
            value={char}
            autoFocus={autoFocus && index === 0}
            unstyled={unstyled}
            aria-label={ariaLabel}
            readOnly={readOnly}
          />
        ))}
      </Group>

      <input type="hidden" name={name} form={form} value={_value} />
    </>
  );
});

PinInput.classes = { ...classes, ...InputBase.classes };
PinInput.displayName = '@mantine/core/PinInput';
