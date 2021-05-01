import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './CardsGrid.styles';

interface CardsGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Space between cards, predefined value from theme.spacing or number for margins in px */
  gutter?: MantineNumberSize;

  /** Amount of cards that should be in each row */
  cardsPerRow?: number;

  /** Should last row items fill all available space */
  grow?: boolean;

  /** <Card /> components only */
  children: React.ReactNode;
}

export function CardsGrid({
  gutter = 'md',
  cardsPerRow = 1,
  grow = false,
  children,
  className,
  themeOverride,
  ...others
}: CardsGridProps) {
  const classes = useStyles({
    cardsPerRow,
    gutter,
    grow,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <div className={cx(classes.grid, className)} {...others}>
      {children}
    </div>
  );
}

CardsGrid.displayName = '@mantine/core/CardsGrid';
