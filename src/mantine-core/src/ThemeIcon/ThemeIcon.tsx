import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './ThemeIcon.styles';

interface ThemeIconProps extends DefaultProps, React.ComponentProps<'div'> {
  size?: MantineNumberSize;
  radius?: MantineNumberSize;
  color?: string;
  children: React.ReactNode;
  variant?: 'filled' | 'light';
}

export function ThemeIcon({
  className,
  size = 'md',
  radius = 'sm',
  variant = 'filled',
  color,
  children,
  themeOverride,
  ...others
}: ThemeIconProps) {
  const classes = useStyles({
    variant,
    radius,
    color,
    size,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <div data-mantine-composable className={cx(classes.themeIcon, className)} {...others}>
      {children}
    </div>
  );
}

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
