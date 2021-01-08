import React from 'react';
import cx from 'clsx';
import { useId } from 'xooks';
import { DefaultProps } from '@mantine/types';
import Input from '../Input/Input';
import classes from './TextInput.styles.less';

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
    <div className={cx(classes.textInput, className)} style={style}>
      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
      <Input
        id={uuid}
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        {...others}
      />
    </div>
  );
}
