import React, { useState, useRef, cloneElement, forwardRef } from 'react';
import {
  useClickOutside,
  useMergedRef,
  useWindowEvent,
  useUncontrolled,
  useUuid,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  Selectors,
  getDefaultZIndex,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Paper } from '../Paper';
import { ActionIcon } from '../ActionIcon';
import { Popper, SharedPopperProps } from '../Popper';
import { MenuIcon } from './MenuIcon';
import { MenuItem, MenuItemStylesNames } from './MenuItem/MenuItem';
import { MenuLabel, MenuLabelStylesNames } from './MenuLabel/MenuLabel';
import { MenuProvider } from './Menu.context';
import useStyles from './Menu.styles';

export type MenuStylesNames =
  | Selectors<typeof useStyles>
  | MenuItemStylesNames
  | MenuLabelStylesNames;

export interface MenuProps
  extends DefaultProps<MenuStylesNames>,
    SharedPopperProps,
    React.ComponentPropsWithRef<'div'> {
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

  /** Predefined menu width or number for width in px */
  size?: MantineNumberSize | 'auto';

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

  /** Event which should open menu */
  trigger?: 'click' | 'hover';

  /** Close delay for hover trigger */
  delay?: number;

  /** Menu body and items border-radius */
  radius?: MantineNumberSize;

  /** Close menu on scroll */
  closeOnScroll?: boolean;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Should focus be trapped when menu is opened */
  trapFocus?: boolean;

  /** Events that should trigger outside clicks */
  clickOutsideEvents?: string[];
}

const defaultControl = (
  <ActionIcon>
    <MenuIcon />
  </ActionIcon>
);

type MenuComponent = ForwardRefWithStaticComponents<
  MenuProps,
  { Item: typeof MenuItem; Label: typeof MenuLabel }
>;

function getNextItem(active: number, items: HTMLButtonElement[]) {
  for (let i = active + 1; i < items.length; i += 1) {
    if (!items[i].disabled) {
      return i;
    }
  }

  return active;
}

function findInitialItem(items: HTMLButtonElement[]) {
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].disabled) {
      return i;
    }
  }

  return -1;
}

function getPreviousItem(active: number, items: HTMLButtonElement[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].disabled) {
      return i;
    }
  }

  if (!items[active]) {
    return findInitialItem(items);
  }

  return active;
}

const defaultProps: Partial<MenuProps> = {
  control: defaultControl,
  closeOnItemClick: true,
  transitionDuration: 150,
  size: 'md',
  shadow: 'md',
  position: 'bottom',
  placement: 'start',
  gutter: 5,
  withArrow: false,
  transition: 'pop-top-left',
  controlRefProp: 'ref',
  trigger: 'click',
  radius: 'sm',
  delay: 100,
  zIndex: getDefaultZIndex('popover'),
  withinPortal: true,
  trapFocus: true,
  closeOnScroll: false,
  clickOutsideEvents: ['mousedown', 'touchstart'],
};

