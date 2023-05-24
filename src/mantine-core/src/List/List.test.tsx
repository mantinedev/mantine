import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
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
  itSupportsProviderVariant(List, defaultProps, 'List', ['root', 'item']);
  itSupportsProviderSize(List, defaultProps, 'List', ['root', 'item']);
  itSupportsSystemProps({
    component: List,
    props: defaultProps,
    displayName: '@mantine/core/List',
    refType: HTMLUListElement,
  });

  it('changes root element based on type prop', () => {
    const { container: ordered } = render(<List {...defaultProps} type="ordered" />);
    const { container: unordered } = render(<List {...defaultProps} type="unordered" />);

    expect(ordered.querySelector('ol')).toBeInTheDocument();
    expect(unordered.querySelector('ul')).toBeInTheDocument();
  });

  it('exposes ListItem as List.Item', () => {
    expect(List.Item).toBe(ListItem);
  });
});
