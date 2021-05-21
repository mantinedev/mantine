import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize } from '@mantine/theme';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles, { sizes } from './Checkbox.styles';

export const CHECKBOX_SIZES = sizes;

export interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: string;

  /** Predefined label font-size and checkbox width and height in px */
  size?: MantineSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Checkbox({
  className,
  checked,
  onChange,
  color,
  themeOverride,
  label,
  disabled,
  indeterminate,
  id,
  size,
  wrapperProps,
  style,
  inputStyle,
  inputClassName,
  elementRef,
  children,
  ...others
}: CheckboxProps) {
  const uuid = useId(id);
  const classes = useStyles({ size, color, theme: useMantineTheme(themeOverride) });

  return (
    <div className={cx(classes.wrapper, className)} style={style} {...wrapperProps}>
      <div className={classes.checkboxWrapper}>
        <input
          id={uuid}
          ref={elementRef}
          type="checkbox"
          className={cx(classes.checkbox, inputClassName)}
          checked={indeterminate || checked}
          onChange={onChange}
          disabled={disabled}
          style={inputStyle}
          {...others}
        />
        <CheckboxIcon indeterminate={indeterminate} className={classes.icon} />
      </div>

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </div>
  );
}

Checkbox.displayName = '@mantine/core/Checkbox';
