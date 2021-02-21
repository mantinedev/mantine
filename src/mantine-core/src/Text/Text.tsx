import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles from './Text.styles';

interface TextProps extends DefaultProps {
  children?: React.ReactNode;
  size?: MantineSize;
  color?: string;
  weight?: number;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export function Text<T extends React.ElementType = 'div'>({
  className,
  component = 'div',
  children,
  size = 'md',
  weight = 400,
  transform,
  style,
  color,
  themeOverride,
  ...others
}: ComponentPassThrough<T, TextProps>) {
  const classes = useStyles({ color, size, theme: useMantineTheme(themeOverride) });

  return React.createElement(
    component,
    {
      className: cx(classes.text, className),
      style: { fontWeight: weight, textTransform: transform, ...style },
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';
