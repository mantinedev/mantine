import React from 'react';
import cx from 'clsx';
import { Cross1Icon } from '@modulz/radix-icons';
import useFocusTrap from '@charlietango/use-focus-trap';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useClickOutside, useReducedMotion, useId, useScrollLock } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition } from '../Transition/Transition';
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

  /** Overlay below modal opacity */
  overlayOpacity?: React.CSSProperties['opacity'];

  /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: React.CSSProperties['color'];

  /** Modal body width */
  size?: string | number;

  /** Duration in ms of modal mount and unmount animations */
  transitionDuration?: number;

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
  overlayOpacity = 0.65,
  size = 'md',
  transitionDuration = 300,
  closeButtonLabel,
  overlayColor,
  zIndex = 1000,
  overflow = 'outside',
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

  useScrollLock(opened);

  return (
    <GroupedTransition
      mounted={opened}
      transitions={{
        modal: { duration, transition: 'slide-down' },
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
                      <Cross1Icon />
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
                overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.black)
              }
              opacity={overlayOpacity}
              zIndex={zIndex}
            />
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

Modal.displayName = '@mantine/core/Modal';
