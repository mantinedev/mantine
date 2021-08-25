import React from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineSize } from '../../theme';
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
    Omit<InputBaseProps, 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'>,
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
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLSelectElement>;

  /** Input size */
  size?: MantineSize;
}

export function NativeSelect({
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
  elementRef,
  defaultValue,
  onChange,
  value,
  classNames,
  styles,
  size = 'sm',
  ...others
}: NativeSelectProps) {
  const uuid = useId(id);

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
      {...wrapperProps}
      required={required}
      id={uuid}
      label={label}
      error={error}
      className={className}
      style={style}
      themeOverride={themeOverride}
      description={description}
      size={size}
      styles={styles}
      classNames={classNames}
      __staticSelector="select"
    >
      <Input<'select', HTMLSelectElement>
        {...others}
        onChange={onChange}
        component="select"
        invalid={!!error}
        style={inputStyle}
        aria-required={required}
        elementRef={elementRef}
        id={uuid}
        required={required}
        themeOverride={themeOverride}
        value={value === null ? '' : value}
        size={size}
        classNames={classNames}
        __staticSelector="select"
        {...getSelectRightSectionProps({ themeOverride, styles, shouldClear: false, size, error })}
      >
        {options}
      </Input>
    </InputWrapper>
  );
}

NativeSelect.displayName = '@mantine/core/NativeSelect';
