import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Title.styles';

interface TitleProps extends DefaultProps, React.HTMLProps<HTMLHeadingElement> {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title({
  className,
  themeOverride,
  order = 1,
  style,
  children,
  ...others
}: TitleProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const element = `h${order}`;
  const [fontSize, lineHeight] = theme.headings[element];

  return React.createElement(
    element,
    {
      className: cx(classes.title, className),
      style: { fontSize, lineHeight, ...style },
      ...others,
    },
    children
  );
}

Title.displayName = '@mantine/core/Title';
