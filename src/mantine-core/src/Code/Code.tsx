import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Code.styles';

interface CodeProps extends DefaultProps, React.ComponentPropsWithoutRef<'code'> {
  children: React.ReactNode;
}

export function Code({ children, themeOverride, className, ...others }: CodeProps) {
  const classes = useStyles({ theme: useMantineTheme() });

  return (
    <code className={cx(classes.code, className)} {...others}>
      {children}
    </code>
  );
}

Code.displayName = '@mantine/core/Code';
