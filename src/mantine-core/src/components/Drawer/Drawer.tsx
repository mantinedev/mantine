import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  MantineStyleSystemSize,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { OptionalPortal } from '../Portal';
import { Text } from '../Text';
import { Box } from '../Box';
import { CloseButton } from '../ActionIcon';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles, { DrawerPosition } from './Drawer.styles';

export type DrawerStylesNames = Exclude<ClassNames<typeof useStyles>, 'withOverlay'>;

export interface DrawerProps
  extends Omit<DefaultProps<DrawerStylesNames>, MantineStyleSystemSize>,
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
  trapFocus?: boolean;

  /** Disables scroll lock */
  lockScroll?: boolean;

  /** Disable onClock trigger for outside events */
  closeOnClickOutside?: boolean;

  /** Disable onClock trigger for escape key press */
  closeOnEscape?: boolean;

  /** Drawer appear and disappear transition, see Transition component for full documentation */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Drawer transitionTimingFunction css property */
  transitionTimingFunction?: string;

  /** Removes overlay entirely */
  withOverlay?: boolean;

  /** Overlay opacity, number from 0 to 1 */
  overlayOpacity?: number;

  /** Overlay color, for example, #000 */
  overlayColor?: string;

  /** Overlay blur in px */
  overlayBlur?: number;

  /** Drawer title, displayed in header before close button */
  title?: React.ReactNode;

  /** Hides close button if set to false, drawer still can be closed with escape key and by clicking outside */
  withCloseButton?: boolean;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Target element or selector where drawer portal should be rendered */
  target?: HTMLElement | string;

  /** Determines whether drawer should be rendered within Portal, defaults to true */
  withinPortal?: boolean;
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

const defaultProps: Partial<DrawerProps> = {
  position: 'left',
  size: 'md',
  transitionDuration: 250,
  transitionTimingFunction: 'ease',
  zIndex: getDefaultZIndex('modal'),
  shadow: 'md',
  padding: 0,
  lockScroll: true,
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withOverlay: true,
  withCloseButton: true,
  withinPortal: true,
  overlayBlur: 0,
};

export function Drawer(props: DrawerProps) {
  const {
    className,
    opened,
    onClose,
    position,
    size,
    trapFocus,
    lockScroll,
    closeOnClickOutside,
    closeOnEscape,
    transition,
    transitionDuration,
    transitionTimingFunction,
    zIndex,
    overlayColor,
    overlayOpacity,
    children,
    withOverlay,
    shadow,
    padding,
    title,
    withCloseButton,
    closeButtonLabel,
    classNames,
    styles,
    target,
    withinPortal,
    overlayBlur,
    ...others
  } = useMantineDefaultProps('Drawer', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { size, position, zIndex },
    { classNames, styles, name: 'Drawer' }
  );

  const focusTrapRef = useFocusTrap(trapFocus && opened);

  const [, _lockScroll] = useScrollLock();

  const drawerTransition =
    transition || (theme.dir === 'rtl' ? rtlTransitions : transitions)[position];
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  const _closeOnEscape = (event: KeyboardEvent) => {
    if (event.code === 'Escape' && closeOnEscape) {
      onClose();
    }
  };

  useEffect(() => {
    if (!trapFocus) {
      window.addEventListener('keydown', _closeOnEscape);
      return () => window.removeEventListener('keydown', _closeOnEscape);
    }

    return undefined;
  }, [trapFocus]);

  useFocusReturn({ opened, transitionDuration: 0 });

  return (
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex} target={target}>
      <GroupedTransition
        onExited={() => _lockScroll(false)}
        onEntered={() => _lockScroll(lockScroll && true)}
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
            className={cx(classes.root, { [classes.noOverlay]: !withOverlay }, className)}
            role="dialog"
            aria-modal
            {...others}
          >
            <Paper<'div'>
              onMouseDown={(event) => event.stopPropagation()}
              className={cx(classes.drawer, className)}
              ref={focusTrapRef}
              style={transitionStyles.drawer}
              radius={0}
              tabIndex={-1}
              onKeyDownCapture={(event) => {
                const shouldTrigger =
                  (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';

                shouldTrigger && event.nativeEvent.code === 'Escape' && closeOnEscape && onClose();
              }}
              shadow={shadow}
              p={padding}
            >
              {(title || withCloseButton) && (
                <div className={classes.header}>
                  <Text className={classes.title}>{title}</Text>

                  {withCloseButton && (
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

            {withOverlay && (
              <div style={transitionStyles.overlay}>
                <Overlay
                  blur={overlayBlur}
                  onMouseDown={() => closeOnClickOutside && onClose()}
                  className={classes.overlay}
                  opacity={_overlayOpacity}
                  zIndex={0}
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
    </OptionalPortal>
  );
}

Drawer.displayName = '@mantine/core/Drawer';
