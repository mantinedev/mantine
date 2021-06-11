import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../theme';
import { ArrowBody, ArrowBodyPosition, ArrowBodyPlacement } from '../ArrowBody/ArrowBody';
import { Transition, MantineTransition } from '../Transition/Transition';
import useStyles from './Tooltip.styles';

export type TooltipStylesNames = keyof ReturnType<typeof useStyles>;

export interface TooltipProps
  extends DefaultProps<TooltipStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
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

  /** Adds arrow, arrow position depends on position and placement props */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Tooltip position relative to children */
  position?: ArrowBodyPosition;

  /** Tooltip placement relative to children */
  placement?: ArrowBodyPlacement;

  /** Tooltip z-index */
  zIndex?: number;

  /** Tooltip width in px or auto */
  width?: number | 'auto';

  /** Allow multiline tooltip content */
  wrapLines?: boolean;

  /** Allow pointer events on tooltip, warning: this may break some animations */
  allowPointerEvents?: boolean;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount/unmount transition duration in ms */
  transitionDuration?: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Get wrapper ref */
  elementRef?: React.ForwardedRef<HTMLDivElement>;

  /** Get tooltip ref */
  tooltipRef?: React.ForwardedRef<HTMLDivElement>;

  /** Tooltip id to bind aria-describedby */
  tooltipId?: string;
}

export function Tooltip({
  className,
  style,
  themeOverride,
  label,
  children,
  opened,
  delay = 0,
  gutter = 5,
  color = 'gray',
  disabled = false,
  withArrow = false,
  arrowSize = 2,
  position = 'top',
  placement = 'center',
  transition = 'slide-up',
  transitionDuration = 100,
  zIndex = 1000,
  transitionTimingFunction,
  width = 'auto',
  wrapLines = false,
  allowPointerEvents = false,
  elementRef,
  tooltipRef,
  tooltipId,
  classNames,
  styles,
  ...others
}: TooltipProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, color }, classNames, 'tooltip');
  const _styles = mergeStyles(classes, styles);
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
    <div
      className={cx(classes.root, className)}
      ref={elementRef}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      <Transition
        mounted={visible}
        transition={transition}
        duration={duration}
        timingFunction={transitionTimingFunction}
      >
        {(transitionStyles) => (
          <ArrowBody
            id={tooltipId}
            gutter={gutter}
            position={position}
            placement={placement}
            withArrow={withArrow}
            arrowSize={arrowSize}
            role="tooltip"
            className={classes.tooltip}
            classNames={{ arrow: classes.arrow }}
            styles={{ arrow: _styles.arrow }}
            elementRef={tooltipRef}
            style={{
              ..._styles.tooltip,
              zIndex,
              width,
              pointerEvents: allowPointerEvents ? 'all' : 'none',
            }}
          >
            <div
              className={classes.body}
              style={{
                ..._styles.body,
                ...transitionStyles,
                whiteSpace: wrapLines ? 'normal' : 'nowrap',
              }}
            >
              {label}
            </div>
          </ArrowBody>
        )}
      </Transition>

      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocusCapture={handleOpen}
        onBlurCapture={handleClose}
      >
        {children}
      </div>
    </div>
  );
}

Tooltip.displayName = '@mantine/core/Tooltip';
