import React, { useRef, cloneElement } from 'react';
import {
  useId,
  useClickOutside,
  useMergedRef,
  useWindowEvent,
  useUncontrolled,
} from '@mantine/hooks';
import { DefaultProps, MantineNumberSize } from '../../theme';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MantineTransition } from '../Transition/Transition';
import { MenuIcon } from './MenuIcon';
import { MenuBody, MenuBodyProps, MenuBodyStylesNames } from './MenuBody/MenuBody';
import { sizes } from './MenuBody/MenuBody.styles';
import { MenuItem, MenuItemProps } from './MenuItem/MenuItem';

export { MenuBody, MenuItem };
export type { MenuBodyProps, MenuItemProps };

export const MENU_SIZES = sizes;

interface MenuPosition {
  top?: React.CSSProperties['top'];
  bottom?: React.CSSProperties['bottom'];
  left?: React.CSSProperties['left'];
  right?: React.CSSProperties['right'];
}

export interface MenuProps
  extends DefaultProps<MenuBodyStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <MenuItem /> and <Divider /> components only, children are passed to MenuBody component  */
  children: React.ReactNode;

  /** React element that will be used as menu control */
  control?: React.ReactElement;

  /** Use opened and onClose props to setup controlled menu */
  opened?: boolean;

  /** Called every time menu is closed */
  onClose?(): void;

  /** Called every time menu is opened */
  onOpen?(): void;

  /** Menu button aria-label and title props */
  menuButtonLabel?: string;

  /** MenuBody component props */
  menuBodyProps?: Record<string, any>;

  /** Transition styles */
  transition?: MantineTransition;

  /** Transitions duration in ms */
  transitionDuration?: number;

  /** Transition timing function */
  transitionTimingFunction?: string;

  /** Predefined menu width or number for width in px */
  size?: MantineNumberSize;

  /** Predefined shadow from theme or box-shadow value */
  shadow?: string;

  /** Should menu close on item click */
  closeOnItemClick?: boolean;

  /** Id attribute of menu */
  menuId?: string;

  /** Menu dropdown position */
  menuPosition?: MenuPosition;

  /** Control prop to get element ref */
  controlRefProp?: string;

  /** Menu body z-index */
  zIndex?: number;

  /** Get control ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Event which should open menu */
  trigger?: 'click' | 'hover';

  /** Close delay for hover trigger */
  delay?: number;

  /** Menu body and items border-radius */
  radius?: MantineNumberSize;
}

const defaultControl = (
  <ActionIcon>
    <MenuIcon />
  </ActionIcon>
);

export function Menu({
  control = defaultControl,
  children,
  onClose,
  onOpen,
  opened,
  themeOverride,
  menuPosition = { top: 0, left: 0 },
  style,
  menuId,
  menuBodyProps = {},
  closeOnItemClick = true,
  transitionDuration = 250,
  size = 'md',
  shadow = 'md',
  transition = 'skew-up',
  transitionTimingFunction,
  menuButtonLabel,
  controlRefProp = 'elementRef',
  trigger = 'click',
  radius = 'sm',
  delay = 0,
  zIndex = 1000,
  elementRef,
  classNames,
  styles,
  onMouseLeave,
  onMouseEnter,
  onChange,
  ...others
}: MenuProps) {
  const controlRefFocusTimeout = useRef<number>();
  const delayTimeout = useRef<number>();
  const controlRef = useRef<HTMLButtonElement>(null);
  const uuid = useId(menuId);

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: false,
    finalValue: false,
    rule: (val) => typeof val === 'boolean',
    onChange: (value) =>
      !value
        ? typeof onOpen === 'function' && onOpen()
        : typeof onClose === 'function' && onClose(),
  });

  const openedRef = useRef(_opened);

  const handleClose = (scroll = false) => {
    if (openedRef.current) {
      openedRef.current = false;
      setOpened(false);
      if (trigger === 'click') {
        controlRefFocusTimeout.current = window.setTimeout(() => {
          !scroll && typeof controlRef.current?.focus === 'function' && controlRef.current.focus();
        }, transitionDuration + 10);
      }
    }
  };

  const handleOpen = () => {
    openedRef.current = true;
    setOpened(true);
    window.clearTimeout(controlRefFocusTimeout.current);
  };

  useWindowEvent('scroll', () => handleClose(true));

  const wrapperRef = useClickOutside(() => _opened && handleClose());
  const toggleMenu = () => {
    _opened ? handleClose() : handleOpen();
  };

  const controlEventHandlers =
    trigger === 'click'
      ? { onClick: toggleMenu }
      : { onMouseEnter: handleOpen, onFocus: handleOpen };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    typeof onMouseLeave === 'function' && onMouseLeave(event);

    if (trigger === 'hover') {
      if (delay > 0) {
        delayTimeout.current = window.setTimeout(() => handleClose(true), delay);
      } else {
        handleClose(true);
      }
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    typeof onMouseEnter === 'function' && onMouseEnter(event);
    window.clearTimeout(delayTimeout.current);
  };

  const menuControl = cloneElement(control, {
    ...controlEventHandlers,
    role: 'button',
    'aria-haspopup': 'menu',
    'aria-expanded': _opened,
    'aria-controls': uuid,
    'aria-label': menuButtonLabel,
    'data-mantine-menu': true,
    title: menuButtonLabel,
    [controlRefProp]: useMergedRef(controlRef, elementRef),
  });

  return (
    <div
      ref={wrapperRef}
      style={{ display: 'inline-block', position: 'relative', ...style }}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...others}
    >
      {menuControl}

      <MenuBody
        {...menuBodyProps}
        opened={_opened}
        onClose={handleClose}
        id={uuid}
        themeOverride={themeOverride}
        closeOnClickOutside={false}
        closeOnItemClick={closeOnItemClick}
        style={{ ...menuBodyProps.style, ...menuPosition }}
        transitionDuration={transitionDuration}
        transition={transition}
        transitionTimingFunction={transitionTimingFunction}
        size={size}
        shadow={shadow}
        zIndex={zIndex}
        classNames={classNames}
        styles={styles}
        radius={radius}
      >
        {children}
      </MenuBody>
    </div>
  );
}

Menu.displayName = '@mantine/core/Menu';
