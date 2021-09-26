import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  mergeStyles,
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
  useUuid,
} from '@mantine/styles';
import { CheckboxIcon } from '../../Checkbox';
import useStyles from './Chip.styles';

export type ChipStylesNames = Exclude<ClassNames<typeof useStyles>, 'filled' | 'outline'>;

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

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Static selector base */
  __staticSelector?: string;

  /** Input value */
  value: string;
}

export function Chip({
  radius = 'xl',
  type = 'checkbox',
  size = 'sm',
  variant,
  disabled = false,
  __staticSelector = 'chip',
  elementRef,
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
  ...others
}: ChipProps) {
  const uuid = useUuid(id);
  const theme = useMantineTheme();
  const { classes, cx } = useStyles({ radius, size, color }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const [value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: true,
    onChange,
    rule: (val) => typeof val === 'boolean',
  });

  const defaultVariant = theme.colorScheme === 'dark' ? 'filled' : 'outline';

  return (
    <>
      <input
        type={type}
        className={classes.input}
        style={_styles.input}
        checked={value}
        onChange={(event) => setValue(event.currentTarget.checked)}
        id={uuid}
        disabled={disabled}
        ref={elementRef}
        {...others}
      />
      <label
        className={cx(
          classes.label,
          { [classes.checked]: value, [classes.disabled]: disabled },
          classes[variant || defaultVariant],
          className
        )}
        style={{
          ...style,
          ..._styles.label,
          ...(value ? _styles.checked : null),
          ...(disabled ? _styles.disabled : null),
        }}
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

Chip.displayName = '@mantine/core/Chip';
