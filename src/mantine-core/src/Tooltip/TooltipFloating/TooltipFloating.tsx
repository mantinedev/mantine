import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { useMergedRef } from '@mantine/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { OptionalPortal } from '../../Portal';
import { TooltipBaseProps } from '../Tooltip.types';
import useStyles from '../Tooltip.styles';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px */
  offset?: number;
}

const defaultProps: Partial<TooltipFloatingProps> = {
  refProp: 'ref',
  withinPortal: true,
  offset: 10,
  position: 'right',
  zIndex: getDefaultZIndex('popover'),
};

export function TooltipFloating(props: TooltipFloatingProps) {
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    width,
    zIndex,
    disabled,
    ...others
  } = useComponentDefaultProps('TooltipFloating', defaultProps, props);

  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position,
  });

  const { classes, cx } = useStyles(
    { radius, color, multiline, width },
    { name: 'TooltipFloating', classNames, styles, unstyled }
  );

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const targetRef = useMergedRef(boundaryRef, (children as any).ref);

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <Box
          {...others}
          ref={floating}
          className={cx(classes.tooltip, className)}
          style={{
            ...style,
            zIndex,
            display: !disabled && opened ? 'block' : 'none',
            top: y ?? '',
            left: Math.round(x) ?? '',
          }}
        >
          {label}
        </Box>
      </OptionalPortal>

      {cloneElement(children, {
        ...children.props,
        [refProp]: targetRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
}

TooltipFloating.displayName = '@mantine/core/TooltipFloating';
