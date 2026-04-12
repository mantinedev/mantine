import { createContextContainer, tests } from '@mantine-tests/core';
import { DataList } from '../DataList';
import {
  DataListItemLabel,
  DataListItemLabelProps,
  DataListItemLabelStylesNames,
} from './DataListItemLabel';

const TestContainer = createContextContainer(DataListItemLabel, DataList, {});

const defaultProps: DataListItemLabelProps = {};

describe('@mantine/core/DataListItemLabel', () => {
  tests.itSupportsSystemProps<DataListItemLabelProps, DataListItemLabelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/DataListItemLabel',
    stylesApiSelectors: ['itemLabel'],
    selector: 'dt',
    providerStylesApi: false,
    compound: true,
    stylesApiName: 'DataList',
  });
});
