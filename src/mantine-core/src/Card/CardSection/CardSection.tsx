import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { useCardPadding } from '../Card.context';
import { Box } from '../../Box';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps {
  variant?: string;

  /** Determines whether section should have border */
  withBorder?: boolean;

  /** Determines whether section from inherit padding from Card */
  inheritPadding?: boolean;
}

const defaultProps: Partial<CardSectionProps> = {
  withBorder: false,
  inheritPadding: false,
};

export const _CardSection = forwardRef<HTMLDivElement, CardSectionProps>((props, ref) => {
  const { className, withBorder, inheritPadding, unstyled, variant, ...others } =
    useComponentDefaultProps('CardSection', defaultProps, props);

  const { classes, cx } = useStyles(
    { padding: useCardPadding(), withBorder, inheritPadding },
    { name: 'Card', unstyled, variant }
  );

  return <Box className={cx(classes.cardSection, className)} ref={ref} {...others} />;
});

_CardSection.displayName = '@mantine/core/CardSection';

export const CardSection = createPolymorphicComponent<'div', CardSectionProps>(_CardSection);
