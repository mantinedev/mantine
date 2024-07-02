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
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLLIElement,
    displayName: '@mantine/core/ListItem',
    stylesApiSelectors: ['item', 'itemIcon', 'itemLabel', 'itemWrapper'],
    selector: 'li',
    providerStylesApi: false,
    compound: true,
    stylesApiName: 'List',
  });
});
