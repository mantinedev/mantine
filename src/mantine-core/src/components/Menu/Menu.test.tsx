import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  renderWithAct,
  actAsync,
} from '@mantine/tests';
import { Divider } from '../Divider';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { Menu, MenuProps } from './Menu';

const defaultProps: MenuProps = {
  transitionDuration: 0,
  menuButtonLabel: 'test-menu',
  withinPortal: false,
  children: [
    <Menu.Item key="1">test-1</Menu.Item>,
    <Menu.Item key="2">test-2</Menu.Item>,
    <Divider key="3" />,
    <Menu.Item key="4">test-3</Menu.Item>,
    <Divider key="5" />,
  ],
};

describe('@mantine/core/Menu', () => {
  checkAccessibility([
    <Menu opened {...defaultProps} />,
    <Menu opened={false} {...defaultProps} />,
  ]);
  itSupportsFocusEvents(Menu, defaultProps, '.mantine-ActionIcon-root');
  itSupportsSystemProps({
    component: Menu,
    props: defaultProps,
    displayName: '@mantine/core/Menu',
    refType: HTMLButtonElement,
  });

  it('calls onClose and onOpen function with corresponding events', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    await renderWithAct(<Menu onOpen={onOpen} onClose={onClose} {...defaultProps} />);
    userEvent.click(screen.getByLabelText('test-menu'));
    userEvent.click(screen.getByLabelText('test-menu'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('accepts control from props', async () => {
    const { container } = await renderWithAct(
      <Menu
        {...defaultProps}
        control={
          <button type="button" className="test-button">
            Test button
          </button>
        }
      />
    );

    expect(container.querySelector('.test-button')).toBeInTheDocument();
  });

  it('opens menu when controlled is clicked and trigger prop is "click"', async () => {
    const { container } = await renderWithAct(<Menu {...defaultProps} />);
    expect(container.querySelector('.mantine-Menu-body')).toBe(null);
    await actAsync(() => userEvent.click(screen.getByLabelText('test-menu')));
    expect(container.querySelector('.mantine-Menu-body')).toBeInTheDocument();
  });

  it('opens menu when controlled is hovered and trigger prop is "hover"', async () => {
    const { container } = await renderWithAct(<Menu {...defaultProps} trigger="hover" />);
    expect(container.querySelector('.mantine-Menu-body')).toBe(null);
    await actAsync(() => userEvent.hover(screen.getByLabelText('test-menu')));
    expect(container.querySelector('.mantine-Menu-body')).toBeInTheDocument();
  });

  it('preserves control onClick event', async () => {
    const spy = jest.fn();
    await renderWithAct(
      <Menu
        {...defaultProps}
        control={
          <button type="button" className="test-button" onClick={spy}>
            Test button
          </button>
        }
      />
    );

    await actAsync(() => userEvent.click(screen.getByLabelText('test-menu')));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('exposes Menu.Item and Menu.Label components', () => {
    expect(Menu.Item).toBe(MenuItem);
    expect(Menu.Label).toBe(MenuLabel);
  });
});
