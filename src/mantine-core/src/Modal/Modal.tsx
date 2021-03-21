import React, { useEffect, useRef } from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { Cross1Icon } from '@modulz/radix-icons';
import useFocusTrap from '@charlietango/use-focus-trap';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useClickOutside, useReducedMotion } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import useStyles from './Modal.styles';

interface ModalProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /** Mounts modal if true */
  opened: boolean;
  onClose(): void;

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  modalWidth?: number;

  /** Duration in ms of modal mount and unmount animations */
  transitionDuration?: number;

  /** Close button aria-label attribute */
  closeButtonLabel?: string;
}

const inState = {
  overlay: { opacity: 1 },
  modal: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
};

const outState = {
  overlay: { opacity: 0 },
  modal: { opacity: 0, transform: 'translateY(-100%) skew(-10deg, -5deg)' },
};

const transitionStyles = {
  entering: inState,
  entered: inState,
  exiting: outState,
  exited: outState,
};

export function Modal({
  className,
  opened,
  themeOverride,
  title,
  onClose,
  children,
  hideCloseButton = false,
  overlayOpacity = 0.65,
  modalWidth = 440,
  transitionDuration = 350,
  closeButtonLabel,
  overlayColor,
  ...others
}: ModalProps) {
  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const clickOutsideRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();
  const duration = reduceMotion ? 1 : transitionDuration;

  const defaultStyle = {
    overlay: {
      opacity: 0,
      transition: `opacity ${duration / 2}ms linear`,
    },

    modal: {
      transformOrigin: 'top',
      transform: 'translateY(-200px) scaleY(0)',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionProperty: 'transform, opacity',
    },
  };

  useEffect(() => {
    if (opened) {
      bodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflow.current || '';
    }
  }, [opened]);

  return (
    <Transition
      in={opened}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <div className={cx(classes.wrapper, className)} {...others}>
          <div
            className={classes.inner}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
            ref={focusTrapRef}
          >
            <Paper
              className={classes.modal}
              shadow="lg"
              style={{ width: modalWidth, ...defaultStyle.modal, ...transitionStyles[state].modal }}
              ref={clickOutsideRef}
            >
              {(title || !hideCloseButton) && (
                <div data-mantine-modal-header className={classes.header}>
                  <Text data-mantine-modal-title className={classes.title} size="md">
                    {title}
                  </Text>

                  {!hideCloseButton && (
                    <ActionIcon onClick={onClose} color="gray" aria-label={closeButtonLabel}>
                      <Cross1Icon />
                    </ActionIcon>
                  )}
                </div>
              )}

              {children}
            </Paper>
          </div>

          <div
            style={{
              ...defaultStyle.overlay,
              ...transitionStyles[state].overlay,
            }}
          >
            <Overlay color={overlayColor || theme.black} opacity={overlayOpacity} />
          </div>
        </div>
      )}
    </Transition>
  );
}

Modal.displayName = '@mantine/core/Modal';
