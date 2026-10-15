import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useMenubar } from './use-menubar';

interface MenuDescriptor {
  id: string;
  disabled?: boolean;
}

function createRoot(menus: MenuDescriptor[]) {
  const root = document.createElement('div');

  menus.forEach((menu) => {
    const target = document.createElement('button');
    target.setAttribute('data-menubar-target', '');
    target.setAttribute('data-menubar-id', menu.id);

    if (menu.disabled) {
      target.disabled = true;
    }

    root.appendChild(target);
  });

  document.body.appendChild(root);
  return root;
}

function renderMenubar(
  options?: Parameters<typeof useMenubar>[0],
  menus: MenuDescriptor[] = [{ id: 'file' }, { id: 'edit' }, { id: 'view' }]
) {
  const hook = renderHook((props?: Parameters<typeof useMenubar>[0]) => useMenubar(props), {
    initialProps: options,
  });

  const root = createRoot(menus);
  act(() => {
    hook.result.current.registerRoot(root);
  });

  return { hook, root };
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('@mantine/core/Menubar/use-menubar', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useMenubar(),
    actions: [
      'getOpenIndex',
      'getActiveIndex',
      'setOpenIndex',
      'setActiveIndex',
      'openMenu',
      'closeMenu',
      'toggleMenu',
      'focusMenu',
      'focusNextMenu',
      'focusPreviousMenu',
      'focusFirstMenu',
      'focusLastMenu',
      'focusMenuItem',
      'isMenuOpen',
      'getMenuCount',
      'getEnabledIndexes',
      'getOpenSource',
      'registerRoot',
      'getTargets',
      'getMenuIndex',
      'getAdjacentIndex',
      'focusTarget',
      'getMenuDropdown',
    ],
    changeState: (controller) => controller.openMenu(1),
  });

  it('returns open and active indexes from getters', () => {
    const hook = renderHook(() => useMenubar({ defaultOpenIndex: 1 }));
    expect(hook.result.current.getOpenIndex()).toBe(1);

    act(() => hook.result.current.setActiveIndex(2));
    expect(hook.result.current.getActiveIndex()).toBe(2);

    act(() => hook.result.current.closeMenu());
    expect(hook.result.current.getOpenIndex()).toBe(null);
  });

  it('returns the default state', () => {
    const hook = renderHook(() => useMenubar());
    expect(hook.result.current.openIndex).toBeNull();
    expect(hook.result.current.activeIndex).toBe(0);
    expect(hook.result.current.loop).toBe(true);
    expect(hook.result.current.getOpenSource()).toBeNull();
  });

  it('supports uncontrolled state with defaultOpenIndex', () => {
    const hook = renderHook(() => useMenubar({ defaultOpenIndex: 1 }));
    expect(hook.result.current.openIndex).toBe(1);

    act(() => hook.result.current.setOpenIndex(2));
    expect(hook.result.current.openIndex).toBe(2);
  });

  it('supports controlled state and calls onOpenChange without changing the value', () => {
    const onOpenChange = jest.fn();
    const hook = renderHook(() => useMenubar({ openIndex: 0, onOpenChange }));

    act(() => hook.result.current.openMenu(2));
    expect(onOpenChange).toHaveBeenLastCalledWith(2);
    expect(hook.result.current.openIndex).toBe(0);
  });

  it('openMenu records the open source and moves the tab stop', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.openMenu(2, 'hover'));
    expect(hook.result.current.openIndex).toBe(2);
    expect(hook.result.current.activeIndex).toBe(2);
    expect(hook.result.current.getOpenSource()).toBe('hover');

    act(() => hook.result.current.openMenu(1));
    expect(hook.result.current.getOpenSource()).toBe('click');
  });

  it('closeMenu clears the open index and the open source but keeps the tab stop', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.openMenu(2, 'hover'));
    act(() => hook.result.current.closeMenu());

    expect(hook.result.current.openIndex).toBeNull();
    expect(hook.result.current.activeIndex).toBe(2);
    expect(hook.result.current.getOpenSource()).toBeNull();
  });

  it('setOpenIndex resets the open source', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.openMenu(0, 'hover'));
    act(() => hook.result.current.setOpenIndex(1));
    expect(hook.result.current.getOpenSource()).toBe('click');

    act(() => hook.result.current.setOpenIndex(null));
    expect(hook.result.current.getOpenSource()).toBeNull();
  });

  it('toggleMenu opens a closed menu and closes the opened one', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.toggleMenu(1));
    expect(hook.result.current.openIndex).toBe(1);

    act(() => hook.result.current.toggleMenu(1));
    expect(hook.result.current.openIndex).toBeNull();

    act(() => hook.result.current.toggleMenu(2));
    expect(hook.result.current.openIndex).toBe(2);
  });

  it('isMenuOpen reports the opened menu', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.openMenu(1));
    expect(hook.result.current.isMenuOpen(1)).toBe(true);
    expect(hook.result.current.isMenuOpen(0)).toBe(false);
  });

  it('queries are empty until a root element is registered', () => {
    const hook = renderHook(() => useMenubar());
    expect(hook.result.current.getMenuCount()).toBe(0);
    expect(hook.result.current.getTargets()).toStrictEqual([]);
    expect(hook.result.current.getEnabledIndexes()).toStrictEqual([]);
    expect(hook.result.current.getMenuIndex('file')).toBe(-1);
  });

  it('reads menus from the registered root element', () => {
    const { hook } = renderMenubar();

    expect(hook.result.current.getMenuCount()).toBe(3);
    expect(hook.result.current.getMenuIndex('edit')).toBe(1);
    expect(hook.result.current.getMenuIndex('unknown')).toBe(-1);
  });

  it('getMenuDropdown finds the dropdown through the target aria-controls', () => {
    const { hook, root } = renderMenubar();
    const dropdown = document.createElement('div');
    dropdown.id = 'edit-dropdown';
    document.body.appendChild(dropdown);

    expect(hook.result.current.getMenuDropdown(1)).toBeNull();

    root.querySelectorAll('button')[1].setAttribute('aria-controls', 'edit-dropdown');
    expect(hook.result.current.getMenuDropdown(1)).toBe(dropdown);
    expect(hook.result.current.getMenuDropdown(0)).toBeNull();
    expect(hook.result.current.getMenuDropdown(5)).toBeNull();
  });

  it('getEnabledIndexes skips disabled targets', () => {
    const { hook } = renderMenubar(undefined, [
      { id: 'file' },
      { id: 'edit', disabled: true },
      { id: 'view' },
    ]);

    expect(hook.result.current.getEnabledIndexes()).toStrictEqual([0, 2]);
  });

  it('registerRoot cleanup does not clear a root registered by another component', () => {
    const { hook, root } = renderMenubar();
    let cleanup: () => void = () => {};

    act(() => {
      cleanup = hook.result.current.registerRoot(root);
    });

    const nextRoot = createRoot([{ id: 'help' }]);
    act(() => {
      hook.result.current.registerRoot(nextRoot);
    });

    act(() => cleanup());
    expect(hook.result.current.getMenuCount()).toBe(1);
  });

  it('getAdjacentIndex wraps around when loop is set', () => {
    const { hook } = renderMenubar();

    expect(hook.result.current.getAdjacentIndex(2, 1)).toBe(0);
    expect(hook.result.current.getAdjacentIndex(0, -1)).toBe(2);
  });

  it('getAdjacentIndex clamps when loop is false', () => {
    const { hook } = renderMenubar({ loop: false });

    expect(hook.result.current.loop).toBe(false);
    expect(hook.result.current.getAdjacentIndex(2, 1)).toBe(2);
    expect(hook.result.current.getAdjacentIndex(0, -1)).toBe(0);
  });

  it('getAdjacentIndex skips disabled targets', () => {
    const { hook } = renderMenubar(undefined, [
      { id: 'file' },
      { id: 'edit', disabled: true },
      { id: 'view' },
    ]);

    expect(hook.result.current.getAdjacentIndex(0, 1)).toBe(2);
  });

  it('focusMenu focuses the target and moves the tab stop', () => {
    const { hook, root } = renderMenubar();

    act(() => hook.result.current.focusMenu(1));
    expect(hook.result.current.activeIndex).toBe(1);
    expect(document.activeElement).toBe(root.children[1]);
  });

  it('focusNextMenu and focusPreviousMenu move relative to activeIndex', () => {
    const { hook, root } = renderMenubar();

    act(() => hook.result.current.focusNextMenu());
    expect(hook.result.current.activeIndex).toBe(1);
    expect(document.activeElement).toBe(root.children[1]);

    act(() => hook.result.current.focusPreviousMenu());
    expect(hook.result.current.activeIndex).toBe(0);
  });

  it('focusNextMenu switches the opened menu when one is opened', () => {
    const { hook } = renderMenubar();

    act(() => hook.result.current.openMenu(0));
    act(() => hook.result.current.focusNextMenu());

    expect(hook.result.current.openIndex).toBe(1);
    expect(hook.result.current.activeIndex).toBe(1);
  });

  it('focusMenu switches the opened menu when one is opened', () => {
    const { hook, root } = renderMenubar();

    act(() => hook.result.current.openMenu(0, 'hover'));
    act(() => hook.result.current.focusMenu(2));

    expect(hook.result.current.openIndex).toBe(2);
    expect(hook.result.current.activeIndex).toBe(2);
    expect(hook.result.current.getOpenSource()).toBe('click');
    expect(document.activeElement).toBe(root.children[2]);
  });

  it('focusMenu keeps the open source when the given menu is already opened', () => {
    const { hook } = renderMenubar();

    act(() => hook.result.current.openMenu(1, 'hover'));
    act(() => hook.result.current.focusMenu(1));

    expect(hook.result.current.openIndex).toBe(1);
    expect(hook.result.current.getOpenSource()).toBe('hover');
  });

  it('focusFirstMenu and focusLastMenu switch the opened menu when one is opened', () => {
    const { hook } = renderMenubar();

    act(() => hook.result.current.openMenu(0));
    act(() => hook.result.current.focusLastMenu());
    expect(hook.result.current.openIndex).toBe(2);
    expect(hook.result.current.activeIndex).toBe(2);

    act(() => hook.result.current.focusFirstMenu());
    expect(hook.result.current.openIndex).toBe(0);
    expect(hook.result.current.activeIndex).toBe(0);
  });

  it('focusNextMenu does not open a menu when all menus are closed', () => {
    const { hook } = renderMenubar();

    act(() => hook.result.current.focusNextMenu());
    expect(hook.result.current.openIndex).toBeNull();
  });

  it('focusFirstMenu and focusLastMenu move to the edge enabled menus', () => {
    const { hook } = renderMenubar(undefined, [
      { id: 'file', disabled: true },
      { id: 'edit' },
      { id: 'view' },
      { id: 'help', disabled: true },
    ]);

    act(() => hook.result.current.focusLastMenu());
    expect(hook.result.current.activeIndex).toBe(2);

    act(() => hook.result.current.focusFirstMenu());
    expect(hook.result.current.activeIndex).toBe(1);
  });

  it('focus actions are no-op when no root is registered', () => {
    const hook = renderHook(() => useMenubar());

    act(() => hook.result.current.focusFirstMenu());
    expect(hook.result.current.activeIndex).toBe(0);
    expect(document.activeElement).toBe(document.body);
  });

  it('focusMenuItem focuses an item of the dropdown associated with the target', () => {
    jest.useFakeTimers();
    const { hook, root } = renderMenubar();

    const dropdown = document.createElement('div');
    dropdown.id = 'test-dropdown';
    dropdown.innerHTML =
      '<button data-menu-item>First</button><button data-menu-item data-disabled>Second</button><button data-menu-item>Third</button>';
    document.body.appendChild(dropdown);
    root.children[1].setAttribute('aria-controls', 'test-dropdown');

    act(() => {
      hook.result.current.openMenu(1);
      hook.result.current.focusMenuItem(1);
    });
    act(() => jest.runAllTimers());
    expect(document.activeElement).toBe(dropdown.children[0]);

    act(() => hook.result.current.focusMenuItem(1, 'last'));
    act(() => jest.runAllTimers());
    expect(document.activeElement).toBe(dropdown.children[2]);

    jest.useRealTimers();
  });

  it('focusMenuItem focuses an item of a dropdown that is rendered later', () => {
    jest.useFakeTimers();
    const { hook, root } = renderMenubar();
    root.children[1].setAttribute('aria-controls', 'late-dropdown');

    act(() => {
      hook.result.current.openMenu(1);
      hook.result.current.focusMenuItem(1);
    });
    act(() => jest.advanceTimersByTime(200));

    const dropdown = document.createElement('div');
    dropdown.id = 'late-dropdown';
    dropdown.innerHTML = '<button data-menu-item>First</button>';
    document.body.appendChild(dropdown);

    act(() => jest.advanceTimersByTime(50));
    expect(document.activeElement).toBe(dropdown.children[0]);

    jest.useRealTimers();
  });

  it('focusMenuItem does nothing when the menu is closed before the item is focused', () => {
    jest.useFakeTimers();
    const { hook, root } = renderMenubar();

    const dropdown = document.createElement('div');
    dropdown.id = 'test-dropdown';
    dropdown.innerHTML = '<button data-menu-item>First</button>';
    document.body.appendChild(dropdown);
    root.children[1].setAttribute('aria-controls', 'test-dropdown');

    act(() => {
      hook.result.current.openMenu(1);
      hook.result.current.focusMenuItem(1);
      hook.result.current.closeMenu();
    });
    act(() => jest.runAllTimers());

    expect(document.activeElement).not.toBe(dropdown.children[0]);

    jest.useRealTimers();
  });
});
