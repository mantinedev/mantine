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
  ClassNames,
  useExtractedMargins,
  getDefaultZIndex,
} from '@mantine/styles';
import { Divider } from '../Divider/Divider';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Popper, SharedPopperProps } from '../Popper/Popper';
import { MenuIcon } from './MenuIcon';
import {
  MenuItem,
  MenuItemComponent,
  MenuItemType,
  MenuItemStylesNames,
} from './MenuItem/MenuItem';
import { MenuLabel, MenuLabelProps } from './MenuLabel/MenuLabel';
import useStyles from './Menu.styles';

export type MenuStylesNames = ClassNames<typeof useStyles> | MenuItemStylesNames;

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
}

const defaultControl = (
  <ActionIcon>
    <MenuIcon />
  </ActionIcon>
);

type MenuComponent = {
  displayName?: string;
  Item: MenuItemComponent;
  Label: React.FC<MenuLabelProps>;
} & ((props: MenuProps) => React.ReactElement);

function getNextItem(active: number, items: MenuItemType[]) {
  for (let i = active + 1; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  return active;
}

function findInitialItem(items: MenuItemType[]) {
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  return -1;
}

function getPreviousItem(active: number, items: MenuItemType[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  if (!items[active] || items[active].type !== MenuItem) {
    return findInitialItem(items);
  }

  return active;
}

export const Menu: MenuComponent = forwardRef<HTMLButtonElement, MenuProps>(
  (
    {
      control = defaultControl,
      children,
      onClose,
      onOpen,
      opened,
      style,
      menuId,
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
      controlRefProp = 'ref',
      trigger = 'click',
      radius = 'sm',
      delay = 0,
      zIndex = getDefaultZIndex('popover'),
      withinPortal = true,
      trapFocus = true,
      classNames,
      styles,
      closeOnScroll = false,
      onMouseLeave,
      onMouseEnter,
      onChange,
      className,
      sx,
      ...others
    }: MenuProps,
    ref
  ) => {
    const [hovered, setHovered] = useState(-1);
    const buttonsRefs = useRef<Record<string, HTMLButtonElement>>({});
    const { classes, cx, theme } = useStyles({ size }, { sx, classNames, styles, name: 'Menu' });
    const delayTimeout = useRef<number>();
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>(null);
    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement>(null);
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
    const uuid = useUuid(menuId);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

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

    useClickOutside(() => _opened && handleClose(), null, [dropdownElement, wrapperElement]);

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

    const items = React.Children.toArray(children).filter(
      (item: MenuItemType) =>
        item.type === MenuItem || item.type === Divider || item.type === MenuLabel
    ) as MenuItemType[];

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (_opened) {
        if (event.nativeEvent.code === 'Tab' && trapFocus) {
          event.preventDefault();
        }

        if (event.nativeEvent.code === 'ArrowDown') {
          event.preventDefault();
          const prevIndex = getNextItem(hovered, items);
          setHovered(prevIndex);
          buttonsRefs.current[prevIndex].focus();
        }

        if (event.nativeEvent.code === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = getPreviousItem(hovered, items);
          setHovered(prevIndex);
          buttonsRefs.current[prevIndex].focus();
        }

        if (event.nativeEvent.code === 'Escape') {
          handleClose();
          focusReference();
        }
      }
    };

    const menuControl = cloneElement(control, {
      ...controlEventHandlers,
      role: 'button',
      'aria-haspopup': 'menu',
      'aria-expanded': _opened,
      'aria-controls': uuid,
      'aria-label': menuButtonLabel,
      title: menuButtonLabel,
      [controlRefProp]: useMergedRef(setReferenceElement, ref),
      onKeyDown: handleKeyDown,
    });

    const content = items.map((item, index) => {
      if (item.type === MenuItem) {
        return (
          <MenuItem<'button'>
            {...item.props}
            key={index}
            hovered={hovered === index}
            onHover={() => setHovered(index)}
            radius={radius}
            onMouseLeave={() => setHovered(-1)}
            onKeyDown={handleKeyDown}
            styles={styles}
            classNames={classNames}
            onClick={(event) => {
              if (closeOnItemClick) {
                handleClose();
                trigger === 'click' && focusReference();
              }

              if (typeof item.props.onClick === 'function') {
                item.props.onClick(event);
              }
            }}
            ref={(node) => {
              buttonsRefs.current[index] = node;
            }}
          />
        );
      }

      if (item.type === MenuLabel) {
        return <Text key={index} className={classes.label} {...(item.props as any)} />;
      }

      if (item.type === Divider) {
        return (
          <Divider
            variant="solid"
            className={classes.divider}
            my={theme.spacing.xs / 2}
            key={index}
          />
        );
      }

      return null;
    });

    return (
      <div
        ref={setWrapperElement}
        style={mergedStyles}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={cx(classes.root, className)}
        {...rest}
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
            {...others}
          >
            {content}
          </Paper>
        </Popper>
      </div>
    );
  }
) as any;

Menu.Item = MenuItem;
Menu.Label = MenuLabel;

Menu.displayName = '@mantine/core/Menu';
