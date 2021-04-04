import React, { useState, useRef, useEffect } from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import useFocusTrap from '@charlietango/use-focus-trap';
import { useReducedMotion, useClickOutside } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Hr } from '../Hr/Hr';
import { MenuItem, MenuItemType } from './MenuItem/MenuItem';
import { MenuButton } from './MenuButton/MenuButton';
import { getTransitionStyles } from './get-transition-styles';
import useStyles, { sizes } from './Menu.styles';

export { MenuItem };
export const MENU_SIZES = sizes;

interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** When true menu is mounted to the dom */
  opened: boolean;

  /** Triggers when menu is closed */
  onClose(): void;

  /** <MenuItem /> and <Hr /> components only */
  children: React.ReactNode;

  /** Transitions duration in ms  */
  transitionDuration?: number;

  /** Predefined menu width or number for width in px */
  size?: MantineNumberSize;

  /** Predefined shadow from theme or box-shadow value */
  shadow?: string;

  /** Should menu close on outside click */
  closeOnClickOutside?: boolean;

  /** Should menu close on item click */
  closeOnItemClick?: boolean;
}

function getPreviousItem(active: number, items: MenuItemType[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  return active;
}

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

export function Menu({
  className,
  themeOverride,
  opened,
  onClose,
  transitionDuration = 250,
  style,
  children,
  size = 'md',
  shadow = 'md',
  closeOnClickOutside = true,
  closeOnItemClick = true,
  ...others
}: MenuProps) {
  const items = React.Children.toArray(children).filter(
    (item: MenuItemType) => item.type === MenuItem || item.type === Hr
  ) as MenuItemType[];

  const hoveredTimeout = useRef<number>();
  const buttonsRefs = useRef<Record<string, HTMLButtonElement>>({});
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ size, theme });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const [hovered, setHovered] = useState(findInitialItem(items));
  const focusTrapRef = useFocusTrap();

  useEffect(() => {
    if (!opened) {
      hoveredTimeout.current = window.setTimeout(() => {
        setHovered(findInitialItem(items));
      }, duration);
    } else {
      window.clearTimeout(hoveredTimeout.current);
    }
  }, [opened]);

  const menuRef = useClickOutside(() => closeOnClickOutside && onClose());

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { code } = event.nativeEvent;

    if (code === 'Escape') {
      onClose();
    }

    if (code === 'Tab') {
      event.preventDefault();
    }

    if (code === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = getPreviousItem(hovered, items);
      setHovered(prevIndex);
      buttonsRefs.current[prevIndex].focus();
    }

    if (code === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = getNextItem(hovered, items);
      setHovered(nextIndex);
      buttonsRefs.current[nextIndex].focus();
    }
  };

  if (items.length === 0) {
    return null;
  }

  const buttons = items.map((item, index) => {
    if (item.type === MenuItem) {
      return (
        <MenuButton
          {...item.props}
          key={index}
          hovered={hovered === index}
          onHover={() => setHovered(-1)}
          onClick={(event) => {
            if (closeOnItemClick) {
              onClose();
            }

            if (typeof item.props.onClick === 'function') {
              item.props.onClick(event);
            }
          }}
          elementRef={(node) => {
            buttonsRefs.current[index] = node;
          }}
        />
      );
    }

    if (item.type === Hr) {
      return <Hr key={index} variant="solid" className={classes.hr} />;
    }

    return null;
  });

  return (
    <Transition
      unmountOnExit
      mountOnEnter
      in={opened}
      timeout={duration}
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <Paper
          shadow={shadow}
          className={cx(classes.menu, className)}
          style={{ ...style, ...getTransitionStyles({ duration, state, theme }) }}
          onKeyDownCapture={handleKeyDown}
          ref={menuRef}
          role="menu"
          {...others}
        >
          <div ref={focusTrapRef}>{buttons}</div>
        </Paper>
      )}
    </Transition>
  );
}

Menu.displayName = '@mantine/core/Menu';
