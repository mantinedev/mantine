import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { DefaultItem } from './DefaultItem';

const defaultProps = { label: 'test', elementRef: () => {} };

describe('@mantine/core/Autocomplete/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);

  it('renders given label as children', () => {
    const element = shallow(<DefaultItem {...defaultProps} label="test" />);
    expect(element.render().text()).toBe('test');
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toEqual('@mantine/core/DefaultItem');
  });
});
