import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { OptionalPortal } from '../../Portal';
import { Transition } from '../../Transition';
import { TooltipBaseProps } from '../Tooltip.types';
import useStyles from '../Tooltip.styles';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {}

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
  ...others
}: TooltipFloatingProps) {
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip();
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
        <Transition mounted={opened} transition="fade" duration={100}>
          {(transitionStyles) => (
            <div
              {...others}
              ref={floating}
              className={cx(classes.root, className)}
              style={{
                ...style,
                ...transitionStyles,
                top: y ?? '',
                left: Math.round(x) ?? '',
              }}
            >
              {label}
            </div>
          )}
        </Transition>
      </OptionalPortal>
      <div
        ref={floating}
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          top: y ?? '',
          left: Math.round(x) ?? '',
          transform: `scale(${opened ? '1' : '0'})`,
          opacity: opened ? '1' : '0',
          transition: 'transform 0.2s ease, opacity 0.1s ease',
          pointerEvents: 'none',
        }}
      >
        Tooltip
      </div>

      {cloneElement(target, {
        ...target.props,
        [refProp]: boundaryRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
}
