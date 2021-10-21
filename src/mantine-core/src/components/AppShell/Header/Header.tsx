import React from 'react';
import { DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import useStyles from './Header.styles';

interface HeaderProps extends DefaultProps {
  children: React.ReactNode;
  height?: number | string;
  padding?: MantineNumberSize;
}

export function Header({
  children,
  className,
  style,
  height = 60,
  padding,
  ...others
}: HeaderProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const { classes, cx } = useStyles({ height, padding });

  return (
    <header className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      {children}
    </header>
  );
}
