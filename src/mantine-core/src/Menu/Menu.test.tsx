import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  isHasComposableAttribute,
} from '@mantine/tests';
import { Hr } from '../Hr/Hr';
import { Button } from '../Button/Button';
import { Menu, MenuBody, MenuItem } from './Menu';

const defaultProps = {
  children: <MenuItem>test-item</MenuItem>,
};

describe('@mantine/core/Menu', () => {
  checkAccessibility([
    mount(
      <Menu menuButtonLabel="test menu">
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <Hr />
        <MenuItem>test-3</MenuItem>
        <Hr />
      </Menu>
    ),
  ]);

  itSupportsClassName(Menu, defaultProps);
  itSupportsStyle(Menu, defaultProps);
  itSupportsOthers(Menu, defaultProps);
  isHasComposableAttribute(Menu, defaultProps);
  itSupportsRef(Menu, defaultProps, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@mantine/core/Menu');
  });

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
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
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
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
      </Menu>
    );

    element.find('[data-mantine-menu]').simulate('click');
    element.find('[data-mantine-menu]').simulate('click');

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('accepts control from props', () => {
    const element = shallow(
      <Menu control={<Button>Test button</Button>}>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
      </Menu>
    );

    expect(element.find('[data-mantine-menu]').type()).toBe(Button);
    expect(element.render().find('[data-mantine-menu]').text()).toBe('Test button');
  });

  it('uses menuId prop to bind control and menu body', () => {
    const element = shallow(
      <Menu menuId="test-id">
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
      </Menu>
    );

    expect(element.find('[data-mantine-menu]').prop('aria-controls')).toBe('test-id');
    expect(element.find(MenuBody).prop('id')).toBe('test-id');
  });

  it('passes zIndex to MenuBody', () => {
    const element = shallow(
      <Menu menuId="test-id" zIndex={785}>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
        <MenuItem>test-item</MenuItem>
      </Menu>
    );

    expect(element.find(MenuBody).prop('zIndex')).toBe(785);
  });
});
