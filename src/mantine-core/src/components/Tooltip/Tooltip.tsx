import React, { useState, useRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  ClassNames,
  getDefaultZIndex,
  MantineNumberSize,
} from '@mantine/styles';
import { Box } from '../Box';
import { Popper, SharedPopperProps } from '../Popper';
import useStyles from './Tooltip.styles';

export type TooltipStylesNames = ClassNames<typeof useStyles>;

export interface TooltipProps
  extends DefaultProps<TooltipStylesNames>,
    SharedPopperProps,
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
  color?: MantineColor;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** True to disable tooltip */
  disabled?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Tooltip width in px or auto */
  width?: number | 'auto';

  /** Allow multiline tooltip content */
  wrapLines?: boolean;

  /** Allow pointer events on tooltip, warning: this may break some animations */
  allowPointerEvents?: boolean;

  /** Get tooltip ref */
  tooltipRef?: React.ForwardedRef<HTMLDivElement>;

  /** Tooltip id to bind aria-describedby */
  tooltipId?: string;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Whether to render the target element in a Portal */
  withinPortal?: boolean;
}

export function Tooltip({
  className,
  label,
  children,
  opened,
  delay = 0,
  gutter = 5,
  color = 'gray',
  radius = 'sm',
  disabled = false,
  withArrow = false,
  arrowSize = 2,
  position = 'top',
  placement = 'center',
  transition = 'pop-top-left',
  transitionDuration = 100,
  zIndex = getDefaultZIndex('popover'),
  transitionTimingFunction,
  width = 'auto',
  wrapLines = false,
  allowPointerEvents = false,
  positionDependencies = [],
  withinPortal = true,
  tooltipRef,
  tooltipId,
  classNames,
  styles,
  ...others
}: TooltipProps) {
  const { classes, cx } = useStyles({ color, radius }, { classNames, styles, name: 'Tooltip' });
  const timeoutRef = useRef<number>();
  const [_opened, setOpened] = useState(false);
  const visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;
  const [referenceElement, setReferenceElement] = useState(null);

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
    <Box className={cx(classes.root, className)} {...others}>
      <Popper
        referenceElement={referenceElement}
        transitionDuration={transitionDuration}
        transition={transition}
        mounted={visible}
        position={position}
        placement={placement}
        gutter={gutter}
        withArrow={withArrow}
        arrowSize={arrowSize}
        arrowDistance={7}
        zIndex={zIndex}
        arrowClassName={classes.arrow}
        forceUpdateDependencies={[color, radius, ...positionDependencies]}
        withinPortal={withinPortal}
      >
        <div
          className={classes.body}
          ref={tooltipRef}
          style={{
            pointerEvents: allowPointerEvents ? 'all' : 'none',
            whiteSpace: wrapLines ? 'normal' : 'nowrap',
            width,
          }}
        >
          {label}
        </div>
      </Popper>

      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocusCapture={handleOpen}
        onBlurCapture={handleClose}
        ref={setReferenceElement}
      >
        {children}
      </div>
    </Box>
  );
}

Tooltip.displayName = '@mantine/core/Tooltip';
