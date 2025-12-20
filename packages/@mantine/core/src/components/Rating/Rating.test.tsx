import { tests } from '@mantine-tests/core';
import { Rating, RatingProps, RatingStylesNames } from './Rating';

const defaultProps: RatingProps = {};

describe('@mantine/core/Rating', () => {
  tests.itSupportsSystemProps<RatingProps, RatingStylesNames>({
    component: Rating,
    props: defaultProps,
    id: true,
    displayName: '@mantine/core/Rating',
    stylesApiSelectors: ['root', 'starSymbol', 'input', 'label', 'symbolBody', 'symbolGroup'],
  });
});
