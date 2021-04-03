import React from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { useReducedMotion, useClickOutside } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { getTransitionStyles } from './get-transition-styles';
import useStyles from './Menu.styles';

interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** When true menu is mounted to the dom */
  opened: boolean;

  /** Triggers when menu is closed */
  onClose(): void;

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
  ...others
}: MenuProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const menuRef = useClickOutside(onClose);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.nativeEvent.code === 'Escape') {
      onClose();
    }

    if (event.nativeEvent.code === 'Tab') {
      event.preventDefault();
    }
  };

  return (
    <Transition
      unmountOnExit
      in={opened}
      timeout={duration}
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <Paper
          shadow="xs"
          className={cx(classes.menu, className)}
          onKeyDownCapture={handleKeyDown}
          style={{ ...style, ...getTransitionStyles({ duration, state, theme }) }}
          ref={menuRef}
          {...others}
        >
          Menu
        </Paper>
      )}
    </Transition>
  );
}

Menu.displayName = '@mantine/core/Menu';
