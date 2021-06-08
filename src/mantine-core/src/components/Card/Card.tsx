import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
import { Paper } from '../Paper/Paper';
import useStyles from './Card.styles';

export { CardsGrid } from './CardsGrid/CardsGrid';
export type { CardsGridProps } from './CardsGrid/CardsGrid';

export interface CardProps extends DefaultProps, React.ComponentPropsWithoutRef<typeof Paper> {}

export function Card({
  className,
  themeOverride,
  padding = 'md',
  radius = 'sm',
  ...others
}: CardProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ radius, padding, theme }, null, 'card');

  return (
    <Paper className={cx(classes.card, className)} radius={radius} padding={padding} {...others} />
  );
}

Card.displayName = '@mantine/core/Card';
