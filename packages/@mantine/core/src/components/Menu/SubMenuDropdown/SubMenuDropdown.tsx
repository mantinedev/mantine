import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';
import { useSubMenuContext } from '../SubMenu/SubMenu';

interface SubMenuDropdownProps {
  children: React.ReactNode;
}

export function SubMenuDropdown({ children }: SubMenuDropdownProps) {
  const ctx = useMenuContext();
  const subCtx = useSubMenuContext();

  return (
    <Popover.Dropdown
      onMouseEnter={() => subCtx.open()}
      onMouseLeave={() => subCtx.close()}
      data-menu-dropdown
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
