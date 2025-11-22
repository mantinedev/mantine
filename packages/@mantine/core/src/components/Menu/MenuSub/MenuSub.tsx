import { useDisclosure, useId } from '@mantine/hooks';
import { ExtendComponent, Factory, useProps } from '../../../core';
import { FloatingAxesOffsets, FloatingPosition, useDelayedHover } from '../../../utils/Floating';
import { __PopoverProps, Popover } from '../../Popover';
import { TransitionOverride } from '../../Transition';
import { MenuSubDropdown } from '../MenuSubDropdown/MenuSubDropdown';
import { MenuSubItem } from '../MenuSubItem/MenuSubItem';
import { MenuSubTarget } from '../MenuSubTarget/MenuSubTarget';
import { SubMenuProvider, useSubMenuContext } from './MenuSub.context';

export type MenuSubFactory = Factory<{
  props: MenuSubProps;
}>;

export interface MenuSubProps extends __PopoverProps {
  children: React.ReactNode;

  /** Called with current state when dropdown opens or closes */
  onChange?: (opened: boolean) => void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;

  /** Dropdown position relative to the target element @default `'right-start'` */
  position?: FloatingPosition;

  /** Offset of the dropdown element @default `0` */
  offset?: number | FloatingAxesOffsets;

  /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type @default `{ duration: 0 }` */
  transitionProps?: TransitionOverride;
}

const defaultProps = {
  offset: 0,
  position: 'right-start',
  transitionProps: { duration: 0 },
  openDelay: 0,
  middlewares: {
    shift: {
      // Enable crossAxis shift to keep submenu dropdown within viewport bounds when positioned horizontally
      crossAxis: true,
    },
  },
} satisfies Partial<MenuSubProps>;

export function MenuSub(_props: MenuSubProps) {
  const { children, closeDelay, openDelay, ...others } = useProps('MenuSub', defaultProps, _props);
  const id = useId();
  const [opened, { open, close }] = useDisclosure(false);
  const ctx = useSubMenuContext();

  const { openDropdown, closeDropdown } = useDelayedHover({
    open,
    close,
    closeDelay,
    openDelay,
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
      <Popover opened={opened} withinPortal={false} withArrow={false} id={id} {...others}>
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
