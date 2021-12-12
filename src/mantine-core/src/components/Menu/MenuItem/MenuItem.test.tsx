import React from 'react';
import {
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { shallow } from 'enzyme';
import { MenuItem } from './MenuItem';

const defaultProps = {
  onHover: () => {},
  hovered: false,
};

describe('@mantine/core/MenuItem', () => {
  itSupportsClassName(MenuItem, defaultProps);
  itSupportsStyle(MenuItem, defaultProps);
  itSupportsOthers(MenuItem, defaultProps);
  itIsPolymorphic(MenuItem, defaultProps, { dive: 1 });
  itSupportsSx(MenuItem, defaultProps);
  itSupportsRef(MenuItem, defaultProps, HTMLButtonElement);
  itRendersChildren(MenuItem, defaultProps);

  it('sets disabled attribute based on disabled prop', () => {
    const disabled = shallow(
      <MenuItem<'button'> {...defaultProps} disabled>
        test
      </MenuItem>
    );
    const notDisabled = shallow(<MenuItem {...defaultProps}>test</MenuItem>);
    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });

  it('trigger onHover function on mouse enter', () => {
    const spy = jest.fn();

    const element = shallow(
      <MenuItem {...defaultProps} onHover={spy}>
        test
      </MenuItem>
    );

    element.simulate('mouseenter');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders icon based on icon prop', () => {
    const withoutIcon = shallow(<MenuItem {...defaultProps}>test</MenuItem>);
    const withIcon = shallow(
      <MenuItem {...defaultProps} icon="$$$">
        test
      </MenuItem>
    );

    expect(withoutIcon.render().find('.mantine-Menu-itemIcon')).toHaveLength(0);
    expect(withIcon.render().find('.mantine-Menu-itemIcon').text()).toBe('$$$');
  });

  it('renders given right section', () => {
    const withoutCmd = shallow(<MenuItem {...defaultProps}>test</MenuItem>);
    const withCmd = shallow(
      <MenuItem {...defaultProps} rightSection={<span data-cmd>$$$</span>}>
        test
      </MenuItem>
    );

    expect(withoutCmd.render().find('span[data-cmd]')).toHaveLength(0);
    expect(withCmd.render().find('span[data-cmd]').text()).toBe('$$$');
  });

  it('has correct displayName', () => {
    expect(MenuItem.displayName).toEqual('@mantine/core/MenuItem');
  });
});
