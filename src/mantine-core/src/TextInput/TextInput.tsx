import React from 'react';
import { useId } from 'xooks';
import { DefaultProps } from '@mantine/types';
import Input from '../Input/Input';
import InputWrapper from '../InputWrapper/InputWrapper';

interface TextInputProps extends DefaultProps, Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  label?: string;
  value: string;
  onChange(value: string): void;
  id?: string;
}

export default function TextInput({
  className,
  id,
  label,
  type = 'text',
  value,
  style,
  onChange,
  ...others
}: TextInputProps) {
  const uuid = useId(id);

  return (
    <InputWrapper id={uuid} label={label} className={className} style={style}>
      <Input
        id={uuid}
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        {...others}
      />
    </InputWrapper>
  );
}
