import React from 'react';
import { shallow } from 'enzyme';
import { SelectRightSection } from './SelectRightSection';
import { ChevronIcon } from './ChevronIcon';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';

describe('@mantine/core/SelectRightSection', () => {
  it('renders ChevronIcon when shouldClear is false', () => {
    const element = shallow(<SelectRightSection shouldClear={false} size="sm" />);
    expect(element.find(ChevronIcon)).toHaveLength(1);
    expect(element.find(CloseButton)).toHaveLength(0);
  });

  it('renders CloseButton when shouldClear is true', () => {
    const element = shallow(<SelectRightSection shouldClear size="sm" />);
    expect(element.find(ChevronIcon)).toHaveLength(0);
    expect(element.find(CloseButton)).toHaveLength(1);
  });

  it('sets aria-label and size on CloseButton', () => {
    const props = shallow(
      <SelectRightSection shouldClear size="sm" clearButtonLabel="test-label" />
    )
      .find(CloseButton)
      .props();
    expect(props.size).toBe('sm');
    expect(props['aria-label']).toBe('test-label');
  });

  it('calls onClear when CloseButton is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<SelectRightSection shouldClear size="sm" onClear={spy} />);
    element.find(CloseButton).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(SelectRightSection.displayName).toEqual('@mantine/core/SelectRightSection');
  });
});
