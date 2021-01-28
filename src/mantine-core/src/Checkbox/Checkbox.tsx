import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/types';
import { CheckIcon } from '@modulz/radix-icons';
import classes from './Checkbox.styles.less';

interface CheckboxProps extends DefaultProps {
  value: boolean;
  onChange(value: boolean): void;
  label: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

export default function Checkbox({
  className,
  value,
  onChange,
  label,
  disabled,
  id,
  ...others
}: CheckboxProps) {
  const uuid = useId(id);

  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <button
        disabled={disabled}
        className={cx(classes.checkbox, { [classes.checked]: value })}
        type="button"
        role="checkbox"
        onClick={() => onChange(!value)}
        aria-checked={value}
        id={uuid}
      >
        {value && <CheckIcon />}
      </button>

      <label className={classes.label} htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

Checkbox.displayName = '@mantine/core/Checkbox';
