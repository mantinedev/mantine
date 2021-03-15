import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { TextVariant } from './Text.styles';

export interface TextProps extends DefaultProps {
  children?: React.ReactNode;
  size?: MantineSize;
  color?: string;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: React.CSSProperties['textTransform'];
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

export function Anchor(props: TextProps & React.ComponentPropsWithoutRef<'a'>) {
  return <Text<'a'> component="a" variant="link" {...props} />;
}

Text.displayName = '@mantine/core/Text';
Anchor.displayName = '@mantine/core/Anchor';
