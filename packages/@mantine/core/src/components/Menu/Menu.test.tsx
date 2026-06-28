import { useState } from 'react';
import { act, cleanup, createEvent, fireEvent } from '@testing-library/react';
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

  it('assigns role="presentation" to non-menuitem children of role="menu" (issue #8971)', () => {
    render(<TestContainer defaultOpened withArrow />);
    const menu = screen.getByRole('menu');

    const autofocusPlaceholder = menu.querySelector('[data-autofocus]');
    expect(autofocusPlaceholder).not.toBeNull();
    expect(autofocusPlaceholder).toHaveAttribute('role', 'presentation');

    const arrow = menu.querySelector('.mantine-Menu-arrow');
    expect(arrow).not.toBeNull();
    expect(arrow).toHaveAttribute('role', 'presentation');
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
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
      });
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

  describe('Menu.CheckboxGroup', () => {
    function CheckboxGroupMenu({
      value,
      defaultValue,
      onChange,
    }: {
      value?: string[];
      defaultValue?: string[];
      onChange?: (value: string[]) => void;
    }) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.CheckboxGroup value={value} defaultValue={defaultValue} onChange={onChange}>
              <Menu.CheckboxItem value="name">Name</Menu.CheckboxItem>
              <Menu.CheckboxItem value="email">Email</Menu.CheckboxItem>
              <Menu.CheckboxItem value="role">Role</Menu.CheckboxItem>
            </Menu.CheckboxGroup>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('marks items as checked when their value is in the group value', () => {
      render(<CheckboxGroupMenu defaultValue={['name', 'role']} />);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Name' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
      expect(screen.getByRole('menuitemcheckbox', { name: 'Email' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
      expect(screen.getByRole('menuitemcheckbox', { name: 'Role' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('adds value when an unchecked item is clicked', async () => {
      const onChange = jest.fn();
      render(<CheckboxGroupMenu defaultValue={['name']} onChange={onChange} />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Email' }));
      expect(onChange).toHaveBeenLastCalledWith(['name', 'email']);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Email' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('removes value when a checked item is clicked', async () => {
      const onChange = jest.fn();
      render(<CheckboxGroupMenu defaultValue={['name', 'email']} onChange={onChange} />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Name' }));
      expect(onChange).toHaveBeenLastCalledWith(['email']);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Name' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
    });

    it('supports controlled mode', async () => {
      const onChange = jest.fn();
      const { rerender } = render(<CheckboxGroupMenu value={['name']} onChange={onChange} />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Email' }));
      expect(onChange).toHaveBeenLastCalledWith(['name', 'email']);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Email' })).toHaveAttribute(
        'aria-checked',
        'false'
      );

      rerender(<CheckboxGroupMenu value={['name', 'email']} onChange={onChange} />);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Email' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('does not close the menu on click by default', async () => {
      render(<CheckboxGroupMenu defaultValue={[]} />);
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Name' }));
      expectOpened();
    });

    it('item-level checked overrides group state', () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.CheckboxGroup defaultValue={[]}>
              <Menu.CheckboxItem value="name" checked>
                Name
              </Menu.CheckboxItem>
            </Menu.CheckboxGroup>
          </Menu.Dropdown>
        </Menu>
      );
      expect(screen.getByRole('menuitemcheckbox', { name: 'Name' })).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });

    it('item-level onChange overrides group onChange', async () => {
      const groupOnChange = jest.fn();
      const itemOnChange = jest.fn();
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.CheckboxGroup defaultValue={[]} onChange={groupOnChange}>
              <Menu.CheckboxItem value="name" onChange={itemOnChange}>
                Name
              </Menu.CheckboxItem>
            </Menu.CheckboxGroup>
          </Menu.Dropdown>
        </Menu>
      );
      await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Name' }));
      expect(itemOnChange).toHaveBeenCalledWith(true);
      expect(groupOnChange).not.toHaveBeenCalled();
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

  describe('type-ahead navigation', () => {
    function TypeAheadMenu({ withSearch = false }: { withSearch?: boolean } = {}) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            {withSearch && <Menu.Search aria-label="search" />}
            <Menu.Item>Apple</Menu.Item>
            <Menu.Item>Apricot</Menu.Item>
            <Menu.Item disabled>Avocado</Menu.Item>
            <Menu.Item>Banana</Menu.Item>
            <Menu.Item>Cherry</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

    function getDropdown() {
      return screen.getByRole('menu');
    }

    it('focuses first matching item when a letter is pressed', () => {
      render(<TypeAheadMenu />);
      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'b' });
      expect(screen.getByText('Banana').closest('button')).toHaveFocus();
    });

    it('cycles to next match when the same letter is pressed again', () => {
      render(<TypeAheadMenu />);
      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'a' });
      expect(screen.getByText('Apple').closest('button')).toHaveFocus();
      fireEvent.keyDown(screen.getByText('Apple').closest('button')!, { key: 'a' });
      expect(screen.getByText('Apricot').closest('button')).toHaveFocus();
    });

    it('matches multi-character prefix typed in quick succession', () => {
      render(<TypeAheadMenu />);
      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'a' });
      fireEvent.keyDown(screen.getByText('Apple').closest('button')!, { key: 'p' });
      fireEvent.keyDown(screen.getByText('Apple').closest('button')!, { key: 'r' });
      expect(screen.getByText('Apricot').closest('button')).toHaveFocus();
    });

    it('skips disabled items', () => {
      render(<TypeAheadMenu />);
      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'a' });
      expect(screen.getByText('Apple').closest('button')).toHaveFocus();
      fireEvent.keyDown(screen.getByText('Apple').closest('button')!, { key: 'a' });
      expect(screen.getByText('Apricot').closest('button')).toHaveFocus();
      fireEvent.keyDown(screen.getByText('Apricot').closest('button')!, { key: 'a' });
      expect(screen.getByText('Apple').closest('button')).toHaveFocus();
    });

    it('does not move focus when Menu.Search is rendered', () => {
      render(<TypeAheadMenu withSearch />);
      const search = screen.getByLabelText('search');
      search.focus();
      fireEvent.keyDown(search, { key: 'b' });
      expect(screen.getByText('Banana').closest('button')).not.toHaveFocus();
    });

    it('ignores modifier-key combinations', () => {
      render(<TypeAheadMenu />);
      const initialActive = document.activeElement;
      fireEvent.keyDown(getDropdown(), { key: 'b', ctrlKey: true });
      expect(document.activeElement).toBe(initialActive);
      fireEvent.keyDown(getDropdown(), { key: 'b', metaKey: true });
      expect(document.activeElement).toBe(initialActive);
    });

    it('resets the buffer after the timeout so a new letter starts fresh', () => {
      jest.useFakeTimers();
      try {
        render(<TypeAheadMenu />);
        getDropdown().focus();
        fireEvent.keyDown(getDropdown(), { key: 'a' });
        expect(screen.getByText('Apple').closest('button')).toHaveFocus();
        jest.advanceTimersByTime(600);
        fireEvent.keyDown(screen.getByText('Apple').closest('button')!, { key: 'c' });
        expect(screen.getByText('Cherry').closest('button')).toHaveFocus();
      } finally {
        jest.useRealTimers();
      }
    });

    it('matches against the item label, ignoring leftSection text', () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection="1.">Apple</Menu.Item>
            <Menu.Item leftSection="2.">Banana</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );

      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'b' });
      expect(screen.getByText('Banana').closest('button')).toHaveFocus();
    });

    it('does not fire when keydown originates in a custom input inside the dropdown', () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <input aria-label="custom-input" />
            <Menu.Item>Apple</Menu.Item>
            <Menu.Item>Banana</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );

      const input = screen.getByLabelText('custom-input');
      input.focus();
      fireEvent.keyDown(input, { key: 'b' });
      expect(screen.getByText('Banana').closest('button')).not.toHaveFocus();
      expect(input).toHaveFocus();
    });

    it('resets the buffer when the menu is closed and reopened', () => {
      function ControlledMenu() {
        const [opened, setOpened] = useState(true);
        return (
          <>
            <button type="button" onClick={() => setOpened((o) => !o)}>
              toggle
            </button>
            <Menu
              opened={opened}
              transitionProps={{ duration: 0 }}
              withinPortal={false}
              keepMounted
            >
              <Menu.Target>
                <button type="button">test-target</button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Apple</Menu.Item>
                <Menu.Item>Banana</Menu.Item>
                <Menu.Item>Cherry</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        );
      }

      render(<ControlledMenu />);
      getDropdown().focus();
      fireEvent.keyDown(getDropdown(), { key: 'a' });
      expect(screen.getByText('Apple').closest('button')).toHaveFocus();

      fireEvent.click(screen.getByText('toggle'));
      fireEvent.click(screen.getByText('toggle'));

      const reopened = getDropdown();
      reopened.focus();
      fireEvent.keyDown(reopened, { key: 'c' });
      expect(screen.getByText('Cherry').closest('button')).toHaveFocus();
    });

    it('does not leak from submenu to parent dropdown', async () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Banana</Menu.Item>
            <Menu.Sub transitionProps={{ duration: 0 }} withinPortal={false}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>More</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>Cherry</Menu.Item>
                <Menu.Item>Strawberry</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      );

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      const cherry = await screen.findByText('Cherry');
      const subItem = cherry.closest('button')!;
      subItem.focus();
      fireEvent.keyDown(subItem, { key: 'b' });
      expect(screen.getByText('Banana').closest('button')).not.toHaveFocus();
    });
  });

  describe('Menu.Sub controlled opened', () => {
    function SubMenuContainer(subProps: Partial<React.ComponentProps<typeof Menu.Sub>> = {}) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Banana</Menu.Item>
            <Menu.Sub transitionProps={{ duration: 0 }} withinPortal={false} {...subProps}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>More</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>Cherry</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('renders the sub-dropdown when opened={true} is controlled', async () => {
      render(SubMenuContainer({ opened: true }));
      expect(await screen.findByText('Cherry')).toBeInTheDocument();
    });

    it('keeps the sub-dropdown closed when opened={false} is controlled', () => {
      render(SubMenuContainer({ opened: false }));
      expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
    });

    it('calls onChange with true when the submenu is opened via keyboard', async () => {
      const onChange = jest.fn();
      render(SubMenuContainer({ onChange }));

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      await screen.findByText('Cherry');
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange with false when the submenu is closed via keyboard', async () => {
      const onChange = jest.fn();
      render(SubMenuContainer({ onChange }));

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      const cherry = await screen.findByText('Cherry');
      const childItem = cherry.closest('button')!;
      childItem.focus();
      fireEvent.keyDown(childItem, { key: 'ArrowLeft' });

      expect(onChange).toHaveBeenLastCalledWith(false);
    });

    it('calls onChange with false when the open submenu is dismissed with Escape', async () => {
      const onChange = jest.fn();
      render(SubMenuContainer({ onChange }));

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      const cherry = await screen.findByText('Cherry');
      const subDropdown = cherry.closest('[role="menu"]')!;
      fireEvent.keyDown(subDropdown, { key: 'Escape' });

      expect(onChange).toHaveBeenLastCalledWith(false);
    });

    it('still opens an uncontrolled submenu via keyboard (no regression)', async () => {
      render(SubMenuContainer());

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      expect(await screen.findByText('Cherry')).toBeInTheDocument();
    });

    it('does not call onChange after the submenu is unmounted while open', async () => {
      const onChange = jest.fn();
      function Container({ showFirst }: { showFirst: boolean }) {
        return (
          <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
            <Menu.Target>
              <button type="button">test-target</button>
            </Menu.Target>
            <Menu.Dropdown>
              {showFirst && (
                <Menu.Sub
                  transitionProps={{ duration: 0 }}
                  withinPortal={false}
                  onChange={onChange}
                >
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>First</Menu.Sub.Item>
                  </Menu.Sub.Target>
                  <Menu.Sub.Dropdown>
                    <Menu.Item>First child</Menu.Item>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              )}
              <Menu.Sub transitionProps={{ duration: 0 }} withinPortal={false}>
                <Menu.Sub.Target>
                  <Menu.Sub.Item>Second</Menu.Sub.Item>
                </Menu.Sub.Target>
                <Menu.Sub.Dropdown>
                  <Menu.Item>Second child</Menu.Item>
                </Menu.Sub.Dropdown>
              </Menu.Sub>
            </Menu.Dropdown>
          </Menu>
        );
      }

      const { rerender } = render(<Container showFirst />);

      const firstTarget = screen.getByText('First').closest('button')!;
      firstTarget.focus();
      fireEvent.keyDown(firstTarget, { key: 'ArrowRight' });
      await screen.findByText('First child');

      onChange.mockClear();
      rerender(<Container showFirst={false} />);

      const secondTarget = screen.getByText('Second').closest('button')!;
      secondTarget.focus();
      fireEvent.keyDown(secondTarget, { key: 'ArrowRight' });
      await screen.findByText('Second child');

      expect(onChange).not.toHaveBeenCalled();
    });

    it('auto-closes a previously open sibling submenu when another opens', async () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Sub transitionProps={{ duration: 0 }} withinPortal={false}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>First</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>First child</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
            <Menu.Sub transitionProps={{ duration: 0 }} withinPortal={false}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Second</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>Second child</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      );

      const firstTarget = screen.getByText('First').closest('button')!;
      firstTarget.focus();
      fireEvent.keyDown(firstTarget, { key: 'ArrowRight' });
      await screen.findByText('First child');

      const secondTarget = screen.getByText('Second').closest('button')!;
      secondTarget.focus();
      fireEvent.keyDown(secondTarget, { key: 'ArrowRight' });
      await screen.findByText('Second child');

      expect(screen.queryByText('First child')).not.toBeInTheDocument();
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

    it('does not open and does not prevent default when the parent Menu is disabled', () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} disabled>
          <Menu.ContextMenu>
            <div data-testid="context-area">Right-click me</div>
          </Menu.ContextMenu>
          <Menu.Dropdown>
            <Menu.Item>Copy</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
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

    it('closes when the trigger is left-clicked while open', async () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');
      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expectOpened();

      await userEvent.click(area);
      expectClosed();
    });

    it('does not close on the mousedown that precedes a right-click', () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expectOpened();

      fireEvent.mouseDown(area, { button: 2, clientX: 50, clientY: 50 });
      expectOpened();

      fireEvent.contextMenu(area, { clientX: 50, clientY: 50 });
      expectOpened();
    });

    it('reopens via contextmenu after closing when no mousedown precedes the event', async () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expectOpened();

      await userEvent.click(screen.getByText('Copy'));
      expectClosed();

      fireEvent.contextMenu(area, { clientX: 20, clientY: 20 });
      expectOpened();
    });

    it('disables text selection on the trigger only when enabled', () => {
      const { rerender } = render(<ContextMenuContainer />);
      expect(screen.getByTestId('context-area')).toHaveStyle({ userSelect: 'none' });

      rerender(<ContextMenuContainer disabled />);
      expect(screen.getByTestId('context-area')).not.toHaveStyle({ userSelect: 'none' });
    });
  });

  describe('Menu.ContextMenu touch support', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    function TouchContainer({
      disabled,
      longPressDelay,
    }: {
      disabled?: boolean;
      longPressDelay?: number;
    } = {}) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false}>
          <Menu.ContextMenu disabled={disabled} longPressDelay={longPressDelay}>
            <div data-testid="context-area">Long-press me</div>
          </Menu.ContextMenu>
          <Menu.Dropdown>
            <Menu.Item>Copy</Menu.Item>
            <Menu.Item>Paste</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

    it('opens the menu on touch long-press', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      expectClosed();

      act(() => {
        jest.advanceTimersByTime(500);
      });

      expectOpened();
    });

    it('does not open on a short tap', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(200);
      });
      fireEvent.touchEnd(area, { changedTouches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('cancels the long-press when the finger moves beyond the threshold', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      fireEvent.touchMove(area, { touches: [{ clientX: 30, clientY: 120 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('prevents default on touchend after a long-press to suppress synthetic mouse events', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();

      const endEvent = createEvent.touchEnd(area, {
        changedTouches: [{ clientX: 30, clientY: 40 }],
      });
      fireEvent(area, endEvent);

      expect(endEvent.defaultPrevented).toBe(true);
    });

    it('does not open via touch when disabled', () => {
      render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('respects a custom longPressDelay', () => {
      render(<TouchContainer longPressDelay={1000} />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 0, clientY: 0 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectClosed();

      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();
    });

    it('keeps the menu open when a native contextmenu follows a touch long-press', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();

      fireEvent.contextMenu(area, { clientX: 30, clientY: 40 });
      expectOpened();
    });

    it('allows a mouse contextmenu to reopen after a completed touch long-press', () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });
      fireEvent.touchEnd(area, { changedTouches: [{ clientX: 30, clientY: 40 }] });
      expectOpened();

      fireEvent.click(screen.getByText('Copy'));
      expectClosed();

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expectOpened();
    });

    it('does not prevent default on touchend when disabled', () => {
      render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(500);
      });

      const endEvent = createEvent.touchEnd(area, {
        changedTouches: [{ clientX: 30, clientY: 40 }],
      });
      fireEvent(area, endEvent);

      expect(endEvent.defaultPrevented).toBe(false);
    });

    it('does not open if disabled becomes true during the press', () => {
      const { rerender } = render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(200);
      });

      rerender(<TouchContainer disabled />);
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expectClosed();
    });

    it('does not open if the press started while disabled', () => {
      const { rerender } = render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      act(() => {
        jest.advanceTimersByTime(200);
      });

      rerender(<TouchContainer />);
      act(() => {
        jest.advanceTimersByTime(300);
      });

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
