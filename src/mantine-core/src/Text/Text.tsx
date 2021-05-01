import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles from './Text.styles';

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
  variant?: 'text' | 'link';
}

export function Text<T extends React.ElementType = 'div', U = HTMLDivElement>({
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
  elementRef,
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  const classes = useStyles({ variant, color, size, theme: useMantineTheme(themeOverride) });

  return React.createElement(
    component,
    {
      className: cx(classes.text, className),
      style: { fontWeight: weight, textTransform: transform, textAlign: align, ...style },
      ref: elementRef,
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';

export function Anchor<T extends React.ElementType = 'a', U = HTMLAnchorElement>({
  component = 'a',
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  return <Text component={component} variant="link" {...others} />;
}

Anchor.displayName = '@mantine/core/Anchor';
