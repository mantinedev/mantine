import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import useStyles from './Select.styles';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLSelectElement>, 'data' | 'onChange' | 'ref'> {
  id?: string;
  value: string;
  placeholder?: string;
  onChange(value: string): void;
  data: SelectItem[];
  disabled?: boolean;
}

const Select = forwardRef(
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
      themeOverride,
      ...others
    }: SelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const uuid = useId(id);

    const options = data.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));

    if (placeholder) {
      options.unshift(
        <option key="placeholder" value="" disabled>
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
          <select
            {...others}
            ref={ref}
            className={cx(classes.select, {
              [classes.invalid]: error,
              [classes.placeholder]: !value,
            })}
            id={uuid}
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
            placeholder={placeholder}
            disabled={disabled}
          >
            {options}
          </select>

          <ChevronDownIcon className={classes.icon} />
        </div>
      </InputWrapper>
    );
  }
);

Select.displayName = '@mantine/core/Select';

export default Select;
