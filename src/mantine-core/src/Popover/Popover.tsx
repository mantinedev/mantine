import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { MantineTransition } from '../Transition/Transition';
import useStyles from './Popover.styles';

interface PopoverProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
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
  gutter = 5,
  position = 'left',
  placement = 'center',
  disabled = false,
  noClickOutside = false,
  noFocusTrap = false,
  noEscape = false,
  noCloseButton = false,
  ...others
}: PopoverProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <div className={classes.popover}>
        <div className={classes.arrow} />
        <div className={classes.body}>{children}</div>
      </div>
      <div className={classes.control}>{control}</div>
    </div>
  );
}

Popover.displayName = '@mantine/core/Popover';
