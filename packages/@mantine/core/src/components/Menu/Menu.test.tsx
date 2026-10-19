import { useState } from 'react';
import { act, cleanup, createEvent, fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DirectionProvider } from '../../core';
import { Menu, MenuProps } from './Menu';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuEmpty } from './MenuEmpty/MenuEmpty';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuLoadMore } from './MenuLoadMore/MenuLoadMore';
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

  it('adds variant class to items when variant is filled', () => {
    render(<TestContainer opened variant="filled" />);
    expect(screen.getByText('test-item-1').closest('[data-menu-item]')).toHaveClass('item--filled');
  });

  it('does not add variant class to items with default variant', () => {
    render(<TestContainer opened />);
    expect(screen.getByText('test-item-1').closest('[data-menu-item]')?.className).not.toContain(
      'item--'
    );
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

  it('closes menu when outside element stops propagation and clickOutsideCapture is set', async () => {
    const { rerender } = render(
      <>
        <TestContainer defaultOpened />
        <button type="button" onMouseDown={(event) => event.stopPropagation()}>
          outside
        </button>
      </>
    );
    await userEvent.click(screen.getByRole('button', { name: 'outside' }));
    expectOpened();

    rerender(
      <>
        <TestContainer defaultOpened clickOutsideCapture />
        <button type="button" onMouseDown={(event) => event.stopPropagation()}>
          outside
        </button>
      </>
    );
    await userEvent.click(screen.getByRole('button', { name: 'outside' }));
    expectClosed();
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
    expect(Menu.Empty).toBe(MenuEmpty);
    expect(Menu.LoadMore).toBe(MenuLoadMore);
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

    it('exposes the highlighted item with aria-activedescendant', async () => {
      render(<SearchMenu />);
      const search = screen.getByLabelText('search');
      search.focus();
      expect(search).not.toHaveAttribute('aria-activedescendant');
      expect(search).toHaveAttribute('aria-controls', screen.getByRole('menu').id);

      await userEvent.keyboard('{ArrowDown}');
      const apple = screen.getByRole('menuitem', { name: 'Apple' });
      expect(apple.id).not.toBe('');
      expect(search).toHaveAttribute('aria-activedescendant', apple.id);

      await userEvent.keyboard('{ArrowDown}');
      const banana = screen.getByRole('menuitem', { name: 'Banana' });
      expect(banana.id).not.toBe(apple.id);
      expect(search).toHaveAttribute('aria-activedescendant', banana.id);

      await userEvent.type(search, 'a');
      expect(search).not.toHaveAttribute('aria-activedescendant');
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

    it('does not clear search value of an unmounted Menu.Search on close', async () => {
      const onChange = jest.fn();
      function Demo() {
        const [opened, setOpened] = useState(true);
        const [withSearch, setWithSearch] = useState(true);
        return (
          <>
            <button type="button" onClick={() => setOpened((o) => !o)}>
              toggle
            </button>
            <button type="button" onClick={() => setWithSearch(false)}>
              remove-search
            </button>
            <Menu
              opened={opened}
              onChange={setOpened}
              transitionProps={{ duration: 0, exitDuration: 0 }}
              withinPortal={false}
              closeOnClickOutside={false}
            >
              <Menu.Target>
                <button type="button">test-target</button>
              </Menu.Target>
              <Menu.Dropdown>
                {withSearch && <Menu.Search aria-label="search" value="" onChange={onChange} />}
                <Menu.Item>Item</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        );
      }

      render(<Demo />);
      await userEvent.click(screen.getByText('remove-search'));
      await userEvent.click(screen.getByText('toggle'));
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(onChange).not.toHaveBeenCalled();
    });

    it('clears values of all Menu.Search components on close', async () => {
      const onFirstChange = jest.fn();
      const onSecondChange = jest.fn();
      function Demo() {
        const [opened, setOpened] = useState(true);
        return (
          <>
            <button type="button" onClick={() => setOpened((o) => !o)}>
              toggle
            </button>
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
                <Menu.Search aria-label="first" value="a" onChange={onFirstChange} />
                <Menu.Search aria-label="second" value="b" onChange={onSecondChange} />
                <Menu.Item>Item</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        );
      }

      render(<Demo />);
      await userEvent.click(screen.getByText('toggle'));
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(onFirstChange).toHaveBeenCalledTimes(1);
      expect(onSecondChange).toHaveBeenCalledTimes(1);
    });

    it('keeps search value on close when clearSearchOnClose={false}', async () => {
      render(<ClearOnCloseMenu clearSearchOnClose={false} />);
      expect(screen.getByTestId('query')).toHaveTextContent('initial');

      await userEvent.click(screen.getByText('toggle'));
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(screen.getByTestId('query')).toHaveTextContent('initial');
    });
  });

  it('allows Tab navigation through items with menuItemTabIndex={0}', async () => {
    render(
      <Menu
        transitionProps={{ duration: 0 }}
        withinPortal={false}
        defaultOpened
        menuItemTabIndex={0}
        trapFocus={false}
      >
        <Menu.Target>
          <button type="button">test-target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>first</Menu.Item>
          <Menu.Item>second</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    expect(screen.getByRole('menuitem', { name: 'first' })).toHaveAttribute('tabindex', '0');
    screen.getByRole('menuitem', { name: 'first' }).focus();
    await userEvent.tab();
    expect(screen.getByRole('menuitem', { name: 'second' })).toHaveFocus();
  });

  it('keeps items out of Tab order by default', () => {
    render(
      <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
        <Menu.Target>
          <button type="button">test-target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>first</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    expect(screen.getByRole('menuitem', { name: 'first' })).toHaveAttribute('tabindex', '-1');
  });

  it('prefers item checkIcon over Menu checkIcon', () => {
    render(
      <Menu
        transitionProps={{ duration: 0 }}
        withinPortal={false}
        defaultOpened
        checkIcon={<span data-testid="menu-icon" />}
      >
        <Menu.Target>
          <button type="button">test-target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.CheckboxItem defaultChecked checkIcon={<span data-testid="item-icon" />}>
            with-item-icon
          </Menu.CheckboxItem>
          <Menu.CheckboxItem defaultChecked>with-menu-icon</Menu.CheckboxItem>
        </Menu.Dropdown>
      </Menu>
    );

    expect(screen.getAllByTestId('item-icon')).toHaveLength(1);
    expect(screen.getAllByTestId('menu-icon')).toHaveLength(1);
    expect(screen.getByRole('menuitemcheckbox', { name: 'with-item-icon' })).toContainElement(
      screen.getByTestId('item-icon')
    );
  });

  it('connects Menu.ContextMenu child with the dropdown', () => {
    render(
      <Menu transitionProps={{ duration: 0 }} withinPortal={false}>
        <Menu.ContextMenu>
          <div data-testid="context-area" id="user-area">
            area
          </div>
        </Menu.ContextMenu>
        <Menu.Dropdown>
          <Menu.Item>item</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );

    const area = screen.getByTestId('context-area');
    expect(area).not.toHaveAttribute('aria-controls');

    fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });

    const menu = screen.getByRole('menu');
    expect(area).toHaveAttribute('aria-controls', menu.id);
    expect(area).toHaveAttribute('id', 'user-area');
    expect(area).not.toHaveAttribute('aria-haspopup');
    expect(area).not.toHaveAttribute('aria-expanded');
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
      const apple = screen.getByText('Apple').closest('button')!;
      apple.focus();
      fireEvent.keyDown(apple, { key: 'b' });
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
            <Menu.Sub transitionProps={{ duration: 0 }}>
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

    it('keeps the sub-dropdown inside the parent dropdown even if withinPortal is passed', async () => {
      render(
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Banana</Menu.Item>
            {/* withinPortal is not part of the public Menu.Sub props: portaling the sub-dropdown
                detaches it from the menu, which breaks hover tracking and outside clicks */}
            <Menu.Sub transitionProps={{ duration: 0 }} opened {...({ withinPortal: true } as any)}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>More</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>Cherry</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>,
        undefined,
        // portals are disabled in the test env, this assertion is meaningless without real ones
        { env: 'default' }
      );

      const parentDropdown = screen.getByText('Banana').closest('[data-menu-dropdown]')!;
      const subDropdown = (await screen.findByText('Cherry')).closest('[data-menu-dropdown]')!;

      expect(subDropdown).not.toBe(parentDropdown);
      expect(parentDropdown.contains(subDropdown)).toBe(true);
    });
  });

  describe('Menu.Sub keyboard navigation', () => {
    function NestedSubMenu({
      withSearch,
      subItemProps,
    }: {
      withSearch?: boolean;
      subItemProps?: React.ComponentProps<typeof Menu.Sub.Item>;
    }) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            {withSearch && <Menu.Search aria-label="search" />}
            <Menu.Item>Banana</Menu.Item>
            <Menu.Sub transitionProps={{ duration: 0 }}>
              <Menu.Sub.Target>
                <Menu.Sub.Item {...subItemProps}>More</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>Cherry</Menu.Item>
                <Menu.CheckboxItem checked={false}>Grape</Menu.CheckboxItem>
                <Menu.Sub transitionProps={{ duration: 0 }}>
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>Even more</Menu.Sub.Item>
                  </Menu.Sub.Target>
                  <Menu.Sub.Dropdown>
                    <Menu.Item>Kiwi</Menu.Item>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      );
    }

    const renderMenu = (
      dir: 'ltr' | 'rtl',
      withSearch = false,
      subItemProps?: React.ComponentProps<typeof Menu.Sub.Item>
    ) =>
      render(
        <DirectionProvider initialDirection={dir} detectDirection={false}>
          <NestedSubMenu withSearch={withSearch} subItemProps={subItemProps} />
        </DirectionProvider>
      );

    const getButton = (name: string) => screen.getByText(name).closest('button')!;
    const flushFocus = () =>
      act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 30));
      });

    const keys = {
      ltr: { forward: 'ArrowRight', back: 'ArrowLeft' },
      rtl: { forward: 'ArrowLeft', back: 'ArrowRight' },
    } as const;

    (['ltr', 'rtl'] as const).forEach((dir) => {
      const { forward, back } = keys[dir];

      it(`${dir}: opens the submenu with ${forward} and focuses its first item`, async () => {
        renderMenu(dir);
        const subTarget = getButton('More');
        subTarget.focus();
        const event = createEvent.keyDown(subTarget, { key: forward });
        fireEvent(subTarget, event);
        expect(event.defaultPrevented).toBe(true);
        await flushFocus();
        expect(getButton('Cherry')).toHaveFocus();
      });

      it(`${dir}: does not open the submenu with ${back}`, async () => {
        renderMenu(dir);
        const subTarget = getButton('More');
        subTarget.focus();
        fireEvent.keyDown(subTarget, { key: back });
        await flushFocus();
        expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
      });

      it(`${dir}: ${back} on a submenu item closes the submenu and returns focus to its sub item`, async () => {
        renderMenu(dir);
        const subTarget = getButton('More');
        subTarget.focus();
        fireEvent.keyDown(subTarget, { key: forward });
        await flushFocus();

        const cherry = getButton('Cherry');
        const event = createEvent.keyDown(cherry, { key: back });
        fireEvent(cherry, event);
        expect(event.defaultPrevented).toBe(true);
        await flushFocus();
        expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
        expect(getButton('More')).toHaveFocus();
      });

      it(`${dir}: ${back} on a selectable submenu item returns focus to its sub item`, async () => {
        renderMenu(dir);
        getButton('More').focus();
        fireEvent.keyDown(getButton('More'), { key: forward });
        await flushFocus();

        fireEvent.keyDown(getButton('Grape'), { key: back });
        await flushFocus();
        expect(screen.queryByText('Grape')).not.toBeInTheDocument();
        expect(getButton('More')).toHaveFocus();
      });

      it(`${dir}: ${back} on a nested sub item closes its submenu and returns focus to the parent sub item`, async () => {
        renderMenu(dir);
        getButton('More').focus();
        fireEvent.keyDown(getButton('More'), { key: forward });
        await flushFocus();

        fireEvent.keyDown(getButton('Even more'), { key: back });
        await flushFocus();
        expect(screen.queryByText('Even more')).not.toBeInTheDocument();
        expect(getButton('More')).toHaveFocus();
      });

      it(`${dir}: ${back} in a nested submenu closes only the nested submenu`, async () => {
        renderMenu(dir);
        getButton('More').focus();
        fireEvent.keyDown(getButton('More'), { key: forward });
        await flushFocus();
        fireEvent.keyDown(getButton('Even more'), { key: forward });
        await flushFocus();
        expect(getButton('Kiwi')).toHaveFocus();

        fireEvent.keyDown(getButton('Kiwi'), { key: back });
        await flushFocus();
        expect(screen.queryByText('Kiwi')).not.toBeInTheDocument();
        expect(getButton('Even more')).toHaveFocus();
      });

      it(`${dir}: ${back} on a top-level item is not handled`, () => {
        renderMenu(dir);
        const banana = getButton('Banana');
        banana.focus();
        const event = createEvent.keyDown(banana, { key: back });
        fireEvent(banana, event);
        expect(event.defaultPrevented).toBe(false);
      });

      (['{Enter}', ' '] as const).forEach((key) => {
        it(`${dir}: ${JSON.stringify(key)} on a sub item opens the submenu and focuses its first item`, async () => {
          renderMenu(dir);
          await flushFocus();
          getButton('More').focus();
          await userEvent.keyboard(key);
          await flushFocus();
          expect(getButton('Cherry')).toHaveFocus();
          expect(getButton('Banana')).toBeInTheDocument();
        });
      });

      (['{Enter}', ' '] as const).forEach((key) => {
        it(`${dir}: ${JSON.stringify(key)} on a sub item calls onClick once and opens the submenu`, async () => {
          const onClick = jest.fn();
          renderMenu(dir, false, { onClick });
          await flushFocus();
          getButton('More').focus();
          await userEvent.keyboard(key);
          await flushFocus();
          expect(onClick).toHaveBeenCalledTimes(1);
          expect(getButton('Cherry')).toHaveFocus();
        });

        it(`${dir}: ${JSON.stringify(key)} on a sub item with closeMenuOnClick calls onClick and closes the menu`, async () => {
          const onClick = jest.fn();
          renderMenu(dir, false, { onClick, closeMenuOnClick: true });
          await flushFocus();
          getButton('More').focus();
          await userEvent.keyboard(key);
          await flushFocus();
          expect(onClick).toHaveBeenCalledTimes(1);
          expect(screen.queryByText('Banana')).not.toBeInTheDocument();
          expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
        });
      });

      it(`${dir}: Enter on a sub item with an already opened submenu keeps it opened`, async () => {
        const onChange = jest.fn();
        render(
          <DirectionProvider initialDirection={dir} detectDirection={false}>
            <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
              <Menu.Target>
                <button type="button">test-target</button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Sub transitionProps={{ duration: 0 }} onChange={onChange}>
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>More</Menu.Sub.Item>
                  </Menu.Sub.Target>
                  <Menu.Sub.Dropdown>
                    <Menu.Item>Cherry</Menu.Item>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              </Menu.Dropdown>
            </Menu>
          </DirectionProvider>
        );
        fireEvent.keyDown(getButton('More'), { key: forward });
        await flushFocus();
        getButton('More').focus();
        await userEvent.keyboard('{Enter}');
        await flushFocus();
        expect(getButton('Cherry')).toHaveFocus();
        expect(onChange).toHaveBeenLastCalledWith(true);
      });

      it(`${dir}: mouse click on a sub item with closeMenuOnClick calls onClick and closes the menu`, async () => {
        const onClick = jest.fn();
        renderMenu(dir, false, { onClick, closeMenuOnClick: true });
        await userEvent.click(getButton('More'));
        await flushFocus();
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.queryByText('Banana')).not.toBeInTheDocument();
      });

      it(`${dir}: Enter in Menu.Search on a sub item with closeMenuOnClick calls onClick and closes the menu`, async () => {
        const onClick = jest.fn();
        renderMenu(dir, true, { onClick, closeMenuOnClick: true });
        screen.getByLabelText('search').focus();
        await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
        await flushFocus();
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.queryByText('Banana')).not.toBeInTheDocument();
      });

      it(`${dir}: Enter in Menu.Search opens the highlighted submenu`, async () => {
        renderMenu(dir, true);
        const search = screen.getByLabelText('search');
        search.focus();
        await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
        await flushFocus();
        expect(getButton('Cherry')).toHaveFocus();
      });
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
            <Menu.Sub transitionProps={{ duration: 0 }} {...subProps}>
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

    it('keeps the sub-dropdown closed when opened={false} is controlled', async () => {
      const onChange = jest.fn();
      render(SubMenuContainer({ opened: false, onChange }));

      const subTarget = screen.getByText('More').closest('button')!;
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
      });
      expect(onChange).toHaveBeenCalledWith(true);
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
                <Menu.Sub transitionProps={{ duration: 0 }} onChange={onChange}>
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>First</Menu.Sub.Item>
                  </Menu.Sub.Target>
                  <Menu.Sub.Dropdown>
                    <Menu.Item>First child</Menu.Item>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              )}
              <Menu.Sub transitionProps={{ duration: 0 }}>
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
            <Menu.Sub transitionProps={{ duration: 0 }}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>First</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>
                <Menu.Item>First child</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
            <Menu.Sub transitionProps={{ duration: 0 }}>
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

    it('opens the menu on touch long-press', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      expectClosed();

      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      expectOpened();
    });

    it('does not open on a short tap', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(200);
      });
      fireEvent.touchEnd(area, { changedTouches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('cancels the long-press when the finger moves beyond the threshold', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      fireEvent.touchMove(area, { touches: [{ clientX: 30, clientY: 120 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('prevents default on touchend after a long-press to suppress synthetic mouse events', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();

      const endEvent = createEvent.touchEnd(area, {
        changedTouches: [{ clientX: 30, clientY: 40 }],
      });
      fireEvent(area, endEvent);

      expect(endEvent.defaultPrevented).toBe(true);
    });

    it('does not open via touch when disabled', async () => {
      render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      expectClosed();
    });

    it('respects a custom longPressDelay', async () => {
      render(<TouchContainer longPressDelay={1000} />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 0, clientY: 0 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });
      expectClosed();

      await act(async () => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();
    });

    it('keeps the menu open when a native contextmenu follows a touch long-press', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });
      expectOpened();

      fireEvent.contextMenu(area, { clientX: 30, clientY: 40 });
      expectOpened();
    });

    it('allows a mouse contextmenu to reopen after a completed touch long-press', async () => {
      render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });
      fireEvent.touchEnd(area, { changedTouches: [{ clientX: 30, clientY: 40 }] });
      expectOpened();

      fireEvent.click(screen.getByText('Copy'));
      expectClosed();

      await act(async () => {
        fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      });
      expectOpened();
    });

    it('does not prevent default on touchend when disabled', async () => {
      render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      const endEvent = createEvent.touchEnd(area, {
        changedTouches: [{ clientX: 30, clientY: 40 }],
      });
      fireEvent(area, endEvent);

      expect(endEvent.defaultPrevented).toBe(false);
    });

    it('does not open if disabled becomes true during the press', async () => {
      const { rerender } = render(<TouchContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(200);
      });

      rerender(<TouchContainer disabled />);
      await act(async () => {
        jest.advanceTimersByTime(300);
      });

      expectClosed();
    });

    it('does not open if the press started while disabled', async () => {
      const { rerender } = render(<TouchContainer disabled />);
      const area = screen.getByTestId('context-area');

      fireEvent.touchStart(area, { touches: [{ clientX: 30, clientY: 40 }] });
      await act(async () => {
        jest.advanceTimersByTime(200);
      });

      rerender(<TouchContainer />);
      await act(async () => {
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

    const { rerender } = render(
      <TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />
    );
    expectClosed();

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();

    rerender(<TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened />);
    expectOpened();

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();

    rerender(
      <TestContainer onChange={onChange} onOpen={onOpen} onClose={onClose} opened={false} />
    );
    expectClosed();
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
    expectClosed();
  });
});

