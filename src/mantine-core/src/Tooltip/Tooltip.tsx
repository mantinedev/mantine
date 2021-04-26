import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Transition, MantineTransition } from '../Transition/Transition';
import useStyles from './Tooltip.styles';

interface TooltipProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Tooltip content */
  label: React.ReactNode;

  /** Any react node that should trigger tooltip */
  children: React.ReactNode;

  /** Tooltip opened state for controlled variant */
  opened?: boolean;

  /** Close delay in ms, 0 to disable delay */
  delay?: number;

  /** Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme */
  color?: string;

  /** Space between tooltip and element in px */
  gutter?: number;

  /** True to disable tooltip */
  disabled?: boolean;

  /** Remove arrow */
  noArrow?: boolean;

  /** Tooltip position relative to children */
  position?: 'top' | 'left' | 'right' | 'bottom';

  /** Tooltip placement relative to children */
  placement?: 'start' | 'center' | 'end';

  /** Tooltip z-index */
  zIndex?: number;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount/unmount transition duration in ms */
  transitionDuration?: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export function Tooltip({
  className,
  themeOverride,
  label,
  children,
  opened,
  delay = 0,
  gutter = 5,
  color,
  disabled = false,
  noArrow = false,
  position = 'top',
  placement = 'center',
  transition = 'slide-up',
  transitionDuration = 100,
  zIndex = 1000,
  transitionTimingFunction,
}: TooltipProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride), color, gutter });
  const timeoutRef = useRef<number>();
  const [_opened, setOpened] = useState(false);
  const visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;
  const duration = useReducedMotion() ? 0 : transitionDuration;

  const handleOpen = () => {
    window.clearTimeout(timeoutRef.current);
    setOpened(true);
  };

  const handleClose = () => {
    if (delay !== 0) {
      timeoutRef.current = window.setTimeout(() => {
        setOpened(false);
      }, delay);
    } else {
      setOpened(false);
    }
  };

  return (
    <div className={cx(classes.wrapper, className)}>
      <Transition
        mounted={visible}
        transition={transition}
        duration={duration}
        timingFunction={transitionTimingFunction}
      >
        {(transitionStyles) => (
          <div
            style={{ zIndex }}
            className={cx(classes.tooltip, classes[placement], classes[position], {
              [classes.withArrow]: !noArrow,
            })}
          >
            <div className={classes.tooltipInner} style={{ ...transitionStyles }}>
              {label}
            </div>
          </div>
        )}
      </Transition>
      <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </div>
    </div>
  );
}

Tooltip.displayName = '@mantine/core/Tooltip';
