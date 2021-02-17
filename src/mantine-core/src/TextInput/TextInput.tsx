import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { Input } from '../Input/Input';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';

interface TextInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  icon?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';
  value: string;
  onChange(value: string, event: React.ChangeEvent<HTMLInputElement>): void;
  id?: string;
  radius?: MantineNumberSize;
}

export const TextInput = forwardRef(
  (
    {
      className,
      id,
      label,
      error,
      required,
      type = 'text',
      value,
      style,
      onChange,
      icon,
      radius = 'sm',
      themeOverride,
      ...others
    }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const uuid = useId(id);

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        className={className}
        style={style}
        themeOverride={themeOverride}
      >
        <Input
          {...others}
          ref={ref}
          id={uuid}
          type={type}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value, event)}
          invalid={!!error}
          icon={icon}
          themeOverride={themeOverride}
          radius={radius}
        />
      </InputWrapper>
    );
  }
);

TextInput.displayName = '@mantine/core/TextInput';
