import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsRef } from '@mantine/tests';
import { SelectDropdown } from './SelectDropdown';
import { Paper } from '../../Paper';

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
};

describe('@mantine/core/SelectDropdown', () => {
  itSupportsRef(SelectDropdown, defaultProps, HTMLDivElement);
  it('sets correct id and aria-labelledby props on listbox', () => {
    const props = shallow(<SelectDropdown {...defaultProps} />)
      .find(Paper)
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
