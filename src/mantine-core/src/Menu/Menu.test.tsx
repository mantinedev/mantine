import React from 'react';
import { mount, shallow } from 'enzyme';
import { GearIcon } from '@modulz/radix-icons';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Hr } from '../Hr/Hr';
import { Paper } from '../Paper/Paper';
import { MenuButton } from './MenuButton/MenuButton';
import { Menu, MenuItem } from './Menu';

const defaultProps = {
  opened: true,
  onClose: () => {},
  children: <MenuItem>test-1</MenuItem>,
};

describe('@mantine/core/Menu', () => {
  checkAccessibility([
    mount(
      <Menu {...defaultProps}>
        <MenuItem icon={<GearIcon style={{ width: 12, height: 12 }} />}>Settings</MenuItem>
        <MenuItem disabled>Disabled</MenuItem>
        <Hr />
        <MenuItem>Messages</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    ),
  ]);

  itSupportsStyle(Menu, defaultProps);
  itSupportsClassName(Menu, defaultProps);
  itSupportsOthers(Menu, defaultProps);

  it('renders correct children', () => {
    const element = mount(
      <Menu {...defaultProps}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <Hr />
        <MenuItem>test-3</MenuItem>
        <Hr />
      </Menu>
    );

    expect(element.find(MenuButton)).toHaveLength(3);
    expect(element.find(Hr)).toHaveLength(2);
  });

  it('does not render if only incorrect or no children were passed', () => {
    const noChildren = shallow(<Menu {...defaultProps}>{null}</Menu>);

    const incorrectChildren = shallow(
      <Menu {...defaultProps}>
        <div>incorrect-child-1</div>
        <div>incorrect-child-2</div>
        <div>incorrect-child-3</div>
      </Menu>
    );

    expect(noChildren.type()).toBe(null);
    expect(incorrectChildren.type()).toBe(null);
  });

  it('passes shadow to Paper component', () => {
    const element = mount(
      <Menu {...defaultProps} shadow="xl">
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </Menu>
    );
    expect(element.find(Paper).prop('shadow')).toBe('xl');
  });

  it('calls onClose when escape key is pressed', () => {
    const spy = jest.fn();
    const element = mount(
      <Menu {...defaultProps} onClose={spy}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </Menu>
    );

    element.simulate('keydown', { nativeEvent: { code: 'Escape' } });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
