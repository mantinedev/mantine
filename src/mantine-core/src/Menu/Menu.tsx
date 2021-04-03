import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import useFocusTrap from '@charlietango/use-focus-trap';
import { useReducedMotion, useClickOutside } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { MenuItem, MenuItemType } from './MenuItem/MenuItem';
import { MenuButton } from './MenuButton/MenuButton';
import { getTransitionStyles } from './get-transition-styles';
import useStyles from './Menu.styles';

export { MenuItem };

interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** When true menu is mounted to the dom */
  opened: boolean;

  /** Triggers when menu is closed */
  onClose(): void;

  /** <MenuItem /> components only */
  children: React.ReactNode;

  /** Transitions duration in ms  */
  transitionDuration?: number;
}

export function Menu({
  className,
  themeOverride,
  opened,
  onClose,
  transitionDuration = 250,
  style,
  children,
  ...others
}: MenuProps) {
  const buttonsRefs = useRef<Record<string, HTMLButtonElement>>({});
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const [hovered, setHovered] = useState(0);
  const focusTrapRef = useFocusTrap();

  const handleClose = () => {
    setHovered(0);
    onClose();
  };

  const menuRef = useClickOutside(handleClose);

  const items = React.Children.toArray(children).filter(
    (item: MenuItemType) => item.type === MenuItem
  ) as MenuItemType[];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { code } = event.nativeEvent;
    if (code === 'Escape') {
      handleClose();
    }

    if (code === 'Tab') {
      event.preventDefault();
    }

    if (code === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = hovered > 0 ? hovered - 1 : hovered;
      setHovered(prevIndex);
      buttonsRefs.current[prevIndex].focus();
    }

    if (code === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = hovered < items.length - 1 ? hovered + 1 : hovered;
      setHovered(nextIndex);
      buttonsRefs.current[nextIndex].focus();
    }
  };

  if (items.length === 0) {
    return null;
  }

  const buttons = items.map((item, index) => (
    <MenuButton
      key={index}
      hovered={hovered === index}
      onHover={() => setHovered(index)}
      icon={item.props.icon}
      elementRef={(node) => {
        buttonsRefs.current[index] = node;
      }}
    >
      {item.props.children}
    </MenuButton>
  ));

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
          className={cx(classes.menu, className)}
          style={{ ...style, ...getTransitionStyles({ duration, state, theme }) }}
          onKeyDownCapture={handleKeyDown}
          ref={menuRef}
          {...others}
        >
          <div ref={focusTrapRef}>{buttons}</div>
        </Paper>
      )}
    </Transition>
  );
}

Menu.displayName = '@mantine/core/Menu';
