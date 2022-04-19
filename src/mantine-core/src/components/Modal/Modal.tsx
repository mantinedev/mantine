/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  MantineStyleSystemSize,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { CloseButton } from '../ActionIcon';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { OptionalPortal } from '../Portal';
import { Box } from '../Box';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles from './Modal.styles';

export type ModalStylesNames = ClassNames<typeof useStyles>;

export interface ModalProps
  extends Omit<DefaultProps<ModalStylesNames>, MantineStyleSystemSize>,
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

  /** Hides close button if set to false, modal still can be closed with escape key and by clicking outside */
  withCloseButton?: boolean;

  /** Overlay opacity */
  overlayOpacity?: number;

  /** Overlay color */
  overlayColor?: string;

  /** Overlay blur in px */
  overlayBlur?: number;

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
  trapFocus?: boolean;

  /** Controls if modal should be centered */
  centered?: boolean;

  /** Target element or selector where modal portal should be rendered */
  target?: HTMLElement | string;

  /** Determines whether modal should be rendered within Portal, defaults to true */
  withinPortal?: boolean;
}

const defaultProps: Partial<ModalProps> = {
  size: 'md',
  transitionDuration: 250,
  overflow: 'outside',
  transition: 'pop',
  padding: 'lg',
  shadow: 'lg',
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withCloseButton: true,
  withinPortal: true,
  overlayBlur: 0,
  zIndex: getDefaultZIndex('modal'),
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
    ...others
  } = useMantineDefaultProps('Modal', defaultProps, props);
  const baseId = useUuid(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles(
    { size, overflow, centered, zIndex },
    { classNames, styles, name: 'Modal' }
  );
  const focusTrapRef = useFocusTrap(trapFocus && opened);
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  const [, lockScroll] = useScrollLock();

  const closeOnEscapePress = (event: KeyboardEvent) => {
    if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
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

  useFocusReturn({ opened, transitionDuration: 0 });

  return (
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex} target={target}>
      <GroupedTransition
        onExited={() => lockScroll(false)}
        onEntered={() => lockScroll(true)}
        mounted={opened}
        duration={transitionDuration}
        exitDuration={transitionDuration}
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
              onKeyDownCapture={(event) => {
                const shouldTrigger =
                  (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';
                shouldTrigger && event.nativeEvent.code === 'Escape' && closeOnEscape && onClose();
              }}
              ref={focusTrapRef}
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
              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  sx={{ position: 'fixed' }}
                  zIndex={0}
                  onMouseDown={() => closeOnClickOutside && onClose()}
                  blur={overlayBlur}
                  color={
                    overlayColor ||
                    (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black)
                  }
                  opacity={_overlayOpacity}
                />
              </div>
            </div>
          </Box>
        )}
      </GroupedTransition>
    </OptionalPortal>
  );
}

Modal.displayName = '@mantine/core/Modal';
