import { tests } from '@mantine-tests/core';
import { PaginationRoot, PaginationRootProps, PaginationRootStylesNames } from './PaginationRoot';

const defaultProps: PaginationRootProps = {
  total: 10,
};

describe('@mantine/core/PaginationRoot', () => {
  tests.itSupportsSystemProps<PaginationRootProps, PaginationRootStylesNames>({
    component: PaginationRoot,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PaginationRoot',
    stylesApiSelectors: ['root'],
    stylesApiName: 'Pagination',
  });
});
