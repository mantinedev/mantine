import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Container.styles';

export const CONTAINER_SIZES = sizes;

interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: MantineNumberSize;

  /** Horizontal padding defined in theme.spacing, or number value for padding in px */
  padding?: MantineNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export function Container({
  className,
  padding = 'md',
  fluid,
  size,
  themeOverride,
  ...others
}: ContainerProps) {
  const classes = useStyles({ padding, fluid, size, theme: useMantineTheme(themeOverride) });
  return <div className={cx(classes.container, className)} {...others} />;
}

Container.displayName = '@mantine/core/Container';
