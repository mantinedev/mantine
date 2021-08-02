import React from 'react';
import { shallow } from 'enzyme';
import { Transition } from '../../Transition/Transition';
import { SelectDropdown } from './SelectDropdown';

const defaultProps = {
  mounted: true,
  transition: 'rotate-left' as const,
  transitionDuration: 0,
  transitionTimingFunction: 'ease',
  uuid: 'test-id',
  shadow: 'xs',
  maxDropdownHeight: 220,
  children: null,
  __staticSelector: 'test-selector',
  size: 'xs' as const,
  elementRef: () => {},
};

describe('@mantine/core/SelectDropdown', () => {
  it('passes mounted transition, duration and timingFunction props to Transition component', () => {
    const props = shallow(<SelectDropdown {...defaultProps} />)
      .find(Transition)
      .props();
    expect(props.mounted).toBe(true);
    expect(props.duration).toBe(0);
    expect(props.timingFunction).toBe('ease');
    expect(props.transition).toBe('rotate-left');
  });

  it('sets correct id and aria-labelledby props on listbox', () => {
    const props = shallow(<SelectDropdown {...defaultProps} />)
      .find(Transition)
      .dive()
      .find('[role="listbox"]')
      .props();
    expect(props.id).toBe('test-id-items');
    expect(props['aria-labelledby']).toBe('test-id-label');
  });

  it('has correct displayName', () => {
    expect(SelectDropdown.displayName).toEqual('@mantine/core/SelectDropdown');
  });
});
