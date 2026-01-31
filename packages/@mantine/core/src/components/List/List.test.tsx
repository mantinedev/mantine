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
    varsResolver: true,
    children: true,
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

  it('renders icon for all items when icon prop is set', () => {
    const icon = <span data-testid="list-icon">→</span>;
    const { getAllByTestId } = render(
      <List icon={icon}>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    );
    expect(getAllByTestId('list-icon')).toHaveLength(2);
  });

  it('allows ListItem to override List icon', () => {
    const listIcon = <span data-testid="list-icon">→</span>;
    const itemIcon = <span data-testid="item-icon">•</span>;

    const { getAllByTestId, getByTestId } = render(
      <List icon={listIcon}>
        <List.Item>Uses list icon</List.Item>
        <List.Item icon={itemIcon}>Uses item icon</List.Item>
      </List>
    );

    expect(getAllByTestId('list-icon')).toHaveLength(1);
    expect(getByTestId('item-icon')).toBeInTheDocument();
  });

  it('centers items when center prop is true', () => {
    const { container } = render(
      <List center>
        <List.Item>Item</List.Item>
      </List>
    );

    const item = container.querySelector('.mantine-List-item');
    expect(item).toHaveAttribute('data-centered');
  });

  it('adds padding when withPadding is true', () => {
    const { container } = render(
      <List withPadding>
        <List.Item>Item</List.Item>
      </List>
    );

    const root = container.querySelector('.mantine-List-root');
    expect(root).toHaveAttribute('data-with-padding');
  });

  it('passes start attribute to ordered list', () => {
    const { container } = render(
      <List type="ordered" start={5}>
        <List.Item>Item</List.Item>
      </List>
    );

    const ol = container.querySelector('ol');
    expect(ol).toHaveAttribute('start', '5');
  });

  it('passes reversed attribute to ordered list', () => {
    const { container } = render(
      <List type="ordered" reversed>
        <List.Item>Item</List.Item>
      </List>
    );

    const ol = container.querySelector('ol');
    expect(ol).toHaveAttribute('reversed');
  });

  it('passes value attribute to list item', () => {
    const { container } = render(
      <List type="ordered">
        <List.Item value={5}>Item</List.Item>
      </List>
    );

    const li = container.querySelector('li');
    expect(li).toHaveAttribute('value', '5');
  });
});
