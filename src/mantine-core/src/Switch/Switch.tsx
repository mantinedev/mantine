import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/types';
import classes from './Switch.styles.less';

interface SwitchProps
  extends DefaultProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'value' | 'onChange'> {
  value: boolean;
  onChange(value: boolean): void;
  label: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

const Switch = forwardRef(
  (
    { className, value, onChange, label, disabled, id, ...others }: SwitchProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const uuid = useId(id);

    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        <button
          ref={ref}
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
);

Switch.displayName = '@mantine/core/Switch';

export default Switch;
