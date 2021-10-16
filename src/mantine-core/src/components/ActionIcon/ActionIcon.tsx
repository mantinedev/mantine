import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getSizeValue,
  getSharedColorScheme,
  MantineColor,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
  ClassNames,
} from '@mantine/styles';
import useStyles, { sizes, ActionIconVariant } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

export type ActionIconStylesNames = ClassNames<typeof useStyles>;

interface _ActionIconProps extends DefaultProps<ActionIconStylesNames> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: ActionIconVariant;

  /** Button hover, active and icon colors from theme */
  color?: MantineColor;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Indicate loading state */
  loading?: boolean;
}

export type ActionIconProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _ActionIconProps
>;

type ActionIconComponent = <C extends React.ElementType = 'button'>(
  props: ActionIconProps<C>
) => React.ReactElement;

export const ActionIcon: ActionIconComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      color = 'gray',
      children,
      radius = 'sm',
      size = 'md',
      variant = 'hover',
      disabled = false,
      loaderProps,
      loading = false,
      component,
      style,
      styles,
      classNames,
      ...others
    }: ActionIconProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { classes, cx } = useStyles(
      { size, radius, color },
      { name: 'ActionIcon', classNames, styles }
    );

    const Element = component || 'button';
    const colors = getSharedColorScheme({ color, theme, variant: 'light' });

    const loader = (
      <Loader color={colors.color} size={getSizeValue({ size, sizes }) - 12} {...loaderProps} />
    );

    return (
      <Element
        {...rest}
        style={mergedStyles}
        className={cx(classes.root, classes[variant], { [classes.loading]: loading }, className)}
        type="button"
        ref={ref}
        disabled={disabled || loading}
      >
        {loading ? loader : children}
      </Element>
    );
  }
);

ActionIcon.displayName = '@mantine/core/ActionIcon';
