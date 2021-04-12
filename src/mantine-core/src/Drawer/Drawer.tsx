import React, { useEffect } from 'react';
import cx from 'clsx';
import useFocusTrap from '@charlietango/use-focus-trap';
import { useClickOutside, useScrollLock, useMergedRef, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition, MantineTransition } from '../Transition/Transition';
import useStyles, { Position, sizes } from './Drawer.styles';

export const DRAWER_SIZES = sizes;

interface DrawerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** If true drawer is mounted to the dom */
  opened: boolean;

  /** Called when drawer is closed (Escape key and click outside, depending on options) */
  onClose(): void;

  /** Drawer body position */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
  size?: string | number;

  /** Drawer body shadow from theme or any css shadow value */
  shadow?: string;

  /** Drawer body padding from theme or number for padding in px */
  padding?: MantineNumberSize;

  /** Drawer z-index property */
  zIndex?: number;

  /** Disables focus trap */
  noFocusTrap?: boolean;

  /** Disables scroll lock */
  noScrollScroll?: boolean;

  /** Disable onClock trigger for outside events */
  noCloseOnClickOutside?: boolean;

  /** Drawer appear and disappear transition, see Transition component for full documentation */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Drawer transitionTimingFunction css property */
  transitionTimingFunction?: string;

  /** Removes overlay entirely */
  noOverlay?: boolean;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.black */
  overlayColor?: string;
}

const transitions: Record<Position, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

export function Drawer({
  opened,
  onClose,
  className,
  themeOverride,
  position = 'left',
  size = 'md',
  noFocusTrap = false,
  noScrollScroll = false,
  noCloseOnClickOutside = false,
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
  const clickOutsideRef = useClickOutside(() => opened && !noCloseOnClickOutside && onClose());

  const drawerTransition = transition || transitions[position];

  const closeOnEscape = (event: KeyboardEvent) => {
    if (noFocusTrap && event.code === 'Escape') {
      onClose();
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // onKeyDownCapture event will not fire when focus trap is not active
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
        <div
          className={cx(classes.wrapper, { [classes.noOverlay]: noOverlay }, className)}
          role="dialog"
          aria-modal
          {...others}
        >
          <Paper
            className={cx(classes.drawer, className)}
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
