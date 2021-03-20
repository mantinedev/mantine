import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Code.styles';

interface CodeProps extends DefaultProps, React.ComponentPropsWithoutRef<'code'> {
  /** Code content */
  children: React.ReactNode;

  /** Code color and background from theme */
  color?: string;
}

export function Code({ children, themeOverride, className, color = 'gray', ...others }: CodeProps) {
  const classes = useStyles({ color, theme: useMantineTheme() });

  return (
    <code className={cx(classes.code, className)} {...others}>
      {children}
    </code>
  );
}

Code.displayName = '@mantine/core/Code';
