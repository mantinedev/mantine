import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Title.styles.less';

interface TitleProps extends DefaultProps, Omit<React.HTMLProps<HTMLHeadingElement>, 'children'> {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
}

export default function Title({ className, order = 1, children }: TitleProps) {
  const element = `h${order}`;

  return React.createElement(
    element,
    { className: cx(classes.title, classes[`title-${order}`], className) },
    children
  );
}

Title.displayName = '@mantine/core/Title';
