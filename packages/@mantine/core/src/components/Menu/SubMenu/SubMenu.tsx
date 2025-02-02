import { useDisclosure } from '@mantine/hooks';
import { createSafeContext } from '../../../core';
import { Popover } from '../../Popover';

interface SubMenuContext {
  opened: boolean;
  close: () => void;
  open: () => void;
}

const [SubMenuProvider, useSubMenuContext] = createSafeContext<SubMenuContext>(
  'Menu.SubMenu component was not found in tree'
);

interface SubMenuProps {
  children: React.ReactNode;
}

export function SubMenu({ children }: SubMenuProps) {
  const [opened, handlers] = useDisclosure(true);
  return (
    <SubMenuProvider value={{ opened, close: handlers.close, open: handlers.open }}>
      <Popover opened={opened} position="right-start" offset={0}>
        {children}
      </Popover>
    </SubMenuProvider>
  );
}

export { useSubMenuContext };
