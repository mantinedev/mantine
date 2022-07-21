/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import {
  Selectors,
  DefaultProps,
  MantineColor,
  MantineNumberSize,
  useComponentDefaultProps,
  getDefaultZIndex,
} from '@mantine/styles';
import { Box } from '../Box';
import { IndicatorPosition } from './Indicator.types';
import useStyles, { IndicatorStylesParams } from './Indicator.styles';

export type IndicatorStylesNames = Selectors<typeof useStyles>;

export interface IndicatorProps
  extends DefaultProps<IndicatorStylesNames, IndicatorStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Element that should have an indicator */
  children: React.ReactNode;

  /** Indicator position relative to child element */
  position?: IndicatorPosition;

  /** Changes position offset, usually used when element has border-radius */
  offset?: number;

  /** Determines whether indicator container should be an inline element */
  inline?: boolean;

  /** Size in px */
  size?: number;

  /** Indicator label */
  label?: React.ReactNode;

  /** border-radius from theme.radius or number value to set radius in px */
  radius?: MantineNumberSize;

  /** Color from theme.colors or any other valid CSS color value */
  color?: MantineColor;

  /** Determines whether indicator should have border */
  withBorder?: boolean;

  /** When component is disabled it renders children without indicator */
  disabled?: boolean;

  /** Indicator z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

const defaultProps: Partial<IndicatorProps> = {
  position: 'top-end',
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  size: 10,
  radius: 1000,
  zIndex: getDefaultZIndex('app'),
};

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>((props, ref) => {
  const {
    children,
    position,
    offset,
    size,
    radius,
    inline,
    withBorder,
    className,
    color,
    styles,
    label,
    classNames,
    disabled,
    zIndex,
    unstyled,
    ...others
  } = useComponentDefaultProps('Indicator', defaultProps, props);

  const { classes, cx } = useStyles(
    { position, offset, size, radius, inline, color, withBorder, zIndex, withLabel: !!label },
    { name: 'Indicator', classNames, styles, unstyled }
  );

  return (
    <Box ref={ref} className={cx(classes.root, className)} {...others}>
      {!disabled && <div className={classes.indicator}>{label}</div>}
      {children}
    </Box>
  );
});

Indicator.displayName = '@mantine/core/Indicator';
