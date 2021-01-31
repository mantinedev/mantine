import React from 'react';
import cx from 'clsx';
import { DefaultProps, Size, Theme } from '@mantine/types';
import useStyles from './Text.styles';

interface TextProps extends DefaultProps {
  component?: React.ElementType<any>;
  children?: React.ReactNode;
  size?: Size;
  theme?: Theme;
  bold?: boolean;
}

export default function Text<T = Record<string, any>>({
  className,
  component = 'div',
  children,
  size = 'md',
  bold = false,
  theme,
  ...others
}: TextProps & T) {
  const classes = useStyles();

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
