import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
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
  value?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;

  /** Data used to render options */
  data: SelectItem[];
  disabled?: boolean;
  radius?: MantineNumberSize;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;
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
      disabled,
      radius = 'sm',
      icon,
      themeOverride,
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
        required={required}
        id={uuid}
        label={label}
        error={error}
        className={className}
        style={style}
        themeOverride={themeOverride}
      >
        <div className={classes.wrapper}>
          {icon && <div className={classes.icon}>{icon}</div>}

          <select
            {...others}
            aria-required={required}
            ref={ref}
            className={cx(classes.select, {
              [classes.withIcon]: icon,
              [classes.invalid]: error,
              [classes.placeholder]: !value && !!onChange,
            })}
            id={uuid}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
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
