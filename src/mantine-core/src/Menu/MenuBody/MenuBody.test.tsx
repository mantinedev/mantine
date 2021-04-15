import React from 'react';
import { mount, shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Hr } from '../../Hr/Hr';
import { Paper } from '../../Paper/Paper';
import { MenuButton } from '../MenuButton/MenuButton';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuBody } from './MenuBody';

const defaultProps = {
  opened: true,
  onClose: () => {},
  children: <MenuItem>test-1</MenuItem>,
};

describe('@mantine/core/MenuBody', () => {
  itSupportsStyle(MenuBody, defaultProps);
  itSupportsClassName(MenuBody, defaultProps);
  itSupportsOthers(MenuBody, defaultProps);

  it('has correct displayName', () => {
    expect(MenuBody.displayName).toEqual('@mantine/core/MenuBody');
  });

  it('renders correct children', () => {
    const element = mount(
      <MenuBody {...defaultProps}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <Hr />
        <MenuItem>test-3</MenuItem>
        <Hr />
      </MenuBody>
    );

    expect(element.find(MenuButton)).toHaveLength(3);
    expect(element.find(Hr)).toHaveLength(2);
  });

  it('does not render if only incorrect or no children were passed', () => {
    const noChildren = shallow(<MenuBody {...defaultProps}>{null}</MenuBody>);

    const incorrectChildren = shallow(
      <MenuBody {...defaultProps}>
        <div>incorrect-child-1</div>
        <div>incorrect-child-2</div>
        <div>incorrect-child-3</div>
      </MenuBody>
    );

    expect(noChildren.type()).toBe(null);
    expect(incorrectChildren.type()).toBe(null);
  });

  it('passes shadow to Paper component', () => {
    const element = mount(
      <MenuBody {...defaultProps} shadow="xl">
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </MenuBody>
    );
    expect(element.find(Paper).prop('shadow')).toBe('xl');
  });

  it('calls onClose when escape key is pressed', () => {
    const spy = jest.fn();
    const element = mount(
      <MenuBody {...defaultProps} onClose={spy}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </MenuBody>
    );

    element.simulate('keydown', { nativeEvent: { code: 'Escape' } });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets given z-index to Paper', () => {
    const element = mount(
      <MenuBody {...defaultProps} zIndex={563}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </MenuBody>
    );
    expect(element.find(Paper).prop('style').zIndex).toBe(563);
  });
});
