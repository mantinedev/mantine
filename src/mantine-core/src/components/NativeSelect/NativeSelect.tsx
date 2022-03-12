import React, { forwardRef } from 'react';
import { useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  extractSystemStyles,
  useMantineTheme,
  useMantineDefaultProps,
} from '@mantine/styles';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props';
import { SelectItem } from '../Select/types';

export type NativeSelectStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface NativeSelectProps
  extends DefaultProps<NativeSelectStylesNames>,
    InputWrapperBaseProps,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Data used to render options */
  data: (string | SelectItem)[];

  /** Style properties added to select element */
  inputStyle?: React.CSSProperties;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: MantineSize;
}

const defaultProps: Partial<NativeSelectProps> = {
  size: 'sm',
};

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props: NativeSelectProps, ref) => {
    const {
      id,
      className,
      required,
      label,
      error,
      style,
      data,
      placeholder,
      wrapperProps,
      inputStyle,
      description,
      onChange,
      value,
      classNames,
      styles,
      size,
      rightSection,
      rightSectionWidth,
      sx,
      ...others
    } = useMantineDefaultProps('NativeSelect', defaultProps, props);
    const uuid = useUuid(id);
    const theme = useMantineTheme();
    const { systemStyles, rest } = extractSystemStyles(others);

    const formattedData = data.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );

    const options = formattedData.map((item) => (
      <option key={item.value} value={item.value} disabled={item.disabled}>
        {item.label}
      </option>
    ));

    if (placeholder) {
      options.unshift(
        <option key="placeholder" value="" disabled hidden>
          {placeholder}
        </option>
      );
    }

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        className={className}
        style={style}
        description={description}
        size={size}
        styles={styles}
        classNames={classNames}
        sx={sx}
        __staticSelector="NativeSelect"
        {...systemStyles}
        {...wrapperProps}
      >
        <Input<'select'>
          {...rest}
          onChange={onChange}
          component="select"
          invalid={!!error}
          style={inputStyle}
          aria-required={required}
          ref={ref}
          id={uuid}
          required={required}
          value={value === null ? '' : value}
          size={size}
          classNames={classNames}
          __staticSelector="NativeSelect"
          {...getSelectRightSectionProps({
            theme,
            rightSection,
            rightSectionWidth,
            styles,
            shouldClear: false,
            size,
            error,
          })}
        >
          {options}
        </Input>
      </InputWrapper>
    );
  }
);

NativeSelect.displayName = '@mantine/core/NativeSelect';
