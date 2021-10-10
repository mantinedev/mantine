import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { ListItem } from './ListItem';

const defaultProps = {
  icon: '$',
  children: 'test-list-item',
};

describe('@mantine/core/ListItem', () => {
  itSupportsClassName(ListItem, defaultProps);
  itRendersChildren(ListItem, defaultProps);
  itSupportsOthers(ListItem, defaultProps);
  itSupportsStyle(ListItem, defaultProps);
  itSupportsMargins(ListItem, defaultProps);

  it('renders icon based on prop', () => {
    const withIcon = shallow(<ListItem icon="$">test-item</ListItem>);
    const withoutIcon = shallow(<ListItem>test-item</ListItem>);

    expect(withIcon.find('.mantine-list-itemIcon')).toHaveLength(1);
    expect(withoutIcon.find('.mantine-list-itemIcon')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(ListItem.displayName).toEqual('@mantine/core/ListItem');
  });
});
