import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../../Box';
import useStyles from './CardSection.styles';

export interface CardSectionProps extends DefaultProps {
  padding?: MantineNumberSize;
}

export const _CardSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, padding = 0, ...others }, ref) => {
    const { classes, cx } = useStyles({ padding }, { name: 'Card' });
    return <Box className={cx(classes.cardSection, className)} ref={ref} {...others} />;
  }
);

_CardSection.displayName = '@mantine/core/CardSection';

export const CardSection = createPolymorphicComponent<'div', CardSectionProps>(_CardSection);
