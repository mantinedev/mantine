import React, { useEffect } from 'react';
import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
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
  title?: React.ReactNode;
  opened: boolean;
  onClose(): void;
  hideCloseButton?: boolean;
  overlayOpacity?: number;
  modalWidth?: number;
  transitionDuration?: number;
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
  modalWidth = 440,
  transitionDuration = 200,
  ...others
}: ModalProps) {
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ reduceMotion, transitionDuration, theme });
  const clickOutsideRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();

  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : '';
  }, [opened]);

  return (
    <CSSTransition
      in={opened}
      timeout={reduceMotion ? 1 : transitionDuration}
      unmountOnExit
      classNames={{
        enter: classes.outState,
        exitActive: classes.outState,
        enterActive: classes.inState,
        exit: classes.inState,
      }}
    >
      <div className={cx(classes.wrapper, className)} {...others}>
        <div
          className={classes.inner}
          onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
          ref={focusTrapRef}
        >
          <Paper
            className={classes.modal}
            shadow="lg"
            style={{ width: modalWidth }}
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

        <div className={classes.overlay}>
          <Overlay color={theme.black} opacity={overlayOpacity} />
        </div>
      </div>
    </CSSTransition>
  );
}

Modal.displayName = '@mantine/core/Modal';
