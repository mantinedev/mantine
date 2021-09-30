import React from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getSizeValue,
  getSharedColorScheme,
  MantineColor,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles, { sizes, ActionIconVariant } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

interface _ActionIconProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

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

export type ActionIconProps<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
> = _ActionIconProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _ActionIconProps<C, R>>;

export function ActionIcon<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>({
  className,
  color = 'gray',
  children,
  radius = 'sm',
  size = 'md',
  variant = 'hover',
  disabled = false,
  loaderProps,
  loading = false,
  elementRef,
  component,
  style,
  ...others
}: ActionIconProps<C, R>) {
  const theme = useMantineTheme();
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const { classes, cx } = useStyles({ size, radius, color, variant }, null, 'action-icon');
  const Element = component || 'button';
  const colors = getSharedColorScheme({ color, theme, variant: 'light' });

  const loader = (
    <Loader color={colors.color} size={getSizeValue({ size, sizes }) - 12} {...loaderProps} />
  );

  return (
    <Element
      {...rest}
      style={mergedStyles}
      className={cx(classes.root, { [classes.loading]: loading }, className)}
      type="button"
      ref={elementRef as any}
      disabled={disabled || loading}
    >
      {loading ? loader : children}
    </Element>
  );
}

ActionIcon.displayName = '@mantine/core/ActionIcon';
