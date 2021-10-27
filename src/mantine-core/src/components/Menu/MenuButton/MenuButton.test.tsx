import React from 'react';
import {
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itIsPolymorphic,
} from '@mantine/tests';
import { shallow } from 'enzyme';
import { MenuButton } from './MenuButton';

const defaultProps = {
  onHover: () => {},
  hovered: false,
};

describe('@mantine/core/MenuButton', () => {
  itSupportsClassName(MenuButton, defaultProps);
  itSupportsStyle(MenuButton, defaultProps);
  itSupportsOthers(MenuButton, defaultProps);
  itIsPolymorphic(MenuButton, defaultProps);
  itSupportsRef(MenuButton, defaultProps, HTMLButtonElement);
  itRendersChildren(MenuButton, defaultProps);

  it('sets disabled attribute based on disabled prop', () => {
    const disabled = shallow(
      <MenuButton {...defaultProps} disabled>
        test
      </MenuButton>
    );
    const notDisabled = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });

  it('trigger onHover function on mouse enter', () => {
    const spy = jest.fn();

    const element = shallow(
      <MenuButton {...defaultProps} onHover={spy}>
        test
      </MenuButton>
    );

    element.simulate('mouseenter');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders icon based on icon prop', () => {
    const withoutIcon = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    const withIcon = shallow(
      <MenuButton {...defaultProps} icon="$$$">
        test
      </MenuButton>
    );

    expect(withoutIcon.render().find('.mantine-Menu-itemIcon')).toHaveLength(0);
    expect(withIcon.render().find('.mantine-Menu-itemIcon').text()).toBe('$$$');
  });

  it('renders given right section', () => {
    const withoutCmd = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    const withCmd = shallow(
      <MenuButton {...defaultProps} rightSection={<span data-cmd>$$$</span>}>
        test
      </MenuButton>
    );

    expect(withoutCmd.render().find('span[data-cmd]')).toHaveLength(0);
    expect(withCmd.render().find('span[data-cmd]').text()).toBe('$$$');
  });

  it('has correct displayName', () => {
    expect(MenuButton.displayName).toEqual('@mantine/core/MenuButton');
  });
});
