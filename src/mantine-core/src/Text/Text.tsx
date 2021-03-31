import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { TextVariant } from './Text.styles';

export interface TextProps extends DefaultProps {
  /** Text itself */
  children?: React.ReactNode;

  /** Predefined font-size from theme.fontSizes */
  size?: MantineSize;

  /** Text color from theme */
  color?: string;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right';

  /** Link or text variant */
  variant?: TextVariant;
}

export function Text<T extends React.ElementType = 'div'>({
  className,
  component = 'div',
  children,
  size = 'md',
  weight,
  transform,
  style,
  color,
  align,
  variant = 'text',
  themeOverride,
  ...others
}: ComponentPassThrough<T, TextProps>) {
  const classes = useStyles({ variant, color, size, theme: useMantineTheme(themeOverride) });

  return React.createElement(
    component,
    {
      className: cx(classes.text, className),
      style: { fontWeight: weight, textTransform: transform, textAlign: align, ...style },
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
