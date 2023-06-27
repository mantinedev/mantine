import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  useComponentDefaultProps,
  Selectors,
} from '@mantine/styles';
import { Group } from '../Group';
import { Input, InputSharedProps, InputStylesNames } from '../Input';
import { createPinArray } from './create-pin-array/create-pin-array';
import useStyles from './PinInput.styles';

const regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i,
};

export type PinInputStylesNames = Selectors<typeof useStyles> | InputStylesNames;

export interface PinInputProps
  extends DefaultProps<PinInputStylesNames>,
    InputSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Hidden input name attribute */
  name?: string;

  /** Hidden input form attribute */
  form?: string;

  /** Key of theme.spacing or any valid CSS value to set spacing between inputs */
  spacing?: MantineNumberSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Input width and height */
  size?: MantineSize;

  /** If set, first input is focused when component is mounted */
  autoFocus?: boolean;

  /** Value for controlled component */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Called when user enters value to all inputs */
  onComplete?(value: string): void;

  /** Placeholder for every input field */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled */
  manageFocus?: boolean;

  /** Determines whether autocomplete="one-time-code" attribute should be set on all inputs */
  oneTimeCode?: boolean;

  /** The top-level id that is used as a base in all input fields */
  id?: string;

  /** Sets inputs disabled attribute */
  disabled?: boolean;

  /** Adds error styles to all inputs */
  error?: boolean;

  /** The type of allowed values */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to "password" */
  mask?: boolean;

  /** Number of input boxes */
  length?: number;

  /** Determines whether the user can edit input content */
  readOnly?: boolean;

  /** Inputs type attribute, inferred from type prop if not specified */
  inputType?: React.HTMLInputTypeAttribute;

  /** inputmode attr, inferred from type prop if not specified */
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
}

const defaultProps: Partial<PinInputProps> = {
  spacing: 'sm',
  size: 'sm',
  length: 4,
  manageFocus: true,
  placeholder: '○',
  type: 'alphanumeric',
};

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>((props, ref) => {
  const {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    spacing,
    size,
    classNames,
    styles,
    unstyled,
    sx,
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
    'aria-label': ariaLabel,
    readOnly,
    inputType,
    inputMode,
    ...others
  } = useComponentDefaultProps('PinInput', defaultProps, props);

  const uuid = useId(name);
  const { classes, cx } = useStyles(null, {
    name: 'PinInput',
    classNames,
    styles,
    unstyled,
    variant,
    size,
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
    const re = type instanceof RegExp ? type : type in regex ? regex[type] : null;
    return re?.test(code);
  };

  const focusInputField = (dir: 'next' | 'prev', index: number) => {
    if (!manageFocus) return;

    if (dir === 'next') {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < length ? nextIndex : index].focus();
    }

    if (dir === 'prev') {
      const nextIndex = index - 1;

      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };

  const setFieldValue = (val: string, index: number) => {
    const values = [...createPinArray(length, _value)];
    values[index] = val;
    setValues(values.join(''));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;
    const nextChar =
      inputValue.length > 1 ? inputValue.split('')[inputValue.length - 1] : inputValue;

    const isValid = validate(nextChar);

    if (isValid) {
      setFieldValue(nextChar, index);
      focusInputField('next', index);
    } else {
      setFieldValue('', index);
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
        role="group"
        spacing={spacing}
        ref={ref}
        className={cx(classes.root, className)}
        sx={sx}
        unstyled={unstyled}
        id={uuid}
        noWrap
        {...others}
      >
        {createPinArray(length, _value).map((char, index) => (
          <Input<'input'>
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
            size={size}
            disabled={disabled}
            ref={(node) => {
              inputsRef.current[index] = node;
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={focusedIndex === index ? '' : placeholder}
            value={char}
            autoFocus={autoFocus && index === 0}
            classNames={{
              ...classNames,
              input: cx(classes.input, classNames?.input),
            }}
            styles={styles}
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

PinInput.displayName = '@mantine/core/PinInput';
