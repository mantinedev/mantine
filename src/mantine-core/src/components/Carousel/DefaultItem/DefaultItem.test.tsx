import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { DefaultItem, CarouselControlProps } from './DefaultItem';

const defaultProps: CarouselControlProps = {
  buttonType: 'indicator',
};

describe('@mantine/core/Carousel/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toEqual('@mantine/core/Carousel/DefaultItem');
  });
});
