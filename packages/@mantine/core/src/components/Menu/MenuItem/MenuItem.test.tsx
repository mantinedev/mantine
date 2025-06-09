import { act } from '@testing-library/react';
import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuItem, MenuItemProps, MenuItemStylesNames } from './MenuItem';

const TestContainer = createContextContainer<any>(MenuItem, Menu, { opened: true });

const defaultProps: MenuItemProps = {
  children: 'test-menu-item',
  leftSection: '$$',
};

describe('@mantine/core/MenuItem', () => {
  tests.itSupportsSystemProps<MenuItemProps, MenuItemStylesNames>({
    component: TestContainer as any,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/MenuItem',
    stylesApiSelectors: ['item', 'itemSection', 'itemLabel'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });

  it('allows to add onMouseEnter and onMouseLeave events', async () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    render(<TestContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />);

    await userEvent.hover(screen.getByRole('menuitem'));
    expect(onMouseEnter).toHaveBeenCalled();
    expect(onMouseLeave).not.toHaveBeenCalled();

    await userEvent.unhover(screen.getByRole('menuitem'));
    expect(onMouseLeave).toHaveBeenCalled();
  });

  it('allows to add onClick event', async () => {
    const spy = jest.fn();
    render(<TestContainer onClick={spy} />);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('menuitem'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders given leftSection and rightSection', () => {
    render(<TestContainer leftSection="test-left-section" rightSection="test-right-section" />);
    expect(screen.getByText('test-left-section')).toBeInTheDocument();
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('should not prevent default mousedown behavior for draggable elements inside Menu.Item', () => {
    const onDragStart = jest.fn();
    const onMouseDown = jest.fn();

    render(
      <Menu opened closeOnItemClick={false} withInitialFocusPlaceholder={false}>
        <Menu.Target>
          <button type="button">Target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <div
              data-testid="draggable-element"
              draggable
              onDragStart={onDragStart}
              onMouseDown={onMouseDown}
              role="button"
              tabIndex={0}
            >
              Draggable content
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    const draggableElement = screen.getByTestId('draggable-element');

    const mouseDownEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      button: 0, // left mouse button
    });

    const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

    act(() => {
      draggableElement.dispatchEvent(mouseDownEvent);
    });

    expect(onMouseDown).toHaveBeenCalled();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should still prevent default mousedown behavior for non-draggable elements', () => {
    const onMouseDown = jest.fn();

    render(
      <Menu opened closeOnItemClick={false} withInitialFocusPlaceholder={false}>
        <Menu.Target>
          <button type="button">Target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <div data-testid="regular-element" onMouseDown={onMouseDown} role="button" tabIndex={0}>
              Regular content
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    const regularElement = screen.getByTestId('regular-element');

    const mouseDownEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      button: 0,
    });

    const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

    act(() => {
      regularElement.dispatchEvent(mouseDownEvent);
    });

    expect(onMouseDown).toHaveBeenCalled();

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not prevent default mousedown for interactive elements', () => {
    const onMouseDown = jest.fn();

    render(
      <Menu opened closeOnItemClick={false} withInitialFocusPlaceholder={false}>
        <Menu.Target>
          <button type="button">Target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <input
              data-testid="input-element"
              type="text"
              onMouseDown={onMouseDown}
              placeholder="Test input"
            />
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    const inputElement = screen.getByTestId('input-element');
    const mouseDownEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      button: 0,
    });

    const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

    act(() => {
      inputElement.dispatchEvent(mouseDownEvent);
    });

    expect(onMouseDown).toHaveBeenCalled();
    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });
});
