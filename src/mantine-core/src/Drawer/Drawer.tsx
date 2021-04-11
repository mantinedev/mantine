import React, { useEffect } from 'react';
import useFocusTrap from '@charlietango/use-focus-trap';
import { useClickOutside, useScrollLock, useMergedRef, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition, MantineTransition } from '../Transition/Transition';
import useStyles, { Position, sizes } from './Drawer.styles';

export const DRAWER_SIZES = sizes;

interface DrawerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  opened: boolean;
  onClose(): void;
  position?: Position;
  size?: string | number;
  noFocusTrap?: boolean;
  noScrollScroll?: boolean;
  closeOnClickOutside?: boolean;
  transition?: MantineTransition;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  zIndex?: number;
  noOverlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  shadow?: string;
  padding?: MantineNumberSize;
}

const transitions: Record<Position, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

export function Drawer({
  themeOverride,
  position = 'left',
  size,
  opened,
  onClose,
  noFocusTrap = false,
  noScrollScroll = false,
  closeOnClickOutside = true,
  transition,
  transitionDuration = 250,
  transitionTimingFunction = 'ease',
  zIndex = 1000,
  overlayColor,
  overlayOpacity = 0.65,
  children,
  noOverlay = false,
  shadow = 'md',
  padding = 0,
  ...others
}: DrawerProps) {
  const theme = useMantineTheme(themeOverride);
  const duration = useReducedMotion() ? 1 : transitionDuration;
  const classes = useStyles({ theme, size, position });
  const focusTrapRef = useFocusTrap(!noFocusTrap);
  useScrollLock(opened && !noScrollScroll);
  const clickOutsideRef = useClickOutside(() => opened && closeOnClickOutside && onClose());

  const drawerTransition = transition || transitions[position];

  const closeOnEscape = (event: KeyboardEvent) => {
    if (noFocusTrap && event.code === 'Escape') {
      onClose();
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (noFocusTrap) {
      window.addEventListener('keydown', closeOnEscape);
      return () => window.removeEventListener('keydown', closeOnEscape);
    }
  }, [noFocusTrap]);

  return (
    <GroupedTransition
      mounted={opened}
      transitions={{
        overlay: { duration: duration / 2, transition: 'fade', timingFunction: 'ease' },
        drawer: {
          duration,
          transition: drawerTransition,
          timingFunction: transitionTimingFunction,
        },
      }}
    >
      {(styles) => (
        <div {...others}>
          <Paper
            className={classes.drawer}
            ref={useMergedRef(focusTrapRef, clickOutsideRef)}
            style={{ ...styles.drawer, zIndex: zIndex + 1 }}
            radius={0}
            tabIndex={-1}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
            shadow={shadow}
            padding={padding}
          >
            {children}
          </Paper>

          {!noOverlay && (
            <div style={styles.overlay}>
              <Overlay
                color={overlayColor || theme.black}
                opacity={overlayOpacity}
                zIndex={zIndex}
              />
            </div>
          )}
        </div>
      )}
    </GroupedTransition>
  );
}

Drawer.displayName = '@mantine/core/Drawer';
