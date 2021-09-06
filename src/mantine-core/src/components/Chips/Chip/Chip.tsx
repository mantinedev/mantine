import React from 'react';
import cx from 'clsx';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  DefaultProps,
  useMantineTheme,
  MantineNumberSize,
  MantineSize,
  mergeStyles,
} from '../../../theme';
import { CheckboxIcon } from '../../Checkbox/CheckboxIcon';
import useStyles from './Chip.styles';

export type ChipStylesNames = keyof ReturnType<typeof useStyles>;

export interface ChipProps
  extends DefaultProps<ChipStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Chip radius from theme or number to set value in px */
  radius?: MantineNumberSize;

  /** Predefined chip size */
  size?: MantineSize;

  /** Chip input type */
  type?: 'radio' | 'checkbox';

  /** Controls chip appearance */
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
  color?: string;

  /** Static id to bind input with label */
  id?: string;
}

export function Chip({
  radius = 'xl',
  type = 'checkbox',
  size = 'sm',
  variant = 'outline',
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
  themeOverride,
  ...others
}: ChipProps) {
  const uuid = useId(id);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, radius, size, color }, classNames, 'chip');
  const _styles = mergeStyles(classes, styles);
  const [value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: true,
    onChange,
    rule: (val) => typeof val === 'boolean',
  });

  return (
    <>
      <input
        type={type}
        className={classes.input}
        style={_styles.input}
        checked={value}
        onChange={(event) => setValue(event.currentTarget.checked)}
        id={uuid}
        {...others}
      />
      <label
        className={cx(classes.label, { [classes.checked]: value }, classes[variant], className)}
        style={{ ...style, ..._styles.label, ...(value ? _styles.checked : null) }}
        htmlFor={uuid}
      >
        {value && (
          <span className={classes.iconWrapper} style={_styles.iconWrapper}>
            <CheckboxIcon
              indeterminate={false}
              className={classes.checkIcon}
              style={{ ..._styles.checkIcon }}
            />
          </span>
        )}
        {children}
      </label>
    </>
  );
}
