import React, { useState, useRef, forwardRef, useEffect } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  getDefaultZIndex,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { useMergedRef } from '@mantine/hooks';
import { Box } from '../Box';
import { Popper, SharedPopperProps } from '../Popper';
import useStyles from './Tooltip.styles';

export type TooltipStylesNames = Selectors<typeof useStyles>;

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

  /** Open delay in ms, 0 to disable delay */
  openDelay?: number;

  /** Close delay in ms, 0 to disable delay */
  closeDelay?: number;

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

const defaultProps: Partial<TooltipProps> = {
  openDelay: 0,
  closeDelay: 0,
  gutter: 5,
  color: 'gray',
  disabled: false,
  withArrow: false,
  arrowSize: 2,
  position: 'top',
  placement: 'center',
  transition: 'pop-top-left',
  transitionDuration: 100,
  zIndex: getDefaultZIndex('popover'),
  width: 'auto',
  wrapLines: false,
  allowPointerEvents: false,
  positionDependencies: [],
  withinPortal: true,
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props: TooltipProps, ref) => {
  const {
    className,
    label,
    children,
    opened,
    openDelay,
    closeDelay,
    gutter,
    color,
    radius,
    disabled,
    withArrow,
    arrowSize,
    position,
    placement,
    transition,
    transitionDuration,
    zIndex,
    transitionTimingFunction,
    width,
    wrapLines,
    allowPointerEvents,
    positionDependencies,
    withinPortal,
    tooltipRef,
    tooltipId,
    classNames,
    styles,
    onMouseLeave,
    onMouseEnter,
    ...others
  } = useMantineDefaultProps('Tooltip', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { color, radius },
    { classNames, styles, name: 'Tooltip' }
  );
  const openTimeoutRef = useRef<number>();
  const closeTimeoutRef = useRef<number>();
  const [_opened, setOpened] = useState(false);
  const visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;
  const [referenceElement, setReferenceElement] = useState(null);
  const mergedRefs = useMergedRef(ref, setReferenceElement);

  const handleOpen = () => {
    window.clearTimeout(closeTimeoutRef.current);

    if (openDelay !== 0) {
      openTimeoutRef.current = window.setTimeout(() => {
        setOpened(true);
      }, openDelay);
    } else {
      setOpened(true);
    }
  };

  const handleClose = () => {
    window.clearTimeout(openTimeoutRef.current);

    if (closeDelay !== 0) {
      closeTimeoutRef.current = window.setTimeout(() => {
        setOpened(false);
      }, closeDelay);
    } else {
      setOpened(false);
    }
  };

  useEffect(
    () => () => {
      window.clearTimeout(openTimeoutRef.current);
      window.clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  return (
    <Box<'div'>
      className={cx(classes.root, className)}
      onPointerEnter={(event) => {
        handleOpen();
        typeof onMouseEnter === 'function' && onMouseEnter(event);
      }}
      onPointerLeave={(event) => {
        handleClose();
        typeof onMouseLeave === 'function' && onMouseLeave(event);
      }}
      onFocusCapture={handleOpen}
      onBlurCapture={handleClose}
      ref={mergedRefs}
      {...others}
    >
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
        arrowDistance={theme.fn.radius(radius) > 10 ? 7 : 3}
        zIndex={zIndex}
        arrowClassName={classes.arrow}
        forceUpdateDependencies={[color, radius, ...positionDependencies]}
        withinPortal={withinPortal}
      >
        <Box
          className={classes.body}
          ref={tooltipRef}
          sx={{
            pointerEvents: allowPointerEvents ? 'all' : 'none',
            whiteSpace: wrapLines ? 'normal' : 'nowrap',
            width,
          }}
        >
          {label}
        </Box>
      </Popper>

      {children}
    </Box>
  );
});

Tooltip.displayName = '@mantine/core/Tooltip';
