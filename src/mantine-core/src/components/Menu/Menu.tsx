import React, { useState, useRef, cloneElement, useEffect } from 'react';
import {
  useId,
  useClickOutside,
  useMergedRef,
  useWindowEvent,
  useUncontrolled,
} from '@mantine/hooks';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
} from '@mantine/styles';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Popper, SharedPopperProps } from '../Popper/Popper';
import { useClickOutsideRegister } from '../../utils';
import { MenuIcon } from './MenuIcon';
import { MenuBody, MenuBodyProps, MenuBodyStylesNames } from './MenuBody/MenuBody';
import { sizes } from './MenuBody/MenuBody.styles';
import { MenuItem, MenuItemProps } from './MenuItem/MenuItem';
import { MenuLabel, MenuLabelProps } from './MenuLabel/MenuLabel';
import useStyles from './Menu.styles';

export { MenuBody, MenuItem, MenuLabel };
export type { MenuBodyProps, MenuItemProps, MenuLabelProps };

export type MenuStylesNames = ClassNames<typeof useStyles> | MenuBodyStylesNames;

export const MENU_SIZES = sizes;

export interface MenuProps
  extends DefaultProps<MenuStylesNames>,
    SharedPopperProps,
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
  menuBodyProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Predefined menu width or number for width in px */
  size?: MantineNumberSize;

  /** Predefined shadow from theme or box-shadow value */
  shadow?: MantineShadow;

  /** Should menu close on item click */
  closeOnItemClick?: boolean;

  /** Id attribute of menu */
  menuId?: string;

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

  /** Close menu on scroll */
  closeOnScroll?: boolean;

  /** Trap focus inside menu */
  trapFocus?: boolean;
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
  style,
  menuId,
  menuBodyProps = {},
  closeOnItemClick = true,
  transitionDuration = 250,
  size = 'md',
  shadow = 'md',
  position = 'bottom',
  placement = 'start',
  gutter = 5,
  withArrow = false,
  transition = 'pop-top-left',
  transitionTimingFunction,
  menuButtonLabel,
  controlRefProp = 'elementRef',
  trigger = 'click',
  radius = 'sm',
  delay = 0,
  zIndex = 1,
  elementRef,
  classNames,
  styles,
  closeOnScroll = true,
  trapFocus = true,
  onMouseLeave,
  onMouseEnter,
  onChange,
  ...others
}: MenuProps) {
  const { classes } = useStyles(null, classNames, 'menu');
  const _styles = mergeStyles(classes, styles);
  const controlRefFocusTimeout = useRef<number>();
  const delayTimeout = useRef<number>();
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>(null);
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement>(null);
  const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
  const clickOutsideRegister = useClickOutsideRegister();
  const uuid = useId(menuId);

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: false,
    finalValue: false,
    rule: (val) => typeof val === 'boolean',
    onChange: (value) =>
      value ? typeof onOpen === 'function' && onOpen() : typeof onClose === 'function' && onClose(),
  });

  const openedRef = useRef(_opened);

  const handleClose = (scroll = false) => {
    if (openedRef.current) {
      openedRef.current = false;
      setOpened(false);
      if (trigger === 'click') {
        controlRefFocusTimeout.current = window.setTimeout(() => {
          !scroll && typeof referenceElement?.focus === 'function' && referenceElement.focus();
        }, transitionDuration + 10);
      }
    }
  };

  const handleOpen = () => {
    openedRef.current = true;
    setOpened(true);
    window.clearTimeout(controlRefFocusTimeout.current);
  };

  useWindowEvent('scroll', () => closeOnScroll && handleClose(true));

  useClickOutside(() => _opened && handleClose(), null, [dropdownElement, wrapperElement]);

  useEffect(() => {
    clickOutsideRegister(`${uuid}-menu`, dropdownElement);
  }, [dropdownElement]);

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
    title: menuButtonLabel,
    [controlRefProp]: useMergedRef(setReferenceElement, elementRef),
  });

  return (
    <div
      ref={setWrapperElement}
      style={{ display: 'inline-block', position: 'relative', ...style }}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...others}
    >
      {menuControl}

      <Popper
        referenceElement={referenceElement}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        transition={transition}
        mounted={_opened}
        position={position}
        placement={placement}
        gutter={gutter}
        withArrow={withArrow}
        arrowSize={3}
        zIndex={zIndex}
        arrowClassName={classes.arrow}
        arrowStyle={_styles.arrow}
      >
        <MenuBody
          {...menuBodyProps}
          opened={_opened}
          onClose={handleClose}
          id={uuid}
          closeOnItemClick={closeOnItemClick}
          size={size}
          shadow={shadow}
          classNames={classNames}
          styles={styles}
          radius={radius}
          trapFocus={trigger !== 'hover' && trapFocus}
          transitionDuration={transitionDuration}
          elementRef={setDropdownElement}
        >
          {children}
        </MenuBody>
      </Popper>
    </div>
  );
}

Menu.Item = MenuItem;
Menu.Label = MenuLabel;

Menu.displayName = '@mantine/core/Menu';
