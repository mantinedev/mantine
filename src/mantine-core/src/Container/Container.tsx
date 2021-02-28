import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Container.styles';

interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size?: MantineNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export function Container({ className, fluid, size, themeOverride, ...others }: ContainerProps) {
  const classes = useStyles({ fluid, size, theme: useMantineTheme(themeOverride) });
  return <div className={cx(classes.container, className)} {...others} />;
}

Container.displayName = '@mantine/core/Container';
