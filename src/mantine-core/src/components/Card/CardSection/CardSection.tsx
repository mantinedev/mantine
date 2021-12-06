import React from 'react';
import { DefaultProps, MantineNumberSize, useExtractedMargins } from '@mantine/styles';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  padding?: MantineNumberSize;
}

export function CardSection({ className, padding = 0, style, ...others }: CardSectionProps) {
  const { classes, cx } = useStyles({ padding }, { name: 'Card' });
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return <div className={cx(classes.cardSection, className)} style={mergedStyles} {...rest} />;
}

CardSection.displayName = '@mantine/core/CardSection';
