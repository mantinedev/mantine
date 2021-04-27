import React, { useState, useRef, cloneElement } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { useId, useClickOutside, useMergedRef } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MantineTransition } from '../Transition/Transition';
import { MenuIcon } from './MenuIcon';
import { MenuBody } from './MenuBody/MenuBody';
import { sizes } from './MenuBody/MenuBody.styles';
import { MenuItem } from './MenuItem/MenuItem';

export { MenuBody, MenuItem };
export const MENU_SIZES = sizes;

interface MenuPosition {
  top?: React.CSSProperties['top'];
  bottom?: React.CSSProperties['bottom'];
  left?: React.CSSProperties['left'];
  right?: React.CSSProperties['right'];
}

interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <MenuItem /> and <Hr /> components only, children are passed to MenuBody component  */
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
  zIndex = 1000,
  elementRef,
  ...others
}: MenuProps) {
  const controlRefFocusTimeout = useRef<number>();
  const controlRef = useRef<HTMLButtonElement>(null);
  const uuid = useId(menuId);
  const controlled = typeof opened === 'boolean';
  const [_opened, setOpened] = useState(false);
  const menuOpened = controlled ? opened : _opened;

  const handleClose = () => {
    setOpened(false);
    typeof onClose === 'function' && onClose();
    controlRefFocusTimeout.current = window.setTimeout(() => {
      typeof controlRef.current?.focus === 'function' && controlRef.current.focus();
    }, transitionDuration + 10);
  };

  const handleOpen = () => {
    setOpened(true);
    window.clearTimeout(controlRefFocusTimeout.current);
    typeof onOpen === 'function' && onOpen();
  };

  const wrapperRef = useClickOutside(() => menuOpened && handleClose());

  const toggleMenu = () => (opened || _opened ? handleClose() : handleOpen());

  const menuControl = cloneElement(control, {
    onClick: toggleMenu,
    role: 'button',
    'aria-haspopup': 'menu',
    'aria-expanded': menuOpened,
    'aria-controls': uuid,
    'aria-label': menuButtonLabel,
    'data-mantine-menu': true,
    title: menuButtonLabel,
    [controlRefProp]: useMergedRef(controlRef, elementRef),
  });

  return (
    <div
      data-mantine-composable
      ref={wrapperRef}
      style={{ display: 'inline-block', position: 'relative', ...style }}
      {...others}
    >
      {menuControl}

      <MenuBody
        {...menuBodyProps}
        opened={menuOpened}
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
      >
        {children}
      </MenuBody>
    </div>
  );
}

Menu.displayName = '@mantine/core/Menu';
