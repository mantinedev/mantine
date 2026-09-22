import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { Menubar, MenubarProps } from './Menubar';
import {
  useMenubar,
  type MenubarController,
  type MenubarControllerOptions,
} from './use-menubar/use-menubar';

const getTarget = (name: string) => screen.getByRole('menuitem', { name });
const focusElement = (element: HTMLElement) => act(() => element.focus());
const expectMenuOpen = (itemText: string) => expect(screen.getByText(itemText)).toBeInTheDocument();
const expectAllClosed = () => expect(screen.queryAllByRole('menu')).toHaveLength(0);

describe('@mantine/core/Menubar/controller', () => {
  function ControllerTest({
    options,
    menus = ['File', 'Edit', 'View'],
    onController,
    ...props
  }: Partial<MenubarProps> & {
    options?: MenubarControllerOptions;
    menus?: string[];
    onController: (controller: MenubarController) => void;
  }) {
    const controller = useMenubar(options);
    onController(controller);

    return (
      <Menubar controller={controller} {...props}>
        {menus.map((menu) => (
          <Menubar.Menu key={menu} withinPortal={false} transitionProps={{ duration: 0 }}>
            <Menubar.Target>{menu}</Menubar.Target>
            <Menubar.Dropdown>
              <Menu.Item>{`${menu} item 1`}</Menu.Item>
              <Menu.Item>{`${menu} item 2`}</Menu.Item>
            </Menubar.Dropdown>
          </Menubar.Menu>
        ))}
      </Menubar>
    );
  }

  let controller: MenubarController = null as any;
  const captureController = (value: MenubarController) => {
    controller = value;
  };

  it('takes the open state from the controller and ignores openIndex, defaultOpenIndex and onOpenChange', async () => {
    const onOpenChange = jest.fn();
    render(
      <ControllerTest
        onController={captureController}
        openIndex={2}
        defaultOpenIndex={2}
        onOpenChange={onOpenChange}
      />
    );

    expectAllClosed();

    await act(async () => controller.openMenu(0));
    expectMenuOpen('File item 1');
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('opens and closes menus from the controller', async () => {
    render(<ControllerTest onController={captureController} />);

    await act(async () => controller.openMenu(1));
    expectMenuOpen('Edit item 1');
    expect(getTarget('Edit')).toHaveAttribute('aria-expanded', 'true');

    await act(async () => controller.closeMenu());
    expectAllClosed();
  });

  it('reports the menus rendered by the associated Menubar', () => {
    render(<ControllerTest onController={captureController} />);

    expect(controller.getMenuCount()).toBe(3);
    expect(controller.getEnabledIndexes()).toStrictEqual([0, 1, 2]);
    expect(controller.getTargets()).toHaveLength(3);
  });

  it('updates the controller state when the user interacts with the menubar', async () => {
    render(<ControllerTest onController={captureController} />);

    await userEvent.click(getTarget('Edit'));
    expect(controller.openIndex).toBe(1);
    expect(controller.activeIndex).toBe(1);
    expect(controller.getOpenSource()).toBe('click');

    await userEvent.click(getTarget('Edit'));
    expect(controller.openIndex).toBeNull();
  });

  it('focuses a target from the controller', async () => {
    render(<ControllerTest onController={captureController} />);

    await act(async () => controller.focusMenu(2));
    expect(document.activeElement).toBe(getTarget('View'));
    expect(getTarget('View')).toHaveAttribute('tabindex', '0');
  });

  it('reads the tab stop written by the focus event it triggered itself', async () => {
    render(<ControllerTest onController={captureController} />);

    await act(async () => {
      controller.focusMenu(2);
      controller.focusNextMenu();
    });

    expect(controller.activeIndex).toBe(0);
    expect(document.activeElement).toBe(getTarget('File'));
  });

  it('opens a menu and focuses its first item from the controller', async () => {
    render(<ControllerTest onController={captureController} />);

    await act(async () => {
      controller.openMenu(0);
      controller.focusMenuItem(0, 'first');
    });

    await waitFor(() => expect(document.activeElement).toHaveTextContent('File item 1'));
  });

  it('uses the loop option of the controller instead of the loop prop', () => {
    render(<ControllerTest onController={captureController} options={{ loop: false }} loop />);

    focusElement(getTarget('View'));
    fireEvent.keyDown(getTarget('View'), { key: 'ArrowRight' });
    expect(document.activeElement).toBe(getTarget('View'));

    fireEvent.keyDown(getTarget('View'), { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(getTarget('Edit'));
  });

  it('resolves menu indexes when the open state comes from the controller on mount', async () => {
    render(<ControllerTest onController={captureController} options={{ defaultOpenIndex: 1 }} />);
    await waitFor(() => expectMenuOpen('Edit item 1'));
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '0');
  });

  it('keeps the opened menu when a menu is added after the initial render', async () => {
    const { rerender } = render(<ControllerTest onController={captureController} />);

    await act(async () => controller.openMenu(1));
    expectMenuOpen('Edit item 1');

    rerender(
      <>
        <ControllerTest onController={captureController} menus={['File', 'Edit', 'View', 'Help']} />
      </>
    );

    await waitFor(() => expect(controller.getMenuCount()).toBe(4));
    expectMenuOpen('Edit item 1');
  });
});
