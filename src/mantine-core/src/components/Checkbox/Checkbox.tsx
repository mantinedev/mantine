import React from 'react';
import { useId, useReducedMotion } from '@mantine/hooks';
import { mergeStyles, DefaultProps, MantineSize, MantineColor } from '@mantine/tss';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles, { sizes } from './Checkbox.styles';

export const CHECKBOX_SIZES = sizes;

export type CheckboxStylesNames = keyof ReturnType<typeof useStyles>['classes'];

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

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Check/uncheck transition duration, set to 0 to disable all transitions */
  transitionDuration?: number;
}

export function Checkbox({
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
  elementRef,
  children,
  classNames,
  styles,
  transitionDuration = 100,
  ...others
}: CheckboxProps) {
  const uuid = useId(id);
  const reduceMotion = useReducedMotion();
  const { classes, cx } = useStyles(
    { size, color, transitionDuration: reduceMotion ? 0 : transitionDuration },
    classNames,
    'checkbox'
  );
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      {...wrapperProps}
    >
      <div className={classes.inner} style={_styles.inner}>
        <input
          id={uuid}
          ref={elementRef}
          type="checkbox"
          className={classes.input}
          style={_styles.input}
          checked={indeterminate || checked}
          onChange={onChange}
          disabled={disabled}
          {...others}
        />
        <CheckboxIcon indeterminate={indeterminate} className={classes.icon} style={_styles.icon} />
      </div>

      {label && (
        <label className={classes.label} htmlFor={uuid} style={_styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}

Checkbox.displayName = '@mantine/core/Checkbox';
