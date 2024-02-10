import React, { useEffect, useRef, useState } from 'react';
import { assignRef, useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  factory,
  getSize,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Group } from '../Group';
import { Input } from '../Input';
import { InputBase } from '../InputBase';
import { createPinArray } from './create-pin-array/create-pin-array';
import classes from './PinInput.module.css';

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
  /** Hidden input `name` attribute */
  name?: string;

  /** Hidden input `form` attribute */
  form?: string;

  /** Key of `theme.spacing` or any valid CSS value to set `gap` between inputs, numbers are converted to rem, `'md'` by default */
  gap?: MantineSpacing;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
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
  onChange?: (value: string) => void;

  /** Called when all inputs have value */
  onComplete?: (value: string) => void;

  /** Inputs placeholder, `'○'` by default */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled, `true` by default */
  manageFocus?: boolean;

  /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs, `true` by default */
  oneTimeCode?: boolean;

  /** Base id used for all inputs. By default, inputs' ids are generated randomly. */
  id?: string;

  /** If set, `disabled` attribute is added to all inputs */
  disabled?: boolean;

  /** If set, adds error styles and `aria-invalid` attribute to all inputs */
  error?: boolean;

  /** Determines which values can be entered, `'alphanumeric'` by default */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to `"password"`, `false` by default */
  mask?: boolean;

  /** Number of inputs, `4` by default */
  length?: number;

  /** If set, the user cannot edit the value */
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

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'>;
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
    hiddenInputProps,
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

  const [_value, setValues] = useUncontrolled<string[]>({
    value: value ? createPinArray(length ?? 0, value) : undefined,
    defaultValue: defaultValue?.split('').slice(0, length ?? 0),
    finalValue: createPinArray(length ?? 0, ''),
    onChange:
      typeof onChange === 'function'
        ? (val) => {
            onChange(val.join('').trim());
          }
        : undefined,
  });
  const _valueToString = _value.join('').trim();

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
    const values = [..._value];
    values[index] = val;
    setValues(values);
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
      setValues(createPinArray(length ?? 0, inputValue));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { ctrlKey, key, shiftKey, target } = event;
    const inputValue = (target as HTMLInputElement).value;

    if (inputMode === 'numeric') {
      const canTypeSign =
        key === 'Backspace' ||
        key === 'Tab' ||
        key === 'Control' ||
        key === 'Delete' ||
        (ctrlKey && key === 'v')
          ? true
          : !Number.isNaN(Number(key));

      if (!canTypeSign) {
        event.preventDefault();
      }
    }

    if (key === 'ArrowLeft' || (shiftKey && key === 'Tab')) {
      event.preventDefault();
      focusInputField('prev', index);
    } else if (key === 'ArrowRight' || key === 'Tab' || key === ' ') {
      event.preventDefault();
      focusInputField('next', index);
    } else if (key === 'Delete') {
      event.preventDefault();
      setFieldValue('', index);
    } else if (key === 'Backspace') {
      event.preventDefault();
      setFieldValue('', index);
      if (length === index + 1) {
        if ((event.target as HTMLInputElement).value === '') {
          focusInputField('prev', index);
        }
      } else {
        focusInputField('prev', index);
      }
    } else if (inputValue.length > 0 && key === _value[index]) {
      event.preventDefault();
      focusInputField('next', index);
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
    const copyValue = event.clipboardData.getData('text/plain').replace(/[\n\r\s]+/g, '');
    const isValid = validate(copyValue.trim());

    if (isValid) {
      const copyValueToPinArray = createPinArray(length ?? 0, copyValue);
      setValues(copyValueToPinArray);
      focusInputField('next', copyValueToPinArray.length - 1);
    }
  };

  useEffect(() => {
    if (_valueToString.length !== length) return;

    onComplete?.(_valueToString);
  }, [length, onComplete, _valueToString]);

  return (
    <>
      <Group
        {...others}
        {...getStyles('root')}
        role="group"
        id={uuid}
        gap={gap}
        unstyled={unstyled}
        wrap="nowrap"
        variant={variant}
        __size={size}
      >
        {_value.map((char: string, index: number) => (
          <Input
            component="input"
            {...getStyles('pinInput', {
              style: {
                '--input-padding': '0',
                '--input-text-align': 'center',
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
              index === 0 && assignRef(ref, node);
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

      <input type="hidden" name={name} form={form} value={_valueToString} {...hiddenInputProps} />
    </>
  );
});

PinInput.classes = { ...classes, ...InputBase.classes };
PinInput.displayName = '@mantine/core/PinInput';
