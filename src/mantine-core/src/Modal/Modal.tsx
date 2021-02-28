import React, { useEffect } from 'react';
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
  modalWidth?: number;
  /** Duration in ms of modal mount and unmount animations */
  transitionDuration?: number;
}

const inState = {
  overlay: { opacity: 1 },
  modal: { transform: 'translateY(0) scaleY(1)' },
};

const outState = {
  overlay: { opacity: 0 },
  modal: { transform: 'translateY(-200px) scaleY(0)' },
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
  transitionDuration = 400,
  ...others
}: ModalProps) {
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
      transition: `transform ${duration}ms cubic-bezier(.51,.3,0,1.21)`,
    },
  };

  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : '';
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
              <div>
                {(title || !hideCloseButton) && (
                  <div className={classes.header}>
                    <Text className={classes.title} size="md">
                      {title}
                    </Text>
                    <ActionIcon onClick={onClose} color="gray">
                      <Cross1Icon />
                    </ActionIcon>
                  </div>
                )}
              </div>
              <div className={classes.body}>{children}</div>
            </Paper>
          </div>

          <div
            style={{
              ...defaultStyle.overlay,
              ...transitionStyles[state].overlay,
            }}
          >
            <Overlay color={theme.black} opacity={overlayOpacity} />
          </div>
        </div>
      )}
    </Transition>
  );
}

Modal.displayName = '@mantine/core/Modal';
