import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { OptionalPortal } from '../../Portal';
import { TooltipBaseProps } from '../Tooltip.types';
import useStyles from '../Tooltip.styles';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px */
  offset?: number;
}

export function TooltipFloating({
  children,
  refProp = 'ref',
  withinPortal = true,
  style,
  className,
  classNames,
  styles,
  unstyled,
  radius,
  color,
  label,
  offset = 10,
  position = 'right',
  ...others
}: TooltipFloatingProps) {
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position,
  });

  const { classes, cx } = useStyles(
    { radius, color },
    { name: 'Tooltip', classNames, styles, unstyled }
  );

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const target = children as React.ReactElement;

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    target.props.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    target.props.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <div
          {...others}
          ref={floating}
          className={cx(classes.root, className)}
          style={{
            ...style,
            display: opened ? 'block' : 'none',
            top: y ?? '',
            left: Math.round(x) ?? '',
          }}
        >
          {label}
        </div>
      </OptionalPortal>

      {cloneElement(target, {
        ...target.props,
        [refProp]: boundaryRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
}
