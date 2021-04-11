import React from 'react';
import cx from 'clsx';
import useFocusTrap from '@charlietango/use-focus-trap';
import { useClickOutside, useScrollLock, useMergedRef, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition } from '../Transition/Transition';
import useStyles from './Drawer.styles';

interface DrawerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  opened: boolean;
  onClose(): void;
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: MantineNumberSize;
  trapFocus?: boolean;
  lockScroll?: boolean;
  closeOnClickOutside?: boolean;
  transitionDuration?: number;
  zIndex?: number;
  overlayOpacity?: number;
  overlayColor?: string;
}

export function Drawer({
  className,
  themeOverride,
  position = 'left',
  size,
  opened,
  onClose,
  trapFocus = false,
  lockScroll = false,
  closeOnClickOutside = true,
  transitionDuration = 300,
  zIndex = 1000,
  overlayColor,
  overlayOpacity = 0.65,
  children,
  ...others
}: DrawerProps) {
  const theme = useMantineTheme(themeOverride);
  const duration = useReducedMotion() ? 1 : transitionDuration;
  const classes = useStyles({ theme, size, position });
  const focusTrapRef = useFocusTrap(trapFocus);
  useScrollLock(opened && lockScroll);
  const clickOutsideRef = useClickOutside(() => opened && closeOnClickOutside && onClose());

  return (
    <GroupedTransition
      mounted={opened}
      transitions={{
        drawer: { duration, transition: 'slide-down' },
        overlay: { duration: duration / 2, transition: 'fade', timingFunction: 'ease' },
      }}
    >
      {(styles) => (
        <div className={cx(classes.wrapper, className)} {...others}>
          <Paper
            className={classes.drawer}
            ref={useMergedRef(focusTrapRef, clickOutsideRef)}
            style={{ ...styles.drawer, zIndex: zIndex + 1 }}
            radius={0}
          >
            {children}
          </Paper>

          <div className={classes.overlay} style={styles.overlay}>
            <Overlay color={overlayColor || theme.black} opacity={overlayOpacity} zIndex={zIndex} />
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

Drawer.displayName = '@mantine/core/Drawer';
