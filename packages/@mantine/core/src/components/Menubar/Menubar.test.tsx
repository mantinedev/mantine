import { useState } from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { Modal } from '../Modal';
import { Menubar, MenubarProps, MenubarStylesNames } from './Menubar';
import { MenubarDropdown } from './MenubarDropdown/MenubarDropdown';
import { MenubarMenu } from './MenubarMenu/MenubarMenu';
import { MenubarTarget } from './MenubarTarget/MenubarTarget';

const defaultProps: MenubarProps = {
  children: (
    <Menubar.Menu withinPortal={false}>
      <Menubar.Target>File</Menubar.Target>
      <Menubar.Dropdown>
        <Menu.Item>New file</Menu.Item>
      </Menubar.Dropdown>
    </Menubar.Menu>
  ),
};

function TestContainer(props: Partial<MenubarProps>) {
  return (
    <Menubar {...props}>
      <Menubar.Menu withinPortal={false} transitionProps={{ duration: 0 }}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>New file</Menu.Item>
          <Menu.Item>Open</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu withinPortal={false} transitionProps={{ duration: 0 }}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu withinPortal={false} transitionProps={{ duration: 0 }}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Zoom in</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}

const getTarget = (name: string) => screen.getByRole('menuitem', { name });
const focusElement = (element: HTMLElement) => act(() => element.focus());
const expectMenuOpen = (itemText: string) => expect(screen.getByText(itemText)).toBeInTheDocument();
const expectAllClosed = () => expect(screen.queryAllByRole('menu')).toHaveLength(0);

describe('@mantine/core/Menubar', () => {
  tests.itSupportsSystemProps<MenubarProps, MenubarStylesNames>({
    component: Menubar,
    props: defaultProps,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Menubar',
    stylesApiSelectors: ['root', 'target'],
  });

  it('exposes related components as static properties', () => {
    expect(Menubar.Menu).toBe(MenubarMenu);
    expect(Menubar.Target).toBe(MenubarTarget);
    expect(Menubar.Dropdown).toBe(MenubarDropdown);
  });

  it('has correct displayName', () => {
    expect(Menubar.displayName).toBe('@mantine/core/Menubar');
  });

  it('renders root with role="menubar" and horizontal orientation', () => {
    render(<TestContainer />);
    const menubar = screen.getByRole('menubar');
    expect(menubar).toBeInTheDocument();
    expect(menubar).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders targets with role="menuitem" and aria-haspopup="menu"', () => {
    render(<TestContainer />);
    expect(getTarget('File')).toHaveAttribute('aria-haspopup', 'menu');
    expect(getTarget('Edit')).toHaveAttribute('aria-haspopup', 'menu');
    expect(getTarget('View')).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('uses a single tab stop (roving tabindex)', () => {
    render(<TestContainer />);
    expect(getTarget('File')).toHaveAttribute('tabindex', '0');
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '-1');
    expect(getTarget('View')).toHaveAttribute('tabindex', '-1');
  });

  it('opens and closes a menu on target click', async () => {
    render(<TestContainer />);
    expectAllClosed();

    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');
    expect(getTarget('File')).toHaveAttribute('aria-expanded', 'true');
    expect(getTarget('File')).toHaveAttribute('data-expanded', 'true');

    await userEvent.click(getTarget('File'));
    expectAllClosed();
  });

  it('keeps only one menu open at a time and switches on click', () => {
    render(<TestContainer />);
    // fireEvent.click does not fire mouseover: covers clicks that are not
    // preceded by hover (keyboard/assistive technology activation)
    fireEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    fireEvent.click(getTarget('Edit'));
    expectMenuOpen('Undo');
    expect(screen.queryByText('New file')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('menu')).toHaveLength(1);
  });

  it('switches the opened menu on hover once a menu is open (trigger="click")', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    await userEvent.hover(getTarget('Edit'));
    expectMenuOpen('Undo');
    expect(screen.queryByText('New file')).not.toBeInTheDocument();
  });

  it('closes the menu on the first target click after switching menus with hover (trigger="click")', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    await userEvent.hover(getTarget('Edit'));
    expectMenuOpen('Undo');

    await userEvent.click(getTarget('Edit'));
    expectAllClosed();
  });

  it('does not open a menu on hover when all menus are closed (trigger="click")', async () => {
    render(<TestContainer />);
    await userEvent.hover(getTarget('File'));
    expectAllClosed();
  });

  it('opens a menu on hover when trigger="hover"', async () => {
    render(<TestContainer trigger="hover" />);
    expectAllClosed();
    await userEvent.hover(getTarget('File'));
    expectMenuOpen('New file');
  });

  it('closes a hover-opened menu when the pointer leaves (trigger="hover")', async () => {
    render(<TestContainer trigger="hover" />);
    await userEvent.hover(getTarget('File'));
    expectMenuOpen('New file');

    await userEvent.unhover(getTarget('File'));
    await waitFor(() => expectAllClosed());
  });

  it('applies the style prop to the target', () => {
    render(
      <Menubar>
        <Menubar.Menu withinPortal={false}>
          <Menubar.Target style={{ color: 'rgb(255, 0, 0)' }}>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    );

    expect(getTarget('File')).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('moves the active target with ArrowRight/ArrowLeft', () => {
    render(<TestContainer />);
    focusElement(getTarget('File'));

    fireEvent.keyDown(getTarget('File'), { key: 'ArrowRight' });
    expect(getTarget('Edit')).toHaveFocus();
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '0');
    expect(getTarget('File')).toHaveAttribute('tabindex', '-1');

    fireEvent.keyDown(getTarget('Edit'), { key: 'ArrowLeft' });
    expect(getTarget('File')).toHaveFocus();
  });

  it('wraps with arrow navigation by default', () => {
    render(<TestContainer />);
    focusElement(getTarget('File'));
    fireEvent.keyDown(getTarget('File'), { key: 'ArrowLeft' });
    expect(getTarget('View')).toHaveFocus();
  });

  it('does not wrap when loop={false}', () => {
    render(<TestContainer loop={false} />);
    focusElement(getTarget('File'));
    fireEvent.keyDown(getTarget('File'), { key: 'ArrowLeft' });
    expect(getTarget('File')).toHaveFocus();
  });

  it('Home and End move to the first and last targets', () => {
    render(<TestContainer />);
    focusElement(getTarget('Edit'));

    fireEvent.keyDown(getTarget('Edit'), { key: 'End' });
    expect(getTarget('View')).toHaveFocus();

    fireEvent.keyDown(getTarget('View'), { key: 'Home' });
    expect(getTarget('File')).toHaveFocus();
  });

  it('opens the menu with ArrowDown on a target', () => {
    render(<TestContainer />);
    focusElement(getTarget('File'));
    fireEvent.keyDown(getTarget('File'), { key: 'ArrowDown' });
    expectMenuOpen('New file');
  });

  it('opens the menu with Enter on a target', () => {
    render(<TestContainer />);
    focusElement(getTarget('Edit'));
    fireEvent.keyDown(getTarget('Edit'), { key: 'Enter' });
    expectMenuOpen('Undo');
  });

  it('closes the open menu on Escape', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    focusElement(screen.getByText('New file').closest('button')!);
    await userEvent.keyboard('{Escape}');
    expectAllClosed();
  });

  it('closes the menu when Tab is pressed inside the dropdown', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    const item = screen.getByText('New file').closest('button')!;
    focusElement(item);
    fireEvent.keyDown(item, { key: 'Tab' });
    expectAllClosed();
  });

  it('closes the menu when Tab is pressed on an open target', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');

    focusElement(getTarget('File'));
    fireEvent.keyDown(getTarget('File'), { key: 'Tab' });
    expectAllClosed();
  });

  it('closes the menu when an item is clicked', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    await userEvent.click(screen.getByText('New file'));
    expectAllClosed();
  });

  it('switches to the adjacent menu with ArrowRight from inside the dropdown', async () => {
    render(<TestContainer />);
    await userEvent.click(getTarget('File'));
    const item = screen.getByText('New file').closest('button')!;
    focusElement(item);

    fireEvent.keyDown(item, { key: 'ArrowRight' });
    expectMenuOpen('Undo');
    expect(screen.queryByText('New file')).not.toBeInTheDocument();
  });

  it('keeps the tab stop on an enabled target when the first target is disabled', () => {
    render(
      <Menubar>
        <Menubar.Menu withinPortal={false}>
          <Menubar.Target disabled>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu withinPortal={false}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    );

    expect(getTarget('File')).toBeDisabled();
    expect(getTarget('File')).toHaveAttribute('tabindex', '-1');
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '0');
  });

  it('does not open a data-disabled target on click', async () => {
    render(
      <Menubar>
        <Menubar.Menu withinPortal={false}>
          <Menubar.Target data-disabled>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    );

    await userEvent.click(getTarget('File'));
    expectAllClosed();
  });

  it('keeps menu indexes in DOM order when menus are added dynamically', async () => {
    function Dynamic() {
      const [withExtra, setWithExtra] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setWithExtra(true)}>
            add
          </button>
          <Menubar>
            {withExtra && (
              <Menubar.Menu withinPortal={false}>
                <Menubar.Target>Extra</Menubar.Target>
                <Menubar.Dropdown>
                  <Menu.Item>Extra item</Menu.Item>
                </Menubar.Dropdown>
              </Menubar.Menu>
            )}
            <Menubar.Menu withinPortal={false}>
              <Menubar.Target>File</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item>New file</Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>
          </Menubar>
        </>
      );
    }

    render(<Dynamic />);
    await userEvent.click(screen.getByText('add'));

    await userEvent.click(getTarget('File'));
    expectMenuOpen('New file');
    expect(screen.queryByText('Extra item')).not.toBeInTheDocument();
  });

  it('moves the tab stop to an enabled target when the active target becomes disabled', () => {
    function Dynamic() {
      const [disabled, setDisabled] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setDisabled(true)}>
            disable
          </button>
          <Menubar>
            <Menubar.Menu withinPortal={false}>
              <Menubar.Target disabled={disabled}>File</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item>New file</Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>
            <Menubar.Menu withinPortal={false}>
              <Menubar.Target>Edit</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item>Undo</Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>
          </Menubar>
        </>
      );
    }

    render(<Dynamic />);
    expect(getTarget('File')).toHaveAttribute('tabindex', '0');

    fireEvent.click(screen.getByText('disable'));

    expect(getTarget('File')).toHaveAttribute('tabindex', '-1');
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '0');
  });

  it('supports controlled openIndex', () => {
    const { rerender } = render(<TestContainer openIndex={0} />);
    expectMenuOpen('New file');

    rerender(<TestContainer openIndex={1} />);
    expectMenuOpen('Undo');
    expect(screen.queryByText('New file')).not.toBeInTheDocument();

    rerender(<TestContainer openIndex={null} />);
    expectAllClosed();
  });

  it('closes an initially opened menu on the first target click', async () => {
    render(<TestContainer defaultOpenIndex={0} />);
    expectMenuOpen('New file');

    await userEvent.click(getTarget('File'));
    expectAllClosed();
  });

  it('moves the tab stop to the opened menu when openIndex changes', () => {
    const { rerender } = render(<TestContainer openIndex={null} />);
    expect(getTarget('File')).toHaveAttribute('tabindex', '0');

    rerender(<TestContainer openIndex={1} />);
    expect(getTarget('Edit')).toHaveAttribute('tabindex', '0');
    expect(getTarget('File')).toHaveAttribute('tabindex', '-1');
  });

  it('calls onOpenChange with the opened menu index', async () => {
    const onOpenChange = jest.fn();
    render(<TestContainer onOpenChange={onOpenChange} />);

    await userEvent.click(getTarget('File'));
    expect(onOpenChange).toHaveBeenLastCalledWith(0);

    await userEvent.click(getTarget('File'));
    expect(onOpenChange).toHaveBeenLastCalledWith(null);
  });

  describe('Escape inside an ancestor Modal', () => {
    function ModalContainer({ onClose }: { onClose: () => void }) {
      return (
        <Modal opened onClose={onClose} title="Modal" transitionProps={{ duration: 0 }}>
          <Menubar>
            <Menubar.Menu withinPortal={false} transitionProps={{ duration: 0 }}>
              <Menubar.Target>File</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item>New file</Menu.Item>
                <Menu.Item>Open</Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>
          </Menubar>
        </Modal>
      );
    }

    it('closes only the menu, not the Modal, when Escape is pressed on an open target', async () => {
      const onClose = jest.fn();
      render(<ModalContainer onClose={onClose} />);

      await userEvent.click(getTarget('File'));
      expectMenuOpen('New file');

      focusElement(getTarget('File'));
      fireEvent.keyDown(getTarget('File'), { key: 'Escape' });

      expectAllClosed();
      expect(onClose).not.toHaveBeenCalled();
    });

    it('closes only the menu, not the Modal, when Escape is pressed on the dropdown', async () => {
      const onClose = jest.fn();
      render(<ModalContainer onClose={onClose} />);

      await userEvent.click(getTarget('File'));
      expectMenuOpen('New file');

      const dropdown = document.querySelector<HTMLElement>('[data-menu-dropdown]')!;
      focusElement(dropdown);
      fireEvent.keyDown(dropdown, { key: 'Escape' });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('still closes the Modal on Escape when no menu is open', async () => {
      const onClose = jest.fn();
      render(<ModalContainer onClose={onClose} />);

      focusElement(getTarget('File'));
      fireEvent.keyDown(getTarget('File'), { key: 'Escape' });

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
