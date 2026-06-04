import { createEventHandler, useDirection } from '../../../core';
import { Menu, MenuDropdownProps } from '../../Menu';
import { useMenubarContext, useMenubarMenuContext } from '../Menubar.context';

export interface MenubarDropdownProps extends MenuDropdownProps {}

export function MenubarDropdown(props: MenubarDropdownProps) {
  const { onKeyDown, onMouseEnter, onMouseLeave, ...others } = props;
  const ctx = useMenubarContext();
  const menuCtx = useMenubarMenuContext();
  const { dir } = useDirection();

  const handleMouseEnter = createEventHandler<any>(onMouseEnter, () => ctx.cancelClose());

  const handleMouseLeave = createEventHandler<any>(onMouseLeave, () => {
    if (ctx.trigger === 'hover') {
      ctx.scheduleClose();
    }
  });

  const switchToAdjacent = (direction: 1 | -1) => {
    const nextIndex = ctx.getAdjacentIndex(menuCtx.index, direction);
    if (nextIndex !== menuCtx.index) {
      ctx.setActiveIndex(nextIndex);
      ctx.openMenu(nextIndex, 'click');
      ctx.focusMenuItem(nextIndex, 'first');
    }
  };

  const handleKeyDown = createEventHandler<any>(onKeyDown, (event) => {
    const target = event.target as HTMLElement;

    // Tabbing out of an open menu dismisses it. Focus is moved to the trigger first
    // so the browser continues the tab sequence from the menubar position.
    if (event.key === 'Tab') {
      ctx.focusTarget(menuCtx.index);
      ctx.closeMenu();
      return;
    }

    // Only handle navigation when focus is on a top-level item of this dropdown,
    // submenu items keep ArrowLeft/ArrowRight for their own open/close behavior
    if (target.closest('[data-menu-dropdown]') !== event.currentTarget) {
      return;
    }

    const forwardKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const backKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === forwardKey) {
      if (target.closest('[data-menu-item]')?.hasAttribute('data-sub-menu-item')) {
        return;
      }
      event.preventDefault();
      switchToAdjacent(1);
    } else if (event.key === backKey) {
      event.preventDefault();
      switchToAdjacent(-1);
    } else if (event.key === 'Escape') {
      const index = menuCtx.index;
      ctx.setActiveIndex(index);
      window.setTimeout(() => ctx.focusTarget(index), 0);
    }
  });

  return (
    <Menu.Dropdown
      {...others}
      data-menubar-dropdown
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

MenubarDropdown.displayName = '@mantine/core/MenubarDropdown';
