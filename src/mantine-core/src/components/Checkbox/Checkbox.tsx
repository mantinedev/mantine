import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { useId } from '@mantine/utils';
import { Box } from '../Box';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Key of theme.colors */
  color?: MantineColor;

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined label font-size and checkbox width and height in px */
  size?: MantineSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** id to connect label with input */
  id?: string;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  transitionDuration: 100,
  icon: CheckboxIcon,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    style,
    sx,
    checked,
    color,
    label,
    indeterminate,
    id,
    size,
    radius,
    wrapperProps,
    children,
    classNames,
    styles,
    transitionDuration,
    icon: Icon,
    ...others
  } = useMantineDefaultProps('Checkbox', defaultProps, props);

  const uuid = useId(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const { classes, cx } = useStyles(
    { size, radius, color, transitionDuration },
    { classNames, styles, name: 'Checkbox' }
  );

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div className={classes.inner}>
        <input
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.input}
          checked={indeterminate || checked}
          {...rest}
        />

        <Icon indeterminate={indeterminate} className={classes.icon} />
      </div>

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Checkbox.displayName = '@mantine/core/Checkbox';
