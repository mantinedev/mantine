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
  <C extends React.ElementType = 'div'>(
    { className, padding = 0, component, first, last, ...others }: CardSectionProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ padding, first, last }, { name: 'Card' });
    return (
      <Box<any>
        component={component || 'div'}
        className={cx(classes.cardSection, className)}
        ref={ref}
        {...others}
      />
    );
  }
);

CardSection.displayName = '@mantine/core/CardSection';
