import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/theme';
import Input from '../Input/Input';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';

interface TextInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'ref'> {
  icon?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  value: string;
  onChange(value: string): void;
  id?: string;
}

const TextInput = forwardRef(
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
          onChange={(event) => onChange(event.currentTarget.value)}
          invalid={!!error}
          icon={icon}
          themeOverride={themeOverride}
        />
      </InputWrapper>
    );
  }
);

TextInput.displayName = '@mantine/core/TextInput';

export default TextInput;
