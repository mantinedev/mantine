import { tests } from '@mantine-tests/core';
import { SimpleGrid, SimpleGridProps, SimpleGridStylesNames } from './SimpleGrid';

const defaultProps: SimpleGridProps = {};

describe('@mantine/core/SimpleGrid', () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SimpleGrid',
    stylesApiSelectors: ['root'],
  });
});
