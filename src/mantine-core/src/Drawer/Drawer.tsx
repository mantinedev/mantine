import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn, useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  Selectors,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { OptionalPortal } from '../Portal';
import { Text } from '../Text';
import { Box } from '../Box';
import { CloseButton } from '../CloseButton';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles, { DrawerPosition } from './Drawer.styles';

export type DrawerStylesNames = Exclude<Selectors<typeof useStyles>, 'withOverlay'>;

export interface DrawerProps
  extends DefaultProps<DrawerStylesNames>,
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
  zIndex?: React.CSSProperties['zIndex'];

  /** Disables focus trap */
  trapFocus?: boolean;

  /** Disables scroll lock */
  lockScroll?: boolean;

  /** Disable onMouseDown trigger for outside events */
  closeOnClickOutside?: boolean;

  /** Disable onKeyDownCapture trigger for escape key press */
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

  /** id base, used to generate ids to connect drawer title and body with aria- attributes, defaults to random id */
  id?: string;

  /** Target element or selector where drawer portal should be rendered */
  target?: HTMLElement | string;

  /** Determines whether drawer should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** Determines whether focus should be returned to the last active element when drawer is closed */
  withFocusReturn?: boolean;
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
  withFocusReturn: true,
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
    id,
    padding,
    title,
    withCloseButton,
    closeButtonLabel,
    classNames,
    styles,
    target,
    withinPortal,
    overlayBlur,
    unstyled,
    withFocusReturn,
    ...others
  } = useComponentDefaultProps('Drawer', defaultProps, props);
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;

  const { classes, cx, theme } = useStyles(
    { size, position, zIndex, withOverlay },
    { classNames, styles, unstyled, name: 'Drawer' }
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
    if (event.key === 'Escape' && closeOnEscape) {
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

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && withFocusReturn });

  return (
    <OptionalPortal withinPortal={withinPortal} target={target}>
      <GroupedTransition
        onExited={() => _lockScroll(false)}
        onEntered={() => _lockScroll(lockScroll && true)}
        mounted={opened}
        duration={transitionDuration}
        timingFunction={transitionTimingFunction}
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
            className={cx(classes.root, className)}
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            aria-describedby={bodyId}
            {...others}
          >
            <Paper<'div'>
              className={cx(classes.drawer, className)}
              ref={focusTrapRef}
              style={transitionStyles.drawer}
              radius={0}
              tabIndex={-1}
              onKeyDownCapture={(event) => {
                const shouldTrigger =
                  (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';

                shouldTrigger && event.key === 'Escape' && closeOnEscape && onClose();
              }}
              shadow={shadow}
              p={padding}
              unstyled={unstyled}
            >
              {(title || withCloseButton) && (
                <div className={classes.header}>
                  <Text id={titleId} className={classes.title} unstyled={unstyled}>
                    {title}
                  </Text>

                  {withCloseButton && (
                    <CloseButton
                      iconSize={16}
                      onClick={onClose}
                      aria-label={closeButtonLabel}
                      className={classes.closeButton}
                      unstyled={unstyled}
                    />
                  )}
                </div>
              )}

              <div id={bodyId} className={classes.body}>
                {children}
              </div>
            </Paper>

            {withOverlay && (
              <div style={transitionStyles.overlay}>
                <Overlay
                  unstyled={unstyled}
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
