import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/theme';
import { Input } from '../Input/Input';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';

interface TextInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<typeof Input> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;
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
      style,
      icon,
      description,
      themeOverride,
      wrapperProps,
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
        {...wrapperProps}
      >
        <Input
          {...others}
          required={required}
          elementRef={ref}
          id={uuid}
          type={type}
          invalid={!!error}
          icon={icon}
          themeOverride={themeOverride}
        />
      </InputWrapper>
    );
  }
);

TextInput.displayName = '@mantine/core/TextInput';
