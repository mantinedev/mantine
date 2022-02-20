import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  ClassNames,
  MantineNumberSize,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './CarouselItem.styles';

export type CarouselItemStylesName = ClassNames<typeof useStyles>;

export interface _CarouselItemProps extends DefaultProps {
  padding?: MantineNumberSize;
}

export type CarouselItemProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _CarouselItemProps>
  : never;

type CarouselItemComponent = (<C = 'div'>(props: CarouselItemProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const CarouselItem: CarouselItemComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, padding, ...others }: CarouselItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ padding }, { name: 'CarouselItem' });
    return (
      <Box<any>
        component={component || 'div'}
        className={cx(classes.carouselItem, className)}
        ref={ref}
        {...others}
      />
    );
  }
);

CarouselItem.displayName = '@mantine/core/CarouselItem';
