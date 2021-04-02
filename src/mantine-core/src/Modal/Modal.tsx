import React, { useEffect, useRef } from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { Cross1Icon } from '@modulz/radix-icons';
import useFocusTrap from '@charlietango/use-focus-trap';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useClickOutside, useReducedMotion, useId } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import useStyles from './Modal.styles';

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

  /** Overlay below modal color */
  overlayColor?: React.CSSProperties['color'];

  /** Modal body width */
  modalWidth?: React.CSSProperties['width'];

  /** Duration in ms of modal mount and unmount animations */
  transitionDuration?: number;

  /** Close button aria-label and title attributes */
  closeButtonLabel?: string;
}

const inState = {
  overlay: { opacity: 1 },
  modal: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
};

const outState = {
  overlay: { opacity: 0 },
  modal: { opacity: 0, transform: 'translateY(-200px) skew(-10deg, -5deg)' },
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
  zIndex = 1000,
  overflow = 'outside',
  ...others
}: ModalProps) {
  const titleId = useId();
  const bodyId = useId();

  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ overflow, theme });
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
          <section
            data-mantine-modal-inner
            className={classes.inner}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
            style={{ zIndex: zIndex + 1 }}
            aria-labelledby={titleId}
            aria-describedby={bodyId}
            ref={focusTrapRef}
          >
            <Paper
              className={classes.modal}
              shadow="lg"
              style={{ width: modalWidth, ...defaultStyle.modal, ...transitionStyles[state].modal }}
              ref={clickOutsideRef}
              tabIndex={-1}
            >
              {(title || !hideCloseButton) && (
                <header data-mantine-modal-header className={classes.header}>
                  <Text id={titleId} data-mantine-modal-title className={classes.title}>
                    {title}
                  </Text>

                  {!hideCloseButton && (
                    <ActionIcon onClick={onClose} aria-label={closeButtonLabel}>
                      <Cross1Icon />
                    </ActionIcon>
                  )}
                </header>
              )}

              <div id={bodyId} className={classes.body}>
                {children}
              </div>
            </Paper>
          </section>

          <div
            style={{
              ...defaultStyle.overlay,
              ...transitionStyles[state].overlay,
            }}
          >
            <Overlay color={overlayColor || theme.black} opacity={overlayOpacity} zIndex={zIndex} />
          </div>
        </div>
      )}
    </Transition>
  );
}

Modal.displayName = '@mantine/core/Modal';
