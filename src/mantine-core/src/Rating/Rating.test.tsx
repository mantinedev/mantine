import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Rating, RatingProps } from './Rating';

const defaultProps: RatingProps = {
  defaultValue: 80,
};

describe('@mantine/core/Progress', () => {
  checkAccessibility([<Rating defaultValue={3.5} fractions={2} aria-label="test-rating" />]);

  itSupportsSystemProps({
    component: Rating,
    props: defaultProps,
    displayName: '@mantine/core/Rating',
    refType: HTMLDivElement,
    providerName: 'Rating',
  });
});
