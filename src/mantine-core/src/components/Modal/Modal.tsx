import React from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  MantineMargin,
} from '@mantine/styles';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { GroupedTransition, MantineTransition } from '../Transition';
import useStyles from './Modal.styles';

export type ModalStylesNames = Exclude<ClassNames<typeof useStyles>, 'clickOutsideOverlay'>;

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
  zIndex = 1000,
  overflow = 'outside',
  transition = 'pop',
  padding = 'lg',
  shadow = 'lg',
  id,
  classNames,
  styles,
  sx,
  closeOnClickOutside = true,
  ...others
}: ModalProps) {
  const baseId = useUuid(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles(
    { size, overflow },
    { sx, classNames, styles, name: 'Modal' }
  );
  const focusTrapRef = useFocusTrap(opened);
  const _overlayOpacity =
    typeof overlayOpacity === 'number'
      ? overlayOpacity
      : theme.colorScheme === 'dark'
      ? 0.85
      : 0.75;

  const [, lockScroll] = useScrollLock();
  useFocusReturn({ opened, transitionDuration });

  return (
    <GroupedTransition
      onExited={() => lockScroll(false)}
      onEntered={() => lockScroll(true)}
      mounted={opened}
      transitions={{
        modal: { duration: transitionDuration, transition },
        overlay: { duration: transitionDuration / 2, transition: 'fade', timingFunction: 'ease' },
      }}
    >
      {(transitionStyles) => (
        <div className={cx(classes.root, className)} {...others}>
          <div
            className={classes.inner}
            onKeyDownCapture={(event) => {
              const shouldTrigger =
                (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';
              shouldTrigger && event.nativeEvent.code === 'Escape' && onClose();
            }}
            style={{ zIndex: zIndex + 1 }}
            ref={focusTrapRef}
          >
            {closeOnClickOutside && (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
              <div onClick={onClose} className={classes.clickOutsideOverlay} />
            )}

            <Paper<'div'>
              className={classes.modal}
              shadow={shadow}
              padding={padding}
              role="dialog"
              aria-labelledby={titleId}
              aria-describedby={bodyId}
              aria-modal
              style={{
                ...transitionStyles.modal,
                marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
              }}
              tabIndex={-1}
            >
              {(title || !hideCloseButton) && (
                <div className={classes.header}>
                  <Text id={titleId} className={classes.title}>
                    {title}
                  </Text>

                  {!hideCloseButton && (
                    <CloseButton iconSize={16} onClick={onClose} aria-label={closeButtonLabel} />
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

export function Modal(props: React.ComponentPropsWithoutRef<typeof MantineModal>) {
  return (
    <Portal zIndex={props.zIndex || 1000}>
      <MantineModal {...props} />
    </Portal>
  );
}

Modal.displayName = '@mantine/core/Modal';
