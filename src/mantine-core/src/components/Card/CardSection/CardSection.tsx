import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/tss';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  padding?: MantineNumberSize;
}

export function CardSection({ className, padding = 0, ...others }: CardSectionProps) {
  const { classes, cx } = useStyles({ padding }, null, 'card');
  return <div className={cx(classes.cardSection, className)} {...others} />;
}

CardSection.displayName = '@mantine/core/CardSection';
