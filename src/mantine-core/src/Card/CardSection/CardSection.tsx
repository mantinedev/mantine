import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { useCardPadding } from '../Card.context';
import { Box } from '../../Box';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps {
  /** Determines whether section should have border */
  withBorder?: boolean;

  /** Determines whether section from inherit padding from Card */
  inheritPadding?: boolean;
}

export const _CardSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, withBorder = false, inheritPadding = false, unstyled, ...others }, ref) => {
    const { classes, cx } = useStyles(
      { padding: useCardPadding(), withBorder, inheritPadding },
      { name: 'Card', unstyled }
    );
    return <Box className={cx(classes.cardSection, className)} ref={ref} {...others} />;
  }
);

_CardSection.displayName = '@mantine/core/CardSection';

export const CardSection = createPolymorphicComponent<'div', CardSectionProps>(_CardSection);
