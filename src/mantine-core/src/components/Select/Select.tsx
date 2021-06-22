import React from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, getSizeValue } from '../../theme';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { ChevronIcon } from './ChevronIcon';

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export type SelectStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface SelectProps
  extends DefaultProps<SelectStylesNames>,
    InputWrapperBaseProps,
    Omit<InputBaseProps, 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'>,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
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

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLSelectElement>;

  /** Input size */
  size?: MantineSize;
}

const iconSizes = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
};

const rightSectionWidth = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 44,
  xl: 54,
};

export function Select({
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
}: SelectProps) {
  const theme = useMantineTheme(themeOverride);
  const uuid = useId(id);

  const options = data.map((item) => (
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

  const chevron = (
    <ChevronIcon
      style={{ color: error ? theme.colors.red[6] : theme.colors.gray[6] }}
      size={getSizeValue({ size, sizes: iconSizes })}
    />
  );

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
      styles={styles as any}
      classNames={classNames as any}
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
        rightSection={chevron}
        required={required}
        themeOverride={themeOverride}
        value={value === null ? '' : value}
        rightSectionWidth={getSizeValue({ size, sizes: rightSectionWidth })}
        size={size}
        styles={{
          ...styles,
          rightSection: { ...(styles as any)?.rightSection, pointerEvents: 'none' },
        }}
        classNames={classNames as any}
      >
        {options}
      </Input>
    </InputWrapper>
  );
}

Select.displayName = '@mantine/core/Select';
