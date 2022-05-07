import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { checkAccessibility, wait } from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { Menu, MenuProps } from './Menu';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuTarget } from './MenuTarget/MenuTarget';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuDivider } from './MenuDivider/MenuDivider';

function TestContainer(props: MenuProps) {
  return (
    <Menu transitionDuration={0} closeDelay={0} openDelay={0} {...props}>
      <Menu.Target>
        <button type="button">test-target</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>test-item-1</Menu.Item>
        <Menu.Item closeMenuOnClick={false}>test-item-2</Menu.Item>
        <Menu.Item closeMenuOnClick>test-item-3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

const expectClosed = () => expect(screen.queryAllByRole('menu')).toHaveLength(0);
const expectOpened = () => expect(screen.getByRole('menu')).toBeInTheDocument();
const getControl = () => screen.getByRole('button');

describe('@mantine/core/Menu', () => {
  checkAccessibility([<TestContainer opened />, <TestContainer opened={false} />]);

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<TestContainer opened onChange={spy} />);
    userEvent.click(getControl());

    expect(spy).toHaveBeenCalledWith(false);
    expectOpened();
  });

  it('toggles menu when target is clicked when trigger="click"', () => {
    render(<TestContainer />);

    expectClosed();
    userEvent.click(getControl());

    expectOpened();
    userEvent.click(getControl());
    expectClosed();
  });

  it('toggles menu when target is hovered when trigger="hover"', () => {
    render(<TestContainer trigger="hover" />);
    expectClosed();

    userEvent.hover(getControl());
    expectOpened();

    userEvent.unhover(getControl());
    expectClosed();
  });

  it('supports defaultOpened prop', () => {
    render(<TestContainer defaultOpened />);
    expectOpened();
  });

  it('closes menu on click outside', () => {
    render(<TestContainer defaultOpened />);
    userEvent.click(document.body);
    expectClosed();
  });

  it('does not close menu on click outside if closeOnClickOutside={false}', () => {
    render(<TestContainer defaultOpened closeOnClickOutside={false} />);
    userEvent.click(document.body);
    expectOpened();
  });

  it('closes menu when item is clicked', () => {
    render(<TestContainer defaultOpened />);
    userEvent.click(screen.getByText('test-item-1'));
    expectClosed();
  });

  it('does not close menu when item is clicked and closeOnItemClick={false}', () => {
    render(<TestContainer defaultOpened closeOnItemClick={false} />);
    userEvent.click(screen.getByText('test-item-1'));
    expectOpened();
  });

  it('closes menu when item is clicked and closeOnItemClick={false} but item has closeMenuOnClick={true} prop', () => {
    render(<TestContainer defaultOpened closeOnItemClick={false} />);
    userEvent.click(screen.getByText('test-item-3'));
    expectClosed();
  });

  it('does not close menu when item with closeMenuOnClick={false} prop is clicked', () => {
    render(<TestContainer defaultOpened closeOnItemClick />);
    userEvent.click(screen.getByText('test-item-2'));
    expectOpened();

    cleanup();
  });

  it('handles arrow keys correctly', async () => {
    const { container } = render(<TestContainer defaultOpened />);
    await wait(10);
    expect(container.querySelector('[data-menu-dropdown]')).toHaveFocus();

    userEvent.type(container.querySelector('[data-menu-dropdown]'), '{arrowdown}');
    expect(container.querySelectorAll('[data-menu-item]')[0]).toHaveFocus();

    // ... RTL refuses to work with other menuitem focus tests, menu dropdown is closed for no reason
  });

  it('exposes related components as static properties', () => {
    expect(Menu.Item).toBe(MenuItem);
    expect(Menu.Dropdown).toBe(MenuDropdown);
    expect(Menu.Target).toBe(MenuTarget);
    expect(Menu.Label).toBe(MenuLabel);
    expect(Menu.Divider).toBe(MenuDivider);
  });

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@mantine/core/Menu');
  });
});
