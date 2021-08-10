import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DefaultProps, MantineSize } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { isColorValid, parseColor } from './converters';

export type ColorInputStylesNames = InputWrapperStylesNames | InputStylesNames;

export interface ColorInputProps
  extends InputWrapperBaseProps,
    InputBaseProps,
    DefaultProps<ColorInputStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Input size */
  size?: MantineSize;

  /** Value for controlled input */
  value?: string;

  /** Default value for uncontrolled input */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(color: string): void;

  /** Color format */
  format?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';
}

export function ColorInput({
  label,
  description,
  error,
  required,
  wrapperProps,
  size = 'sm',
  format = 'hex',
  onChange,
  value,
  defaultValue,
  classNames,
  styles,
  ...others
}: ColorInputProps) {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#000',
    rule: (val) => isColorValid(format, val),
    onChange,
  });

  const parsed = parseColor(_value);

  return (
    <InputWrapper
      label={label}
      description={description}
      error={error}
      required={required}
      classNames={classNames as any}
      styles={styles as any}
      size={size}
      {...wrapperProps}
    >
      <Input<'input'>
        {...others}
        spellCheck={false}
        size={size}
        value={_value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </InputWrapper>
  );
}

ColorInput.displayName = '@mantine/core/ColorInput';