export const Menu: MenuComponent = forwardRef<HTMLButtonElement, MenuProps>(
  (props: MenuProps, ref) => {
    const {
      control,
      children,
      onClose,
      onOpen,
      opened,
      menuId,
      closeOnItemClick,
      transitionDuration,
      size,
      shadow,
      position,
      placement,
      gutter,
      withArrow,
      transition,
      transitionTimingFunction,
      menuButtonLabel,
      controlRefProp,
      trigger,
      radius,
      delay,
      zIndex,
      withinPortal,
      trapFocus,
      classNames,
      styles,
      closeOnScroll,
      onMouseLeave,
      onMouseEnter,
      onChange,
      className,
      sx,
      clickOutsideEvents,
      ...others
    } = useMantineDefaultProps('Menu', defaultProps, props);
    const [hovered, setHovered] = useState(-1);
    const { classes, cx } = useStyles({ size }, { classNames, styles, name: 'Menu' });
    const delayTimeout = useRef<number>();
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>(null);
    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement>(null);
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
    const uuid = useUuid(menuId);

    const focusReference = () => window.setTimeout(() => referenceElement?.focus(), 0);

    const [_opened, setOpened] = useUncontrolled({
      value: opened,
      defaultValue: false,
      finalValue: false,
      rule: (val) => typeof val === 'boolean',
      onChange: (value) =>
        value
          ? typeof onOpen === 'function' && onOpen()
          : typeof onClose === 'function' && onClose(),
    });

    const openedRef = useRef(_opened);

    const handleClose = () => {
      if (openedRef.current) {
        openedRef.current = false;
        setOpened(false);
      }
    };

    const handleOpen = () => {
      openedRef.current = true;
      setOpened(true);
    };

    useWindowEvent('scroll', () => closeOnScroll && handleClose());

    useClickOutside(() => _opened && handleClose(), clickOutsideEvents, [
      dropdownElement,
      wrapperElement,
    ]);

    const toggleMenu = () => {
      _opened ? handleClose() : handleOpen();
    };

    const controlEventHandlers =
      trigger === 'click'
        ? { onClick: toggleMenu }
        : { onMouseEnter: handleOpen, onClick: toggleMenu };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      typeof onMouseLeave === 'function' && onMouseLeave(event);

      if (trigger === 'hover') {
        if (delay > 0) {
          delayTimeout.current = window.setTimeout(() => handleClose(), delay);
        } else {
          handleClose();
        }
      }
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      typeof onMouseEnter === 'function' && onMouseEnter(event);
      window.clearTimeout(delayTimeout.current);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (_opened) {
        const elements = Array.from(
          dropdownElement.querySelectorAll<HTMLButtonElement>('.mantine-Menu-item')
        );

        if (event.nativeEvent.code === 'Tab' && trapFocus) {
          event.preventDefault();
        }

        if (event.nativeEvent.code === 'ArrowDown') {
          event.preventDefault();
          const prevIndex = getNextItem(hovered, elements);
          setHovered(prevIndex);
          elements[prevIndex].focus();
        }

        if (event.nativeEvent.code === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = getPreviousItem(hovered, elements);
          setHovered(prevIndex);
          elements[prevIndex].focus();
        }

        if (event.nativeEvent.code === 'Escape') {
          handleClose();
          focusReference();
        }
      }
    };

    const menuControl = cloneElement(control, {
      ...controlEventHandlers,
      onClick: (event: React.MouseEvent<any>) => {
        controlEventHandlers.onClick();
        typeof control.props.onClick === 'function' && control.props.onClick(event);
      },
      role: 'button',
      'aria-haspopup': 'menu',
      'aria-expanded': _opened,
      'aria-controls': uuid,
      'aria-label': menuButtonLabel,
      title: menuButtonLabel,
      [controlRefProp]: useMergedRef(setReferenceElement, ref),
      onKeyDown: handleKeyDown,
    });

    const handleItemClick = () => {
      if (closeOnItemClick) {
        handleClose();
        trigger === 'click' && focusReference();
      }
    };

    return (
      <MenuProvider
        value={{
          hovered,
          radius,
          styles,
          classNames,
          onItemHover: setHovered,
          onItemKeyDown: handleKeyDown,
          onItemClick: handleItemClick,
        }}
      >
        <Box
          ref={setWrapperElement}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className={cx(classes.root, className)}
          sx={sx}
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
            withinPortal={withinPortal}
          >
            <Paper
              shadow={shadow}
              className={classes.body}
              role="menu"
              aria-orientation="vertical"
              radius={radius}
              onMouseLeave={() => setHovered(-1)}
              ref={setDropdownElement}
              id={uuid}
              {...others}
            >
              {children}
            </Paper>
          </Popper>
        </Box>
      </MenuProvider>
    );
  }
) as any;

Menu.Item = MenuItem;
Menu.Label = MenuLabel;

Menu.displayName = '@mantine/core/Menu';
