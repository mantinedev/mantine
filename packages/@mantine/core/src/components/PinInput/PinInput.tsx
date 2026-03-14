import { useRef, useState } from 'react';
import { assignRef, useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  DataAttributes,
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
import { Input, InputProps } from '../Input';
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
  extends BoxProps, StylesApiProps<PinInputFactory>, ElementProps<'div', 'onChange' | 'ref'> {
  ref?: React.Ref<HTMLInputElement>;

  /** Hidden input `name` attribute */
  name?: string;

  /** Hidden input `form` attribute */
  form?: string;

  /** Key of `theme.spacing` or any valid CSS value to set `gap` between inputs, numbers are converted to rem @default 'md' */
  gap?: MantineSpacing;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Controls inputs `width` and `height` @default 'sm' */
  size?: MantineSize;

  /** If set, the first input is focused when component is mounted @default false */
  autoFocus?: boolean;

  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Called when all inputs have value */
  onComplete?: (value: string) => void;

  /** Inputs placeholder @default '○' */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled @default true */
  manageFocus?: boolean;

  /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs @default true */
  oneTimeCode?: boolean;

  /** Base id used to generate unique ids for inputs */
  id?: string;

  /** Adds disabled attribute to all inputs */
  disabled?: boolean;

  /** Sets `aria-invalid` attribute and applies error styles to all inputs */
  error?: boolean;

  /** Determines which values can be entered @default 'alphanumeric' */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to `"password"` @default false */
  mask?: boolean;

  /** Number of inputs @default 4 */
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

  /** `aria-label` attribute */
  ariaLabel?: string;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Assigns ref of the root element */
  rootRef?: React.Ref<HTMLDivElement>;

  /** Props added to the input element depending on its index */
  getInputProps?: (index: number) => InputProps & ElementProps<'input', 'size'> & DataAttributes;
}

export type PinInputFactory = Factory<{
  props: PinInputProps;
  ref: HTMLDivElement;
  stylesNames: PinInputStylesNames;
  vars: PinInputCssVariables;
}>;

const defaultProps = {
  gap: 'sm',
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: '○',
  type: 'alphanumeric',
  ariaLabel: 'PinInput',
  size: 'sm',
} satisfies Partial<PinInputProps>;

const varsResolver = createVarsResolver<PinInputFactory>((_, { size }) => ({
  root: {
    '--pin-input-size': getSize(size ?? 'sm', 'pin-input-size'),
  },
}));

export const PinInput = factory<PinInputFactory>((props) => {
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
    rootRef,
    getInputProps,
    attributes,
    ref,
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
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PinInputFactory>({
    classNames,
    styles,
    props,
  });

  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputsRef = useRef<Array<HTMLInputElement>>([]);
  const currentLength = length ?? 4;

  const completedRef = useRef(false);

  const [_value, setValues] = useUncontrolled<string[]>({
    value: value !== undefined ? createPinArray(currentLength, value) : undefined,
    defaultValue: defaultValue?.split('').slice(0, currentLength),
    finalValue: createPinArray(currentLength, ''),
    onChange: (val) => {
      const stringValue = val.join('').trim();
      onChange?.(stringValue);
      if (stringValue.length === currentLength && !completedRef.current) {
        completedRef.current = true;
        onComplete?.(stringValue);
      } else if (stringValue.length < currentLength) {
        completedRef.current = false;
      }
    },
  });

  const currentValue =
    _value.length !== currentLength ? createPinArray(currentLength, _value.join('')) : _value;

  const _valueToString = currentValue.join('').trim();

  const validate = (code: string) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re?.test(code);
  };

  const focusInputField = (dir: 'next' | 'prev', index: number) => {
    if (!manageFocus) {
      return;
    }

    if (dir === 'next') {
      const nextIndex = index + 1;
      if (nextIndex < currentLength) {
        inputsRef.current[nextIndex]?.focus();
      }
    } else if (dir === 'prev') {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputsRef.current[prevIndex]?.focus();
      }
    }
  };

  const setFieldValue = (val: string, index: number) => {
    const values = [...currentValue];
    values[index] = val;
    setValues(values);
    return values;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      const isPaste = inputValue.length > 2;
      if (isPaste) {
        const isValid = validate(inputValue);
        if (isValid) {
          setValues(createPinArray(currentLength, inputValue));
          const filledCount = Math.min(inputValue.length, currentLength);
          if (filledCount < currentLength) {
            focusInputField('next', filledCount - 1);
          }
        }
        return;
      }

      const newChar = inputValue.split('')[inputValue.length - 1];
      if (validate(newChar)) {
        setFieldValue(newChar, index);
        focusInputField('next', index);
      }
      return;
    }

    if (inputValue.length === 1) {
      if (validate(inputValue)) {
        setFieldValue(inputValue, index);
        focusInputField('next', index);
      } else {
        setFieldValue('', index);
      }
    } else if (inputValue.length === 0) {
      setFieldValue('', index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { ctrlKey, metaKey, key, shiftKey, target } = event;
    const inputValue = (target as HTMLInputElement).value;

    if (inputMode === 'numeric') {
      const allowedKeys = ['Backspace', 'Tab', 'Control', 'Delete', 'ArrowLeft', 'ArrowRight'];
      const isPasteShortcut = (ctrlKey || metaKey) && key === 'v';
      const isAllowedKey =
        allowedKeys.includes(key) || isPasteShortcut || !Number.isNaN(Number(key));

      if (!isAllowedKey) {
        event.preventDefault();
        return;
      }
    }

    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        focusInputField('prev', index);
        break;

      case 'ArrowRight':
        event.preventDefault();
        focusInputField('next', index);
        break;

      case 'Tab':
        if (shiftKey) {
          if (index > 0 && manageFocus) {
            event.preventDefault();
            focusInputField('prev', index);
          }
        }
        break;

      case ' ':
        event.preventDefault();
        focusInputField('next', index);
        break;

      case 'Delete':
        event.preventDefault();
        setFieldValue('', index);
        break;

      case 'Backspace':
        if (inputValue === '') {
          event.preventDefault();
          focusInputField('prev', index);
        } else {
          setFieldValue('', index);
          if (index < currentLength - 1) {
            event.preventDefault();
            focusInputField('prev', index);
          }
        }
        break;

      default:
        if (inputValue.length > 0 && key === currentValue[index]) {
          event.preventDefault();
          focusInputField('next', index);
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
    const pasteData = event.clipboardData.getData('text/plain').replace(/[\n\r\s]+/g, '');
    const isValid = validate(pasteData.trim());

    if (isValid) {
      const pasteArray = createPinArray(currentLength, pasteData);
      setValues(pasteArray);
      const filledCount = pasteArray.filter((val) => val !== '').length;
      if (filledCount >= currentLength) {
        inputsRef.current[currentLength - 1]?.focus();
      } else {
        inputsRef.current[filledCount]?.focus();
      }
    }
  };

  return (
    <>
      <Group
        {...others}
        {...getStyles('root')}
        ref={rootRef}
        role="group"
        id={uuid}
        gap={gap}
        unstyled={unstyled}
        wrap="nowrap"
        variant={variant}
        __size={size}
        dir="ltr"
      >
        {currentValue.map((char: string, index: number) => (
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
              if (node) {
                index === 0 && assignRef(ref, node);
                inputsRef.current[index] = node;
              }
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={focusedIndex === index ? '' : placeholder}
            value={char}
            autoFocus={autoFocus && index === 0}
            unstyled={unstyled}
            aria-label={ariaLabel}
            readOnly={readOnly}
            {...getInputProps?.(index)}
          />
        ))}
      </Group>

      <input type="hidden" name={name} form={form} value={_valueToString} {...hiddenInputProps} />
    </>
  );
});

PinInput.classes = { ...classes, ...InputBase.classes };
PinInput.varsResolver = varsResolver;
PinInput.displayName = '@mantine/core/PinInput';
