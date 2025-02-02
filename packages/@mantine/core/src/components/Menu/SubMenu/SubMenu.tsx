import { useDisclosure, useId } from '@mantine/hooks';
import { createSafeContext } from '../../../core';
import { Popover } from '../../Popover';

interface SubMenuContext {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
}

const [SubMenuProvider, useSubMenuContext] = createSafeContext<SubMenuContext>(
  'Menu.SubMenu component was not found in tree'
);

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

  return (
    <SubMenuProvider value={{ opened, close: handlers.close, open: handlers.open, focusFirstItem }}>
      <Popover opened={opened} position="right-start" offset={0} id={id}>
        {children}
      </Popover>
    </SubMenuProvider>
  );
}

export { useSubMenuContext };
