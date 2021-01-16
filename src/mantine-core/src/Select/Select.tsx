import React from 'react';
import { useId } from 'xooks';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { DefaultProps } from '@mantine/types';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import classes from './Select.styles.less';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps extends DefaultProps, InputWrapperBaseProps {
  id?: string;
  value: string;
  placeholder?: string;
  onChange(value: string): void;
  data: SelectItem[];
}

export default function Select({
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
  ...others
}: SelectProps) {
  const uuid = useId(id);

  const options = data.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      className={className}
      style={style}
    >
      <div className={classes.wrapper}>
        <select
          className={cx(classes.select, { [classes.invalid]: error })}
          id={uuid}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          placeholder={placeholder}
          {...others}
        >
          {options}
        </select>
        <ChevronDownIcon className={classes.icon} />
      </div>
    </InputWrapper>
  );
}

Select.displayName = '@mantine/core/Select';
