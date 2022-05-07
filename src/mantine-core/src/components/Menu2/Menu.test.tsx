import React from 'react';
import { checkAccessibility } from '@mantine/tests';
import { Menu, MenuProps } from './Menu';

function TestContainer(props: MenuProps) {
  return (
    <Menu transitionDuration={0} closeDelay={0} openDelay={0} {...props}>
      <Menu.Target>
        <button type="button">test-target</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>test-item-1</Menu.Item>
        <Menu.Item>test-item-2</Menu.Item>
        <Menu.Item>test-item-3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

describe('@mantine/core/Menu', () => {
  checkAccessibility([<TestContainer opened />]);

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@mantine/core/Menu');
  });
});
