import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Text } from '@mantine/core';
import { TimeField } from './TimeField';

const defaultProps = {
  onChange: () => {},
  setValue: () => {},
};

describe('@mantine/dates/TimeField', () => {
  itSupportsClassName(TimeField, defaultProps);
  itSupportsOthers(TimeField, defaultProps);
  itSupportsStyle(TimeField, defaultProps);
  itSupportsRef(TimeField, defaultProps, HTMLInputElement);

  it('renders separator when withSeparator prop set to true', () => {
    const withSeparator = shallow(<TimeField {...defaultProps} withSeparator />);
    const withoutSeparator = shallow(<TimeField {...defaultProps} withSeparator={false} />);

    expect(withSeparator.find(Text)).toHaveLength(1);
    expect(withoutSeparator.find(Text)).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(TimeField.displayName).toEqual('@mantine/dates/TimeField');
  });
});
