import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';

interface SubMenuDropdownProps {
  children: React.ReactNode;
}

export function SubMenuDropdown({ children }: SubMenuDropdownProps) {
  const ctx = useMenuContext();
  return (
    <Popover.Dropdown
      {...ctx.getStyles('dropdown', {
        // className,
        // style,
        // styles,
        // classNames,
        withStaticClass: false,
      })}
    >
      {children}
    </Popover.Dropdown>
  );
}
