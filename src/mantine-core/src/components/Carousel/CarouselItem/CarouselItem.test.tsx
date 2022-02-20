import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { CarouselItem, CarouselItemProps } from './CarouselItem';

const defaultProps: CarouselItemProps<'div'> = {};

describe('@mantine/core/CarouselItem', () => {
  itRendersChildren(CarouselItem, defaultProps);
  itIsPolymorphic(CarouselItem, defaultProps);
  itSupportsSystemProps({
    component: CarouselItem,
    props: defaultProps,
    displayName: '@mantine/core/CarouselItem',
    refType: HTMLDivElement,
  });
});
