import { use, useCallback, useEffect, useRef } from 'react';
import {
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
  type SafePolygonOptions,
} from '@floating-ui/react';
import { useId, useUncontrolled } from '@mantine/hooks';
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

  /** Controlled opened state */
  opened?: boolean;

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

  /** Determines whether submenu stays open while the cursor moves toward its dropdown. Pass an object to configure safe polygon behavior. @default true */
  safeAreaPolygon?: boolean | SafePolygonOptions;
}

const defaultProps = {
  offset: 0,
  position: 'right-start',
  safeAreaPolygon: true,
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
  const {
    children,
    closeDelay,
    openDelay,
    position,
    safeAreaPolygon,
    opened: openedProp,
    onChange,
    ...others
  } = useProps('MenuSub', defaultProps, _props);
  const id = useId();
  const [opened, setOpened] = useUncontrolled({
    value: openedProp,
    finalValue: false,
    onChange,
  });
  const parentSubCtx = use(SubMenuContext);
  const menuCtx = useMenuContext();
  const { dir } = useDirection();
  const resolvedPosition = getFloatingPosition(dir, position);

  const levelRegister = parentSubCtx?.registerOpenSub ?? menuCtx.registerOpenSub;

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

  const setOpenedRef = useRef(setOpened);
  setOpenedRef.current = setOpened;

  const handleOpen = useCallback(() => setOpenedRef.current(true), []);
  const handleClose = useCallback(() => setOpenedRef.current(false), []);

  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    return levelRegister(handleClose);
  }, [opened, levelRegister, handleClose]);

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
      handleClose: safeAreaPolygon
        ? safePolygon(typeof safeAreaPolygon === 'object' ? safeAreaPolygon : undefined)
        : undefined,
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
        onChange={(nextOpened) => (nextOpened ? handleOpen() : handleClose())}
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
