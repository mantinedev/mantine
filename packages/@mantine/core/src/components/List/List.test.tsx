import { render, tests } from '@mantine-tests/core';
import { List, ListProps, ListStylesNames } from './List';
import { ListItem } from './ListItem/ListItem';

const defaultProps: ListProps = {
  children: [
    <List.Item key="1" icon="$">
      1
    </List.Item>,
    <List.Item key="2" icon="$">
      2
    </List.Item>,
    <List.Item key="3" icon="$">
      3
    </List.Item>,
  ],
};

describe('@mantine/core/List', () => {
  tests.itSupportsSystemProps<ListProps, ListStylesNames>({
    component: List,
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
    refType: HTMLUListElement,
    displayName: '@mantine/core/List',
    stylesApiSelectors: ['root', 'item', 'itemIcon', 'itemLabel', 'itemWrapper'],
  });

  it('changes root element based on type prop', () => {
    const { container, rerender } = render(<List {...defaultProps} type="ordered" />);
    expect(container.querySelector('ul')).toBe(null);
    expect(container.querySelector('ol')).not.toBe(null);

    rerender(<List {...defaultProps} type="unordered" />);
    expect(container.querySelector('ul')).not.toBe(null);
    expect(container.querySelector('ol')).toBe(null);
  });

  it('exposes ListItem as List.Item', () => {
    expect(List.Item).toBe(ListItem);
  });
});
