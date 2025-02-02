import { useDisclosure, useId } from '@mantine/hooks';
import { createOptionalContext } from '../../../core';
import { useDelayedHover } from '../../Floating';
import { __PopoverProps, Popover } from '../../Popover';

interface SubMenuContext {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
  focusParentItem: () => void;
  parentContext: SubMenuContext | null;
}

const [SubMenuProvider, useSubMenuContext] = createOptionalContext<SubMenuContext>();

interface SubMenuProps extends __PopoverProps {
  children: React.ReactNode;

  /** Close delay in ms */
  closeDelay?: number;
}

export function SubMenu({ children, closeDelay, ...others }: SubMenuProps) {
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
      <Popover
        opened={opened}
        position="right-start"
        offset={0}
        withinPortal={false}
        {...others}
        id={id}
      >
        {children}
      </Popover>
    </SubMenuProvider>
  );
}

export { useSubMenuContext };
