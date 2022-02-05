/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  MantineMargin,
  getDefaultZIndex,
} from '@mantine/styles';
import { CloseButton } from '../ActionIcon';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { Box } from '../Box';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles from './Modal.styles';

export type ModalStylesNames = ClassNames<typeof useStyles>;

export interface ModalProps
  extends Omit<DefaultProps<ModalStylesNames>, MantineMargin>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Mounts modal if true */
  opened: boolean;

  /** Called when close button clicked and when escape key is pressed */
  onClose(): void;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /** Modal z-index property */
  zIndex?: number;

  /** Control vertical overflow behavior */
  overflow?: 'outside' | 'inside';

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Modal radius */
  radius?: MantineNumberSize;

  /** Modal body width */
  size?: string | number;

  /** Modal body transition */
  transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

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
  noFocusTrap?: boolean;

  /** Controls if modal should be centered */
  centered?: boolean;

  /** Target element or selector where modal portal should be rendered */
  target?: HTMLElement | string;
}

export function MantineModal({
  className,
  opened,
  title,
  onClose,
  children,
  hideCloseButton = false,
  overlayOpacity,
  size = 'md',
  transitionDuration = 300,
  closeButtonLabel,
  overlayColor,
  overflow = 'outside',
  transition = 'pop',
  padding = 'lg',
  shadow = 'lg',
  radius = 'sm',
  id,
  classNames,
  styles,
  closeOnClickOutside = true,
  noFocusTrap = false,
  closeOnEscape = true,
  centered = false,
  target,
  ...others
}: ModalProps) {
  const baseId = useUuid(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles(
    { size, overflow, centered },
    { classNames, styles, name: 'Modal' }
  );
  const focusTrapRef = useFocusTrap(!noFocusTrap && opened);
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  const [, lockScroll] = useScrollLock();

  const closeOnEscapePress = (event: KeyboardEvent) => {
    if (noFocusTrap && event.code === 'Escape' && closeOnEscape) {
      onClose();
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // onKeyDownCapture event will not fire when focus trap is not active
    if (noFocusTrap) {
      window.addEventListener('keydown', closeOnEscapePress);
      return () => window.removeEventListener('keydown', closeOnEscapePress);
    }
  }, [noFocusTrap]);

  useFocusReturn({ opened, transitionDuration });

  return (
    <GroupedTransition
      onExited={() => lockScroll(false)}
      onEntered={() => lockScroll(true)}
      mounted={opened}
      transitions={{
        modal: { duration: transitionDuration, transition },
        overlay: {
          duration: transitionDuration / 2,
          transition: 'fade',
          timingFunction: 'ease',
        },
      }}
    >
      {(transitionStyles) => (
        <Box className={cx(classes.root, className)} {...others}>
          <div
            className={classes.inner}
            onMouseDown={() => closeOnClickOutside && onClose()}
            onKeyDownCapture={(event) => {
              const shouldTrigger =
                (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';
              shouldTrigger && event.nativeEvent.code === 'Escape' && closeOnEscape && onClose();
            }}
            ref={focusTrapRef}
          >
            <Paper<'div'>
              onMouseDown={(event) => event.stopPropagation()}
              className={classes.modal}
              shadow={shadow}
              padding={padding}
              radius={radius}
              role="dialog"
              aria-labelledby={titleId}
              aria-describedby={bodyId}
              aria-modal
              tabIndex={-1}
              style={{
                ...transitionStyles.modal,
                marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
                zIndex: 3,
              }}
            >
              {(title || !hideCloseButton) && (
                <div className={classes.header}>
                  <Text id={titleId} className={classes.title}>
                    {title}
                  </Text>

                  {!hideCloseButton && (
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

          <div style={transitionStyles.overlay}>
            <Overlay
              className={classes.overlay}
              zIndex={0}
              color={
                overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black)
              }
              opacity={_overlayOpacity}
            />
          </div>
        </Box>
      )}
    </GroupedTransition>
  );
}

export function Modal({
  zIndex = getDefaultZIndex('modal'),
  target,
  ...props
}: React.ComponentPropsWithoutRef<typeof MantineModal>) {
  return (
    <Portal zIndex={zIndex} target={target}>
      <MantineModal {...props} />
    </Portal>
  );
}

Modal.displayName = '@mantine/core/Modal';
