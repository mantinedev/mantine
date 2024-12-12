import { forwardRef, useState } from 'react';
import { Box } from '../../../core';
import { Transition, TransitionOverride } from '../../Transition';
import { useSliderContext } from '../Slider.context';

export interface ThumbProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  label: React.ReactNode;
  onKeyDownCapture?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onMouseDown?: (event: any) => void;
  labelTransitionProps: TransitionOverride | undefined;
  labelAlwaysOn: boolean | undefined;
  thumbLabel: string | undefined;
  showLabelOnHover: boolean | undefined;
  isHovered?: boolean;
  children?: React.ReactNode;
  disabled: boolean | undefined;
  className?: string;
  style?: React.CSSProperties;
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
      onKeyDownCapture,
      labelTransitionProps,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      isHovered,
      children = null,
      disabled,
    }: ThumbProps,
    ref
  ) => {
    const { getStyles } = useSliderContext();

    const [focused, setFocused] = useState(false);

    const isVisible = labelAlwaysOn || dragging || focused || (showLabelOnHover && isHovered);

    return (
      <Box<'div'>
        tabIndex={0}
        role="slider"
        aria-label={thumbLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        ref={ref}
        __vars={{ '--slider-thumb-offset': `${position}%` }}
        {...getStyles('thumb', { focusable: true })}
        mod={{ dragging, disabled }}
        onFocus={(event) => {
          setFocused(true);
          typeof onFocus === 'function' && onFocus(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          typeof onBlur === 'function' && onBlur(event);
        }}
        onTouchStart={onMouseDown}
        onMouseDown={onMouseDown}
        onKeyDownCapture={onKeyDownCapture}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <Transition
          mounted={label != null && !!isVisible}
          transition="fade"
          duration={0}
          {...labelTransitionProps}
        >
          {(transitionStyles) => (
            <div {...getStyles('label', { style: transitionStyles })}>{label}</div>
          )}
        </Transition>
      </Box>
    );
  }
);

Thumb.displayName = '@mantine/core/SliderThumb';
