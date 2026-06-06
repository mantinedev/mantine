import { useState } from 'react';
import { useId, useIsomorphicEffect } from '@mantine/hooks';
import { Menu, MenuProps } from '../../Menu';
import { MenubarMenuContextProvider, useMenubarContext } from '../Menubar.context';

export interface MenubarMenuProps extends Omit<
  MenuProps,
  'opened' | 'defaultOpened' | 'onChange' | 'onOpen' | 'onClose' | 'trigger' | 'returnFocus'
> {
  /** `Menubar.Target` and `Menubar.Dropdown` components */
  children?: React.ReactNode;
}

const DEFAULT_TRANSITION_DURATION = 150;

export function MenubarMenu({ children, transitionProps, ...others }: MenubarMenuProps) {
  const ctx = useMenubarContext();
  const id = useId();
  const [index, setIndex] = useState(-1);

  useIsomorphicEffect(() => {
    const next = ctx.getMenuIndex(id);
    setIndex((current) => (current === next ? current : next));
  });

  const opened = ctx.openIndex !== null && index !== -1 && ctx.openIndex === index;

  const handleChange = (value: boolean) => {
    if (value) {
      ctx.openMenu(index, 'click');
      ctx.setActiveIndex(index);
    } else {
      ctx.closeMenu();
    }
  };

  // Transitions should only play when the whole bar opens or closes, not when
  // switching between sibling menus while one is already open.
  const baseDuration = transitionProps?.duration ?? DEFAULT_TRANSITION_DURATION;
  const baseExitDuration = transitionProps?.exitDuration ?? baseDuration;
  const animateEnter = ctx.getPreviousOpenIndex() === null;
  const animateExit = ctx.openIndex === null;
  const resolvedTransitionProps = {
    ...transitionProps,
    duration: animateEnter ? baseDuration : 0,
    exitDuration: animateExit ? baseExitDuration : 0,
  };

  return (
    <MenubarMenuContextProvider value={{ id, index, opened }}>
      <Menu
        position={ctx.position}
        loop={ctx.loop}
        unstyled={ctx.unstyled}
        menuItemTabIndex={-1}
        trapFocus={false}
        {...others}
        transitionProps={resolvedTransitionProps}
        opened={opened}
        onChange={handleChange}
        trigger="click"
        returnFocus={false}
      >
        {children}
      </Menu>
    </MenubarMenuContextProvider>
  );
}

MenubarMenu.displayName = '@mantine/core/MenubarMenu';
