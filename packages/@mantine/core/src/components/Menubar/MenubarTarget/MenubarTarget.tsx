import {
  createEventHandler,
  ElementProps,
  MantineStyleProp,
  useDirection,
  useProps,
} from '../../../core';
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

  // Before the menu indexes resolve from the DOM (first render / SSR HTML), every target
  // would otherwise compute `tabIndex={-1}`, leaving the menubar with no tab stop until
  // effects run. Keep unresolved targets focusable so keyboard users can enter the menubar.
  const isUnresolvedTabStop = menuCtx.index === -1 && !isDisabled;

  const moveToAdjacent = (direction: 1 | -1) => {
    const nextIndex = ctx.controller.getAdjacentIndex(menuCtx.index, direction);
    ctx.controller.focusMenu(nextIndex);
    if (ctx.controller.openIndex !== null) {
      ctx.controller.openMenu(nextIndex);
    }
  };

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
        ctx.controller.setActiveIndex(index);
        node.focus();
        if (ctx.controller.openIndex !== null) {
          ctx.controller.openMenu(index);
        }
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

  const handleMouseEnter = createEventHandler<any>(onMouseEnter, () => {
    if (isDisabled) {
      return;
    }
    ctx.cancelClose();
    if (ctx.trigger === 'hover') {
      ctx.controller.openMenu(menuCtx.index, 'hover');
    } else if (ctx.controller.openIndex !== null && ctx.controller.openIndex !== menuCtx.index) {
      // Hover-switching with trigger="click" continues a click-driven interaction:
      // keep 'click' as the open source so that the next click on the target
      // closes the menu, same as a click-opened menu (desktop application pattern)
      ctx.controller.openMenu(menuCtx.index);
    }
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
    const forwardKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const backKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === forwardKey) {
      event.preventDefault();
      moveToAdjacent(1);
    } else if (event.key === backKey) {
      event.preventDefault();
      moveToAdjacent(-1);
    } else if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openAndFocusItem('first');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocusItem('last');
    } else if (event.key === 'Home') {
      event.preventDefault();
      ctx.controller.focusFirstMenu();
    } else if (event.key === 'End') {
      event.preventDefault();
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
