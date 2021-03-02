import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Title.styles';

interface TitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title({
  className,
  themeOverride,
  order = 1,
  style,
  children,
  ...others
}: TitleProps) {
  const element = `h${order}`;
  const classes = useStyles({ theme: useMantineTheme(themeOverride), element });

  return React.createElement(
    element,
    {
      className: cx(classes.title, className),
      ...others,
    },
    children
  );
}

Title.displayName = '@mantine/core/Title';
