import OpenColor from 'open-color';
import React from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme } from '@mantine/types';
import useStyles from './Loader.styles';

interface LoaderProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  size?: number;
  color?: OpenColorTheme;
}

export default function Loader({
  className,
  size = 36,
  color = 'blue',
  style,
  ...others
}: LoaderProps) {
  const classes = useStyles();

  return (
    <div
      {...others}
      className={cx(classes.loader, className)}
      style={{
        ...style,
        width: size,
        height: size,
        borderWidth: Math.max(Math.round(size / 6), 2),
        borderColor: OpenColor[color][4],
        borderTopColor: OpenColor[color][0],
        borderBottomColor: OpenColor[color][0],
      }}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
