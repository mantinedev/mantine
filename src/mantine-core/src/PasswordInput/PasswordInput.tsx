import React, { useState } from 'react';
import { useId } from 'xooks';
import { EyeOpenIcon, EyeClosedIcon } from '@modulz/radix-icons';
import { DefaultProps } from '@mantine/types';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import Input from '../Input/Input';
import classes from './PasswordInput.styles.less';

interface PasswordInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange(value: string): void;
  id?: string;
}

export default function PasswordInput({
  className,
  id,
  value,
  label,
  error,
  required,
  style,
  onChange,
  ...others
}: PasswordInputProps) {
  const [reveal, setReveal] = useState(false);
  const uuid = useId(id);

  return (
    <InputWrapper
      className={className}
      required={required}
      id={uuid}
      label={label}
      error={error}
      style={style}
    >
      <div className={classes.wrapper}>
        <Input
          {...others}
          className={classes.input}
          type={reveal ? 'text' : 'password'}
          value={value}
          invalid={!!error}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
        <button
          type="button"
          className={classes.control}
          onClick={() => setReveal((current) => !current)}
        >
          {reveal ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    </InputWrapper>
  );
}

PasswordInput.displayName = '@mantine/core/PasswordInput';
