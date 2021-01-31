import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import useStyles from './Title.styles';

interface TitleProps extends DefaultProps, React.HTMLProps<HTMLHeadingElement> {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TITLE_STYLES: Record<string, [number, number]> = {
  h1: [38, 1.2],
  h2: [30, 1.3],
  h3: [24, 1.35],
  h4: [20, 1.4],
  h5: [16, 1.5],
  h6: [14, 1.5],
};

export default function Title({ className, order = 1, style, children, ...others }: TitleProps) {
  const classes = useStyles();
  const element = `h${order}`;
  const [fontSize, lineHeight] = TITLE_STYLES[element];

  return React.createElement(
    element,
    {
      className: cx(classes.title, className),
      style: { fontSize, lineHeight, ...style },
      ...others,
    },
    children
  );
}

Title.displayName = '@mantine/core/Title';
