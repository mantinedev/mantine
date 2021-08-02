import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../../theme';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  padding?: MantineNumberSize;
}

export function CardSection({
  className,
  themeOverride,
  padding = 0,
  ...others
}: CardSectionProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, padding }, null, 'card');
  return <div className={cx(classes.cardSection, className)} {...others} />;
}

CardSection.displayName = '@mantine/core/CardSection';
