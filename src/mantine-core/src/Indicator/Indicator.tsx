/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef, useMemo } from 'react';
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
import { Machine } from './Machine/Machine';

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

  /** Indicator count overflowCount */
  overflowCount?: number;

  dot?: boolean;

  /** border-radius from theme.radius or number value to set radius in px */
  radius?: MantineNumberSize;

  /** Color from theme.colors or any other valid CSS color value */
  color?: MantineColor;

  /** Determines whether indicator should have border */
  withBorder?: boolean;

  /** When component is disabled it renders children without indicator */
  disabled?: boolean;

  /** When showZero is true and label is zero  renders children with indicator*/
  showZero?: boolean;

  /** Indicator processing animation */
  processing?: boolean;

  /** Indicator z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

const defaultProps: Partial<IndicatorProps> = {
  position: 'top-end',
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  showZero: true,
  processing: false,
  dot: true,
  size: 10,
  overflowCount: 99,
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
    dot,
    styles,
    label,
    overflowCount,
    showZero,
    classNames,
    disabled,
    zIndex,
    unstyled,
    processing,
    ...others
  } = useComponentDefaultProps('Indicator', defaultProps, props);

  const { classes, cx } = useStyles(
    { position, offset, size, radius, inline, color, withBorder, zIndex, withLabel: !!label },
    { name: 'Indicator', classNames, styles, unstyled }
  );

  const renderLabel = useMemo(() => {
    if (typeof label === 'number') {
      return <Machine value={label} max={overflowCount} />;
    }
    return label;
  }, [label, overflowCount]);

  const isShowIndicator = useMemo(
    () => !disabled && (dot || (label != null && !(label <= 0 && !showZero))),
    [disabled, label, showZero]
  );

  return (
    <Box ref={ref} className={cx(classes.root, className)} {...others}>
      {isShowIndicator && (
        <>
          <div className={cx(classes.indicator, classes.common)}>{renderLabel}</div>
          {processing && <div className={cx(classes.processing, classes.common)} />}
        </>
      )}
      {children}
    </Box>
  );
});

Indicator.displayName = '@mantine/core/Indicator';