describe('@mantine/core/Menu async states', () => {
  function AsyncMenu({
    items,
    loading,
    loadingMore,
    onLoadMore,
    withInitialFocusPlaceholder,
    loop,
  }: {
    withInitialFocusPlaceholder?: boolean;
    loop?: boolean;
    items: string[];
    loading?: boolean;
    loadingMore?: boolean;
    onLoadMore?: () => void;
  }) {
    return (
      <Menu
        transitionProps={{ duration: 0 }}
        withinPortal={false}
        defaultOpened
        withInitialFocusPlaceholder={withInitialFocusPlaceholder}
        loop={loop}
      >
        <Menu.Target>
          <button type="button">test-target</button>
        </Menu.Target>
        <Menu.Dropdown>
          {loading && <Menu.Empty>Loading</Menu.Empty>}
          {!loading && items.length === 0 && <Menu.Empty>Nothing found</Menu.Empty>}
          {items.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
          {onLoadMore && (
            <Menu.LoadMore onLoadMore={onLoadMore} loading={loadingMore}>
              Load more
            </Menu.LoadMore>
          )}
        </Menu.Dropdown>
      </Menu>
    );
  }

  const getButton = (name: string) => screen.getByText(name).closest('button')!;

  tests.axe([
    <AsyncMenu items={[]} withInitialFocusPlaceholder={false} key="empty" />,
    <AsyncMenu items={[]} loading withInitialFocusPlaceholder={false} key="loading" />,
    <AsyncMenu
      items={['Apple']}
      onLoadMore={() => {}}
      loadingMore
      withInitialFocusPlaceholder={false}
      key="load-more"
    />,
  ]);

  it('exposes empty and loading states as disabled menu items', () => {
    const { rerender } = render(<AsyncMenu items={[]} loading />);
    expect(screen.getByRole('menuitem', { name: 'Loading' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    rerender(<AsyncMenu items={[]} />);
    expect(screen.getByRole('menuitem', { name: 'Nothing found' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('never focuses Menu.Empty with arrow keys, Home/End or type-ahead', () => {
    render(<AsyncMenu items={[]} />);
    const menu = screen.getByRole('menu');
    menu.focus();
    ['ArrowDown', 'ArrowUp', 'Home', 'End', 'n'].forEach((key) => {
      fireEvent.keyDown(menu, { key });
      expect(screen.getByRole('menuitem', { name: 'Nothing found' })).not.toHaveFocus();
    });
  });

  it('keeps focus inside the dropdown while loading and navigates to items once they arrive', () => {
    const { rerender } = render(<AsyncMenu items={[]} loading />);
    const menu = screen.getByRole('menu');
    menu.focus();
    fireEvent.keyDown(menu, { key: 'ArrowDown' });
    expect(menu.contains(document.activeElement)).toBe(true);

    rerender(<AsyncMenu items={['Apple', 'Banana']} />);
    fireEvent.keyDown(menu, { key: 'ArrowDown' });
    expect(getButton('Apple')).toHaveFocus();
  });

  it('skips Menu.LoadMore in arrow navigation while it is loading', () => {
    render(<AsyncMenu items={['Apple', 'Banana']} onLoadMore={() => {}} loadingMore />);
    getButton('Banana').focus();
    fireEvent.keyDown(getButton('Banana'), { key: 'ArrowDown' });
    expect(getButton('Apple')).toHaveFocus();
    fireEvent.keyDown(getButton('Apple'), { key: 'End' });
    expect(getButton('Banana')).toHaveFocus();
  });

  it('does not focus a loading Menu.LoadMore from the dropdown', () => {
    render(<AsyncMenu items={[]} onLoadMore={() => {}} loadingMore />);
    const menu = screen.getByRole('menu');
    menu.focus();
    fireEvent.keyDown(menu, { key: 'ArrowDown' });
    expect(getButton('Load more')).not.toHaveFocus();
  });

  it('reaches Menu.LoadMore with arrow keys and calls onLoadMore', () => {
    const onLoadMore = jest.fn();
    render(<AsyncMenu items={['Apple']} onLoadMore={onLoadMore} />);
    getButton('Apple').focus();
    fireEvent.keyDown(getButton('Apple'), { key: 'ArrowDown' });
    expect(getButton('Load more')).toHaveFocus();
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('does not throw on arrow keys when the focused Menu.LoadMore starts loading', () => {
    const { rerender } = render(<AsyncMenu items={[]} onLoadMore={() => {}} />);
    act(() => getButton('Load more').focus());
    rerender(<AsyncMenu items={[]} onLoadMore={() => {}} loadingMore />);
    expect(() => fireEvent.keyDown(getButton('Load more'), { key: 'ArrowDown' })).not.toThrow();
    expect(() => fireEvent.keyDown(getButton('Load more'), { key: 'ArrowUp' })).not.toThrow();
  });

  [true, false].forEach((loop) => {
    it(`moves focus from a focused Menu.LoadMore that starts loading, loop=${loop}`, () => {
      const items = ['Apple', 'Banana'];
      const { rerender } = render(<AsyncMenu items={items} onLoadMore={() => {}} loop={loop} />);
      act(() => getButton('Load more').focus());
      rerender(<AsyncMenu items={items} onLoadMore={() => {}} loadingMore loop={loop} />);

      fireEvent.keyDown(getButton('Load more'), { key: 'ArrowUp' });
      expect(getButton('Banana')).toHaveFocus();

      act(() => getButton('Load more').focus());
      fireEvent.keyDown(getButton('Load more'), { key: 'ArrowDown' });
      expect(loop ? getButton('Apple') : getButton('Load more')).toHaveFocus();
    });
  });

  it('skips Menu.LoadMore in type-ahead', () => {
    render(<AsyncMenu items={['Apple', 'Lime']} onLoadMore={() => {}} />);
    const menu = screen.getByRole('menu');
    menu.focus();
    fireEvent.keyDown(menu, { key: 'l' });
    expect(getButton('Lime')).toHaveFocus();
    fireEvent.keyDown(getButton('Lime'), { key: 'l' });
    expect(getButton('Lime')).toHaveFocus();
  });

  describe('Menu.Sub with items loading', () => {
    function LoadingSubMenu({ items }: { items: string[] | null }) {
      return (
        <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
          <Menu.Target>
            <button type="button">test-target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Rename</Menu.Item>
            <Menu.Sub transitionProps={{ duration: 0 }}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Move to</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown data-testid="sub-dropdown">
                {items === null && <Menu.Empty>Loading projects</Menu.Empty>}
                {items?.map((item) => (
                  <Menu.Item key={item}>{item}</Menu.Item>
                ))}
              </Menu.Sub.Dropdown>
            </Menu.Sub>
            <Menu.Item>Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

    const flushFocus = () =>
      act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 30));
      });

    const openSub = async () => {
      const subTarget = getButton('Move to');
      subTarget.focus();
      fireEvent.keyDown(subTarget, { key: 'ArrowRight' });
      await flushFocus();
    };

    it('focuses the submenu dropdown when it has no focusable items yet', async () => {
      render(<LoadingSubMenu items={null} />);
      await openSub();
      expect(screen.getByTestId('sub-dropdown')).toHaveFocus();
    });

    it('moves focus to submenu items once they arrive', async () => {
      const { rerender } = render(<LoadingSubMenu items={null} />);
      await openSub();
      rerender(<LoadingSubMenu items={['Marketing site', 'Mobile app']} />);

      const subDropdown = screen.getByTestId('sub-dropdown');
      fireEvent.keyDown(subDropdown, { key: 'ArrowDown' });
      expect(getButton('Marketing site')).toHaveFocus();

      subDropdown.focus();
      fireEvent.keyDown(subDropdown, { key: 'End' });
      expect(getButton('Mobile app')).toHaveFocus();
    });

    it('does not move focus to parent menu items with arrows from an empty submenu', async () => {
      render(<LoadingSubMenu items={null} />);
      await openSub();
      fireEvent.keyDown(screen.getByTestId('sub-dropdown'), { key: 'ArrowDown' });
      expect(screen.getByTestId('sub-dropdown')).toHaveFocus();
    });

    it('returns focus to the sub item with the back arrow key from the dropdown', async () => {
      render(<LoadingSubMenu items={null} />);
      await openSub();
      fireEvent.keyDown(screen.getByTestId('sub-dropdown'), { key: 'ArrowLeft' });
      await flushFocus();
      expect(getButton('Move to')).toHaveFocus();
      expect(screen.queryByTestId('sub-dropdown')).not.toBeInTheDocument();
    });
  });

  it('supports empty state and load more inside Menu.Sub dropdown', async () => {
    const onLoadMore = jest.fn();
    render(
      <Menu transitionProps={{ duration: 0 }} withinPortal={false} defaultOpened>
        <Menu.Target>
          <button type="button">test-target</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Sub transitionProps={{ duration: 0 }}>
            <Menu.Sub.Target>
              <Menu.Sub.Item>More</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Empty>No recent files</Menu.Empty>
              <Menu.LoadMore onLoadMore={onLoadMore}>Load more</Menu.LoadMore>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
        </Menu.Dropdown>
      </Menu>
    );

    const subTarget = getButton('More');
    subTarget.focus();
    fireEvent.keyDown(subTarget, { key: 'ArrowRight' });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

    expect(screen.getByRole('menuitem', { name: 'No recent files' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(getButton('Load more')).toHaveFocus();
    expect(onLoadMore).toHaveBeenCalled();
  });
});
