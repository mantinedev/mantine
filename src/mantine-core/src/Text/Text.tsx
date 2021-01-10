import React from 'react';
import cx from 'clsx';
import { DefaultProps, Size, Theme } from '@mantine/types';
import classes from './Text.styles.less';

interface TextProps extends DefaultProps {
  component?: string;
  children?: React.ReactNode;
  size?: Size;
  theme?: Theme;
  bold?: boolean;
}

export default function Text({
  className,
  component = 'div',
  children,
  size = 'md',
  bold = false,
  theme,
  ...others
}: TextProps) {
  return React.createElement(
    component,
    {
      className: cx(
        classes.text,
        classes[size],
        classes[theme],
        { [classes.bold]: bold },
        className
      ),
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';
