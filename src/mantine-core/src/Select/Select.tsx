import React, { forwardRef } from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/theme';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import { Input, InputProps } from '../Input/Input';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps
  extends DefaultProps,
    InputWrapperBaseProps,
    InputProps,
    React.ComponentPropsWithoutRef<'select'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Data used to render options */
  data: SelectItem[];

  /** Style properties added to select element */
  inputStyle?: React.CSSProperties;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;
}

export const Select = forwardRef(
  (
    {
      id,
      className,
      required,
      label,
      error,
      style,
      data,
      placeholder,
      themeOverride,
      wrapperProps,
      inputStyle,
      description,
      ...others
    }: SelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const uuid = useId(id);

    const options = data.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));

    if (placeholder) {
      options.unshift(
        <option key="placeholder" value="" selected disabled hidden>
          {placeholder}
        </option>
      );
    }

    return (
      <InputWrapper
        {...wrapperProps}
        required={required}
        id={uuid}
        label={label}
        error={error}
        className={className}
        style={style}
        themeOverride={themeOverride}
        description={description}
      >
        <Input
          {...others}
          component="select"
          invalid={!!error}
          style={inputStyle}
          aria-required={required}
          elementRef={ref}
          id={uuid}
          inputStyle={inputStyle}
          rightSection={<ChevronDownIcon />}
          rightSectionProps={{ style: { pointerEvents: 'none' } }}
          required={required}
        >
          {options}
        </Input>
      </InputWrapper>
    );
  }
);

Select.displayName = '@mantine/core/Select';
