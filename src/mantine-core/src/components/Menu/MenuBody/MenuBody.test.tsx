import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsRef,
} from '@mantine/tests';
import { Divider } from '../../Divider/Divider';
import { Paper } from '../../Paper/Paper';
import { MenuButton } from '../MenuButton/MenuButton';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuLabel } from '../MenuLabel/MenuLabel';
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
  itSupportsRef(MenuBody, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    MenuBody,
    { ...defaultProps, children: [<Divider />, <MenuLabel>label</MenuLabel>] },
    ['divider', 'label'],
    'Menu'
  );

  it('has correct displayName', () => {
    expect(MenuBody.displayName).toEqual('@mantine/core/MenuBody');
  });

  it('renders correct children', () => {
    const element = mount(
      <MenuBody {...defaultProps}>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <Divider />
        <MenuItem>test-3</MenuItem>
        <Divider />
      </MenuBody>
    );

    expect(element.find(MenuButton)).toHaveLength(3);
    expect(element.find(Divider)).toHaveLength(2);
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
});
