import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  ClassNames,
  useUuid,
  useExtractedMargins,
} from '@mantine/styles';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Checkbox.styles';

export type CheckboxStylesNames = ClassNames<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Predefined label font-size and checkbox width and height in px */
  size?: MantineSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Check/uncheck transition duration, set to 0 to disable all transitions */
  transitionDuration?: number;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      style,
      checked,
      onChange,
      color,
      label,
      disabled,
      indeterminate,
      id,
      size = 'sm',
      wrapperProps,
      children,
      classNames,
      styles,
      transitionDuration = 100,
      sx,
      ...others
    }: CheckboxProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const { classes, cx } = useStyles(
      { size, color, transitionDuration },
      { classNames, styles, sx, name: 'Checkbox' }
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} {...wrapperProps}>
        <div className={classes.inner}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.input}
            checked={indeterminate || checked}
            onChange={onChange}
            disabled={disabled}
            {...rest}
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
);

Checkbox.displayName = '@mantine/core/Checkbox';
