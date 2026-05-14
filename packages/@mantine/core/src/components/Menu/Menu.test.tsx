import { useState } from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
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

  describe('Menu.Search', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];

    function SearchMenu({
      onItemClick,
      itemsList = items,
    }: {
      onItemClick?: (value: string) => void;
      itemsList?: string[];
    }) {
      const [query, setQuery] = useState('');
      const filtered = itemsList.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Search
              aria-label="search"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
            {filtered.map((item) => (
              <Menu.Item key={item} onClick={() => onItemClick?.(item)}>
                {item}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('focuses search input when menu opens', async () => {
      render(<SearchMenu />);
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(screen.getByLabelText('search')).toHaveFocus();
    });

    it('filters items via user-controlled state', async () => {
      render(<SearchMenu />);
      await userEvent.type(screen.getByLabelText('search'), 'an');
      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.queryByText('Apple')).not.toBeInTheDocument();
      expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
    });

    it('moves data-menu-active highlight with ArrowDown/ArrowUp', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByText('Apple').closest('button')).toHaveAttribute('data-menu-active');

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByText('Banana').closest('button')).toHaveAttribute('data-menu-active');
      expect(screen.getByText('Apple').closest('button')).not.toHaveAttribute('data-menu-active');

      await userEvent.keyboard('{ArrowUp}');
      expect(screen.getByText('Apple').closest('button')).toHaveAttribute('data-menu-active');
    });

    it('loops with ArrowDown from last to first item', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{End}');
      expect(screen.getByText('Date').closest('button')).toHaveAttribute('data-menu-active');

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByText('Apple').closest('button')).toHaveAttribute('data-menu-active');
    });

    it('Home/End jump to first/last item', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{End}');
      expect(screen.getByText('Date').closest('button')).toHaveAttribute('data-menu-active');

      await userEvent.keyboard('{Home}');
      expect(screen.getByText('Apple').closest('button')).toHaveAttribute('data-menu-active');
    });

    it('Enter triggers click on active item and closes menu', async () => {
      const handleClick = jest.fn();
      render(<SearchMenu onItemClick={handleClick} />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
      expect(handleClick).toHaveBeenCalledWith('Banana');
      expect(screen.queryAllByRole('menu')).toHaveLength(0);
    });

    it('Enter does nothing when no item is active', async () => {
      const handleClick = jest.fn();
      render(<SearchMenu onItemClick={handleClick} />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{Enter}');
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('clears active highlight when query changes', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByText('Apple').closest('button')).toHaveAttribute('data-menu-active');

      await userEvent.type(search, 'an');
      expect(document.querySelector('[data-menu-active]')).toBeNull();
    });

    it('Escape closes the menu', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();

      await userEvent.keyboard('{Escape}');
      expect(screen.queryAllByRole('menu')).toHaveLength(0);
    });

    function ClearOnCloseMenu({ clearSearchOnClose }: { clearSearchOnClose?: boolean }) {
      const [opened, setOpened] = useState(true);
      const [query, setQuery] = useState('initial');
      return (
        <>
          <button type="button" onClick={() => setOpened((o) => !o)}>
            toggle
          </button>
          <span data-testid="query">{query}</span>
          <Menu
            opened={opened}
            onChange={setOpened}
            transitionProps={{ duration: 0, exitDuration: 0 }}
            withinPortal={false}
          >
            <Menu.Target>
              <button type="button">test-target</button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Search
                aria-label="search"
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
                clearSearchOnClose={clearSearchOnClose}
              />
              <Menu.Item>Item</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </>
      );
    }

    it('clears search value after close transition by default', async () => {
      render(<ClearOnCloseMenu />);
      expect(screen.getByTestId('query')).toHaveTextContent('initial');

      await userEvent.click(screen.getByText('toggle'));
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(screen.getByTestId('query')).toBeEmptyDOMElement();
    });

    it('keeps search value on close when clearSearchOnClose={false}', async () => {
      render(<ClearOnCloseMenu clearSearchOnClose={false} />);
      expect(screen.getByTestId('query')).toHaveTextContent('initial');

      await userEvent.click(screen.getByText('toggle'));
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(screen.getByTestId('query')).toHaveTextContent('initial');
    });
  });

  describe('Menu.CheckboxItem', () => {
    function CheckboxItemMenu({
      defaultChecked,
      onChange,
      closeMenuOnClick,
    }: {
      defaultChecked?: boolean;
      onChange?: (checked: boolean) => void;
      closeMenuOnClick?: boolean;
    }) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.CheckboxItem
              defaultChecked={defaultChecked}
              onChange={onChange}
              closeMenuOnClick={closeMenuOnClick}
            >
              Show grid
            </Menu.CheckboxItem>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('renders with role="menuitemcheckbox"', () => {
      render(<CheckboxItemMenu />);
      const item = screen.getByRole('menuitemcheckbox', { name: 'Show grid' });
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('aria-checked', 'false');
    });

    it('toggles checked state and reports it via onChange', async () => {
      const handleChange = jest.fn();
      render(<CheckboxItemMenu onChange={handleChange} />);
      const item = screen.getByRole('menuitemcheckbox', { name: 'Show grid' });
      await userEvent.click(item);
      expect(handleChange).toHaveBeenLastCalledWith(true);
      expect(item).toHaveAttribute('aria-checked', 'true');
      await userEvent.click(item);
      expect(handleChange).toHaveBeenLastCalledWith(false);
      expect(item).toHaveAttribute('aria-checked', 'false');
    });

    it('starts as checked when defaultChecked is set', () => {
      render(<CheckboxItemMenu defaultChecked />);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Show grid' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('does not close menu on click by default', async () => {
      render(<CheckboxItemMenu />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Show grid' }));
      expectOpened();
    });

    it('closes menu on click when closeMenuOnClick is set', async () => {
      render(<CheckboxItemMenu closeMenuOnClick />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Show grid' }));
      expectClosed();
    });
  });

  describe('Menu.RadioGroup and Menu.RadioItem', () => {
    function RadioMenu({
      defaultValue,
      onChange,
    }: {
      defaultValue?: string;
      onChange?: (value: string) => void;
    }) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.RadioGroup defaultValue={defaultValue} onChange={onChange}>
              <Menu.RadioItem value="ascending">Ascending</Menu.RadioItem>
              <Menu.RadioItem value="descending">Descending</Menu.RadioItem>
            </Menu.RadioGroup>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('renders items with role="menuitemradio"', () => {
      render(<RadioMenu />);
      expect(screen.getByRole('menuitemradio', { name: 'Ascending' })).toBeInTheDocument();
      expect(screen.getByRole('menuitemradio', { name: 'Descending' })).toBeInTheDocument();
    });

    it('marks the matching item as checked from group context', () => {
      render(<RadioMenu defaultValue="descending" />);
      expect(screen.getByRole('menuitemradio', { name: 'Ascending' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
      expect(screen.getByRole('menuitemradio', { name: 'Descending' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('updates selected value when an item is clicked', async () => {
      const handleChange = jest.fn();
      render(<RadioMenu onChange={handleChange} />);
      await userEvent.click(screen.getByRole('menuitemradio', { name: 'Ascending' }));
      expect(handleChange).toHaveBeenLastCalledWith('ascending');
      expect(screen.getByRole('menuitemradio', { name: 'Ascending' })).toHaveAttribute(
        'aria-checked',
        'true'
      );

      await userEvent.click(screen.getByRole('menuitemradio', { name: 'Descending' }));
      expect(handleChange).toHaveBeenLastCalledWith('descending');
      expect(screen.getByRole('menuitemradio', { name: 'Ascending' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
    });

    it('does not close menu on click by default', async () => {
      render(<RadioMenu />);
      await userEvent.click(screen.getByRole('menuitemradio', { name: 'Ascending' }));
      expectOpened();
    });
  });

  describe('Menu.ContextMenu', () => {
    function ContextMenuContainer({ disabled }: { disabled?: boolean } = {}) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false}>
          <Menu.ContextMenu disabled={disabled}>
            <div data-testid="context-area">Right-click me</div>
          </Menu.ContextMenu>
          <Menu.Dropdown>
            <Menu.Item>Copy</Menu.Item>
            <Menu.Item>Paste</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('opens the menu on contextmenu event', () => {
      render(<ContextMenuContainer />);
      expectClosed();

      fireEvent.contextMenu(screen.getByTestId('context-area'), { clientX: 100, clientY: 200 });

      expectOpened();
    });

    it('prevents default browser context menu', () => {
      render(<ContextMenuContainer />);
      const target = screen.getByTestId('context-area');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      fireEvent(target, event);
      expect(event.defaultPrevented).toBe(true);
    });

    it('does not open and does not prevent default when disabled', () => {
      render(<ContextMenuContainer disabled />);
      const target = screen.getByTestId('context-area');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      fireEvent(target, event);
      expect(event.defaultPrevented).toBe(false);
      expectClosed();
    });

    it('preserves custom onContextMenu handler on the wrapped child', () => {
      const handler = jest.fn();
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false}>
          <Menu.ContextMenu>
            <div data-testid="context-area" onContextMenu={handler}>
              Right-click me
            </div>
          </Menu.ContextMenu>
          <Menu.Dropdown>
            <Menu.Item>Copy</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );

      fireEvent.contextMenu(screen.getByTestId('context-area'), { clientX: 10, clientY: 10 });
      expect(handler).toHaveBeenCalledTimes(1);
      expectOpened();
    });

    it('sets data-expanded on the wrapped child when menu is open', () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');
      expect(area).not.toHaveAttribute('data-expanded');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });

      expect(screen.getByTestId('context-area')).toHaveAttribute('data-expanded', 'true');
    });

    it('closes when an item is clicked', async () => {
      render(<ContextMenuContainer />);
      fireEvent.contextMenu(screen.getByTestId('context-area'), { clientX: 10, clientY: 10 });
      expectOpened();

      await userEvent.click(screen.getByText('Copy'));
      expectClosed();
    });
  });

  describe('alignItemsLabels', () => {
    function MixedMenu({ alignItemsLabels }: { alignItemsLabels?: MenuProps['alignItemsLabels'] }) {
      return (
        <Menu
          transitionProps={{ duration: 0 }}
          withinPortal={false}
          defaultOpened
          alignItemsLabels={alignItemsLabels}
        >
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Plain</Menu.Item>
            <Menu.CheckboxItem>Toggle</Menu.CheckboxItem>
          </Menu.Dropdown>
        </Menu>
      );
    }

    const indicatorClass = '.mantine-Menu-itemIndicator';

    it('with-indicators (default) reserves slot only on checkbox/radio items', () => {
      render(<MixedMenu />);
      const plain = screen.getByRole('menuitem', { name: 'Plain' });
      const toggle = screen.getByRole('menuitemcheckbox', { name: 'Toggle' });
      expect(plain.querySelector(indicatorClass)).toBeNull();
      expect(toggle.querySelector(indicatorClass)).not.toBeNull();
    });

    it('all reserves slot on every Menu.Item', () => {
      render(<MixedMenu alignItemsLabels="all" />);
      const plain = screen.getByRole('menuitem', { name: 'Plain' });
      const toggle = screen.getByRole('menuitemcheckbox', { name: 'Toggle' });
      expect(plain.querySelector(indicatorClass)).not.toBeNull();
      expect(toggle.querySelector(indicatorClass)).not.toBeNull();
    });

    it('none renders the slot only when the indicator is visible', () => {
      render(<MixedMenu alignItemsLabels="none" />);
      const plain = screen.getByRole('menuitem', { name: 'Plain' });
      const toggle = screen.getByRole('menuitemcheckbox', { name: 'Toggle' });
      expect(plain.querySelector(indicatorClass)).toBeNull();
      expect(toggle.querySelector(indicatorClass)).toBeNull();
    });
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
