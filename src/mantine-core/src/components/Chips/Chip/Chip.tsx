import React, { forwardRef } from 'react';
import { useUncontrolled, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
  useExtractedMargins,
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

  /** Static selector base */
  __staticSelector?: string;

  /** Input value */
  value: string;
}

export const Chip = forwardRef<HTMLInputElement, ChipProps>(
  (
    {
      radius = 'xl',
      type = 'checkbox',
      size = 'sm',
      variant,
      disabled = false,
      __staticSelector = 'Chip',
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
    }: ChipProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const { classes, cx, theme } = useStyles(
      { radius, size, color },
      { classNames, styles, name: __staticSelector }
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [value, setValue] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: true,
      onChange,
      rule: (val) => typeof val === 'boolean',
    });

    const defaultVariant = theme.colorScheme === 'dark' ? 'filled' : 'outline';

    return (
      <div className={cx(classes.root, className)} style={mergedStyles}>
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
          className={cx(
            classes.label,
            { [classes.checked]: value, [classes.disabled]: disabled },
            classes[variant || defaultVariant]
          )}
          htmlFor={uuid}
        >
          {value && (
            <span className={classes.iconWrapper}>
              <CheckboxIcon indeterminate={false} className={classes.checkIcon} />
            </span>
          )}
          {children}
        </label>
      </div>
    );
  }
);

Chip.displayName = '@mantine/core/Chip';
