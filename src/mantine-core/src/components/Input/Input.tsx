import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize, mergeStyles } from '../../theme';
import { ComponentPassThrough } from '../../types';
import useStyles from './Input.styles';

export const INPUT_VARIANTS = ['default', 'filled', 'unstyled'] as const;
export type InputVariant = typeof INPUT_VARIANTS[number];
export type InputStylesNames = Exclude<keyof ReturnType<typeof useStyles>, InputVariant>;

export interface InputBaseProps {
  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number;

  /** Props spread to rightSection div element */
  rightSectionProps?: Record<string, any>;

  /** Properties spread to root element */
  wrapperProps?: Record<string, any>;

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Defines input appearance */
  variant?: 'default' | 'filled' | 'unstyled';
}

export interface InputProps extends InputBaseProps, DefaultProps<typeof useStyles> {}

export function Input<
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  component: Element = 'input',
  className,
  invalid = false,
  required = false,
  variant = 'default',
  icon,
  style,
  rightSectionWidth = 36,
  rightSection,
  rightSectionProps = {},
  radius = 'sm',
  themeOverride,
  wrapperProps,
  elementRef,
  classNames,
  styles,
  ...others
}: ComponentPassThrough<T, InputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ radius, theme }, classNames, 'input');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.root, { [classes.invalid]: invalid }, classes[variant], className)}
      style={{
        ...style,
        ..._styles.root,
        ...(invalid ? _styles.invalid : null),
        ..._styles[variant],
      }}
      {...wrapperProps}
    >
      {icon && (
        <div data-mantine-icon className={classes.icon} style={_styles.icon}>
          {icon}
        </div>
      )}

      <Element
        {...others}
        data-mantine-input
        ref={elementRef}
        aria-required={required}
        aria-invalid={invalid}
        className={cx({ [classes.withIcon]: icon }, classes.input)}
        style={{
          paddingRight: rightSection ? rightSectionWidth : theme.spacing.md,
          ..._styles.input,
          ...(icon ? _styles.withIcon : null),
        }}
      />

      {rightSection && (
        <div
          {...rightSectionProps}
          data-mantine-input-section
          style={{ ..._styles.rightSection, width: rightSectionWidth }}
          className={classes.rightSection}
        >
          {rightSection}
        </div>
      )}
    </div>
  );
}

Input.displayName = '@mantine/core/Input';
