import { useDisclosure, useId } from '@mantine/hooks';
import { createOptionalContext } from '../../../core';
import { Popover } from '../../Popover';

interface SubMenuContext {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
  focusParentItem: () => void;
}

const [SubMenuProvider, useSubMenuContext] = createOptionalContext<SubMenuContext>();

interface SubMenuProps {
  children: React.ReactNode;
}

export function SubMenu({ children }: SubMenuProps) {
  const [opened, handlers] = useDisclosure(false);
  const id = useId();

  const focusFirstItem = () =>
    setTimeout(() => {
      document
        .getElementById(`${id}-dropdown`)
        ?.querySelectorAll<HTMLButtonElement>('[data-menu-item]')[0]
        ?.focus();
    }, 4);

  const focusParentItem = () =>
    setTimeout(() => {
      document.getElementById(`${id}-target`)?.focus();
    }, 4);

  return (
    <SubMenuProvider
      value={{
        opened,
        close: handlers.close,
        open: handlers.open,
        focusFirstItem,
        focusParentItem,
      }}
    >
      <Popover opened={opened} position="right-start" offset={0} id={id} withinPortal={false}>
        {children}
      </Popover>
    </SubMenuProvider>
  );
}

export { useSubMenuContext };
