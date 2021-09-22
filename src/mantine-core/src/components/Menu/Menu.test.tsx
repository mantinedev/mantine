import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@mantine/tests';
import { Divider } from '../Divider/Divider';
import { Button } from '../Button/Button';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MenuBody } from './MenuBody/MenuBody';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { Menu } from './Menu';

const defaultProps = {
  opened: true,
  children: <MenuItem>test-item</MenuItem>,
};

describe('@mantine/core/Menu', () => {
  checkAccessibility([
    mount(
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
  itSupportsRef(Menu, defaultProps, HTMLButtonElement, 'elementRef');

  it('passes props to MenuBody component', () => {
    const element = shallow(
      <Menu
        opened
        shadow="xl"
        size="xs"
        transitionDuration={645}
        closeOnItemClick={false}
        menuBodyProps={{ 'data-test-menu': true, style: { color: 'red' } }}
      >
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
        <Menu.Item>test-item</Menu.Item>
      </Menu>
    ).find(MenuBody);

    expect(element.prop('children')).toHaveLength(3);
    expect(element.prop('shadow')).toBe('xl');
    expect(element.prop('size')).toBe('xs');
    expect(element.prop('transitionDuration')).toBe(645);
    expect(element.prop('closeOnItemClick')).toBe(false);
    expect(element.prop('data-test-menu')).toBe(true);
    expect(element.prop('style').color).toBe('red');
  });

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
    expect(element.find(MenuBody).prop('id')).toBe('test-id');
  });

  it('exports Menu.Item and Menu.Label components', () => {
    expect(Menu.Item).toBe(MenuItem);
    expect(Menu.Label).toBe(MenuLabel);
  });

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@mantine/core/Menu');
  });
});
