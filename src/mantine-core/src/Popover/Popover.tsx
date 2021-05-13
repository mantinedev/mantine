import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { useClickOutside, useFocusTrap } from '@mantine/hooks';
import { MantineTransition, Transition } from '../Transition/Transition';
import { Text } from '../Text/Text';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { CloseIcon } from '../Modal/CloseIcon';
import useStyles from './Popover.styles';

export interface PopoverProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Disable closing by click outside */
  noClickOutside?: boolean;

  /** Disable focus trap (may impact close on escape feature) */
  noFocusTrap?: boolean;

  /** Disables close on escape */
  noEscape?: boolean;

  /** Removes close button */
  noCloseButton?: boolean;

  /** True to disable popover */
  disabled: boolean;

  /** Popover placement relative to control */
  placement?: 'center' | 'end' | 'start';

  /** Popover position relative to control */
  position?: 'left' | 'right' | 'top' | 'bottom';

  /** Space between popover and control in px */
  gutter: number;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount/unmount transition duration in ms */
  transitionDuration: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction: string;

  /* Adds arrow, arrow position depends on position and placement props */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Popover z-index */
  zIndex?: number;

  /** True to display popover */
  opened: boolean;

  /** Called when popover closes */
  onClose(): void;

  /** Element which is used to position popover */
  control: React.ReactNode;

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

  /** Popover body styles */
  bodyStyle?: React.CSSProperties;

  /** Popover body className */
  bodyClassName?: string;
}

export function Popover({
  className,
  themeOverride,
  children,
  control,
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
  noCloseButton = false,
  radius = 'sm',
  spacing = 'md',
  shadow = 'sm',
  bodyStyle,
  bodyClassName,
  ...others
}: PopoverProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, gutter, arrowSize, radius, spacing, shadow });
  const useClickOutsideRef = useClickOutside(() => !noClickOutside && onClose());
  const focusTrapRef = useFocusTrap(!noFocusTrap);

  return (
    <div className={cx(classes.wrapper, className)} ref={useClickOutsideRef} {...others}>
      <Transition
        mounted={opened && !disabled}
        transition={transition}
        duration={transitionDuration}
        timingFunction={theme.transitionTimingFunction}
      >
        {(transitionStyles) => (
          <div style={transitionStyles} className={classes.popoverWrapper}>
            <div
              className={cx(classes.popover, classes[position], classes[placement], bodyClassName)}
              style={{ zIndex, ...bodyStyle }}
              ref={focusTrapRef}
              onKeyDownCapture={(event) =>
                event.nativeEvent.code === 'Escape' && !noEscape && onClose()
              }
            >
              {withArrow && <div className={classes.arrow} />}

              <div className={classes.body}>
                {(!!title || !noCloseButton) && (
                  <div className={classes.header}>
                    <Text>{title}</Text>
                    {!noCloseButton && (
                      // Align icon with the rest of the content
                      <ActionIcon style={{ marginRight: -7 }} onClick={onClose}>
                        <CloseIcon />
                      </ActionIcon>
                    )}
                  </div>
                )}
                <div className={classes.inner}>{children}</div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <div className={classes.control}>{control}</div>
    </div>
  );
}

Popover.displayName = '@mantine/core/Popover';
