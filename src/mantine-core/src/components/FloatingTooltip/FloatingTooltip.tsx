import React, { useState, useRef, forwardRef, useEffect, useMemo } from 'react';
import {
  DefaultProps,
  MantineColor,
  ClassNames,
  getDefaultZIndex,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { useMergedRef, useMouse } from '@mantine/hooks';
import { Box } from '../Box';
import { Popper, SharedPopperProps } from '../Popper';
import useStyles from './FloatingTooltip.styles';

export type FloatingTooltipStylesNames = ClassNames<typeof useStyles>;

export interface FloatingTooltipProps
  extends DefaultProps<FloatingTooltipStylesNames>,
    SharedPopperProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Tooltip content */
  label: React.ReactNode;

  /** Any react node that should trigger tooltip */
  children: React.ReactNode;

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

  /** Tooltip width in px or auto */
  width?: number | 'auto';

  /** Allow multiline tooltip content */
  wrapLines?: boolean;

  /** Get tooltip ref */
  tooltipRef?: React.ForwardedRef<HTMLDivElement>;

  /** Tooltip id to bind aria-describedby */
  tooltipId?: string;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Whether to render the target element in a Portal */
  withinPortal?: boolean;
}

const defaultProps: Partial<FloatingTooltipProps> = {
  openDelay: 0,
  closeDelay: 0,
  gutter: 5,
  color: 'gray',
  disabled: false,
  position: 'top',
  transition: 'pop-top-left',
  transitionDuration: 100,
  zIndex: getDefaultZIndex('popover'),
  width: 'auto',
  wrapLines: false,
  positionDependencies: [],
  withinPortal: true,
};

export const FloatingTooltip = forwardRef<HTMLDivElement, FloatingTooltipProps>(
  (props: FloatingTooltipProps, ref) => {
    const {
      className,
      label,
      children,
      openDelay,
      closeDelay,
      gutter,
      color,
      radius,
      disabled,
      position,
      transition,
      transitionDuration,
      zIndex,
      transitionTimingFunction,
      width,
      wrapLines,
      positionDependencies,
      withinPortal,
      tooltipRef,
      tooltipId,
      classNames,
      styles,
      onMouseLeave,
      onMouseEnter,
      ...others
    } = useMantineDefaultProps('FloatingTooltip', defaultProps, props);

    const { classes, cx } = useStyles(
      { color, radius },
      { classNames, styles, name: 'FloatingTooltip' }
    );
    const openTimeoutRef = useRef<number>();
    const closeTimeoutRef = useRef<number>();
    const _tooltipRef = useRef<HTMLDivElement>();
    const mergedTooltipRefs = useMergedRef(_tooltipRef, tooltipRef);
    const [opened, setOpened] = useState(false);
    const { ref: mouseRef, x, y } = useMouse();
    const visible = opened && !disabled;
    const [referenceElement, setReferenceElement] = useState(null);
    const mergedRefs = useMergedRef(ref, setReferenceElement, mouseRef);
    const coordinates = useMemo(() => {
      // There's no way to get the exact size of the
      // cursor using JS, however most OS's use 32x32
      const estimatedCursorSize = 32;
      const tooltipWidth = _tooltipRef.current?.offsetWidth || 0;

      switch (position) {
        case 'top':
          return { x: x - tooltipWidth / 2, y: y - estimatedCursorSize };
        case 'left':
          return { x: x - estimatedCursorSize / 2 - tooltipWidth, y };
        case 'right':
          return { x: x + estimatedCursorSize / 2, y };
        case 'bottom':
          return { x: x - tooltipWidth / 2, y: y + estimatedCursorSize };
        default:
          return { x: x || 0, y: y || 0 };
      }
    }, [x, y]);

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
        onMouseEnter={(event) => {
          handleOpen();
          typeof onMouseEnter === 'function' && onMouseEnter(event);
        }}
        onMouseLeave={(event) => {
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
          position="top"
          placement="start" // fixed because we are following the cursor
          gutter={gutter}
          zIndex={zIndex}
          forceUpdateDependencies={[color, radius, ...positionDependencies]}
          withinPortal={withinPortal}
          coordinates={coordinates}
        >
          <Box
            className={classes.body}
            ref={mergedTooltipRefs}
            sx={{
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
  }
);

FloatingTooltip.displayName = '@mantine/core/FloatingTooltip';
