import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import useStyles from './Text.styles';

interface TextProps extends DefaultProps {
  component?: React.ElementType<any>;
  children?: React.ReactNode;
  size?: MantineSize;
  color?: string;
  weight?: number;
}

export default function Text<T = Record<string, any>>({
  className,
  component = 'div',
  children,
  size = 'md',
  weight = 400,
  style,
  color,
  themeOverride,
  ...others
}: TextProps & T) {
  const classes = useStyles({ color, size, theme: useMantineTheme(themeOverride) });

  return React.createElement(
    component,
    {
      className: cx(classes.text, className),
      style: { fontWeight: weight, ...style },
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';
