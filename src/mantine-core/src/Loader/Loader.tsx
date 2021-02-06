import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineColor, useMantineTheme } from '@mantine/theme';
import useStyles from './Loader.styles';

interface LoaderProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  size?: number;
  color?: MantineColor;
}

export default function Loader({ className, size = 36, color, style, ...others }: LoaderProps) {
  const theme = useMantineTheme();
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
        borderColor: theme.colors[color || theme.primaryColor][4],
        borderTopColor: theme.colors[color || theme.primaryColor][0],
        borderBottomColor: theme.colors[color || theme.primaryColor][0],
      }}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
