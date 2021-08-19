import React from 'react';
import cx from 'clsx';
import {
  useClickOutside,
  useReducedMotion,
  useId,
  useScrollLock,
  useFocusTrap,
} from '@mantine/hooks';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../theme';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { GroupedTransition, MantineTransition } from '../Transition/Transition';
import useStyles, { sizes } from './Modal.styles';

export const MODAL_SIZES = sizes;

export type ModalStylesNames = keyof ReturnType<typeof useStyles>;

export interface ModalProps
  extends DefaultProps<ModalStylesNames>,
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
  shadow?: string;

  /** Modal padding from theme or number value for padding in px */
  padding?: MantineNumberSize;
}

export function MantineModal({
  className,
  style,
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
  padding = 'lg',
  shadow = 'lg',
  id,
  classNames,
  styles,
  ...others
}: ModalProps) {
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ size, overflow, theme }, classNames, 'modal');
  const _styles = mergeStyles(classes, styles);
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
      {(transitionStyles) => (
        <div
          className={cx(classes.root, className)}
          style={{ ...style, ..._styles.root }}
          {...others}
        >
          <div
            className={classes.inner}
            onKeyDownCapture={(event) => {
              const shouldTrigger =
                (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';
              shouldTrigger && event.nativeEvent.code === 'Escape' && onClose();
            }}
            style={{ zIndex: zIndex + 1, ..._styles.inner }}
            ref={focusTrapRef}
          >
            <Paper
              themeOverride={themeOverride}
              className={classes.modal}
              shadow={shadow}
              padding={padding}
              role="dialog"
              aria-labelledby={titleId}
              aria-describedby={bodyId}
              aria-modal
              style={{ ..._styles.modal, ...transitionStyles.modal }}
              elementRef={clickOutsideRef}
              tabIndex={-1}
            >
              {(title || !hideCloseButton) && (
                <div className={classes.header} style={_styles.header}>
                  <Text
                    id={titleId}
                    className={classes.title}
                    style={_styles.title}
                    themeOverride={themeOverride}
                  >
                    {title}
                  </Text>

                  {!hideCloseButton && (
                    <CloseButton
                      iconSize={16}
                      onClick={onClose}
                      aria-label={closeButtonLabel}
                      themeOverride={themeOverride}
                    />
                  )}
                </div>
              )}

              <div id={bodyId} className={classes.body} style={_styles.body}>
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
