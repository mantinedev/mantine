import { tests } from '@mantine-tests/core';
import {
  TableScrollContainer,
  TableScrollContainerProps,
  TableScrollContainerStylesNames,
} from './TableScrollContainer';

const defaultProps: TableScrollContainerProps = {
  minWidth: 300,
};

describe('@mantine/core/TableScrollContainer', () => {
  tests.itSupportsSystemProps<TableScrollContainerProps, TableScrollContainerStylesNames>({
    component: TableScrollContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/TableScrollContainer',
    stylesApiSelectors: ['scrollContainer', 'scrollContainerInner'],
  });
});
