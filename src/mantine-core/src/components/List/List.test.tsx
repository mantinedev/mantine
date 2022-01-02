import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Button } from '../Button';
import { ListItem } from './ListItem/ListItem';
import { List, ListProps } from './List';

const defaultProps: ListProps = {
  children: [
    <List.Item key="1">1</List.Item>,
    <List.Item key="2">2</List.Item>,
    <List.Item key="3">3</List.Item>,
  ],
};

describe('@mantine/core/List', () => {
  itSupportsSystemProps({
    component: List,
    props: defaultProps,
    displayName: '@mantine/core/List',
    refType: HTMLUListElement,
  });

  it('changes root element based on type prop', () => {
    const { container: ordered } = render(<List {...defaultProps} type="order" />);
    const { container: unordered } = render(<List {...defaultProps} type="unordered" />);

    expect(ordered.querySelector('ol')).toBeInTheDocument();
    expect(unordered.querySelector('ul')).toBeInTheDocument();
  });

  it('filters out unexpected children', () => {
    const { container } = render(
      <List>
        <List.Item>Child 1</List.Item>
        <p className="unexpected">Unexpected child 1</p>
        <div className="unexpected">Unexpected child 1</div>
        <List.Item>Child 2</List.Item>
        <Button>Unexpected component</Button>
      </List>
    );

    expect(container.querySelectorAll('.mantine-List-item')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Button-root')).toHaveLength(0);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });

  it('exposes ListItem as List.Item', () => {
    expect(List.Item).toBe(ListItem);
  });
});
