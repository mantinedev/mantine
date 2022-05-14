import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { useCardPadding } from '../Card.context';
import { Box } from '../../Box';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps {
  /** Determines whether section should have border */
  withBorder?: boolean;
}

export const _CardSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, withBorder = false, ...others }, ref) => {
    const { classes, cx } = useStyles({ padding: useCardPadding(), withBorder }, { name: 'Card' });
    return <Box className={cx(classes.cardSection, className)} ref={ref} {...others} />;
  }
);

_CardSection.displayName = '@mantine/core/CardSection';

export const CardSection = createPolymorphicComponent<'div', CardSectionProps>(_CardSection);
