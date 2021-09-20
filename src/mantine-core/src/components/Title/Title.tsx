import React from 'react';
import { DefaultProps } from '@mantine/styles';
import useStyles from './Title.styles';

export interface TitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Defined text-align */
  align?: 'right' | 'left' | 'center';
}

export function Title({
  className,
  order = 1,
  children,
  align,
  style,
  ...others
}: TitleProps): JSX.Element {
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }

  const element = `h${order}` as const;
  const { classes, cx } = useStyles({ element }, null, 'title');
  const styles: React.CSSProperties = {};

  if (align) {
    styles.textAlign = align;
  }

  return React.createElement(
    element,
    {
      className: cx(classes.title, className),
      style: { ...style, ...styles },
      ...others,
    },
    children
  );
}

Title.displayName = '@mantine/core/Title';
