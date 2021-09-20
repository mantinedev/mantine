import React from 'react';
import { useMantineTheme, DefaultProps, MantineColor } from '@mantine/styles';
import useStyles from './Code.styles';

export interface CodeProps extends DefaultProps, React.ComponentPropsWithoutRef<'code'> {
  /** Code content */
  children: React.ReactNode;

  /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
  color?: MantineColor;

  /** True for code block, false for inline code */
  block?: boolean;
}

export function Code({ className, children, block = false, color, ...others }: CodeProps) {
  const theme = useMantineTheme();
  const themeColor = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
  const { classes, cx } = useStyles({ color: themeColor }, null, 'code');

  if (block) {
    return (
      <pre className={cx(classes.root, classes.block, className)} {...others}>
        {children}
      </pre>
    );
  }

  return (
    <code className={cx(classes.root, className)} {...others}>
      {children}
    </code>
  );
}

Code.displayName = '@mantine/core/Code';
