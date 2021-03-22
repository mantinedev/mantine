import React, { forwardRef } from 'react';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import useStyles from './Select.styles';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'onChange'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Select element value for controlled variant */
  value?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Select element onChange event */
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;

  /** Data used to render options */
  data: SelectItem[];

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Class name added to select element */
  inputClassName?: string;

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
      value,
      onChange,
      placeholder,
      radius = 'sm',
      icon,
      themeOverride,
      wrapperProps,
      inputStyle,
      inputClassName,
      description,
      ...others
    }: SelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });
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
        <div className={classes.wrapper}>
          {icon && (
            <div data-mantine-icon className={classes.icon}>
              {icon}
            </div>
          )}

          <select
            {...others}
            style={inputStyle}
            aria-required={required}
            ref={ref}
            className={cx(
              classes.select,
              {
                [classes.withIcon]: icon,
                [classes.invalid]: error,
                [classes.placeholder]: !value && !!onChange,
              },
              inputClassName
            )}
            id={uuid}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          >
            {options}
          </select>

          <ChevronDownIcon className={classes.chevron} />
        </div>
      </InputWrapper>
    );
  }
);

Select.displayName = '@mantine/core/Select';
