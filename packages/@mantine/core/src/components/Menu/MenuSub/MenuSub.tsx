import { use, useCallback, useRef } from 'react';
import { safePolygon, useFloating, useHover, useInteractions } from '@floating-ui/react';
import { useDisclosure, useId } from '@mantine/hooks';
import { ExtendComponent, Factory, useDirection, useProps } from '../../../core';
import {
  FloatingAxesOffsets,
  FloatingPosition,
  getFloatingPosition,
} from '../../../utils/Floating';
import { __PopoverProps, Popover } from '../../Popover';
import { TransitionOverride } from '../../Transition';
import { useMenuContext } from '../Menu.context';
import { MenuSubDropdown } from '../MenuSubDropdown/MenuSubDropdown';
import { MenuSubItem } from '../MenuSubItem/MenuSubItem';
import { MenuSubTarget } from '../MenuSubTarget/MenuSubTarget';
import { SubMenuContext } from './MenuSub.context';

export type MenuSubFactory = Factory<{
  props: MenuSubProps;
}>;

export interface MenuSubProps extends __PopoverProps {
  children: React.ReactNode;

  /** Called with current state when dropdown opens or closes */
  onChange?: (opened: boolean) => void;

  /** Open delay in ms, applicable when hover trigger is used */
  openDelay?: number;

  /** Close delay in ms, applicable when hover trigger is used */
  closeDelay?: number;

  /** Dropdown position relative to the target element @default 'right-start' */
  position?: FloatingPosition;

  /** Offset of the dropdown element @default 0 */
  offset?: number | FloatingAxesOffsets;

  /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type @default { duration: 0 } */
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
  const { children, closeDelay, openDelay, position, ...others } = useProps(
    'MenuSub',
    defaultProps,
    _props
  );
  const id = useId();
  const [opened, { open, close }] = useDisclosure(false);
  const parentSubCtx = use(SubMenuContext);
  const menuCtx = useMenuContext();
  const { dir } = useDirection();
  const resolvedPosition = getFloatingPosition(dir, position);

  const levelRegister = parentSubCtx?.registerOpenSub ?? menuCtx.registerOpenSub;
  const unregisterRef = useRef<(() => void) | null>(null);

  const activeChildCloseRef = useRef<(() => void) | null>(null);
  const registerOpenSub = useCallback((closeFn: () => void) => {
    const prev = activeChildCloseRef.current;
    if (prev && prev !== closeFn) {
      prev();
    }
    activeChildCloseRef.current = closeFn;
    return () => {
      if (activeChildCloseRef.current === closeFn) {
        activeChildCloseRef.current = null;
      }
    };
  }, []);

  const handleOpen = useCallback(() => {
    unregisterRef.current = levelRegister(close);
    open();
  }, [close, levelRegister, open]);

  const handleClose = useCallback(() => {
    unregisterRef.current?.();
    unregisterRef.current = null;
    close();
  }, [close]);

  const { context, refs } = useFloating({
    placement: resolvedPosition,
    open: opened,
    onOpenChange: (nextOpen) => {
      if (nextOpen) {
        handleOpen();
      } else {
        handleClose();
      }
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      handleClose: safePolygon(),
      delay: { open: openDelay, close: closeDelay },
    }),
  ]);

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
    <SubMenuContext
      value={{
        opened,
        close: handleClose,
        open: handleOpen,
        focusFirstItem,
        focusParentItem,
        parentContext: parentSubCtx,
        setReference: refs.setReference,
        setFloating: refs.setFloating,
        getReferenceProps,
        getFloatingProps,
        registerOpenSub,
      }}
    >
      <Popover
        opened={opened}
        withinPortal={false}
        withArrow={false}
        id={id}
        position={position}
        {...others}
      >
        {children}
      </Popover>
    </SubMenuContext>
  );
}

MenuSub.extend = (input: ExtendComponent<MenuSubFactory>) => input;
MenuSub.displayName = '@mantine/core/MenuSub';
MenuSub.Target = MenuSubTarget;
MenuSub.Dropdown = MenuSubDropdown;
MenuSub.Item = MenuSubItem;
