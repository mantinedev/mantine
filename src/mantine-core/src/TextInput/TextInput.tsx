import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { Input } from '../Input/Input';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';

interface TextInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
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
      description,
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
        description={description}
        className={className}
        style={style}
        themeOverride={themeOverride}
      >
        <Input
          {...others}
          required={required}
          ref={ref}
          id={uuid}
          type={type}
          value={value}
          onChange={onChange}
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
