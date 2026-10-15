import {
  createEventHandler,
  ElementProps,
  MantineStyleProp,
  useDirection,
  useProps,
} from '../../../core';
import { getMenuArrowKeys } from '../../Menu/get-menu-arrow-keys';
import { Popover } from '../../Popover';
import { UnstyledButton } from '../../UnstyledButton';
import { useMenubarContext, useMenubarMenuContext } from '../Menubar.context';

export interface MenubarTargetProps extends ElementProps<'button'> {
  'data-disabled'?: boolean;

  /** Target label */
  children: React.ReactNode;

  /** Inline styles applied to the target button */
  style?: MantineStyleProp;

  /** Key of the prop used to get element ref, useful for forwarding refs to custom components @default 'ref' */
  refProp?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<MenubarTargetProps>;

function isPrintableKey(event: React.KeyboardEvent) {
  return (
    event.key.length === 1 && event.key !== ' ' && !event.ctrlKey && !event.metaKey && !event.altKey
  );
}

function getTargetLabel(node: HTMLElement) {
  return (node.textContent ?? '').trim().toLowerCase();
}

function isFocusInMenubar(target: HTMLElement, menubarId: string) {
  const active = document.activeElement;
  if (!active || active === target) {
    return false;
  }

  return (
    !!target.closest('[data-menubar]')?.contains(active) ||
    !!active.closest(`[data-menubar-dropdown="${menubarId}"]`)
  );
}

export function MenubarTarget(props: MenubarTargetProps) {
  const {
    children,
    refProp,
    className,
    style,
    disabled,
    'data-disabled': dataDisabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onKeyDown,
    ...others
  } = useProps('MenubarTarget', defaultProps, props);

  const ctx = useMenubarContext();
  const menuCtx = useMenubarMenuContext();
  const { dir } = useDirection();

  const isDisabled = disabled || dataDisabled;
  const isActive = ctx.controller.activeIndex === menuCtx.index;

  const isUnresolvedTabStop = menuCtx.index === -1 && !isDisabled;

  const moveToAdjacent = (direction: 1 | -1) =>
    ctx.controller.focusMenu(ctx.controller.getAdjacentIndex(menuCtx.index, direction));

  const openAndFocusItem = (itemPosition: 'first' | 'last') => {
    ctx.controller.openMenu(menuCtx.index);
    ctx.controller.focusMenuItem(menuCtx.index, itemPosition);
  };

  const typeAhead = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const targets = ctx.controller.getTargets();
    if (targets.length === 0) {
      return;
    }

    const char = event.key.toLowerCase();
    for (let offset = 1; offset <= targets.length; offset += 1) {
      const index = (menuCtx.index + offset) % targets.length;
      const node = targets[index];
      if (
        node &&
        !node.disabled &&
        !node.hasAttribute('data-disabled') &&
        getTargetLabel(node).startsWith(char)
      ) {
        event.preventDefault();
        event.stopPropagation();
        ctx.controller.focusMenu(index);
        break;
      }
    }
  };

  const handleClick = createEventHandler<any>(onClick, () => {
    if (isDisabled) {
      return;
    }
    if (ctx.controller.openIndex === menuCtx.index && ctx.controller.getOpenSource() !== 'hover') {
      ctx.controller.closeMenu();
    } else {
      ctx.controller.openMenu(menuCtx.index);
    }
  });

  const handleMouseEnter = createEventHandler<any>(onMouseEnter, (event) => {
    if (isDisabled) {
      return;
    }
    ctx.cancelClose();
    const target = event.currentTarget as HTMLButtonElement;
    const shouldMoveFocus = isFocusInMenubar(target, ctx.controller.id);
    if (ctx.trigger === 'hover') {
      ctx.controller.openMenu(menuCtx.index, 'hover');
    } else if (ctx.controller.openIndex !== null && ctx.controller.openIndex !== menuCtx.index) {
      ctx.controller.openMenu(menuCtx.index);
    } else {
      return;
    }
    shouldMoveFocus && target.focus();
  });

  const handleMouseLeave = createEventHandler<any>(onMouseLeave, () => {
    if (ctx.trigger === 'hover') {
      ctx.scheduleClose();
    }
  });

  const handleFocus = createEventHandler<any>(onFocus, () =>
    ctx.controller.setActiveIndex(menuCtx.index)
  );

  const handleKeyDown = createEventHandler<any>(onKeyDown, (event) => {
    if (isDisabled) {
      return;
    }
    const { forward: forwardKey, back: backKey } = getMenuArrowKeys(dir);

    if (event.key === forwardKey) {
      event.preventDefault();
      event.stopPropagation();
      moveToAdjacent(1);
    } else if (event.key === backKey) {
      event.preventDefault();
      event.stopPropagation();
      moveToAdjacent(-1);
    } else if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openAndFocusItem('first');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocusItem('last');
    } else if (event.key === 'Home') {
      event.preventDefault();
      event.stopPropagation();
      ctx.controller.focusFirstMenu();
    } else if (event.key === 'End') {
      event.preventDefault();
      event.stopPropagation();
      ctx.controller.focusLastMenu();
    } else if (event.key === 'Escape') {
      if (menuCtx.opened) {
        ctx.controller.closeMenu();
      }
    } else if (event.key === 'Tab') {
      if (menuCtx.opened) {
        ctx.controller.closeMenu();
      }
    } else if (isPrintableKey(event)) {
      typeAhead(event);
    }
  });

  return (
    <Popover.Target refProp={refProp} popupType="menu">
      <UnstyledButton
        {...others}
        unstyled={ctx.unstyled}
        role="menuitem"
        tabIndex={isActive || isUnresolvedTabStop ? 0 : -1}
        disabled={disabled}
        data-menubar-target
        data-menubar-id={menuCtx.id}
        data-disabled={dataDisabled || undefined}
        data-expanded={menuCtx.opened || undefined}
        data-mantine-stop-propagation={menuCtx.opened || undefined}
        {...ctx.getStyles('target', { className, style })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      >
        {children}
      </UnstyledButton>
    </Popover.Target>
  );
}

MenubarTarget.displayName = '@mantine/core/MenubarTarget';
