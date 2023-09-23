import { tests, createContextContainer } from '@mantine/tests';
import { ListItem, ListItemProps, ListItemStylesNames } from './ListItem';
import { List } from '../List';

const TestContainer = createContextContainer(ListItem, List, {});

const defaultProps: ListItemProps = {
  icon: '$',
};

describe('@mantine/core/ListItem', () => {
  tests.itSupportsSystemProps<ListItemProps, ListItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
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
