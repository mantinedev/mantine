import React, { useState, forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import { Transition, MantineTransition } from '../../Transition';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = Selectors<typeof useStyles>;

export interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  color: MantineColor;
  size: MantineNumberSize;
  label: React.ReactNode;
  onMouseDown(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
  labelTransition?: MantineTransition;
  labelTransitionDuration?: number;
  labelTransitionTimingFunction?: string;
  labelAlwaysOn: boolean;
  thumbLabel: string;
  onFocus?(): void;
  onBlur?(): void;
  showLabelOnHover?: boolean;
  isHovered?: boolean;
  children?: React.ReactNode;
  disabled: boolean;
  thumbSize: number;
  variant: string;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  (
    {
      max,
      min,
      value,
      position,
      label,
      dragging,
      onMouseDown,
      color,
      classNames,
      styles,
      size,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      isHovered,
      children = null,
      disabled,
      unstyled,
      thumbSize,
      variant,
    }: ThumbProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { color, disabled, thumbSize },
      { name: 'Slider', classNames, styles, unstyled, variant, size }
    );
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isVisible =
      labelAlwaysOn || dragging || focused || (showLabelOnHover && (isHovered || hovered));

    return (
      <Box<'div'>
        tabIndex={0}
        role="slider"
        aria-label={thumbLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        ref={ref}
        className={cx(classes.thumb, { [classes.dragging]: dragging })}
        onFocus={() => {
          setFocused(true);
          typeof onFocus === 'function' && onFocus();
        }}
        onBlur={() => {
          setFocused(false);
          typeof onBlur === 'function' && onBlur();
        }}
        onTouchStart={onMouseDown}
        onMouseDown={onMouseDown}
        onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
        onMouseLeave={showLabelOnHover ? () => setHovered(false) : undefined}
        onClick={(event) => event.stopPropagation()}
        style={{ [theme.dir === 'rtl' ? 'right' : 'left']: `${position}%` }}
      >
        {children}
        <Transition
          mounted={label != null && isVisible}
          duration={labelTransitionDuration}
          transition={labelTransition}
          timingFunction={labelTransitionTimingFunction || theme.transitionTimingFunction}
        >
          {(transitionStyles) => (
            <div style={transitionStyles} className={classes.label}>
              {label}
            </div>
          )}
        </Transition>
      </Box>
    );
  }
);

Thumb.displayName = '@mantine/core/SliderThumb';
