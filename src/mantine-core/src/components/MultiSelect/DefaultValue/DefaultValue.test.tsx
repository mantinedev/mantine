import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  checkAccessibility,
} from '@mantine/tests';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { DefaultValue } from './DefaultValue';

const defaultProps = {
  label: 'test-label',
  onRemove: () => {},
  disabled: false,
  size: 'sm' as const,
};

describe('@mantine/core/MultiSelect/DefaultValue', () => {
  itSupportsClassName(DefaultValue, defaultProps);
  itSupportsStyle(DefaultValue, defaultProps);
  itSupportsOthers(DefaultValue, defaultProps);

  checkAccessibility([
    mount(<DefaultValue {...defaultProps} disabled />),
    mount(<DefaultValue {...defaultProps} disabled={false} />),
  ]);

  it('renders given label', () => {
    const element = shallow(<DefaultValue {...defaultProps} label="test-label-2" />);
    expect(element.find('span').text()).toBe('test-label-2');
  });

  it('does not render delete button if disabled', () => {
    const disabled = shallow(<DefaultValue {...defaultProps} disabled />);
    const notDisabled = shallow(<DefaultValue {...defaultProps} disabled={false} />);
    expect(disabled.find(CloseButton)).toHaveLength(0);
    expect(notDisabled.find(CloseButton)).toHaveLength(1);
  });

  it('calls onRemove when CloseButton is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<DefaultValue {...defaultProps} onRemove={spy} />);
    element.find(CloseButton).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(DefaultValue.displayName).toEqual('@mantine/core/MultiSelect/DefaultValue');
  });
});
