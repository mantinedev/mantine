import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { checkAccessibility } from '@mantine/tests';
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

  it('calls onOpen and onClose functions when dropdown state changes', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<TestContainer onOpen={onOpen} onClose={onClose} />);

    await userEvent.click(getControl());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    await userEvent.click(getControl());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<TestContainer opened onChange={spy} />);
    await userEvent.click(getControl());

    expect(spy).toHaveBeenCalledWith(false);
    expectOpened();
  });

  it('toggles menu when target is clicked when trigger="click"', async () => {
    render(<TestContainer />);

    expectClosed();
    await userEvent.click(getControl());

    expectOpened();
    await userEvent.click(getControl());
    expectClosed();
  });

  it('toggles menu when target is hovered when trigger="hover"', async () => {
    render(<TestContainer trigger="hover" />);
    expectClosed();

    await userEvent.hover(getControl());
    expectOpened();

    await userEvent.unhover(getControl());
    expectClosed();
  });

  it('supports defaultOpened prop', () => {
    render(<TestContainer defaultOpened />);
    expectOpened();
  });

  it('closes menu on click outside', async () => {
    render(<TestContainer defaultOpened />);
    await userEvent.click(document.body);
    expectClosed();
  });

  it('does not close menu on click outside if closeOnClickOutside={false}', async () => {
    render(<TestContainer defaultOpened closeOnClickOutside={false} />);
    await userEvent.click(document.body);
    expectOpened();
  });

  it('closes menu when item is clicked', async () => {
    render(<TestContainer defaultOpened />);
    await userEvent.click(screen.getByText('test-item-1'));
    expectClosed();
  });

  it('does not close menu when item is clicked and closeOnItemClick={false}', async () => {
    render(<TestContainer defaultOpened closeOnItemClick={false} />);
    await userEvent.click(screen.getByText('test-item-1'));
    expectOpened();
  });

  it('closes menu when item is clicked and closeOnItemClick={false} but item has closeMenuOnClick={true} prop', async () => {
    render(<TestContainer defaultOpened closeOnItemClick={false} />);
    await userEvent.click(screen.getByText('test-item-3'));
    expectClosed();
  });

  it('does not close menu when item with closeMenuOnClick={false} prop is clicked', async () => {
    render(<TestContainer defaultOpened closeOnItemClick />);
    await userEvent.click(screen.getByText('test-item-2'));
    expectOpened();

    cleanup();
  });

  it('sets dropdown z-index based on zIndex prop', () => {
    render(<TestContainer defaultOpened zIndex={452} />);
    expect(screen.getByRole('menu')).toHaveStyle({ zIndex: 452 });
  });

  it('correctly handles withArrow={true}', () => {
    render(<TestContainer defaultOpened withArrow />);
    expect(document.querySelectorAll('.mantine-Menu-arrow')).toHaveLength(1);
  });

  it('correctly handles withArrow={false}', () => {
    render(<TestContainer defaultOpened withArrow={false} />);
    expect(document.querySelectorAll('.mantine-Menu-arrow')).toHaveLength(0);
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
