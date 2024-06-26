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
    displayName: '@mantine/core/TableScrollContainer',
    stylesApiSelectors: ['scrollContainer', 'scrollContainerInner'],
  });
});
