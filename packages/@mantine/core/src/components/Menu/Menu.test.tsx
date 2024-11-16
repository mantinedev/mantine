import { cleanup } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Menu, MenuProps } from './Menu';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuTarget } from './MenuTarget/MenuTarget';

function TestContainer(props: MenuProps) {
  return (
    <Menu
      transitionProps={{ duration: 0 }}
      withinPortal={false}
      closeDelay={0}
      openDelay={0}
      {...props}
    >
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
const getControl = () => screen.getByRole('button', { name: 'test-target' });

describe('@mantine/core/Menu', () => {
  tests.axe([<TestContainer opened={false} key="1" />]);
  tests.itHasExtend({ component: Menu });
  tests.itHasClasses({ component: Menu });
  tests.itRendersChildren({ component: Menu, props: {} });

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

  it('toggles menu when target is hovered when trigger="click-hover"', async () => {
    render(<TestContainer trigger="click-hover" />);
    expectClosed();
    await userEvent.hover(getControl());
    expectOpened();
    await userEvent.unhover(getControl());
    expectClosed();
  });

  it('menu always stays open when target is clicked when trigger="click-hover"', async () => {
    render(<TestContainer trigger="click-hover" />);
    expectClosed();
    await userEvent.click(getControl());
    expectOpened();
    await userEvent.click(getControl());
    expectOpened();
    await userEvent.hover(getControl());
    expectOpened();
    await userEvent.unhover(getControl());
    expectOpened();
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
  it('correctly calls callbacks when opening and closing the uncontrolled menu via target click', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const onChange = jest.fn();

    render(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} />);
    expectClosed();

    await userEvent.click(getControl());
    expectOpened();

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(true);

    onOpen.mockReset();
    onClose.mockReset();
    onChange.mockReset();
    await userEvent.click(getControl());
    expectClosed();

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(false);
  });

  it('correctly calls callbacks when opening and closing the controlled menu only via prop', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const onChange = jest.fn();

    render(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />);
    expectClosed();

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();

    render(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened />);
    expectOpened();

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();

    render(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />);

    () => expect(screen.queryAllByRole('menu')).toHaveLength(1);
    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('correctly calls callbacks when opening and closing the controlled menu via target click', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const onChange = jest.fn();

    const { rerender } = render(
      <TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />
    );

    await userEvent.click(getControl());

    expectClosed();
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(true);

    onOpen.mockReset();
    onClose.mockReset();
    onChange.mockReset();
    rerender(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened />);

    expectOpened();
    await userEvent.click(getControl());

    expectOpened();
    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(false);

    rerender(
      <TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />
    );
    () => expect(screen.queryAllByRole('menu')).toHaveLength(1);
  });
});
