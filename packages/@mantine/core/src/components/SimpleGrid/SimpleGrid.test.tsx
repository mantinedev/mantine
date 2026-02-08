import { tests } from '@mantine-tests/core';
import { SimpleGrid, SimpleGridProps, SimpleGridStylesNames } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  type: 'container',
};

describe('@mantine/core/SimpleGrid', () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/SimpleGrid',
    stylesApiSelectors: ['root', 'container'],
  });
});
