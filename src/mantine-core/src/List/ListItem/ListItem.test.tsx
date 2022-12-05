import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
} from '@mantine/tests';
import { ListItem, ListItemProps } from './ListItem';
import { ListProvider } from '../List.context';

const defaultProps: ListItemProps = {
  icon: '$',
  children: 'test-list-item',
};

const TestContainer = createContextContainer(ListItem, ListProvider, { value: {} });

describe('@mantine/core/ListItem', () => {
  itThrowsContextError(ListItem, defaultProps, 'List component was not found in tree');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLLIElement,
    displayName: '@mantine/core/ListItem',
    providerName: 'ListItem',
  });

  it('renders icon based on prop', () => {
    const { container: withIcon } = render(<TestContainer icon="$">test-item</TestContainer>);
    const { container: withoutIcon } = render(<TestContainer>test-item</TestContainer>);
    expect(withIcon.querySelectorAll('.mantine-List-itemIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.mantine-List-itemIcon')).toHaveLength(0);
  });
});
