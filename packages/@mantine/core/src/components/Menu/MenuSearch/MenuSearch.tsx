import { useEffect, useRef } from 'react';
import { useCallbackRef, useId, useMergedRef } from '@mantine/hooks';
import { createEventHandler, ElementProps, factory, Factory, useProps } from '../../../core';
import { Input, InputProps } from '../../Input/Input';
import { usePopoverContext } from '../../Popover/Popover.context';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

const ITEM_SELECTOR = '[data-menu-item]:not([data-disabled])';
const ACTIVE_SELECTOR = '[data-menu-active]';

function getDropdown(node: HTMLElement | null): HTMLElement | null {
  return node?.closest('[data-menu-dropdown]') as HTMLElement | null;
}

function getItems(dropdown: HTMLElement | null): HTMLElement[] {
  if (!dropdown) {
    return [];
  }
  return Array.from(dropdown.querySelectorAll<HTMLElement>(ITEM_SELECTOR)).filter(
    (item) => item.closest('[data-menu-dropdown]') === dropdown
  );
}

function clearActive(dropdown: HTMLElement | null, input: HTMLElement | null) {
  input?.removeAttribute('aria-activedescendant');

  if (!dropdown) {
    return;
  }
  dropdown.querySelectorAll<HTMLElement>(ACTIVE_SELECTOR).forEach((node) => {
    if (node.closest('[data-menu-dropdown]') === dropdown) {
      node.removeAttribute('data-menu-active');
    }
  });
}

function setActive(
  item: HTMLElement | null,
  dropdown: HTMLElement | null,
  input: HTMLElement,
  getItemId: () => string
) {
  clearActive(dropdown, input);
  if (item) {
    if (!item.id) {
      item.id = getItemId();
    }
    item.setAttribute('data-menu-active', 'true');
    input.setAttribute('aria-activedescendant', item.id);
    item.scrollIntoView({ block: 'nearest' });
  }
}

function getActiveIndex(items: HTMLElement[]): number {
  return items.findIndex((item) => item.hasAttribute('data-menu-active'));
}

export type MenuSearchStylesNames = 'search';

export interface MenuSearchProps extends InputProps, ElementProps<'input', 'size'> {
  /** If set, clears the search value after the menu close transition completes. Requires a controlled `value`/`onChange` pair. @default true */
  clearSearchOnClose?: boolean;
}

export type MenuSearchFactory = Factory<{
  props: MenuSearchProps;
  ref: HTMLInputElement;
  stylesNames: MenuSearchStylesNames;
  compound: true;
}>;

const defaultProps = {
  clearSearchOnClose: true,
} satisfies Partial<MenuSearchProps>;

export const MenuSearch = factory<MenuSearchFactory>((props) => {
  const { classNames, styles, onKeyDown, onChange, size, clearSearchOnClose, ref, ...others } =
    useProps('MenuSearch', defaultProps, props);

  const ctx = useMenuContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(ref, inputRef);
  const emitChange = useCallbackRef(onChange);
  const popoverCtx = usePopoverContext();
  const itemIdPrefix = useId();
  const itemIdCounter = useRef(0);
  const getItemId = () => {
    itemIdCounter.current += 1;
    return `${itemIdPrefix}-item-${itemIdCounter.current}`;
  };

  useEffect(() => {
    const unregister = ctx.registerSearch();
    return unregister;
  }, [ctx.registerSearch]);

  useEffect(() => {
    if (!clearSearchOnClose) {
      return undefined;
    }

    return ctx.registerSearchExitClear(() => {
      emitChange({
        currentTarget: { value: '' },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    });
  }, [clearSearchOnClose, ctx.registerSearchExitClear]);

  useEffect(() => {
    if (!ctx.opened) {
      clearActive(getDropdown(inputRef.current), inputRef.current);
    }
  }, [ctx.opened]);

  const handleChange = createEventHandler<any>(
    onChange,
    (event: React.ChangeEvent<HTMLInputElement>) => {
      clearActive(getDropdown(event.currentTarget), event.currentTarget);
    }
  );

  const handleKeyDown = createEventHandler<any>(
    onKeyDown,
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) {
        return;
      }

      const dropdown = getDropdown(event.currentTarget);
      const items = getItems(dropdown);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (items.length === 0) {
          return;
        }
        const current = getActiveIndex(items);
        const next = current >= items.length - 1 ? (ctx.loop ? 0 : current) : current + 1;
        setActive(items[next] ?? null, dropdown, event.currentTarget, getItemId);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (items.length === 0) {
          return;
        }
        const current = getActiveIndex(items);
        const next =
          current <= 0
            ? current === -1
              ? items.length - 1
              : ctx.loop
                ? items.length - 1
                : 0
            : current - 1;
        setActive(items[next] ?? null, dropdown, event.currentTarget, getItemId);
      } else if (event.key === 'Home') {
        event.preventDefault();
        if (items.length > 0) {
          setActive(items[0]!, dropdown, event.currentTarget, getItemId);
        }
      } else if (event.key === 'End') {
        event.preventDefault();
        if (items.length > 0) {
          setActive(items[items.length - 1]!, dropdown, event.currentTarget, getItemId);
        }
      } else if (event.key === 'Enter') {
        if (event.nativeEvent.isComposing || (event.nativeEvent as KeyboardEvent).keyCode === 229) {
          return;
        }
        const activeIndex = getActiveIndex(items);
        const target = items[activeIndex];
        if (target) {
          event.preventDefault();
          if (target.hasAttribute('data-sub-menu-item')) {
            target.focus();
            target.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
            );
          } else {
            target.click();
          }
        }
      }
    }
  );

  const _styles = ctx.getStyles('search');

  return (
    <Input
      data-autofocus
      data-mantine-stop-propagation
      type="search"
      size={size}
      aria-controls={popoverCtx.opened ? popoverCtx.getDropdownId() : undefined}
      {...others}
      ref={mergedRef}
      classNames={[{ input: _styles.className }, classNames] as any}
      styles={[{ input: _styles.style }, styles] as any}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      __staticSelector="Menu"
    />
  );
});

MenuSearch.classes = classes;
MenuSearch.displayName = '@mantine/core/MenuSearch';
