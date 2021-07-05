import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles } from '../../theme';
import useStyles from './ArrowBody.styles';

export type ArrowBodyPosition = 'left' | 'right' | 'top' | 'bottom';
export type ArrowBodyPlacement = 'center' | 'end' | 'start';
export type ArrowBodyStylesNames = keyof ReturnType<typeof useStyles>;

export interface ArrowBodyProps
  extends DefaultProps<ArrowBodyStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Element placement relative to target */
  placement?: ArrowBodyPlacement;

  /** Element position relative to target */
  position?: ArrowBodyPosition;

  /** Space between element and target in px */
  gutter?: number;

  /** Adds arrow, arrow position depends on position and placement props */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Popover z-index */
  zIndex?: number;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLDivElement>;
}

export function ArrowBody({
  className,
  position,
  placement,
  gutter,
  withArrow,
  arrowSize,
  zIndex,
  children,
  classNames,
  styles,
  elementRef,
  ...others
}: ArrowBodyProps) {
  const classes = useStyles({ gutter, arrowSize }, classNames, 'arrow-body');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes[position], classes[placement], className)}
      ref={elementRef}
      {...others}
    >
      {withArrow && <div className={classes.arrow} style={_styles.arrow} />}
      {children}
    </div>
  );
}

ArrowBody.displayName = '@mantine/core/ArrowBody';
