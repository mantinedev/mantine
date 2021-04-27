import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import {
  useClickOutside,
  useReducedMotion,
  useId,
  useScrollLock,
  useFocusTrap,
} from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition, MantineTransition } from '../Transition/Transition';
import { CloseIcon } from './CloseIcon';
import useStyles, { sizes } from './Modal.styles';

export const MODAL_SIZES = sizes;

interface ModalProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
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

  /** Modal body width */
  size?: string | number;

  /** Modal body transition */
  transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Close button aria-label and title attributes */
  closeButtonLabel?: string;
}

export function Modal({
  className,
  opened,
  themeOverride,
  title,
  onClose,
  children,
  hideCloseButton = false,
  overlayOpacity,
  size = 'md',
  transitionDuration = 300,
  closeButtonLabel,
  overlayColor,
  zIndex = 1000,
  overflow = 'outside',
  transition = 'slide-down',
  ...others
}: ModalProps) {
  const titleId = useId();
  const bodyId = useId();
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ size, overflow, theme });
  const clickOutsideRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();
  const duration = reduceMotion ? 1 : transitionDuration;
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  useScrollLock(opened);

  return (
    <GroupedTransition
      mounted={opened}
      transitions={{
        modal: { duration, transition },
        overlay: { duration: duration / 2, transition: 'fade', timingFunction: 'ease' },
      }}
    >
      {(styles) => (
        <div className={cx(classes.wrapper, className)} {...others}>
          <div
            data-mantine-modal-inner
            className={classes.inner}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
            style={{ zIndex: zIndex + 1 }}
            ref={focusTrapRef}
          >
            <Paper
              className={classes.modal}
              shadow="lg"
              role="dialog"
              aria-labelledby={titleId}
              aria-describedby={bodyId}
              aria-modal
              style={styles.modal}
              elementRef={clickOutsideRef}
              tabIndex={-1}
            >
              {(title || !hideCloseButton) && (
                <div data-mantine-modal-header className={classes.header}>
                  <Text id={titleId} data-mantine-modal-title className={classes.title}>
                    {title}
                  </Text>

                  {!hideCloseButton && (
                    <ActionIcon onClick={onClose} aria-label={closeButtonLabel}>
                      <CloseIcon />
                    </ActionIcon>
                  )}
                </div>
              )}

              <div id={bodyId} className={classes.body}>
                {children}
              </div>
            </Paper>
          </div>

          <div style={styles.overlay}>
            <Overlay
              color={
                overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black)
              }
              opacity={_overlayOpacity}
              zIndex={zIndex}
            />
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

Modal.displayName = '@mantine/core/Modal';
