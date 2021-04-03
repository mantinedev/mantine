import React from 'react';
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
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const menuRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.nativeEvent.code === 'Escape') {
      onClose();
    }

    if (event.nativeEvent.code === 'Tab') {
      event.preventDefault();
    }
  };

  const items = React.Children.toArray(children).filter(
    (item: MenuItemType) => item.type === MenuItem
  ) as MenuItemType[];

  if (items.length === 0) {
    return null;
  }

  const buttons = items.map((item, index) => (
    <MenuButton key={index}>{item.props.children}</MenuButton>
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
          shadow="xs"
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
