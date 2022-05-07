import React, { useState, useRef, forwardRef, useEffect, useMemo } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  getDefaultZIndex,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { useMergedRef, useMouse } from '@mantine/hooks';
import { Box } from '../../Box';
import { MantineTransition, Transition } from '../../Transition';
import useStyles from './FloatingTooltip.styles';

export type FloatingTooltipStylesNames = Selectors<typeof useStyles>;

export interface FloatingTooltipProps
  extends DefaultProps<FloatingTooltipStylesNames>,
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

  /** Position of the tooltip relative to the cursor */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount transition duration in ms */
  transitionDuration?: number;

  /** Unmount transition duration in ms */
  exitTransitionDuration?: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Tooltip z-index */
  zIndex?: number;
}

const defaultProps: Partial<FloatingTooltipProps> = {
  openDelay: 0,
  closeDelay: 0,
  color: 'gray',
  disabled: false,
  position: 'right',
  transition: 'pop-top-left',
  transitionDuration: 0,
  zIndex: getDefaultZIndex('popover'),
  width: 'auto',
  wrapLines: false,
  positionDependencies: [],
};

export const FloatingTooltip = forwardRef<HTMLDivElement, FloatingTooltipProps>(
  (props: FloatingTooltipProps, ref) => {
    const {
      className,
      label,
      children,
      openDelay,
      closeDelay,
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
    const mergedRefs = useMergedRef(ref, mouseRef);
    const coordinates = useMemo(() => {
      // There's no way to get the exact size of the
      // cursor using JS, however most OS's use 32x32
      const estimatedCursorSize = 32;
      const tooltipWidth =
        typeof width === 'number' ? width : _tooltipRef.current?.offsetWidth || 0;
      const tooltipHeight = _tooltipRef.current?.offsetHeight || 0;

      switch (position) {
        case 'top':
          return {
            left: x - tooltipWidth / 2,
            top: y - tooltipHeight,
          };
        case 'left':
          return {
            left: x - tooltipWidth - estimatedCursorSize / 2,
            top: y,
          };
        case 'right':
          return {
            left: x + estimatedCursorSize / 2,
            top: y,
          };
        case 'bottom':
          return {
            left: x - tooltipWidth / 2,
            top: y + tooltipHeight,
          };
        default:
          return {
            left: x || 0,
            top: y || 0,
          };
      }
    }, [x, y, ...positionDependencies]);

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
        <Transition
          mounted={visible}
          duration={transitionDuration}
          transition={transition}
          exitDuration={transitionDuration}
          timingFunction={transitionTimingFunction}
        >
          {(transitionStyles) => (
            <div style={{ ...transitionStyles, zIndex, position: 'relative' }}>
              <Box
                className={classes.body}
                ref={mergedTooltipRefs}
                sx={{
                  whiteSpace: wrapLines ? 'normal' : 'nowrap',
                  width,
                  ...coordinates,
                }}
              >
                {label}
              </Box>
            </div>
          )}
        </Transition>
        {children}
      </Box>
    );
  }
);

FloatingTooltip.displayName = '@mantine/core/FloatingTooltip';
