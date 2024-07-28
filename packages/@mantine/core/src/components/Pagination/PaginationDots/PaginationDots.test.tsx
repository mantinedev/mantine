import { createContextContainer, tests } from '@mantine-tests/core';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';
import { PaginationDots, PaginationDotsProps, PaginationDotsStylesNames } from './PaginationDots';

const TestContainer = createContextContainer(PaginationDots, PaginationRoot, { total: 10 });

const defaultProps: PaginationDotsProps = {};

describe('@mantine/core/PaginationDots', () => {
  tests.itSupportsSystemProps<PaginationDotsProps, PaginationDotsStylesNames>({
    component: TestContainer,
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
    displayName: '@mantine/core/PaginationDots',
    stylesApiSelectors: ['dots'],
    stylesApiName: 'Pagination',
    compound: true,
    providerStylesApi: false,
    selector: '.mantine-Pagination-dots',
  });

  tests.itThrowsContextError({
    component: PaginationDots,
    props: defaultProps,
    error: 'Pagination.Root component was not found in tree',
  });
});
