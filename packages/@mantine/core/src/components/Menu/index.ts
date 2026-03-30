import type { MenuFactory, MenuProps, MenuStylesNames } from './Menu';
import type { MenuContextValue } from './Menu.context';
import type { MenuDividerProps } from './MenuDivider/MenuDivider';
import type { MenuDropdownProps } from './MenuDropdown/MenuDropdown';
import type { MenuItemProps } from './MenuItem/MenuItem';
import type { MenuLabelProps } from './MenuLabel/MenuLabel';
import type { MenuSubProps } from './MenuSub/MenuSub';
import type { MenuSubDropdownProps } from './MenuSubDropdown/MenuSubDropdown';
import type { MenuSubItemProps } from './MenuSubItem/MenuSubItem';
import type { MenuSubTargetProps } from './MenuSubTarget/MenuSubTarget';
import type { MenuTargetProps } from './MenuTarget/MenuTarget';

export { Menu } from './Menu';
export { MenuDivider } from './MenuDivider/MenuDivider';
export { MenuItem } from './MenuItem/MenuItem';
export { MenuLabel } from './MenuLabel/MenuLabel';
export { MenuDropdown } from './MenuDropdown/MenuDropdown';
export { MenuTarget } from './MenuTarget/MenuTarget';
export { useMenuContext } from './Menu.context';
export { MenuSub } from './MenuSub/MenuSub';
export { MenuSubDropdown } from './MenuSubDropdown/MenuSubDropdown';
export { MenuSubItem } from './MenuSubItem/MenuSubItem';
export { MenuSubTarget } from './MenuSubTarget/MenuSubTarget';

export type {
  MenuProps,
  MenuStylesNames,
  MenuFactory,
  MenuDividerProps,
  MenuItemProps,
  MenuLabelProps,
  MenuDropdownProps,
  MenuTargetProps,
  MenuContextValue,
  MenuSubProps,
  MenuSubDropdownProps,
  MenuSubItemProps,
  MenuSubTargetProps,
};

export namespace Menu {
  export type Props = MenuProps;
  export type StylesNames = MenuStylesNames;
  export type Factory = MenuFactory;
  export type ContextValue = MenuContextValue;

  export namespace Item {
    export type Props = MenuItemProps;
  }

  export namespace Label {
    export type Props = MenuLabelProps;
  }

  export namespace Divider {
    export type Props = MenuDividerProps;
  }

  export namespace Dropdown {
    export type Props = MenuDropdownProps;
  }

  export namespace Target {
    export type Props = MenuTargetProps;
  }

  export namespace Sub {
    export type Props = MenuSubProps;
  }

  export namespace SubDropdown {
    export type Props = MenuSubDropdownProps;
  }

  export namespace SubItem {
    export type Props = MenuSubItemProps;
  }

  export namespace SubTarget {
    export type Props = MenuSubTargetProps;
  }
}
