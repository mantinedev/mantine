import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Group,
  Input,
  InputSharedProps,
  InputStylesNames,
} from '@mantine/core';
import useStyles from './PinInput.styles';
import { createPinArray } from './create-pin-array/create-pin-array';
import { regex } from './regex/regex';

export type PinInputStylesNames = InputStylesNames;

export interface PinInputProps
  extends DefaultProps<PinInputStylesNames>,
    InputSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Input name attribute, used to bind inputs in one group, by default generated randomly with use-id hook */
  name?: string;

  /** Spacing between inputs */
  spacing?: MantineNumberSize;

  /** Active input color from theme.colors */
  color?: MantineColor;

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

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      name,
      className,
      value,
      defaultValue,
      variant,
      spacing = 'sm',
      color,
      size = 'sm',
      classNames,
      styles,
      sx,
      length = 4,
      onChange,
      onComplete,
      manageFocus = true,
      autoFocus = false,
      invalid,
      radius = 'md',
      disabled,
      oneTimeCode,
      placeholder = '●',
      type = 'alphanumeric',
      mask,
      ...others
    }: PinInputProps,
    ref
  ) => {
    const uuid = useId(name);
    const { classes } = useStyles({ size }, { classNames, styles, name: 'PinInput' });

    const [focusedIndex, setFocusedIndex] = useState(-1);

    const [_values, setValues] = useUncontrolled({
      value: createPinArray(length, value),
      defaultValue: createPinArray(length, defaultValue),
      finalValue: createPinArray(length, value),
      onChange: (values) => onChange && onChange(values.join('')),
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
      const values = [..._values];

      values[index] = val;

      setValues(values);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const inputValue = e.target.value;
      const nextChar =
        inputValue.length > 1 ? inputValue.split('')[inputValue.length - 1] : inputValue;

      const isValid = validate(nextChar);

      if (isValid) {
        setFieldValue(nextChar, index);
        const isComplete = _values.join('').length === length;

        if (isComplete) {
          onComplete && onComplete(_values.join(''));
        } else {
          focusInputField('next', index);
        }
      } else {
        setFieldValue('', index);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace') {
        const target = e.target as HTMLInputElement;

        if (target.value !== '') {
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

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const copyValue = e.clipboardData.getData('Text');
      const isValid = validate(copyValue);

      if (isValid) {
        setValues(createPinArray(length, copyValue));
      }

      e.preventDefault();
    };

    useEffect(() => {
      if (autoFocus) {
        inputsRef.current[0].focus();
      }
    }, []);

    return (
      <Group role="group" spacing={spacing} ref={ref} className={className} sx={sx} {...others}>
        {_values.map((char, i) => (
          <Input<'input'>
            __staticSelector="PinInput"
            id={`${uuid}-${i + 1}`}
            key={`${uuid}-${i}`}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onFocus={(e) => handleFocus(e, i)}
            onBlur={handleBlur}
            onPaste={handlePaste}
            type={mask ? 'password' : type === 'number' ? 'tel' : 'text'}
            radius={radius}
            invalid={invalid}
            color={color}
            variant={variant}
            size={size}
            disabled={disabled}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={focusedIndex === i ? '' : placeholder}
            classNames={classes}
            value={char}
            styles={styles}
          />
        ))}
      </Group>
    );
  }
);

PinInput.displayName = '@mantine/core/PinInput';
