import React, { useEffect, useRef } from 'react';
import {
  useScrollLock,
  useFocusTrap,
  useFocusReturn,
  useId,
  useWindowEvent,
  useMergedRef,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  Selectors,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { CloseButton } from '../CloseButton';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { OptionalPortal } from '../Portal';
import { Box } from '../Box';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles, { ModalStylesParams } from './Modal.styles';

export type ModalStylesNames = Selectors<typeof useStyles>;

export interface ModalProps
  extends DefaultProps<ModalStylesNames, ModalStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Mounts modal if true */
  opened: boolean;

  /** Called when close button clicked and when escape key is pressed */
  onClose(): void;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /** Modal z-index property */
  zIndex?: React.CSSProperties['zIndex'];

  /** Control vertical overflow behavior */
  overflow?: 'outside' | 'inside';

  /** Hides close button if set to false, modal still can be closed with escape key and by clicking outside */
  withCloseButton?: boolean;

  /** Overlay opacity */
  overlayOpacity?: number;

  /** Overlay color */
  overlayColor?: string;

  /** Overlay blur in px */
  overlayBlur?: number;

  /** Determines whether the modal should take the entire screen */
  fullScreen?: boolean;

  /** Modal radius */
  radius?: MantineNumberSize;

  /** Modal body width */
  size?: string | number;

  /** Modal body transition */
  transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Exit transition duration in ms, 0 by default */
  exitTransitionDuration?: number;

  /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
  id?: string;

  /** Modal shadow from theme or css value */
  shadow?: MantineShadow;

  /** Modal padding from theme or number value for padding in px */
  padding?: MantineNumberSize;

  /** Should modal be closed when outside click was registered? */
  closeOnClickOutside?: boolean;

  /** Should modal be closed when escape is pressed? */
  closeOnEscape?: boolean;

  /** Disables focus trap */
  trapFocus?: boolean;

  /** Controls if modal should be centered */
  centered?: boolean;

  /** Determines whether scroll should be locked when modal is opened, defaults to true */
  lockScroll?: boolean;

  /** Target element or selector where modal portal should be rendered */
  target?: HTMLElement | string;

  /** Determines whether modal should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** Determines whether focus should be returned to the last active element when drawer is closed */
  withFocusReturn?: boolean;
}

const defaultProps: Partial<ModalProps> = {
  size: 'md',
  transitionDuration: 250,
  overflow: 'outside',
  padding: 'lg',
  shadow: 'lg',
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withCloseButton: true,
  withinPortal: true,
  lockScroll: true,
  withFocusReturn: true,
  overlayBlur: 0,
  zIndex: getDefaultZIndex('modal'),
  exitTransitionDuration: 0,
};

export function Modal(props: ModalProps) {
  const {
    className,
    opened,
    title,
    onClose,
    children,
    withCloseButton,
    overlayOpacity,
    size,
    transitionDuration,
    exitTransitionDuration,
    closeButtonLabel,
    overlayColor,
    overflow,
    transition,
    padding,
    shadow,
    radius,
    id,
    classNames,
    styles,
    closeOnClickOutside,
    trapFocus,
    closeOnEscape,
    centered,
    target,
    withinPortal,
    zIndex,
    overlayBlur,
    transitionTimingFunction,
    fullScreen,
    unstyled,
    lockScroll: shouldLockScroll,
    withFocusReturn,
    ...others
  } = useComponentDefaultProps('Modal', defaultProps, props);
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles(
    { size, overflow, centered, zIndex, fullScreen },
    { unstyled, classNames, styles, name: 'Modal' }
  );
  const focusTrapRef = useFocusTrap(trapFocus && opened);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(focusTrapRef, overlayRef);

  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  useScrollLock(shouldLockScroll && opened);

  const closeOnEscapePress = (event: KeyboardEvent) => {
    if (!trapFocus && event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  };

  useEffect(() => {
    if (!trapFocus) {
      window.addEventListener('keydown', closeOnEscapePress);
      return () => window.removeEventListener('keydown', closeOnEscapePress);
    }

    return undefined;
  }, [trapFocus]);

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && withFocusReturn });

  const clickTarget = useRef<EventTarget>(null);

  useWindowEvent('mousedown', (e) => {
    clickTarget.current = e.target;
  });

  const handleOutsideClick = () => {
    if (clickTarget.current === overlayRef.current) {
      closeOnClickOutside && onClose();
    }
  };

  return (
    <OptionalPortal withinPortal={withinPortal} target={target}>
      <GroupedTransition
        mounted={opened}
        duration={transitionDuration}
        exitDuration={exitTransitionDuration}
        timingFunction={transitionTimingFunction}
        transitions={{
          modal: {
            duration: transitionDuration,
            transition: transition || (fullScreen ? 'fade' : 'pop'),
          },
          overlay: {
            duration: transitionDuration / 2,
            transition: 'fade',
            timingFunction: 'ease',
          },
        }}
      >
        {(transitionStyles) => (
          <>
            <Box id={baseId} className={cx(classes.root, className)} {...others}>
              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  sx={{ position: 'fixed' }}
                  zIndex={0}
                  blur={overlayBlur}
                  color={
                    overlayColor ||
                    (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black)
                  }
                  opacity={_overlayOpacity}
                  unstyled={unstyled}
                />
              </div>
              <div
                role="presentation"
                className={classes.inner}
                onClick={handleOutsideClick}
                onKeyDown={(event) => {
                  const shouldTrigger =
                    (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';
                  shouldTrigger && event.key === 'Escape' && closeOnEscape && onClose();
                }}
                ref={mergedRef}
              >
                <Paper<'div'>
                  className={classes.modal}
                  shadow={shadow}
                  p={padding}
                  radius={radius}
                  role="dialog"
                  aria-labelledby={titleId}
                  aria-describedby={bodyId}
                  aria-modal
                  tabIndex={-1}
                  style={transitionStyles.modal}
                  unstyled={unstyled}
                  onClick={(event) => event.stopPropagation()}
                >
                  {(title || withCloseButton) && (
                    <div className={classes.header}>
                      <Text id={titleId} className={classes.title}>
                        {title}
                      </Text>

                      {withCloseButton && (
                        <CloseButton
                          iconSize={16}
                          onClick={onClose}
                          aria-label={closeButtonLabel}
                          className={classes.close}
                        />
                      )}
                    </div>
                  )}

                  <div id={bodyId} className={classes.body}>
                    {children}
                  </div>
                </Paper>
              </div>
            </Box>
          </>
        )}
      </GroupedTransition>
    </OptionalPortal>
  );
}

Modal.displayName = '@mantine/core/Modal';
