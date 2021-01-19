import React from 'react';
import cx from 'clsx';
import { useId } from 'xooks';
import { DefaultProps } from '@mantine/types';
import classes from './Switch.styles.less';

interface SwitchProps extends DefaultProps {
  value: boolean;
  onChange(value: boolean): void;
  label: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

export default function Switch({
  className,
  value,
  onChange,
  label,
  disabled,
  id,
  ...others
}: SwitchProps) {
  const uuid = useId(id);

  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <button
        disabled={disabled}
        className={cx(classes.switch, { [classes.checked]: value })}
        type="button"
        role="checkbox"
        onClick={() => onChange(!value)}
        aria-checked={value}
        id={uuid}
      />

      <label className={classes.label} htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

Switch.displayName = '@mantine/core/Switch';
