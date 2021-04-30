import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import useStyles from './Card.styles';

export { CardsGrid } from './CardsGrid/CardsGrid';

interface CardProps extends DefaultProps, React.ComponentPropsWithoutRef<typeof Paper> {}

export function Card({
  className,
  themeOverride,
  padding = 'md',
  radius = 'sm',
  ...others
}: CardProps) {
  const classes = useStyles({ radius, padding, theme: useMantineTheme(themeOverride) });
  return (
    <Paper
      data-mantine-card
      className={cx(classes.card, className)}
      radius={radius}
      padding={padding}
      {...others}
    />
  );
}

Card.displayName = '@mantine/core/Card';
