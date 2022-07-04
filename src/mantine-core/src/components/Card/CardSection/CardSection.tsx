import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './CardSection.styles';

export interface _CardSectionProps extends DefaultProps {
  padding?: MantineNumberSize;
  first?: boolean;
  last?: boolean;
}

export type CardSectionProps<C> = PolymorphicComponentProps<C, _CardSectionProps>;

type CardSectionComponent = (<C = 'div'>(props: CardSectionProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const CardSection: CardSectionComponent = forwardRef(
  (
    { className, padding = 0, component, first, last, ...others }: CardSectionProps<'div'>,
    ref: PolymorphicRef<'div'>
  ) => {
    const { classes, cx } = useStyles({ padding, first, last }, { name: 'Card' });
    return (
      <Box
        component={component || 'div'}
        className={cx(classes.cardSection, className)}
        ref={ref}
        {...others}
      />
    );
  }
) as any;

CardSection.displayName = '@mantine/core/CardSection';
