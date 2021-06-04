import React from 'react';
import cx from 'clsx';
import { useClickOutside, useFocusTrap, useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize, mergeStyles } from '../../theme';
import { MantineTransition, Transition } from '../Transition/Transition';
import { Text } from '../Text/Text';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { CloseIcon } from '../Modal/CloseIcon';
import useStyles from './Popover.styles';

export interface PopoverProps
  extends DefaultProps<typeof useStyles>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Disable closing by click outside */
  noClickOutside?: boolean;

  /** Disable focus trap (may impact close on escape feature) */
  noFocusTrap?: boolean;

  /** Disables close on escape */
  noEscape?: boolean;

  /** Adds close button */
  withCloseButton?: boolean;

  /** True to disable popover */
  disabled?: boolean;

  /** Popover placement relative to target */
  placement?: 'center' | 'end' | 'start';

  /** Popover position relative to target */
  position?: 'left' | 'right' | 'top' | 'bottom';

  /** Space between popover and target in px */
  gutter?: number;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount/unmount transition duration in ms */
  transitionDuration?: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Adds arrow, arrow position depends on position and placement props */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Popover z-index */
  zIndex?: number;

  /** True to display popover */
  opened: boolean;

  /** Called when popover closes */
  onClose?(): void;

  /** Element which is used to position popover */
  target: React.ReactNode;

  /** Content inside popover */
  children: React.ReactNode;

  /** Optional popover title */
  title?: React.ReactNode;

  /** Popover body padding, value from theme.spacing or number to set padding in px */
  spacing?: MantineNumberSize;

  /** Popover body radius, value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Popover shadow, value from theme.shadows or string to set box-shadow to any value */
  shadow?: string;

  /** aria-label for close button */
  closeButtonLabel?: string;
}

export function Popover({
  className,
  style,
  themeOverride,
  children,
  target,
  title,
  onClose,
  opened,
  zIndex = 1000,
  arrowSize = 4,
  withArrow = false,
  transition = 'fade',
  transitionDuration = 200,
  transitionTimingFunction,
  gutter = 10,
  position = 'left',
  placement = 'center',
  disabled = false,
  noClickOutside = false,
  noFocusTrap = false,
  noEscape = false,
  withCloseButton = false,
  radius = 'sm',
  spacing = 'md',
  shadow = 'sm',
  closeButtonLabel,
  id,
  classNames,
  styles,
  ...others
}: PopoverProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, gutter, arrowSize, radius, spacing, shadow }, classNames);
  const _styles = mergeStyles(classes, styles);
  const handleClose = () => typeof onClose === 'function' && onClose();
  const useClickOutsideRef = useClickOutside(() => !noClickOutside && handleClose());
  const focusTrapRef = useFocusTrap(!noFocusTrap);
  const reduceMotion = useReducedMotion();

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!noEscape && event.nativeEvent.code === 'Escape') {
      handleClose();
    }
  };

  const uuid = useId(id);
  const titleId = `${uuid}-title`;
  const bodyId = `${uuid}-body`;

  return (
    <div
      className={cx(classes.root, className)}
      ref={useClickOutsideRef}
      id={id}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      <Transition
        mounted={opened && !disabled}
        transition={transition}
        duration={reduceMotion ? 0 : transitionDuration}
        timingFunction={transitionTimingFunction || theme.transitionTimingFunction}
      >
        {(transitionStyles) => (
          <div
            role="dialog"
            tabIndex={-1}
            data-mantine-popover
            aria-labelledby={titleId}
            aria-describedby={bodyId}
            className={classes.wrapper}
            style={{ ...transitionStyles, ..._styles.wrapper }}
            ref={focusTrapRef}
            onKeyDownCapture={handleKeydown}
          >
            <div
              className={cx(classes.popover, classes[position], classes[placement])}
              style={{ zIndex, ..._styles.popover, ..._styles[position], ..._styles[placement] }}
            >
              {withArrow && (
                <div data-mantine-popover-arrow className={classes.arrow} style={_styles.arrow} />
              )}

              <div className={classes.body} style={_styles.body}>
                {!!title && (
                  <div
                    className={classes.header}
                    style={_styles.header}
                    data-mantine-popover-header
                  >
                    <Text size="sm" id={titleId} data-mantine-popover-title>
                      {title}
                    </Text>
                  </div>
                )}

                {withCloseButton && (
                  <ActionIcon
                    size="sm"
                    data-mantine-popover-close
                    onClick={handleClose}
                    aria-label={closeButtonLabel}
                    className={cx(classes.close)}
                    style={_styles.close}
                  >
                    <CloseIcon style={{ width: 14, height: 14 }} />
                  </ActionIcon>
                )}
                <div
                  className={classes.inner}
                  id={bodyId}
                  data-mantine-popover-body
                  style={_styles.inner}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <div data-mantine-popover-target className={classes.target} style={_styles.target}>
        {target}
      </div>
    </div>
  );
}

Popover.displayName = '@mantine/core/Popover';
