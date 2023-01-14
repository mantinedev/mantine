import React, { forwardRef, useRef, useState } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Group } from '../Group';
import { Input, InputSharedProps, InputStylesNames } from '../Input';
import { createPinArray } from './create-pin-array/create-pin-array';
import useStyles from './PinInput.styles';

const regex = {
  numeric: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i,
};

export type PinInputStylesNames = InputStylesNames;

export interface PinInputProps
  extends DefaultProps<PinInputStylesNames>,
    InputSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Hidden input name attribute */
  name?: string;

  /** Hidden input form attribute */
  form?: string;

  /** Spacing between inputs */
  spacing?: MantineNumberSize;

  /** Input border radius */
  radius?: MantineSize;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** If `true`, the pin input receives focus on mount */
  autoFocus?: boolean;

  /** The value of the the pin input */
  value?: string;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Function called on input change */
  onChange?: (value: string) => void;

  /** Function called when all inputs have valid values */
  onComplete?: (value: string) => void;

  /** The placeholder for the pin input */
  placeholder?: string;

  /** If `true`, focus will move automatically to the next input once filled */
  manageFocus?: boolean;

  /** If `true`, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`. */
  oneTimeCode?: boolean;

  /** The top-level id string that will be applied to the input fields */
  id?: string;

  /** input disabled state */
  disabled?: boolean;

  /** input invalid state */
  invalid?: boolean;

  /** The type of values the pin-input should allow */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** If `true`, the input's value will be masked just like `type=password` */
  mask?: boolean;

  /** amount of input boxes */
  length?: number;
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
    invalid,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    'aria-label': ariaLabel,
    ...others
  } = useComponentDefaultProps('PinInput', defaultProps, props);

  const uuid = useId(name);
  const { classes } = useStyles({ size }, { classNames, styles, name: 'PinInput' });

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const [_value, setValues] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const validate = (code: string) => {
    let matcher: RegExp;

    switch (type) {
      case 'alphanumeric':
        matcher = regex.alphanumeric;
        break;

      case 'number':
        matcher = regex.numeric;
        break;

      default:
        if (type instanceof RegExp) {
          matcher = type;
        } else {
          throw new Error('[@mantine/core] PinInput: Invalid regex format');
        }
    }

    return matcher.test(code);
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
      const isComplete = _value.length === length;

      if (isComplete) {
        onComplete?.(_value);
      } else {
        focusInputField('next', index);
      }
    } else {
      setFieldValue('', index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      if ((event.target as HTMLInputElement).value !== '') {
        setFieldValue('', index);
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

  return (
    <>
      <Group
        role="group"
        spacing={spacing}
        ref={ref}
        className={className}
        sx={sx}
        unstyled={unstyled}
        id={uuid}
        {...others}
      >
        {createPinArray(length, _value).map((char, index) => (
          <Input<'input'>
            __staticSelector="PinInput"
            id={`${uuid}-${index + 1}`}
            key={`${uuid}-${index}`}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onFocus={(event) => handleFocus(event, index)}
            onBlur={handleBlur}
            onPaste={handlePaste}
            type={mask ? 'password' : type === 'number' ? 'tel' : 'text'}
            radius={radius}
            error={invalid}
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
            classNames={classes}
            styles={styles}
            unstyled={unstyled}
            aria-label={ariaLabel}
          />
        ))}
      </Group>
      <input type="hidden" name={name} form={form} value={_value} />
    </>
  );
});

PinInput.displayName = '@mantine/core/PinInput';
