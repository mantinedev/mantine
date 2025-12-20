import { createContextContainer, tests } from '@mantine-tests/core';
import { List } from '../List';
import { ListItem, ListItemProps, ListItemStylesNames } from './ListItem';

const TestContainer = createContextContainer(ListItem, List, {});

const defaultProps: ListItemProps = {
  icon: '$',
};

describe('@mantine/core/ListItem', () => {
  tests.itSupportsSystemProps<ListItemProps, ListItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/ListItem',
    stylesApiSelectors: ['item', 'itemIcon', 'itemLabel', 'itemWrapper'],
    selector: 'li',
    providerStylesApi: false,
    compound: true,
    stylesApiName: 'List',
  });
});
