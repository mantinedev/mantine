import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Divider } from '../Divider/Divider';
import { Button } from '../Button/Button';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { Menu } from './Menu';

const defaultProps = {
  opened: true,
  children: <MenuItem>test-item</MenuItem>,
};

describe('@mantine/core/Menu', () => {
  checkAccessibility([
    render(
      <Menu menuButtonLabel="test menu">
        <Menu.Item>test-1</Menu.Item>
        <Menu.Item>test-2</Menu.Item>
        <Divider />
        <Menu.Item>test-3</Menu.Item>
        <Divider />
      </Menu>
    ),
  ]);

  itSupportsClassName(Menu, defaultProps);
  itSupportsStyle(Menu, defaultProps);
  itSupportsOthers(Menu, defaultProps);
  itSupportsMargins(Menu, defaultProps);
  itSupportsSx(Menu, defaultProps);
  itSupportsRef(Menu, defaultProps, HTMLButtonElement);

  it('calls onClose and onOpen function with corresponding events', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const element = shallow(
      <Menu onOpen={onOpen} onClose={onClose}>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
      </Menu>
    );

    element.find(ActionIcon).simulate('click');
    element.find(ActionIcon).simulate('click');

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('accepts control from props', () => {
    const element = shallow(
      <Menu control={<Button>Test button</Button>}>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
      </Menu>
    );

    expect(element.find(Button).type()).toBe(Button);
    expect(element.find(Button).dive().text()).toBe('Test button');
  });

  it('uses menuId prop to bind control and menu body', () => {
    const element = shallow(
      <Menu menuId="test-id">
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
      </Menu>
    );

    expect(element.find(ActionIcon).prop('aria-controls')).toBe('test-id');
  });

  it('exports Menu.Item and Menu.Label components', () => {
    expect(Menu.Item).toBe(MenuItem);
    expect(Menu.Label).toBe(MenuLabel);
  });

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@mantine/core/Menu');
  });
});
