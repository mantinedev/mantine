import { createEventHandler, useDirection } from '../../../core';
import { Menu, MenuDropdownProps } from '../../Menu';
import { getMenuArrowKeys } from '../../Menu/get-menu-arrow-keys';
import { useMenubarContext, useMenubarMenuContext } from '../Menubar.context';

export interface MenubarDropdownProps extends MenuDropdownProps {}

function isEditable(node: HTMLElement) {
  return node.isContentEditable || node.tagName === 'INPUT' || node.tagName === 'TEXTAREA';
}

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
    const nextIndex = ctx.controller.getAdjacentIndex(menuCtx.index, direction);
    if (nextIndex !== menuCtx.index) {
      ctx.controller.openMenu(nextIndex);
      ctx.controller.focusMenuItem(nextIndex, 'first');
    }
  };

  const handleKeyDown = createEventHandler<any>(onKeyDown, (event) => {
    const target = event.target as HTMLElement;

    if (event.key === 'Tab') {
      ctx.controller.focusTarget(menuCtx.index);
      ctx.controller.closeMenu();
      return;
    }

    if (event.defaultPrevented || isEditable(target)) {
      return;
    }

    const { forward: forwardKey, back: backKey } = getMenuArrowKeys(dir);

    if (event.key === forwardKey) {
      if (target.closest('[data-menu-item]')?.hasAttribute('data-sub-menu-item')) {
        return;
      }
      event.preventDefault();
      switchToAdjacent(1);
    } else if (event.key === backKey) {
      if (target.closest('[data-menu-dropdown]') !== event.currentTarget) {
        return;
      }
      event.preventDefault();
      switchToAdjacent(-1);
    }
  });

  return (
    <Menu.Dropdown
      {...others}
      data-menubar-dropdown={ctx.controller.id}
      data-mantine-stop-propagation
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

MenubarDropdown.displayName = '@mantine/core/MenubarDropdown';
