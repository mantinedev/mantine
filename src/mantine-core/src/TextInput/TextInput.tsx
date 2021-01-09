import React from 'react';
import { useId } from 'xooks';
import { DefaultProps } from '@mantine/types';
import Input from '../Input/Input';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';

interface TextInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  value: string;
  onChange(value: string): void;
  id?: string;
}

export default function TextInput({
  className,
  id,
  label,
  error,
  required,
  type = 'text',
  value,
  style,
  onChange,
  ...others
}: TextInputProps) {
  const uuid = useId(id);

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      className={className}
      style={style}
    >
      <Input
        id={uuid}
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        invalid={!!error}
        {...others}
      />
    </InputWrapper>
  );
}
