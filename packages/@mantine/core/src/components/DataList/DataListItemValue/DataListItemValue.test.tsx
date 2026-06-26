import { createContextContainer, tests } from '@mantine-tests/core';
import { DataList } from '../DataList';
import {
  DataListItemValue,
  DataListItemValueProps,
  DataListItemValueStylesNames,
} from './DataListItemValue';

const TestContainer = createContextContainer(DataListItemValue, DataList, {});

const defaultProps: DataListItemValueProps = {};

describe('@mantine/core/DataListItemValue', () => {
  tests.itSupportsSystemProps<DataListItemValueProps, DataListItemValueStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/DataListItemValue',
    stylesApiSelectors: ['itemValue'],
    selector: 'dd',
    providerStylesApi: false,
    compound: true,
    stylesApiName: 'DataList',
  });
});
