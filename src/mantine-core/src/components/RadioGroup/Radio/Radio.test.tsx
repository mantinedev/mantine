import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { Radio } from './Radio';

const defaultProps = {
  value: 'test-radio',
  children: 'test-radio-label',
};

describe('@mantine/core/Radio', () => {
  checkAccessibility([render(<Radio {...defaultProps} />)]);
  itSupportsClassName(Radio, defaultProps);
  itSupportsStyle(Radio, defaultProps);
  itSupportsSx(Radio, defaultProps);
  itSupportsMargins(Radio, defaultProps);
  itRendersChildren(Radio, defaultProps);
  itSupportsRef(Radio, defaultProps, HTMLInputElement);

  it('connects input and label with given id', () => {
    const element = shallow(<Radio {...defaultProps} id="test-id" />);
    expect(element.render().find('input').attr('id')).toBe('test-id');
    expect(element.render().find('label').attr('for')).toBe('test-id');
  });

  it('has correct displayName', () => {
    expect(Radio.displayName).toEqual('@mantine/core/Radio');
  });
});
