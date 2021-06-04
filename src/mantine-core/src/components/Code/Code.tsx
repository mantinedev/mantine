import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../theme';
import useStyles from './Code.styles';

export interface CodeProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'code'> {
  /** Code content */
  children: React.ReactNode;

  /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
  color?: string;

  /** True for code block, false for inline code */
  block?: boolean;
}

export function Code({
  className,
  style,
  children,
  themeOverride,
  block = false,
  color,
  classNames,
  styles,
  ...others
}: CodeProps) {
  const theme = useMantineTheme(themeOverride);
  const themeColor = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
  const classes = useStyles({ color: themeColor, theme }, classNames);
  const _styles = mergeStyles(classes, styles);

  if (block) {
    return (
      <pre
        className={cx(classes.root, classes.block, className)}
        style={{ ...style, ..._styles.root, ..._styles.block }}
        {...others}
      >
        {children}
      </pre>
    );
  }

  return (
    <code className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {children}
    </code>
  );
}

Code.displayName = '@mantine/core/Code';
