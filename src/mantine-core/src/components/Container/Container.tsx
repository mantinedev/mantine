import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/tss';
import useStyles, { sizes } from './Container.styles';

export const CONTAINER_SIZES = sizes;

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: MantineNumberSize;

  /** Horizontal padding defined in theme.spacing, or number value for padding in px */
  padding?: MantineNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export function Container({ className, padding = 'md', fluid, size, ...others }: ContainerProps) {
  const { classes, cx } = useStyles({ padding, fluid, size }, null, 'container');
  return <div className={cx(classes.container, className)} {...others} />;
}

Container.displayName = '@mantine/core/Container';
