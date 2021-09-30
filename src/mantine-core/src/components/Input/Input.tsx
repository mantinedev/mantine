import React from 'react';
import {
  useMantineTheme,
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles from './Input.styles';

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';
export type InputStylesNames = Exclude<ClassNames<typeof useStyles>, InputVariant>;

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
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Properties spread to root element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: InputVariant;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Disabled input state */
  disabled?: boolean;
}

export interface InputProps extends InputBaseProps, DefaultProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export function Input<
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  // @ts-ignore
  component = 'input',
  className,
  invalid = false,
  required = false,
  disabled = false,
  variant,
  icon,
  style,
  rightSectionWidth = 36,
  rightSection,
  rightSectionProps = {},
  radius = 'sm',
  size = 'sm',
  wrapperProps,
  elementRef,
  classNames,
  styles,
  __staticSelector = 'input',
  multiline = false,
  ...others
}: InputProps &
  Omit<React.ComponentPropsWithoutRef<T>, 'size'> & {
    /** Element or component that will be used as root element */
    component?: T;

    /** Input size */
    size?: MantineSize;

    /** Get element ref */
    elementRef?: React.ForwardedRef<U>;
  }) {
  const theme = useMantineTheme();
  const _variant = variant || (theme.colorScheme === 'dark' ? 'filled' : 'default');
  const { classes, cx } = useStyles(
    { radius, size, multiline, variant: _variant, invalid, disabled },
    classNames,
    __staticSelector
  );
  const _styles = mergeStyles(classes, styles);
  const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });
  const Element: any = component;

  return (
    <div
      className={cx(classes.root, classes[_variant], className)}
      style={{ ...mergedStyles, ..._styles[variant] }}
      {...wrapperProps}
    >
      {icon && (
        <div className={classes.icon} style={_styles.icon}>
          {icon}
        </div>
      )}

      <Element
        {...rest}
        ref={elementRef}
        aria-required={required}
        aria-invalid={invalid}
        className={cx({ [classes.withIcon]: icon }, classes.input)}
        disabled={disabled}
        style={{
          paddingRight: rightSection ? rightSectionWidth : theme.spacing.md,
          ..._styles.input,
          ...(icon ? _styles.withIcon : null),
        }}
      />

      {rightSection && (
        <div
          {...rightSectionProps}
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
