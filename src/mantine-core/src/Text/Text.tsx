import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { TextVariant } from './Text.styles';

interface TextProps extends DefaultProps {
  children?: React.ReactNode;
  size?: MantineSize;
  color?: string;
  weight?: number | string;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  variant?: TextVariant;
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
  variant = 'text',
  themeOverride,
  ...others
}: ComponentPassThrough<T, TextProps>) {
  const classes = useStyles({ variant, color, size, theme: useMantineTheme(themeOverride) });

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
