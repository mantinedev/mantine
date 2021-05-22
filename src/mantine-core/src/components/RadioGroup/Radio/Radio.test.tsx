import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Radio } from './Radio';

const defaultProps = {
  value: 'test-radio',
  children: 'test-radio-label',
};

describe('@mantine/core/Radio', () => {
  checkAccessibility([mount(<Radio {...defaultProps} />)]);

  itSupportsClassName(Radio, defaultProps);
  itSupportsStyle(Radio, defaultProps);
  itRendersChildren(Radio, defaultProps);
  itSupportsRef(Radio, defaultProps, HTMLInputElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Radio.displayName).toEqual('@mantine/core/Radio');
  });

  it('connects input and label with given id', () => {
    const element = shallow(<Radio {...defaultProps} id="test-id" />);
    expect(element.render().find('input').attr('id')).toBe('test-id');
    expect(element.render().find('label').attr('for')).toBe('test-id');
  });
});
