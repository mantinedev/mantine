import { useDisclosure, useId } from '@mantine/hooks';
import { ExtendComponent, Factory, useProps } from '../../../core';
import { useDelayedHover } from '../../Floating';
import { __PopoverProps, Popover } from '../../Popover';
import { MenuSubDropdown } from '../MenuSubDropdown/MenuSubDropdown';
import { MenuSubItem } from '../MenuSubItem/MenuSubItem';
import { MenuSubTarget } from '../MenuSubTarget/MenuSubTarget';
import { SubMenuProvider, useSubMenuContext } from './MenuSub.context';

export type MenuSubFactory = Factory<{
  props: MenuSubProps;
}>;

interface MenuSubProps extends __PopoverProps {
  children: React.ReactNode;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps: Partial<MenuSubProps> = {
  offset: 0,
  position: 'right-start',
  transitionProps: { duration: 0 },
};

export function MenuSub(_props: MenuSubProps) {
  const { children, closeDelay, ...others } = useProps('MenuSub', _props, defaultProps);
  const id = useId();
  const [opened, { open, close }] = useDisclosure(false);
  const ctx = useSubMenuContext();

  const { openDropdown, closeDropdown } = useDelayedHover({
    open,
    close,
    closeDelay,
    openDelay: 0,
  });

  const focusFirstItem = () =>
    window.setTimeout(() => {
      document
        .getElementById(`${id}-dropdown`)
        ?.querySelectorAll<HTMLButtonElement>('[data-menu-item]:not([data-disabled])')[0]
        ?.focus();
    }, 16);

  const focusParentItem = () =>
    window.setTimeout(() => {
      document.getElementById(`${id}-target`)?.focus();
    }, 16);

  return (
    <SubMenuProvider
      value={{
        opened,
        close: closeDropdown,
        open: openDropdown,
        focusFirstItem,
        focusParentItem,
        parentContext: ctx,
      }}
    >
      <Popover opened={opened} {...others} withinPortal={false} id={id}>
        {children}
      </Popover>
    </SubMenuProvider>
  );
}

MenuSub.extend = (input: ExtendComponent<MenuSubFactory>) => input;
MenuSub.displayName = '@mantine/core/MenuSub';
MenuSub.Target = MenuSubTarget;
MenuSub.Dropdown = MenuSubDropdown;
MenuSub.Item = MenuSubItem;
