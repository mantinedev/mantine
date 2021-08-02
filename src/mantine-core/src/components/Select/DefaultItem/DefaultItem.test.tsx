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

  it('renders value as children it label was not provided', () => {
    const element = shallow(<DefaultItem {...defaultProps} value="test-value" label={null} />);
    expect(element.render().text()).toBe('test-value');
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toEqual('@mantine/core/DefaultItem');
  });
});
