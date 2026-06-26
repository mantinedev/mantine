import { createContextContainer, tests } from '@mantine-tests/core';
import { DataList } from '../DataList';
import { DataListItem, DataListItemProps, DataListItemStylesNames } from './DataListItem';

const TestContainer = createContextContainer(DataListItem, DataList, {});

const defaultProps: DataListItemProps = {};

describe('@mantine/core/DataListItem', () => {
  tests.itSupportsSystemProps<DataListItemProps, DataListItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/DataListItem',
    stylesApiSelectors: ['item'],
    selector: '.mantine-DataList-item',
    providerStylesApi: false,
    compound: true,
    stylesApiName: 'DataList',
  });
});
