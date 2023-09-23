import { tests } from '@mantine/tests';
import { PaginationRoot, PaginationRootProps, PaginationRootStylesNames } from './PaginationRoot';

const defaultProps: PaginationRootProps = {
  total: 10,
};

describe('@mantine/core/PaginationRoot', () => {
  tests.itSupportsSystemProps<PaginationRootProps, PaginationRootStylesNames>({
    component: PaginationRoot,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/PaginationRoot',
    stylesApiSelectors: ['root'],
    stylesApiName: 'Pagination',
  });
});
