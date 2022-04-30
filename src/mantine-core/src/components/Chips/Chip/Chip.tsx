import React, { forwardRef } from 'react';
import { useUncontrolled, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import { CheckboxIcon } from '../../Checkbox';
import useStyles from './Chip.styles';

export type ChipStylesNames = Selectors<typeof useStyles>;

export interface ChipProps
  extends DefaultProps<ChipStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Chip radius from theme or number to set value in px */
  radius?: MantineNumberSize;

  /** Predefined chip size */
  size?: MantineSize;

  /** Chip input type */
  type?: 'radio' | 'checkbox';

  /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
  variant?: 'outline' | 'filled';

  /** Chip label */
  children: React.ReactNode;

  /** Checked state for controlled component */
  checked?: boolean;

  /** Default value for uncontrolled component */
  defaultChecked?: boolean;

  /** Calls when checked state changes */
  onChange?(checked: boolean): void;

  /** Active color from theme, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Static id to bind input with label */
  id?: string;

  /** Static selector base */
  __staticSelector?: string;

  /** Props spread to wrapper element */
  wrapperProps?: { [key: string]: any };
}

const defaultProps: Partial<ChipProps> = {
  type: 'checkbox',
  size: 'sm',
  radius: 'xl',
  __staticSelector: 'Chip',
};

export const Chip = forwardRef<HTMLInputElement, ChipProps>((props: ChipProps, ref) => {
  const {
    radius,
    type,
    size,
    variant,
    disabled,
    __staticSelector,
    id,
    color,
    children,
    className,
    classNames,
    style,
    styles,
    checked,
    defaultChecked,
    onChange,
    sx,
    wrapperProps,
    ...others
  } = useMantineDefaultProps('Chip', defaultProps, props);

  const uuid = useUuid(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const { classes, cx, theme } = useStyles(
    { radius, size, color },
    { classNames, styles, name: __staticSelector }
  );

  const [value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
    rule: (val) => typeof val === 'boolean',
  });

  const defaultVariant = theme.colorScheme === 'dark' ? 'filled' : 'outline';

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <input
        type={type}
        className={classes.input}
        checked={value}
        onChange={(event) => setValue(event.currentTarget.checked)}
        id={uuid}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
      <label
        htmlFor={uuid}
        className={cx(
          classes.label,
          { [classes.checked]: value, [classes.disabled]: disabled },
          classes[variant || defaultVariant]
        )}
      >
        {value && (
          <span className={classes.iconWrapper}>
            <CheckboxIcon indeterminate={false} className={classes.checkIcon} />
          </span>
        )}
        {children}
      </label>
    </Box>
  );
});

Chip.displayName = '@mantine/core/Chip';
