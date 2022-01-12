import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  MantineMargin,
  getDefaultZIndex,
} from '@mantine/styles';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { Text } from '../Text';
import { Box } from '../Box';
import { CloseButton } from '../ActionIcon';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles, { DrawerPosition } from './Drawer.styles';

export type DrawerStylesNames = Exclude<ClassNames<typeof useStyles>, 'noOverlay'>;

export interface DrawerProps
  extends Omit<DefaultProps<DrawerStylesNames>, MantineMargin>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** If true drawer is mounted to the dom */
  opened: boolean;

  /** Called when drawer is closed (Escape key and click outside, depending on options) */
  onClose(): void;

  /** Drawer body position */
  position?: DrawerPosition;

  /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
  size?: string | number;

  /** Drawer body shadow from theme or any css shadow value */
  shadow?: MantineShadow;

  /** Drawer body padding from theme or number for padding in px */
  padding?: MantineNumberSize;

  /** Drawer z-index property */
  zIndex?: number;

  /** Disables focus trap */
  noFocusTrap?: boolean;

  /** Disables scroll lock */
  noScrollLock?: boolean;

  /** Disable onClock trigger for outside events */
  noCloseOnClickOutside?: boolean;

  /** Disable onClock trigger for escape key press */
  noCloseOnEscape?: boolean;

  /** Drawer appear and disappear transition, see Transition component for full documentation */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Drawer transitionTimingFunction css property */
  transitionTimingFunction?: string;

  /** Removes overlay entirely */
  noOverlay?: boolean;

  /** Sets overlay opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Drawer title, displayed in header before close button */
  title?: React.ReactNode;

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Target element or selector where drawer portal should be rendered */
  target?: HTMLElement | string;
}

const transitions: Record<DrawerPosition, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

const rtlTransitions: Record<DrawerPosition, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  right: 'slide-right',
  left: 'slide-left',
};

export function MantineDrawer({
  className,
  opened,
  onClose,
  position = 'left',
  size = 'md',
  noFocusTrap = false,
  noScrollLock = false,
  noCloseOnClickOutside = false,
  noCloseOnEscape = false,
  transition,
  transitionDuration = 250,
  transitionTimingFunction = 'ease',
  zIndex = getDefaultZIndex('modal'),
  overlayColor,
  overlayOpacity,
  children,
  noOverlay = false,
  shadow = 'md',
  padding = 0,
  title,
  hideCloseButton,
  closeButtonLabel,
  classNames,
  styles,
  target,
  ...others
}: DrawerProps) {
  const { classes, cx, theme } = useStyles(
    { size, position },
    { classNames, styles, name: 'Drawer' }
  );
  const focusTrapRef = useFocusTrap(!noFocusTrap && opened);

  const [, lockScroll] = useScrollLock();

  const drawerTransition =
    transition || (theme.dir === 'rtl' ? rtlTransitions : transitions)[position];
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  const closeOnEscape = (event: KeyboardEvent) => {
    if (noFocusTrap && event.code === 'Escape' && !noCloseOnEscape) {
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

  useFocusReturn({ opened, transitionDuration });

  return (
    <GroupedTransition
      onExited={() => lockScroll(false)}
      onEntered={() => lockScroll(!noScrollLock && true)}
      mounted={opened}
      transitions={{
        overlay: { duration: transitionDuration / 2, transition: 'fade', timingFunction: 'ease' },
        drawer: {
          duration: transitionDuration,
          transition: drawerTransition,
          timingFunction: transitionTimingFunction,
        },
      }}
    >
      {(transitionStyles) => (
        <Box
          className={cx(classes.root, { [classes.noOverlay]: noOverlay }, className)}
          role="dialog"
          aria-modal
          onMouseDown={() => !noCloseOnClickOutside && onClose()}
          {...others}
        >
          <Paper<'div'>
            onMouseDown={(event) => event.stopPropagation()}
            className={cx(classes.drawer, className)}
            ref={focusTrapRef}
            style={{ ...transitionStyles.drawer, zIndex: zIndex + 2 }}
            radius={0}
            tabIndex={-1}
            onKeyDownCapture={(event) => {
              const shouldTrigger =
                (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';

              shouldTrigger && event.nativeEvent.code === 'Escape' && !noCloseOnEscape && onClose();
            }}
            shadow={shadow}
            padding={padding}
          >
            {(title || !hideCloseButton) && (
              <div className={classes.header}>
                <Text className={classes.title}>{title}</Text>

                {!hideCloseButton && (
                  <CloseButton
                    iconSize={16}
                    onClick={onClose}
                    aria-label={closeButtonLabel}
                    className={classes.closeButton}
                  />
                )}
              </div>
            )}
            {children}
          </Paper>

          {!noOverlay && (
            <div style={transitionStyles.overlay}>
              <Overlay
                className={classes.overlay}
                opacity={_overlayOpacity}
                zIndex={zIndex}
                color={
                  overlayColor ||
                  (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black)
                }
              />
            </div>
          )}
        </Box>
      )}
    </GroupedTransition>
  );
}

export function Drawer({
  zIndex = getDefaultZIndex('modal'),
  target,
  ...props
}: React.ComponentPropsWithoutRef<typeof MantineDrawer>) {
  return (
    <Portal zIndex={zIndex} target={target}>
      <MantineDrawer {...props} />
    </Portal>
  );
}

Drawer.displayName = '@mantine/core/Drawer';
