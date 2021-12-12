import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { List } from './List';
import { List as ListStylesApi } from './styles.api';

const defaultProps = {
  icon: '$',
  children: [
    <List.Item key="1">1</List.Item>,
    <List.Item key="2">2</List.Item>,
    <List.Item key="3">3</List.Item>,
  ],
};

describe('@mantine/core/List', () => {
  itSupportsClassName(List, defaultProps);
  itSupportsMargins(List, defaultProps);
  itSupportsOthers(List, defaultProps);
  itSupportsStyle(List, defaultProps);
  itSupportsSx(List, defaultProps);
  itSupportsRef(List, defaultProps, HTMLUListElement);
  itSupportsStylesApi(List, defaultProps, Object.keys(ListStylesApi), 'List');

  it('changes root element based on type prop', () => {
    const ordered = shallow(<List {...defaultProps} type="order" />);
    const unordered = shallow(<List {...defaultProps} type="unordered" />);

    expect(ordered.dive().type()).toBe('ol');
    expect(unordered.dive().type()).toBe('ul');
  });

  it('has correct displayName', () => {
    expect(List.displayName).toEqual('@mantine/core/List');
  });
});
