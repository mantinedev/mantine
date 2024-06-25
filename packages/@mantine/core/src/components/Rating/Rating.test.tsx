import { tests } from '@mantine-tests/core';
import { Rating, RatingProps, RatingStylesNames } from './Rating';

const defaultProps: RatingProps = {};

describe('@mantine/core/Rating', () => {
  tests.itSupportsSystemProps<RatingProps, RatingStylesNames>({
    component: Rating,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Rating',
    stylesApiSelectors: ['root', 'starSymbol', 'input', 'label', 'symbolBody', 'symbolGroup'],
  });
});
